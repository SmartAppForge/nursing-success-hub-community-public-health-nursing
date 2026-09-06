/* ============================================================
   NURSING SUCCESS HUB
   MASTER QUIZ ENGINE V1

   ENGINE:
   - Dynamic pagination
   - 5 questions per page
   - Answer locking
   - Previous / Next
   - Progress tracking
   - Score calculation
   - Results
   - Answer Review
   - Restart
   - LocalStorage
   - Question bank validation
   - Responsive UI support

   DATA:
   questions/template.js
   ============================================================ */


/* ============================================================
   1. CONFIGURATION
   ============================================================ */

const CONFIG = {
    questionsPerPage: 5,
    showProgress: true,
    showAnswerReview: true,
    persistProgress: true,
    gumroadButtonText: "GET STUDY GUIDE â†’",
    levels: [
        { minimum: 90, label: "Excellent" },
        { minimum: 80, label: "Very Good" },
        { minimum: 70, label: "Good" },
        { minimum: 60, label: "Needs Improvement" },
        { minimum: 0, label: "Review Recommended" }
    ]
};

let ACTIVE_PRODUCT = null;
let QUESTION_BANK_SCRIPT = null;

/* ============================================================
   PRODUCT SELECTION
   URL example: ?product=template
   ============================================================ */

function getProductKeyFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return (params.get("product") || "template").trim().toLowerCase();
}

function getProductConfig(productKey) {
    if (typeof PRODUCTS === "undefined" || !PRODUCTS || typeof PRODUCTS !== "object") {
        throw new Error("Product configuration not found. Make sure config/products.js is loaded before app.js.");
    }

    const product = PRODUCTS[productKey];

    if (!product) {
        const available = Object.keys(PRODUCTS);
        throw new Error(`Unknown product: ${productKey}. Available products: ${available.join(", ")}.`);
    }

    return product;
}

function loadQuestionBank(product) {
    return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = product.questionBank;
        script.async = false;
        script.onload = () => {
            QUESTION_BANK_SCRIPT = script;
            resolve();
        };
        script.onerror = () => {
            reject(new Error(`Unable to load question bank: ${product.questionBank}`));
        };
        document.body.appendChild(script);
    });
}

function applyProductConfiguration(product) {
    CONFIG.questionsPerPage = Number.isInteger(product.questionsPerPage)
        ? product.questionsPerPage
        : 5;

    CONFIG.persistProgress = product.persistProgress !== false;
    CONFIG.showProgress = product.showProgress !== false;
    CONFIG.showAnswerReview = product.showAnswerReview !== false;
    CONFIG.gumroadButtonText = product.gumroadButtonText || "GET STUDY GUIDE â†’";

    CONFIG.productTitle = product.title;
    CONFIG.productSubtitle = product.subtitle;
    CONFIG.gumroadUrl = product.gumroadUrl;
    CONFIG.productLabel = product.label || "PRACTICE QUIZ";
    CONFIG.storageKey = product.storageKey || `nsh_master_quiz_${product.id}_progress_v1`;
}



/* ============================================================
   2. APPLICATION STATE
   ============================================================ */

const state = {

    questions: [],

    pages: [],

    currentPage: 0,

    answers: {},

    completed: false,

    score: 0,

    percentage: 0,

    level: "",

    initialized: false

};


/* ============================================================
   3. DOM ELEMENTS
   ============================================================ */

