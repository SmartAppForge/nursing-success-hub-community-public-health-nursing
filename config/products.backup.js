/* ============================================================
   NURSING SUCCESS HUB
   PRODUCT REGISTRY — V1.1 ADAPTIVE

   Add future products here. The quiz engine stays unchanged.
   ============================================================ */

const PRODUCTS = {
    nclex: {
        id: "nclex",
        title: "NCLEX-RN Practice Questions",
        label: "NCLEX-RN PRACTICE",
        subtitle: "Test your nursing knowledge with an interactive practice quiz designed for structured review.",
        questionBank: "questions/nclex.js",
        gumroadUrl: "https://ebookservice.gumroad.com/?section=PJBzNNizT0MF21VU51av9g==#PJBzNNizT0MF21VU51av9g==",
        gumroadButtonText: "GET STUDY GUIDE →",
        questionsPerPage: 5,
        showProgress: true,
        showAnswerReview: true,
        persistProgress: true,
        storageKey: "nsh_master_quiz_nclex_progress_v1_1"
    }
};
