# Nursing Success Hub — Master Quiz Engine V1.1 Adaptive

## What changed

V1.1 removes the fixed NCLEX dependency from the engine. The selected product is now read from the URL:

- `?product=nclex` → loads `questions/nclex.js`

The quiz engine remains the same and keeps dynamic pagination, answer locking, Previous/Next, progress, scoring, review, restart, LocalStorage, validation, and responsive UI.

## Structure

```text
nursing-success-hub/
├── index.html
├── style.css
├── app.js
├── config/
│   └── products.js
└── questions/
    └── nclex.js
```

## Local test

Open the project through a local static server, then use:

```text
http://localhost:8000/?product=nclex
```

For a simple Python server:

```bash
python -m http.server 8000
```

Do not double-click `index.html` for the final test. A local HTTP server is closer to GitHub Pages behavior and avoids browser restrictions around dynamically loaded scripts.

## Add a future product

Edit only `config/products.js`, for example:

```js
pharmacology: {
    id: "pharmacology",
    title: "Pharmacology Practice Questions",
    label: "PHARMACOLOGY PRACTICE",
    subtitle: "Interactive pharmacology practice quiz.",
    questionBank: "questions/pharmacology.js",
    gumroadUrl: "YOUR-PHARMACOLOGY-GUMROAD-URL",
    gumroadButtonText: "GET STUDY GUIDE →",
    questionsPerPage: 5,
    showProgress: true,
    showAnswerReview: true,
    persistProgress: true,
    storageKey: "nsh_master_quiz_pharmacology_progress_v1_1"
}
```

Then create `questions/pharmacology.js` using the same `const QUESTIONS = [...]` structure. The engine does not need to be rewritten.

## Gumroad

Each product has exactly one Gumroad URL in `config/products.js`. Replace the NCLEX placeholder with the final NCLEX Gumroad URL when it is available.

## Current V1.1 verification

- `app.js` JavaScript syntax: OK
- `config/products.js` syntax: OK
- `questions/nclex.js` syntax: OK
- NCLEX question count: 120
- Dynamic pages at 5 questions/page: 24
- First question ID: q1
- Last question ID: q120
- URL selector: `?product=nclex`

Next planned milestone: add a fictitious `pharmacology` test bank and verify that the same engine changes product, question count, pagination, and storage key without modifying `app.js`.
