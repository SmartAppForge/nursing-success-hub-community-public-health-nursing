const QUESTIONS = [
/* =========================
   PAGE 1 (q1–q5)
========================= */
{
id: "q1",
question: "A nurse is assessing a client's skin integrity. Which finding requires the most immediate attention?",
options: {
A: "Warm, intact skin",
B: "A small area of dry skin",
C: "Nonblanchable redness over the sacrum",
D: "Mildly dry elbows"
},
answer: "C"
},

{
id: "q2",
question: "Which factor places a hospitalized client at increased risk for pressure injury?",
options: {
A: "Frequent independent mobility",
B: "Adequate nutrition",
C: "Immobility",
D: "Intact sensation"
},
answer: "C"
},

{
id: "q3",
question: "Which assessment is most important when evaluating a wound?",
options: {
A: "Wound location, size, tissue type, drainage, and surrounding skin",
B: "Client's hair color",
C: "Room temperature only",
D: "Client's visual acuity"
},
answer: "A"
},

{
id: "q4",
question: "Which intervention is most effective for preventing pressure injuries in an immobile client?",
options: {
A: "Reposition the client regularly according to the individualized care plan.",
B: "Massage reddened bony prominences.",
C: "Keep the client in one comfortable position.",
D: "Place a donut-shaped device under the sacrum."
},
answer: "A"
},

{
id: "q5",
question: "Which finding represents intact skin rather than an open wound?",
options: {
A: "Full-thickness tissue loss",
B: "Blister with exposed tissue",
C: "Intact skin without visible tissue damage",
D: "Open area with drainage"
},
answer: "C"
},

/* =========================
   PAGE 2 (q6–q10)
========================= */
{
id: "q6",
question: "Which client has the highest risk for impaired skin integrity?",
options: {
A: "A mobile client who changes position independently",
B: "A client with limited mobility and urinary incontinence",
C: "A client who ambulates several times daily",
D: "A client with adequate nutritional intake"
},
answer: "B"
},

{
id: "q7",
question: "Which factor can delay wound healing?",
options: {
A: "Adequate protein intake",
B: "Good tissue perfusion",
C: "Poor nutritional status",
D: "Appropriate oxygenation"
},
answer: "C"
},

{
id: "q8",
question: "A nurse is assessing a pressure injury. Which finding is characteristic of a stage 1 pressure injury?",
options: {
A: "Full-thickness skin loss",
B: "Nonblanchable erythema of intact skin",
C: "Exposed bone",
D: "Visible adipose tissue"
},
answer: "B"
},

{
id: "q9",
question: "Which intervention should the nurse avoid when caring for a reddened bony prominence?",
options: {
A: "Offloading pressure",
B: "Frequent repositioning",
C: "Massaging the reddened area",
D: "Assessing the skin regularly"
},
answer: "C"
},

{
id: "q10",
question: "Which client position may help reduce pressure on the sacrum?",
options: {
A: "Supine continuously",
B: "Appropriate side-lying position",
C: "Sitting continuously",
D: "Prone without assessment"
},
answer: "B"
},

/* =========================
   PAGE 3 (q11–q15)
========================= */
{
id: "q11",
question: "Which description best matches a stage 2 pressure injury?",
options: {
A: "Intact skin with nonblanchable redness",
B: "Partial-thickness skin loss with exposed dermis",
C: "Full-thickness skin loss with exposed bone",
D: "Wound completely covered by eschar"
},
answer: "B"
},

{
id: "q12",
question: "Which finding is consistent with a stage 3 pressure injury?",
options: {
A: "Intact skin only",
B: "Partial-thickness loss without adipose visible",
C: "Full-thickness skin loss in which adipose may be visible",
D: "Exposed bone as the defining feature"
},
answer: "C"
},

{
id: "q13",
question: "Which finding is characteristic of a stage 4 pressure injury?",
options: {
A: "Nonblanchable erythema only",
B: "Partial-thickness epidermal loss",
C: "Exposed or directly palpable deeper structures such as muscle, tendon, or bone",
D: "Intact blister only"
},
answer: "C"
},

{
id: "q14",
question: "A wound bed is completely obscured by slough and/or eschar, preventing assessment of the depth. How should the injury be classified?",
options: {
A: "Stage 1",
B: "Stage 2",
C: "Unstageable",
D: "Stage 4"
},
answer: "C"
},

{
id: "q15",
question: "Which intervention is appropriate for a client at risk for pressure injury?",
options: {
A: "Use a pressure-redistributing support surface when indicated.",
B: "Keep the head of bed elevated as high as possible continuously.",
C: "Leave moisture on the skin.",
D: "Avoid routine skin inspection."
},
answer: "A"
},

/* =========================
   PAGE 4 (q16–q20)
========================= */
{
id: "q16",
question: "A client has urinary incontinence and fragile skin. Which intervention is most appropriate?",
options: {
A: "Leave the skin exposed to moisture.",
B: "Cleanse gently and apply an appropriate moisture barrier.",
C: "Scrub the skin aggressively.",
D: "Apply alcohol directly to the skin."
},
answer: "B"
},

{
id: "q17",
question: "Which factor contributes directly to pressure injury development?",
options: {
A: "Prolonged pressure over tissue",
B: "Adequate circulation",
C: "Frequent repositioning",
D: "Healthy nutrition"
},
answer: "A"
},

{
id: "q18",
question: "Which additional factor can increase tissue damage when a client is repositioned incorrectly?",
options: {
A: "Shear",
B: "Hydration",
C: "Oxygenation",
D: "Nutrition"
},
answer: "A"
},

{
id: "q19",
question: "Which nursing action helps reduce shear?",
options: {
A: "Drag the client across the bed.",
B: "Use appropriate lifting or repositioning techniques.",
C: "Raise the head of bed to the highest position at all times.",
D: "Pull the client by the arms."
},
answer: "B"
},

{
id: "q20",
question: "Which force occurs when the skin remains stationary while deeper tissues move in a different direction?",
options: {
A: "Friction",
B: "Shear",
C: "Pressure relief",
D: "Maceration"
},
answer: "B"
},

/* =========================
   PAGE 5 (q21–q25)
========================= */
{
id: "q21",
question: "Which finding suggests wound infection?",
options: {
A: "Decreasing redness and swelling",
B: "Increasing pain, warmth, redness, and purulent drainage",
C: "Healthy granulation tissue",
D: "Decreasing wound size"
},
answer: "B"
},

{
id: "q22",
question: "A postoperative client develops increasing wound pain, redness, and purulent drainage. What should the nurse do?",
options: {
A: "Document the findings as expected healing.",
B: "Notify the healthcare provider and assess the wound further.",
C: "Apply pressure directly to the wound.",
D: "Ignore the drainage."
},
answer: "B"
},

{
id: "q23",
question: "Which type of wound drainage is typically clear and watery?",
options: {
A: "Serous",
B: "Purulent",
C: "Sanguineous",
D: "Serosanguineous"
},
answer: "A"
},

{
id: "q24",
question: "Which wound drainage is most suggestive of infection?",
options: {
A: "Serous",
B: "Purulent",
C: "Small amount of serosanguineous drainage",
D: "Clear drainage"
},
answer: "B"
},

{
id: "q25",
question: "Which drainage consists primarily of blood?",
options: {
A: "Serous",
B: "Purulent",
C: "Sanguineous",
D: "Serosanguineous"
},
answer: "C"
},

/* =========================
   PAGE 6 (q26–q30)
========================= */
{
id: "q26",
question: "Which finding is most consistent with healthy granulation tissue?",
options: {
A: "Black necrotic tissue",
B: "Moist red or pink tissue",
C: "Thick yellow pus",
D: "Dry leathery eschar"
},
answer: "B"
},

{
id: "q27",
question: "What is the primary purpose of granulation tissue during wound healing?",
options: {
A: "Provide a vascular tissue bed for healing",
B: "Prevent all blood flow",
C: "Create permanent necrotic tissue",
D: "Increase wound contamination"
},
answer: "A"
},

{
id: "q28",
question: "Which tissue type is usually described as yellow, soft, and devitalized tissue in a wound bed?",
options: {
A: "Granulation tissue",
B: "Slough",
C: "Epithelial tissue",
D: "Healthy dermis"
},
answer: "B"
},

{
id: "q29",
question: "Which tissue appears black, brown, or tan and may consist of devitalized tissue?",
options: {
A: "Eschar",
B: "Granulation",
C: "Epithelial tissue",
D: "Healthy subcutaneous tissue"
},
answer: "A"
},

{
id: "q30",
question: "Why may necrotic tissue interfere with wound healing?",
options: {
A: "It can provide a barrier to healing and support microbial growth.",
B: "It always increases oxygen delivery.",
C: "It guarantees rapid epithelialization.",
D: "It improves circulation."
},
answer: "A"
},

/* =========================
   PAGE 7 (q31–q35)
========================= */
{
id: "q31",
question: "Which phase of wound healing occurs immediately after injury and involves clot formation and inflammation?",
options: {
A: "Hemostasis and inflammatory phase",
B: "Maturation only",
C: "Remodeling only",
D: "Epithelialization only"
},
answer: "A"
},

{
id: "q32",
question: "Which cells play an important role in clearing microorganisms and debris during the inflammatory phase?",
options: {
A: "Platelets only",
B: "White blood cells such as neutrophils and macrophages",
C: "Red blood cells only",
D: "Osteocytes"
},
answer: "B"
},

{
id: "q33",
question: "Which process is characteristic of the proliferative phase of wound healing?",
options: {
A: "Collagen deposition and granulation tissue formation",
B: "Complete tissue destruction",
C: "Loss of all blood vessels",
D: "Permanent cessation of cell activity"
},
answer: "A"
},

{
id: "q34",
question: "During the remodeling phase of wound healing, what occurs?",
options: {
A: "Collagen is reorganized and wound strength gradually increases.",
B: "The wound becomes increasingly contaminated.",
C: "All collagen disappears.",
D: "Bleeding normally increases."
},
answer: "A"
},

{
id: "q35",
question: "Which factor is essential for tissue repair?",
options: {
A: "Adequate oxygenation",
B: "Persistent pressure",
C: "Severe dehydration",
D: "Poor nutrition"
},
answer: "A"
},

/* =========================
   PAGE 8 (q36–q40)
========================= */
{
id: "q36",
question: "Which nutrient is especially important for collagen synthesis and wound healing?",
options: {
A: "Protein",
B: "Sodium only",
C: "Caffeine",
D: "Cholesterol only"
},
answer: "A"
},

{
id: "q37",
question: "Which vitamin plays an important role in collagen formation and wound healing?",
options: {
A: "Vitamin C",
B: "Vitamin B12 only",
C: "Vitamin K only",
D: "Vitamin D only"
},
answer: "A"
},

{
id: "q38",
question: "Which client is at greatest risk for delayed wound healing?",
options: {
A: "Client with adequate protein intake and good circulation",
B: "Client with poorly controlled diabetes and impaired perfusion",
C: "Client with adequate hydration",
D: "Client who ambulates regularly"
},
answer: "B"
},

{
id: "q39",
question: "Why can diabetes impair wound healing?",
options: {
A: "It can contribute to impaired circulation, neuropathy, and increased infection risk.",
B: "It always increases tissue oxygenation.",
C: "It guarantees rapid collagen synthesis.",
D: "It prevents infection."
},
answer: "A"
},

{
id: "q40",
question: "Which intervention is appropriate for promoting wound healing in a client with diabetes?",
options: {
A: "Support appropriate glucose management and assess the wound regularly.",
B: "Ignore glucose levels.",
C: "Allow prolonged pressure on the wound.",
D: "Avoid nutrition assessment."
},
answer: "A"
},

/* =========================
   PAGE 9 (q41–q45)
========================= */
{
id: "q41",
question: "A client has a diabetic foot ulcer. Which assessment is especially important?",
options: {
A: "Peripheral circulation and sensation",
B: "Hair color",
C: "Hearing acuity only",
D: "Visual field only"
},
answer: "A"
},

{
id: "q42",
question: "Which finding may indicate impaired peripheral arterial circulation in a lower-extremity wound?",
options: {
A: "Warm skin with strong pulses",
B: "Cool skin and diminished peripheral pulses",
C: "Normal capillary refill",
D: "Healthy hair growth"
},
answer: "B"
},

{
id: "q43",
question: "Which finding is more characteristic of a venous leg ulcer?",
options: {
A: "Location near the medial ankle with associated edema",
B: "Pain relieved only by dangling the leg",
C: "Cool, pale foot with absent pulses",
D: "Deep ulcer on the tip of a toe only"
},
answer: "A"
},

{
id: "q44",
question: "Which finding is more characteristic of an arterial ulcer?",
options: {
A: "Edema and warm skin",
B: "Ulcer near the medial malleolus",
C: "Painful ulcer with poor perfusion and a cool extremity",
D: "Heavy serous drainage caused by venous hypertension"
},
answer: "C"
},

{
id: "q45",
question: "Before applying compression therapy for a lower-extremity ulcer, which assessment is particularly important?",
options: {
A: "Arterial circulation",
B: "Hair texture",
C: "Hearing",
D: "Visual acuity"
},
answer: "A"
},

/* =========================
   PAGE 10 (q46–q50)
========================= */
{
id: "q46",
question: "Which intervention is generally appropriate for a client with a venous leg ulcer when prescribed?",
options: {
A: "Appropriate compression therapy after arterial circulation has been evaluated",
B: "Complete avoidance of leg elevation",
C: "Continuous pressure over the ulcer",
D: "Walking barefoot"
},
answer: "A"
},

{
id: "q47",
question: "Which intervention may help improve venous return in a client with venous insufficiency?",
options: {
A: "Leg elevation when appropriate",
B: "Prolonged dependent positioning",
C: "Complete immobility",
D: "Tight constrictive clothing"
},
answer: "A"
},

{
id: "q48",
question: "Which assessment finding may indicate a neuropathic foot ulcer?",
options: {
A: "Loss of protective sensation",
B: "Strong pain response to light touch",
C: "Normal sensation",
D: "Improved circulation"
},
answer: "A"
},

{
id: "q49",
question: "A client with diabetes has reduced sensation in both feet. Which teaching is most important?",
options: {
A: "Inspect the feet daily for injury or skin changes.",
B: "Walk barefoot at home.",
C: "Use heating pads directly on the feet.",
D: "Ignore small cuts."
},
answer: "A"
},

{
id: "q50",
question: "Which action can help prevent diabetic foot complications?",
options: {
A: "Use properly fitting footwear and perform regular foot inspections.",
B: "Trim calluses aggressively at home.",
C: "Walk barefoot outdoors.",
D: "Use very hot water to test sensation."
},
answer: "A"
},

/* =========================
   PAGE 11 (q51–q55)
========================= */
{
id: "q51",
question: "Which wound cleansing technique is generally appropriate for a clean wound?",
options: {
A: "Clean from the least contaminated area toward the more contaminated area.",
B: "Use the same gauze repeatedly.",
C: "Scrub the wound aggressively.",
D: "Touch the wound with contaminated gloves."
},
answer: "A"
},

{
id: "q52",
question: "When changing a sterile wound dressing, which action helps maintain asepsis?",
options: {
A: "Avoid touching sterile supplies with contaminated hands or gloves.",
B: "Place sterile supplies directly on an unclean surface.",
C: "Reuse contaminated gauze.",
D: "Reach across the sterile field."
},
answer: "A"
},

{
id: "q53",
question: "Which solution is commonly used for wound cleansing when appropriate according to the wound-care plan?",
options: {
A: "Normal saline",
B: "Undiluted bleach",
C: "Household detergent",
D: "Concentrated alcohol for all wounds"
},
answer: "A"
},

{
id: "q54",
question: "Why should harsh antiseptics not routinely be placed in healthy wound tissue unless specifically indicated?",
options: {
A: "They may damage viable tissue and interfere with healing.",
B: "They always increase granulation.",
C: "They guarantee faster epithelialization.",
D: "They eliminate the need for dressing changes."
},
answer: "A"
},

{
id: "q55",
question: "A nurse is irrigating a wound. Which principle is important?",
options: {
A: "Use the prescribed solution and technique while avoiding unnecessary trauma to the tissue.",
B: "Use maximum pressure in every wound.",
C: "Direct contaminated fluid toward clean tissue.",
D: "Reuse irrigation fluid."
},
answer: "A"
},

/* =========================
   PAGE 12 (q56–q60)
========================= */
{
id: "q56",
question: "Which finding indicates that a wound may require further assessment for infection?",
options: {
A: "Increasing erythema extending beyond the wound margins",
B: "Decreasing redness",
C: "Healthy granulation tissue",
D: "Decreasing drainage"
},
answer: "A"
},

{
id: "q57",
question: "Which assessment should the nurse perform before and after wound care?",
options: {
A: "Assess pain and evaluate changes in wound appearance.",
B: "Assess hair growth only.",
C: "Measure height only.",
D: "Ignore client comfort."
},
answer: "A"
},

{
id: "q58",
question: "A client reports severe pain during dressing changes. Which nursing action is appropriate?",
options: {
A: "Assess the pain and provide prescribed analgesia before the procedure when appropriate.",
B: "Tell the client pain is unavoidable.",
C: "Perform the procedure without explanation.",
D: "Avoid reassessing pain."
},
answer: "A"
},

{
id: "q59",
question: "Which intervention may reduce pain during removal of an adherent dressing?",
options: {
A: "Moisten the dressing with the prescribed solution before removal when appropriate.",
B: "Pull the dressing rapidly without assessment.",
C: "Remove the dressing against the direction of healing tissue.",
D: "Use excessive force."
},
answer: "A"
},

{
id: "q60",
question: "A client becomes anxious before wound care. Which nursing intervention is most appropriate?",
options: {
A: "Explain the procedure and allow the client to ask questions.",
B: "Avoid communicating with the client.",
C: "Begin the procedure without warning.",
D: "Tell the client anxiety is inappropriate."
},
answer: "A"
},

/* =========================
   PAGE 13 (q61–q65)
========================= */
{
id: "q61",
question: "Which wound-healing problem occurs when the edges of a surgical incision separate?",
options: {
A: "Evisceration",
B: "Dehiscence",
C: "Granulation",
D: "Maceration"
},
answer: "B"
},

{
id: "q62",
question: "A postoperative client's abdominal incision partially separates. Which action should the nurse take?",
options: {
A: "Notify the healthcare provider and protect the wound according to protocol.",
B: "Apply vigorous pressure.",
C: "Encourage coughing.",
D: "Remove all remaining sutures."
},
answer: "A"
},

{
id: "q63",
question: "Which complication occurs when abdominal organs protrude through a separated surgical incision?",
options: {
A: "Dehiscence",
B: "Evisceration",
C: "Maceration",
D: "Excoriation"
},
answer: "B"
},

{
id: "q64",
question: "A client experiences evisceration after abdominal surgery. What is the priority nursing action?",
options: {
A: "Cover the exposed tissue with sterile dressings moistened with appropriate sterile solution and notify the surgical team immediately.",
B: "Push the organs back into the abdomen.",
C: "Leave the wound uncovered.",
D: "Encourage the client to walk."
},
answer: "A"
},

{
id: "q65",
question: "Which intervention may help reduce stress on an abdominal incision when the client coughs?",
options: {
A: "Splint the incision as instructed.",
B: "Avoid supporting the incision.",
C: "Encourage forceful coughing without support.",
D: "Apply direct pressure with contaminated hands."
},
answer: "A"
},

/* =========================
   PAGE 14 (q66–q70)
========================= */
{
id: "q66",
question: "Which factor increases the risk of surgical wound dehiscence?",
options: {
A: "Poor nutrition",
B: "Adequate protein intake",
C: "Good tissue perfusion",
D: "Proper wound support"
},
answer: "A"
},

{
id: "q67",
question: "Which postoperative finding may indicate a wound infection?",
options: {
A: "Increasing warmth, redness, pain, and purulent drainage",
B: "Decreasing pain",
C: "Clean dry incision",
D: "Approximated wound edges"
},
answer: "A"
},

{
id: "q68",
question: "Which intervention helps prevent surgical-site infection?",
options: {
A: "Use appropriate hand hygiene and aseptic technique.",
B: "Touch the incision with unclean gloves.",
C: "Leave contaminated dressings in place indefinitely.",
D: "Skip wound assessment."
},
answer: "A"
},

{
id: "q69",
question: "A postoperative client has a small amount of serosanguineous drainage on the dressing shortly after surgery. How should the nurse interpret this finding?",
options: {
A: "It can occur during early healing, but the amount and trend should be monitored.",
B: "It always indicates wound infection.",
C: "It always indicates evisceration.",
D: "It requires immediate removal of all sutures."
},
answer: "A"
},

{
id: "q70",
question: "Which finding in a postoperative wound requires the most urgent assessment?",
options: {
A: "Small stable amount of serous drainage",
B: "Sudden wound separation with visible underlying tissue",
C: "Mild incisional discomfort",
D: "Approximated wound edges"
},
answer: "B"
},

/* =========================
   PAGE 15 (q71–q75)
========================= */
{
id: "q71",
question: "Which intervention helps prevent pressure injuries in a client who is unable to reposition independently?",
options: {
A: "Develop and follow an individualized repositioning schedule.",
B: "Keep the client in one position.",
C: "Massage areas of nonblanchable redness.",
D: "Avoid using support surfaces."
},
answer: "A"
},

{
id: "q72",
question: "Which assessment is important when evaluating pressure injury risk?",
options: {
A: "Mobility, moisture, nutrition, sensation, and skin condition",
B: "Hair color only",
C: "Visual acuity only",
D: "Height only"
},
answer: "A"
},

{
id: "q73",
question: "A client is incontinent and has redness around the perineum. Which condition should the nurse suspect?",
options: {
A: "Moisture-associated skin damage",
B: "Improved skin integrity",
C: "Arterial ulcer",
D: "Bone fracture"
},
answer: "A"
},

{
id: "q74",
question: "Which intervention is appropriate for moisture-associated skin damage?",
options: {
A: "Keep the skin clean and dry and use an appropriate barrier product.",
B: "Leave wet linens against the skin.",
C: "Scrub the skin vigorously.",
D: "Apply concentrated alcohol."
},
answer: "A"
},

{
id: "q75",
question: "Which finding suggests maceration of the skin?",
options: {
A: "Soft, pale, overly moist tissue",
B: "Dry intact skin",
C: "Healthy epithelial tissue",
D: "Firm scar tissue"
},
answer: "A"
},

/* =========================
   PAGE 16 (q76–q80)
========================= */
{
id: "q76",
question: "Which intervention is appropriate for preventing skin breakdown from incontinence?",
options: {
A: "Provide prompt cleansing after episodes of incontinence.",
B: "Use hot water and vigorous scrubbing.",
C: "Delay cleansing for several hours.",
D: "Avoid moisture barriers."
},
answer: "A"
},

{
id: "q77",
question: "Which finding may indicate worsening tissue perfusion around a wound?",
options: {
A: "Increasing pallor, coolness, or discoloration",
B: "Warm pink tissue",
C: "Improving capillary refill",
D: "Healthy granulation"
},
answer: "A"
},

{
id: "q78",
question: "A client has a lower-extremity wound and diminished pedal pulses. What should the nurse do before initiating compression therapy?",
options: {
A: "Ensure arterial circulation has been evaluated.",
B: "Apply the tightest compression immediately.",
C: "Ignore the pulse assessment.",
D: "Massage the limb vigorously."
},
answer: "A"
},

{
id: "q79",
question: "Which finding is most concerning in a client with an ischemic lower-extremity wound?",
options: {
A: "Cool extremity with absent or markedly diminished pulses",
B: "Warm skin",
C: "Normal sensation",
D: "Strong pedal pulses"
},
answer: "A"
},

{
id: "q80",
question: "Which intervention is appropriate for a client with impaired arterial circulation?",
options: {
A: "Protect the limb from trauma and follow the prescribed vascular management plan.",
B: "Apply unprescribed tight compression.",
C: "Expose the limb to extreme heat.",
D: "Encourage walking barefoot."
},
answer: "A"
},

/* =========================
   PAGE 17 (q81–q85)
========================= */
{
id: "q81",
question: "Which type of wound closure occurs when wound edges are brought together with sutures, staples, or adhesive?",
options: {
A: "Primary intention",
B: "Secondary intention",
C: "Tertiary intention only",
D: "Delayed closure after complete granulation"
},
answer: "A"
},

{
id: "q82",
question: "A wound is intentionally left open to heal by granulation tissue formation. Which type of healing is occurring?",
options: {
A: "Primary intention",
B: "Secondary intention",
C: "Immediate closure",
D: "Primary closure"
},
answer: "B"
},

{
id: "q83",
question: "Which wound-healing method generally results in more granulation tissue and scar formation?",
options: {
A: "Secondary intention",
B: "Primary intention",
C: "Immediate surgical closure",
D: "Intact skin healing"
},
answer: "A"
},

{
id: "q84",
question: "Which assessment finding suggests epithelialization is occurring?",
options: {
A: "New epithelial tissue developing across the wound surface",
B: "Increasing necrosis",
C: "Increasing purulent drainage",
D: "Wound enlargement"
},
answer: "A"
},

{
id: "q85",
question: "Which factor can impair oxygen delivery to healing tissue?",
options: {
A: "Smoking",
B: "Adequate circulation",
C: "Normal hemoglobin",
D: "Regular mobility"
},
answer: "A"
},

/* =========================
   PAGE 18 (q86–q90)
========================= */
{
id: "q86",
question: "Which teaching should the nurse provide to a client who smokes and has a chronic wound?",
options: {
A: "Smoking can impair circulation and delay wound healing.",
B: "Smoking improves tissue oxygenation.",
C: "Smoking has no effect on wound healing.",
D: "Smoking prevents wound infection."
},
answer: "A"
},

{
id: "q87",
question: "Which assessment is important when evaluating a wound for healing progress?",
options: {
A: "Measure wound dimensions consistently using the same method when possible.",
B: "Estimate size randomly each time.",
C: "Avoid documenting drainage.",
D: "Document only pain."
},
answer: "A"
},

{
id: "q88",
question: "Which wound measurement is commonly documented to describe wound dimensions?",
options: {
A: "Length, width, and depth",
B: "Hair length and weight",
C: "Blood pressure and pulse",
D: "Height and visual acuity"
},
answer: "A"
},

{
id: "q89",
question: "A wound becomes smaller over several assessments and develops healthy granulation tissue. How should the nurse interpret this?",
options: {
A: "These findings suggest progress toward healing.",
B: "They indicate worsening infection.",
C: "They indicate inevitable necrosis.",
D: "They demonstrate increased tissue ischemia."
},
answer: "A"
},

{
id: "q90",
question: "Which documentation is most appropriate for wound assessment?",
options: {
A: "Wound location, measurements, tissue characteristics, drainage, odor, and surrounding skin.",
B: "Looks bad.",
C: "Wound is okay.",
D: "Patient seems fine."
},
answer: "A"
},

/* =========================
   PAGE 19 (q91–q95)
========================= */
{
id: "q91",
question: "A client has a wound with thick purulent drainage and a foul odor. Which action is the priority?",
options: {
A: "Assess for infection and notify the healthcare provider as indicated.",
B: "Document normal healing.",
C: "Cover the drainage without further assessment.",
D: "Ignore the odor."
},
answer: "A"
},

{
id: "q92",
question: "Which finding may indicate systemic infection in a client with a wound?",
options: {
A: "Fever and altered mental status",
B: "Decreasing wound size",
C: "Healthy granulation",
D: "Improved appetite"
},
answer: "A"
},

{
id: "q93",
question: "A client with a wound becomes hypotensive, confused, and febrile. Which complication should the nurse consider?",
options: {
A: "Sepsis",
B: "Normal wound healing",
C: "Improved perfusion",
D: "Simple scar formation"
},
answer: "A"
},

{
id: "q94",
question: "Which nursing action is appropriate when sepsis is suspected in a client with an infected wound?",
options: {
A: "Initiate urgent assessment and follow the facility's sepsis protocol.",
B: "Wait until the next scheduled visit.",
C: "Encourage the client to ambulate independently.",
D: "Delay vital-sign assessment."
},
answer: "A"
},

{
id: "q95",
question: "Which practice helps prevent wound infection during dressing changes?",
options: {
A: "Perform hand hygiene and maintain appropriate aseptic technique.",
B: "Reuse contaminated supplies.",
C: "Touch the wound with bare hands.",
D: "Place sterile supplies on a contaminated surface."
},
answer: "A"
},

/* =========================
   PAGE 20 (q96–q100)
========================= */
{
id: "q96",
question: "Which client is most likely to experience delayed wound healing?",
options: {
A: "Client with severe protein deficiency",
B: "Client with adequate nutrition",
C: "Client with good tissue perfusion",
D: "Client with appropriate oxygenation"
},
answer: "A"
},

{
id: "q97",
question: "Which dietary component is particularly important for tissue repair?",
options: {
A: "Protein",
B: "Alcohol",
C: "Excess sodium",
D: "Caffeine"
},
answer: "A"
},

{
id: "q98",
question: "A client with a chronic wound has poor appetite and unintended weight loss. Which action should the nurse take?",
options: {
A: "Request or coordinate a nutritional assessment.",
B: "Ignore the weight loss.",
C: "Restrict protein.",
D: "Stop wound care."
},
answer: "A"
},

{
id: "q99",
question: "Which laboratory finding may be useful when evaluating the nutritional status of a client with a chronic wound?",
options: {
A: "Selected nutritional markers interpreted with the overall clinical picture",
B: "Visual acuity",
C: "Hearing test",
D: "Electrocardiogram alone"
},
answer: "A"
},

{
id: "q100",
question: "Which intervention supports wound healing in a malnourished client?",
options: {
A: "Provide adequate calories and protein according to the individualized nutrition plan.",
B: "Restrict all protein.",
C: "Provide only clear liquids indefinitely.",
D: "Avoid nutritional supplements when prescribed."
},
answer: "A"
},

/* =========================
   PAGE 21 (q101–q105)
========================= */
{
id: "q101",
question: "A client has a pressure injury over the sacrum. Which intervention should the nurse prioritize?",
options: {
A: "Offload pressure from the affected area.",
B: "Massage the wound.",
C: "Keep the client supine continuously.",
D: "Apply additional pressure to the area."
},
answer: "A"
},

{
id: "q102",
question: "Which client should the nurse assess first?",
options: {
A: "Client with a chronic wound showing gradual improvement",
B: "Client with a wound and new fever, confusion, and hypotension",
C: "Client with mild wound-related discomfort",
D: "Client with a small amount of stable serous drainage"
},
answer: "B"
},

{
id: "q103",
question: "A client with diabetes has a foot wound and reports that the foot has become increasingly cold and pale. What should the nurse do?",
options: {
A: "Assess circulation promptly and notify the healthcare team.",
B: "Apply a heating pad at maximum temperature.",
C: "Encourage the client to walk barefoot.",
D: "Ignore the finding."
},
answer: "A"
},

{
id: "q104",
question: "A client with a surgical wound suddenly develops wound separation and visible underlying tissue. What is the nurse's priority?",
options: {
A: "Protect the wound and notify the surgical team immediately.",
B: "Encourage coughing.",
C: "Push the tissue back into the wound.",
D: "Remove the remaining sutures."
},
answer: "A"
},

{
id: "q105",
question: "Which finding indicates a pressure injury may be worsening?",
options: {
A: "Increasing wound dimensions and development of necrotic tissue",
B: "Decreasing wound size",
C: "Increasing healthy granulation",
D: "Reduced drainage"
},
answer: "A"
},

/* =========================
   PAGE 22 (q106–q110)
========================= */
{
id: "q106",
question: "A client has a chronic venous ulcer with significant lower-leg edema. Which intervention may be appropriate when arterial circulation is adequate?",
options: {
A: "Prescribed compression therapy",
B: "Complete immobilization",
C: "Continuous dependent positioning",
D: "Tight unprescribed wrapping"
},
answer: "A"
},

{
id: "q107",
question: "A client has a suspected arterial ulcer with diminished pulses. Which intervention should the nurse question?",
options: {
A: "Applying compression without evaluating arterial circulation",
B: "Assessing peripheral pulses",
C: "Protecting the foot from injury",
D: "Monitoring skin color and temperature"
},
answer: "A"
},

{
id: "q108",
question: "A client with impaired sensation asks how to prevent foot wounds. Which statement indicates correct understanding?",
options: {
A: "I will inspect my feet every day.",
B: "I will use a heating pad if my feet feel cold.",
C: "I will walk barefoot to strengthen my feet.",
D: "I will ignore small blisters."
},
answer: "A"
},

{
id: "q109",
question: "Which assessment is most important before applying a new wound dressing?",
options: {
A: "Assess the wound and surrounding skin and identify the prescribed dressing.",
B: "Apply the dressing without removing the old one.",
C: "Skip hand hygiene.",
D: "Use any available dressing."
},
answer: "A"
},

{
id: "q110",
question: "A wound dressing is saturated with drainage sooner than expected. What should the nurse do?",
options: {
A: "Assess the wound and drainage and notify the healthcare provider if the change is concerning.",
B: "Ignore the change.",
C: "Cover it with additional dressings without assessment.",
D: "Document it as normal automatically."
},
answer: "A"
},

/* =========================
   PAGE 23 (q111–q115)
========================= */
{
id: "q111",
question: "A client with a pressure injury has poor oral intake. Which intervention is most appropriate?",
options: {
A: "Coordinate nutritional support to promote adequate calorie and protein intake.",
B: "Restrict protein.",
C: "Limit all fluids.",
D: "Avoid nutrition assessment."
},
answer: "A"
},

{
id: "q112",
question: "Which finding should make the nurse suspect osteomyelitis in a client with a chronic deep wound?",
options: {
A: "Persistent wound with exposed or involved bone and signs of infection",
B: "Rapid epithelialization",
C: "Healthy intact skin",
D: "Decreasing wound depth"
},
answer: "A"
},

{
id: "q113",
question: "A client has a chronic wound with increasing pain despite treatment. What should the nurse do?",
options: {
A: "Reassess the wound and investigate possible infection or other complications.",
B: "Assume pain is always expected.",
C: "Stop all wound care.",
D: "Ignore the symptom."
},
answer: "A"
},

{
id: "q114",
question: "Which intervention is appropriate when repositioning a client with fragile skin?",
options: {
A: "Use lifting equipment or techniques that minimize friction and shear.",
B: "Drag the client across the sheet.",
C: "Pull directly on the skin.",
D: "Use forceful movements."
},
answer: "A"
},

{
id: "q115",
question: "A nurse notices a new area of nonblanchable redness over a bony prominence. What should the nurse do first?",
options: {
A: "Relieve pressure from the area and document and monitor the finding.",
B: "Massage the area vigorously.",
C: "Apply additional pressure.",
D: "Ignore it until the next shift."
},
answer: "A"
},

/* =========================
   PAGE 24 (q116–q120)
========================= */
{
id: "q116",
question: "Which client has the highest priority for wound assessment?",
options: {
A: "Client with a stable healing incision",
B: "Client with new wound separation and increasing drainage",
C: "Client with a small dry scab",
D: "Client with a healed wound scar"
},
answer: "B"
},

{
id: "q117",
question: "A client with a chronic wound has increasing redness, warmth, swelling, and purulent drainage. Which action should the nurse take?",
options: {
A: "Assess for infection and notify the healthcare provider.",
B: "Document normal healing.",
C: "Massage the wound.",
D: "Leave the wound open without assessment."
},
answer: "A"
},

{
id: "q118",
question: "A client with a pressure injury is incontinent and frequently lies in the same position. Which interventions should the nurse prioritize?",
options: {
A: "Moisture management, repositioning, pressure redistribution, and regular skin assessment",
B: "Continuous supine positioning",
C: "Massage over reddened areas",
D: "Avoiding skin inspection"
},
answer: "A"
},

{
id: "q119",
question: "Which finding best indicates that a chronic wound is progressing toward healing?",
options: {
A: "Increasing necrotic tissue",
B: "Increasing wound size",
C: "Healthy granulation and decreasing wound dimensions",
D: "Increasing purulent drainage"
},
answer: "C"
},

{
id: "q120",
question: "A nurse is developing a comprehensive care plan for a client with impaired skin integrity. Which intervention is most appropriate?",
options: {
A: "Address pressure relief, nutrition, moisture, circulation, infection prevention, pain, and wound-specific care.",
B: "Focus only on the wound dressing.",
C: "Avoid assessing nutritional status.",
D: "Treat every wound using the same dressing."
},
answer: "A"
}
];