const DOM = {

    /* Screens */

    startScreen:
        document.getElementById("start-screen"),

    quizScreen:
        document.getElementById("quiz-screen"),

    resultsScreen:
        document.getElementById("results-screen"),

    reviewScreen:
        document.getElementById("review-screen"),

    errorScreen:
        document.getElementById("error-screen"),

    /* Start */

    startBtn:
        document.getElementById("start-btn"),

    startQuestionCount:
        document.getElementById("start-question-count"),

    startQuestionPerPage:
        document.getElementById("start-question-per-page"),

    startPageCount:
        document.getElementById("start-page-count"),

    startTitle:
        document.getElementById("start-title"),

    startDescription:
        document.getElementById("start-description"),

    /* Quiz */

    questionsContainer:
        document.getElementById("questions-container"),

    pageNumber:
        document.getElementById("page-number"),

    questionCounter:
        document.getElementById("question-counter"),

    completionPercentage:
        document.getElementById("completion-percentage"),

    progressFill:
        document.getElementById("progress-fill"),

    progressBar:
        document.querySelector(".progress-bar"),

    previousBtn:
        document.getElementById("previous-btn"),

    nextBtn:
        document.getElementById("next-btn"),

    validationMessage:
        document.getElementById("validation-message"),

    quizTitle:
        document.getElementById("quiz-title"),

    /* Results */

    scorePercentage:
        document.getElementById("score-percentage"),

    correctCount:
        document.getElementById("correct-count"),

    incorrectCount:
        document.getElementById("incorrect-count"),

    totalCount:
        document.getElementById("total-count"),

    performanceLevel:
        document.getElementById("performance-level"),

    reviewBtn:
        document.getElementById("review-btn"),

    restartBtn:
        document.getElementById("restart-btn"),

    gumroadBtn:
        document.getElementById("gumroad-btn"),

    /* Review */

    reviewContainer:
        document.getElementById("review-container"),

    reviewBackBtn:
        document.getElementById("review-back-btn"),

    /* Restart modal */

    restartModal:
        document.getElementById("restart-modal"),

    cancelRestartBtn:
        document.getElementById("cancel-restart-btn"),

    confirmRestartBtn:
        document.getElementById("confirm-restart-btn"),

    /* Error */

    errorMessage:
        document.getElementById("error-message")

};


/* ============================================================
   4. INITIALIZATION
   ============================================================ */

document.addEventListener("DOMContentLoaded", initializeAdaptiveQuiz);

async function initializeAdaptiveQuiz() {

    try {

        /* Get product from URL */

        const productKey =
            getProductKeyFromUrl();


        /* Get product configuration */

        ACTIVE_PRODUCT =
            getProductConfig(
                productKey
            );


        /* Apply product configuration */

        applyProductConfiguration(
            ACTIVE_PRODUCT
        );


        /* Load selected question bank */

        await loadQuestionBank(
            ACTIVE_PRODUCT
        );


        /* Initialize quiz */

        initializeQuiz();

    } catch (error) {

        console.error(
            "Adaptive quiz initialization error:",
            error
        );

        showError(
            error.message
        );

    }

}

function initializeQuiz() {

    try {

        /* The selected product bank must define the standard QUESTIONS array. */

        if (
            typeof QUESTIONS === "undefined"
        ) {

            throw new Error(
                "Question bank not found. Make sure the selected question bank is available: ${ACTIVE_PRODUCT.questionBank}"
            );

        }


        /* Copy question data */

        state.questions = QUESTIONS;


        /* Validate question bank */

        validateQuestionBank(state.questions);


        /* Create dynamic pages */

        state.pages =
            createPages(
                state.questions
            );


        /* Configure interface */

        applyConfiguration();


        /* Load saved progress */

        if (
            CONFIG.persistProgress
        ) {

            loadProgress();

        }


        /* Attach event listeners */

        attachEventListeners();


        /* Update start screen */

        updateStartScreen();


        state.initialized = true;


        /*
         * If the user had already completed the quiz,
         * restore results.
         */

        if (state.completed) {

            calculateResults();

            renderResults();

        }

    } catch (error) {

        console.error(
            "Quiz initialization error:",
            error
        );

        showError(
            error.message
        );

    }

}


/* ============================================================
   5. CONFIGURATION
   ============================================================ */

function applyConfiguration() {

    document.title = `Nursing Success Hub | ${CONFIG.productTitle}`;

    const productLabels = document.querySelectorAll(".product-label");
    productLabels.forEach(label => {
        label.textContent = CONFIG.productLabel;
    });

    DOM.startTitle.textContent =
        CONFIG.productTitle;

    DOM.startDescription.textContent =
        CONFIG.productSubtitle;

    DOM.quizTitle.textContent =
        CONFIG.productTitle;

    DOM.gumroadBtn.textContent =
        CONFIG.gumroadButtonText;

    DOM.gumroadBtn.href =
        CONFIG.gumroadUrl;

    if (
        !CONFIG.showAnswerReview
    ) {

        DOM.reviewBtn.classList.add(
            "hidden"
        );

    }

}


/* ============================================================
   6. VALIDATE QUESTION BANK
   ============================================================ */

