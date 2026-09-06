from pathlib import Path
import re

questions = Path("questions")
output = Path("config/products.js")

def make_id(name):
    return re.sub(r"-+", "-", re.sub(r"[^a-z0-9]+", "-", name.lower())).strip("-")

lines = [
    "/* ============================================================",
    "   NURSING SUCCESS HUB",
    "   MASTER TEMPLATE - PRODUCT REGISTRY V1.1",
    "   ============================================================ */",
    "",
    "const PRODUCTS = {",
]

# Template technique
lines += [
    '    template: {',
    '        id: "template",',
    '        title: "Quiz App Master Template",',
    '        label: "PRACTICE QUIZ",',
    '        subtitle: "Reusable adaptive quiz template for nursing education.",',
    '        questionBank: "questions/template.js",',
    '        gumroadUrl: "#",',
    '        gumroadButtonText: "GET STUDY GUIDE ->",',
    '        questionsPerPage: 5,',
    '        showProgress: true,',
    '        showAnswerReview: true,',
    '        persistProgress: true,',
    '        storageKey: "nsh_master_quiz_template_progress_v1_1"',
    '    },',
]

files = sorted(
    f for f in questions.glob("*.js")
    if f.stem != "template"
)

for i, f in enumerate(files):
    product_id = make_id(f.stem)
    title = "NCLEX-RN Practice Questions" if f.stem.lower() == "nclex" else f.stem

    comma = "," if i < len(files) - 1 else ""

    lines += [
        f'    "{product_id}": {{',
        f'        id: "{product_id}",',
        f'        title: "{title}",',
        '        label: "PRACTICE QUIZ",',
        '        subtitle: "Test your knowledge with an interactive practice quiz designed for structured review.",',
        f'        questionBank: "questions/{f.name}",',
        '        gumroadUrl: "#",',
        '        gumroadButtonText: "GET STUDY GUIDE ->",',
        '        questionsPerPage: 5,',
        '        showProgress: true,',
        '        showAnswerReview: true,',
        '        persistProgress: true,',
        f'        storageKey: "nsh_master_quiz_{product_id}_progress_v1_1"',
        f'    }}{comma}',
    ]

lines += [
    "};",
    "",
]

output.write_text("\n".join(lines), encoding="utf-8")

print(f"PRODUCTS GENERATED: {len(files)}")
print("File:", output)