function validateQuestionBank(
    questions
) {

    if (
        !Array.isArray(questions)
    ) {

        throw new Error(
            "QUESTIONS must be an array."
        );

    }


    if (
        questions.length === 0
    ) {

        throw new Error(
            "The question bank is empty."
        );

    }


    const ids = new Set();


    questions.forEach(
        (question, index) => {

            const position =
                index + 1;


            /* Question object */

            if (
                !question ||
                typeof question !== "object"
            ) {

                throw new Error(
                    `Question ${position} is not a valid object.`
                );

            }


            /* ID */

            if (
                typeof question.id !== "string" ||
                question.id.trim() === ""
            ) {

                throw new Error(
                    `Question ${position} has an invalid id.`
                );

            }


            if (
                ids.has(question.id)
            ) {

                throw new Error(
                    `Duplicate question ID detected: ${question.id}`
                );

            }


            ids.add(question.id);


            /* Question text */

            if (
                typeof question.question !== "string" ||
                question.question.trim() === ""
            ) {

                throw new Error(
                    `Question ${question.id} has no valid question text.`
                );

            }


            /* Options */

            if (
                !question.options ||
                typeof question.options !== "object"
            ) {

                throw new Error(
                    `Question ${question.id} has no valid options object.`
                );

            }


            const requiredOptions =
                ["A", "B", "C", "D"];


            requiredOptions.forEach(
                optionKey => {

                    if (
                        typeof question.options[optionKey] !== "string" ||
                        question.options[optionKey].trim() === ""
                    ) {

                        throw new Error(
                            `Question ${question.id} has an invalid option ${optionKey}.`
                        );

                    }

                }
            );


            /* Correct answer */

            const answer =
                String(
                    question.answer
                ).trim().toUpperCase();


            if (
                !requiredOptions.includes(answer)
            ) {

                throw new Error(
                    `Question ${question.id} has an invalid answer: ${question.answer}`
                );

            }

        }
    );


    console.info(
        `Question bank validated successfully: ${questions.length} questions.`
    );

}


/* ============================================================
   7. CREATE PAGES
   ============================================================ */

function createPages(
    questions
) {

    const pages = [];

    const questionsPerPage =
        CONFIG.questionsPerPage;


    for (
        let i = 0;
        i < questions.length;
        i += questionsPerPage
    ) {

        pages.push(
            questions.slice(
                i,
                i + questionsPerPage
            )
        );

    }


    return pages;

}


/* ============================================================
   8. START SCREEN
   ============================================================ */

function updateStartScreen() {

    DOM.startQuestionCount.textContent =
        state.questions.length;

    DOM.startQuestionPerPage.textContent =
        CONFIG.questionsPerPage;

    DOM.startPageCount.textContent =
        state.pages.length;

}


/* ============================================================
   9. EVENT LISTENERS
   ============================================================ */

function attachEventListeners() {

    DOM.startBtn.addEventListener(
        "click",
        startQuiz
    );


    DOM.previousBtn.addEventListener(
        "click",
        goToPreviousPage
    );


    DOM.nextBtn.addEventListener(
        "click",
        goToNextPage
    );


    DOM.reviewBtn.addEventListener(
        "click",
        showReview
    );


    DOM.reviewBackBtn.addEventListener(
        "click",
        showResults
    );


    DOM.restartBtn.addEventListener(
        "click",
        openRestartModal
    );


    DOM.cancelRestartBtn.addEventListener(
        "click",
        closeRestartModal
    );


    DOM.confirmRestartBtn.addEventListener(
        "click",
        restartQuiz
    );


    /*
     * Allow ESC to close restart modal.
     */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape" &&
                !DOM.restartModal.classList.contains("hidden")
            ) {

                closeRestartModal();

            }

        }
    );

}


/* ============================================================
   10. START QUIZ
   ============================================================ */

function startQuiz() {

    /*
     * If saved progress exists, it is already loaded.
     * Otherwise currentPage remains 0.
     */

    showScreen(
        "quiz"
    );


    renderQuizPage();

}


/* ============================================================
   11. RENDER QUIZ PAGE
   ============================================================ */

function renderQuizPage() {

    const page =
        state.pages[
            state.currentPage
        ];


    if (!page) {

        console.error(
            "Page does not exist:",
            state.currentPage
        );

        return;

    }


    /* Clear previous questions */

    DOM.questionsContainer.innerHTML = "";


    /* Render each question */

    page.forEach(
        question => {

            const questionElement =
                renderQuestion(
                    question
                );

            DOM.questionsContainer.appendChild(
                questionElement
            );

        }
    );


    /* Update navigation */

    updateNavigation();


    /* Update progress */

    updateProgress();


    /* Hide validation */

    hideValidation();


    /* Save */

    saveProgress();


    /*
     * Scroll to top of quiz.
     */

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* ============================================================
   12. RENDER QUESTION
   ============================================================ */

function renderQuestion(
    question
) {

    const card =
        document.createElement("article");


    card.className =
        "question-card";


    card.dataset.questionId =
        question.id;


    /* Header */

    const header =
        document.createElement("div");

    header.className =
        "question-header";


    /* Question number */

    const number =
        document.createElement("div");

    number.className =
        "question-number";

    number.textContent =
        getQuestionNumber(
            question.id
        );


    /* Question text */

    const text =
        document.createElement("div");

    text.className =
        "question-text";

    /*
     * Use textContent instead of innerHTML
     * for question data.
     */

    text.textContent =
        question.question;


    header.appendChild(
        number
    );

    header.appendChild(
        text
    );


    card.appendChild(
        header
    );


    /* Options container */

    const options =
        document.createElement("div");

    options.className =
        "options";


    const optionKeys =
        ["A", "B", "C", "D"];


    optionKeys.forEach(
        optionKey => {

            const optionButton =
                document.createElement("button");

            optionButton.type =
                "button";

            optionButton.className =
                "option-btn";


            optionButton.dataset.questionId =
                question.id;

            optionButton.dataset.answer =
                optionKey;


            /* Letter */

            const letter =
                document.createElement("span");

            letter.className =
                "option-letter";

            letter.textContent =
                optionKey;


            /* Text */

            const optionText =
                document.createElement("span");

            optionText.className =
                "option-text";

            optionText.textContent =
                question.options[
                    optionKey
                ];


            optionButton.appendChild(
                letter
            );

            optionButton.appendChild(
                optionText
            );


            /*
             * Check if this question was
             * already answered.
             */

            const savedAnswer =
                state.answers[
                    question.id
                ];


            if (
                savedAnswer
            ) {

                optionButton.disabled =
                    true;


                if (
                    savedAnswer === optionKey
                ) {

                    optionButton.classList.add(
                        "selected"
                    );

                }

            }


            optionButton.addEventListener(
                "click",
                () => {

                    selectAnswer(
                        question.id,
                        optionKey
                    );

                }
            );


            options.appendChild(
                optionButton
            );

        }
    );


    card.appendChild(
        options
    );


    return card;

}


/* ============================================================
   13. QUESTION NUMBER
   ============================================================ */

function getQuestionNumber(
    questionId
) {

    const index =
        state.questions.findIndex(
            question =>
                question.id === questionId
        );


    return index + 1;

}


/* ============================================================
   14. SELECT ANSWER
   ============================================================ */

function selectAnswer(
    questionId,
    selectedAnswer
) {

    /*
     * Do not allow a second answer.
     */

    if (
        state.answers[
            questionId
        ]
    ) {

        return;

    }


    /*
     * Validate answer format.
     */

    const validAnswers =
        ["A", "B", "C", "D"];


    if (
        !validAnswers.includes(
            selectedAnswer
        )
    ) {

        return;

    }


    /*
     * Save answer.
     */

    state.answers[
        questionId
    ] =
        selectedAnswer;


    /*
     * Lock all options for this question.
     */

    const questionCard =
        document.querySelector(
            `[data-question-id="${CSS.escape(questionId)}"]`
        );


    if (questionCard) {

        const optionButtons =
            questionCard.querySelectorAll(
                ".option-btn"
            );


        optionButtons.forEach(
            button => {

                button.disabled =
                    true;


                if (
                    button.dataset.answer ===
                    selectedAnswer
                ) {

                    button.classList.add(
                        "selected"
                    );

                }

            }
        );

    }


    /* Update progress */

    updateProgress();


    /* Save */

    saveProgress();


    /*
     * Hide validation if the page
     * has now been completed.
     */

    if (
        isCurrentPageComplete()
    ) {

        hideValidation();

    }

}


/* ============================================================
   15. CURRENT PAGE COMPLETION
   ============================================================ */

function isCurrentPageComplete() {

    const currentQuestions =
        state.pages[
            state.currentPage
        ];


    if (
        !currentQuestions
    ) {

        return false;

    }


    return currentQuestions.every(
        question =>
            Boolean(
                state.answers[
                    question.id
                ]
            )
    );

}


/* ============================================================
   16. GO NEXT
   ============================================================ */

function goToNextPage() {

    /*
     * First verify that every question
     * on the current page has an answer.
     */

    if (
        !isCurrentPageComplete()
    ) {

        showValidation();

        return;

    }


    hideValidation();


    /*
     * Last page?
     */

    if (
        state.currentPage >=
        state.pages.length - 1
    ) {

        completeQuiz();

        return;

    }


    /*
     * Move to next page.
     */

    state.currentPage += 1;


    renderQuizPage();

}


/* ============================================================
   17. GO PREVIOUS
   ============================================================ */

function goToPreviousPage() {

    hideValidation();


    if (
        state.currentPage <= 0
    ) {

        return;

    }


    state.currentPage -= 1;


    renderQuizPage();

}


/* ============================================================
   18. NAVIGATION UI
   ============================================================ */

function updateNavigation() {

    const pageNumber =
        state.currentPage + 1;

    const totalPages =
        state.pages.length;


    DOM.pageNumber.textContent =
        `Page ${pageNumber} / ${totalPages}`;


    /*
     * Previous
     */

    DOM.previousBtn.disabled =
        state.currentPage === 0;


    /*
     * Next button text
     */

    const isLastPage =
        state.currentPage ===
        totalPages - 1;


    if (isLastPage) {

        DOM.nextBtn.textContent =
            "Finish Quiz âœ“";

    } else {

        DOM.nextBtn.textContent =
            "Next â†’";

    }

}


/* ============================================================
   19. PROGRESS
   ============================================================ */

function updateProgress() {

    const totalQuestions =
        state.questions.length;


    const answeredQuestions =
        countAnsweredQuestions();


    const percentage =
        totalQuestions === 0
            ? 0
            : Math.round(
                (
                    answeredQuestions /
                    totalQuestions
                ) * 100
            );


    const currentPageQuestions =
        state.pages[
            state.currentPage
        ] || [];


    if (
        currentPageQuestions.length > 0
    ) {

        const firstQuestionNumber =
            getQuestionNumber(
                currentPageQuestions[0].id
            );


        const lastQuestionNumber =
            getQuestionNumber(
                currentPageQuestions[
                    currentPageQuestions.length - 1
                ].id
            );


        DOM.questionCounter.textContent =
            `Questions ${firstQuestionNumber}â€“${lastQuestionNumber} / ${totalQuestions}`;

    }


    DOM.completionPercentage.textContent =
        `${percentage}%`;


    DOM.progressFill.style.width =
        `${percentage}%`;


    DOM.progressBar.setAttribute(
        "aria-valuenow",
        percentage
    );

}


/* ============================================================
   20. COUNT ANSWERS
   ============================================================ */

function countAnsweredQuestions() {

    return Object.keys(
        state.answers
    ).filter(
        questionId =>
            state.questions.some(
                question =>
                    question.id === questionId
            )
    ).length;

}


/* ============================================================
   21. COMPLETE QUIZ
   ============================================================ */

function completeQuiz() {

    /*
     * Safety check:
     * never complete if unanswered questions exist.
     */

    if (
        countAnsweredQuestions() <
        state.questions.length
    ) {

        showValidation();

        return;

    }


    state.completed =
        true;


    calculateResults();


    saveProgress();


    renderResults();

}


/* ============================================================
   22. CALCULATE RESULTS
   ============================================================ */

function calculateResults() {

    let score = 0;


    state.questions.forEach(
        question => {

            const userAnswer =
                state.answers[
                    question.id
                ];


            const correctAnswer =
                String(
                    question.answer
                )
                .trim()
                .toUpperCase();


            if (
                userAnswer ===
                correctAnswer
            ) {

                score++;

            }

        }
    );


    state.score =
        score;


    state.percentage =
        state.questions.length === 0
            ? 0
            : Math.round(
                (
                    score /
                    state.questions.length
                ) * 100
            );


    state.level =
        getLevel(
            state.percentage
        );

}


/* ============================================================
   23. GET PERFORMANCE LEVEL
   ============================================================ */

function getLevel(
    percentage
) {

    const levels =
        CONFIG.levels;


    for (
        const level of levels
    ) {

        if (
            percentage >=
            level.minimum
        ) {

            return level.label;

        }

    }


    return "Review Recommended";

}


/* ============================================================
   24. RENDER RESULTS
   ============================================================ */

function renderResults() {

    const total =
        state.questions.length;


    const incorrect =
        total - state.score;


    DOM.scorePercentage.textContent =
        `${state.percentage}%`;


    DOM.correctCount.textContent =
        state.score;


    DOM.incorrectCount.textContent =
        incorrect;


    DOM.totalCount.textContent =
        total;


    DOM.performanceLevel.textContent =
        state.level;


    showScreen(
        "results"
    );


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* ============================================================
   25. ANSWER REVIEW
   ============================================================ */

function showReview() {

    if (
        !CONFIG.showAnswerReview
    ) {

        return;

    }


    renderAnswerReview();


    showScreen(
        "review"
    );


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* ============================================================
   26. RENDER ANSWER REVIEW
   ============================================================ */

function renderAnswerReview() {

    DOM.reviewContainer.innerHTML = "";


    state.questions.forEach(
        (question, index) => {

            const userAnswer =
                state.answers[
                    question.id
                ];


            const correctAnswer =
                String(
                    question.answer
                )
                .trim()
                .toUpperCase();


            const isCorrect =
                userAnswer ===
                correctAnswer;


            const item =
                document.createElement("article");


            item.className =
                "review-item";


            item.classList.add(
                isCorrect
                    ? "correct-review"
                    : "incorrect-review"
            );


            /* Question */

            const questionText =
                document.createElement("div");

            questionText.className =
                "review-question";

            questionText.textContent =
                `${index + 1}. ${question.question}`;


            item.appendChild(
                questionText
            );


            /* Answer grid */

            const answerGrid =
                document.createElement("div");

            answerGrid.className =
                "review-answer-grid";


            /* User answer */

            const userAnswerBox =
                createReviewAnswerBox(
                    "Your Answer",
                    userAnswer
                        ? `${userAnswer}. ${question.options[userAnswer]}`
                        : "No answer"
                );


            /* Correct answer */

            const correctAnswerBox =
                createReviewAnswerBox(
                    "Correct Answer",
                    `${correctAnswer}. ${question.options[correctAnswer]}`
                );


            answerGrid.appendChild(
                userAnswerBox
            );

            answerGrid.appendChild(
                correctAnswerBox
            );


            item.appendChild(
                answerGrid
            );


            /* Status */

            const status =
                document.createElement("span");

            status.className =
                "review-status";


            if (isCorrect) {

                status.classList.add(
                    "correct"
                );

                status.textContent =
                    "Correct";

            } else {

                status.classList.add(
                    "incorrect"
                );

                status.textContent =
                    "Incorrect";

            }


            item.appendChild(
                status
            );


            DOM.reviewContainer.appendChild(
                item
            );

        }
    );

}


/* ============================================================
   27. CREATE REVIEW ANSWER BOX
   ============================================================ */

function createReviewAnswerBox(
    title,
    text
) {

    const box =
        document.createElement("div");

    box.className =
        "review-answer";


    const titleElement =
        document.createElement("span");

    titleElement.className =
        "review-answer-title";

    titleElement.textContent =
        title;


    const textElement =
        document.createElement("div");

    textElement.className =
        "review-answer-text";

    textElement.textContent =
        text;


    box.appendChild(
        titleElement
    );

    box.appendChild(
        textElement
    );


    return box;

}


/* ============================================================
   28. SHOW RESULTS
   ============================================================ */

function showResults() {

    calculateResults();


    renderResults();

}


/* ============================================================
   29. RESTART MODAL
   ============================================================ */

function openRestartModal() {

    DOM.restartModal.classList.remove(
        "hidden"
    );

}


function closeRestartModal() {

    DOM.restartModal.classList.add(
        "hidden"
    );

}


/* ============================================================
   30. RESTART QUIZ
   ============================================================ */

function restartQuiz() {

    /*
     * Close modal.
     */

    closeRestartModal();


    /*
     * Reset state.
     */

    state.currentPage =
        0;

    state.answers =
        {};

    state.completed =
        false;

    state.score =
        0;

    state.percentage =
        0;

    state.level =
        "";


    /*
     * Remove saved progress.
     */

    clearProgress();


    /*
     * Show quiz from page 1.
     */

    showScreen(
        "quiz"
    );


    renderQuizPage();

}


/* ============================================================
   31. LOCAL STORAGE â€” SAVE
   ============================================================ */

function saveProgress() {

    if (
        !CONFIG.persistProgress
    ) {

        return;

    }


    try {

        const progress = {

            currentPage:
                state.currentPage,

            answers:
                state.answers,

            completed:
                state.completed,

            score:
                state.score,

            percentage:
                state.percentage,

            level:
                state.level,

            savedAt:
                new Date().toISOString()

        };


        localStorage.setItem(
            CONFIG.storageKey,
            JSON.stringify(
                progress
            )
        );

    } catch (error) {

        console.warn(
            "Unable to save quiz progress:",
            error
        );

    }

}


/* ============================================================
   32. LOCAL STORAGE â€” LOAD
   ============================================================ */

function loadProgress() {

    try {

        const saved =
            localStorage.getItem(
                CONFIG.storageKey
            );


        if (!saved) {

            return;

        }


        const progress =
            JSON.parse(
                saved
            );


        if (
            !progress ||
            typeof progress !== "object"
        ) {

            return;

        }


        /*
         * Restore answers.
         */

        if (
            progress.answers &&
            typeof progress.answers === "object"
        ) {

            const validQuestionIds = new Set(
                state.questions.map(question => question.id)
            );

            state.answers = Object.fromEntries(
                Object.entries(progress.answers).filter(
                    ([questionId, answer]) =>
                        validQuestionIds.has(questionId) &&
                        ["A", "B", "C", "D"].includes(answer)
                )
            );

        }


        /*
         * Restore current page.
         */

        if (
            Number.isInteger(
                progress.currentPage
            )
        ) {

            state.currentPage =
                Math.max(
                    0,
                    Math.min(
                        progress.currentPage,
                        state.pages.length - 1
                    )
                );

        }


        /*
         * Restore completion.
         */

        state.completed =
            progress.completed === true;


        /*
         * Restore score information.
         */

        if (
            Number.isFinite(
                progress.score
            )
        ) {

            state.score =
                progress.score;

        }


        if (
            Number.isFinite(
                progress.percentage
            )
        ) {

            state.percentage =
                progress.percentage;

        }


        if (
            typeof progress.level === "string"
        ) {

            state.level =
                progress.level;

        }


        console.info(
            "Quiz progress restored."
        );

    } catch (error) {

        console.warn(
            "Unable to load saved quiz progress:",
            error
        );

        /*
         * If saved data is corrupted,
         * remove it rather than breaking the app.
         */

        clearProgress();

    }

}


/* ============================================================
   33. LOCAL STORAGE â€” CLEAR
   ============================================================ */

function clearProgress() {

    try {

        localStorage.removeItem(
            CONFIG.storageKey
        );

    } catch (error) {

        console.warn(
            "Unable to clear quiz progress:",
            error
        );

    }

}


/* ============================================================
   34. VALIDATION MESSAGE
   ============================================================ */

function showValidation() {

    DOM.validationMessage.classList.remove(
        "hidden"
    );


    DOM.validationMessage.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}


function hideValidation() {

    DOM.validationMessage.classList.add(
        "hidden"
    );

}


/* ============================================================
   35. SCREEN NAVIGATION
   ============================================================ */

function showScreen(
    screenName
) {

    /*
     * Hide all screens.
     */

    DOM.startScreen.classList.add(
        "hidden"
    );

    DOM.quizScreen.classList.add(
        "hidden"
    );

    DOM.resultsScreen.classList.add(
        "hidden"
    );

    DOM.reviewScreen.classList.add(
        "hidden"
    );

    DOM.errorScreen.classList.add(
        "hidden"
    );


    /*
     * Show requested screen.
     */

    switch (
        screenName
    ) {

        case "start":

            DOM.startScreen.classList.remove(
                "hidden"
            );

            break;


        case "quiz":

            DOM.quizScreen.classList.remove(
                "hidden"
            );

            break;


        case "results":

            DOM.resultsScreen.classList.remove(
                "hidden"
            );

            break;


        case "review":

            DOM.reviewScreen.classList.remove(
                "hidden"
            );

            break;


        case "error":

            DOM.errorScreen.classList.remove(
                "hidden"
            );

            break;


        default:

            console.warn(
                `Unknown screen: ${screenName}`
            );

    }

}


/* ============================================================
   36. ERROR HANDLING
   ============================================================ */

function showError(
    message
) {

    DOM.errorMessage.textContent =
        message;


    showScreen(
        "error"
    );

}


/* ============================================================
   END OF MASTER QUIZ ENGINE V1
   ============================================================ */



