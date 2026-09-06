const QUESTIONS = [
/* =========================
   PAGE 1 (q1–q5)
========================= */
{
id: "q1",
question: "A nurse is teaching a client about cancer. Which statement best describes a malignant tumor?",
options: {
A: "It is always surrounded by a capsule.",
B: "It remains localized at its original site.",
C: "It can invade surrounding tissues and potentially spread to distant sites.",
D: "It consists only of mature, normally functioning cells."
},
answer: "C"
},

{
id: "q2",
question: "Which term describes the spread of malignant cancer cells from the original tumor to distant organs?",
options: {
A: "Metastasis",
B: "Hyperplasia",
C: "Differentiation",
D: "Encapsulation"
},
answer: "A"
},

{
id: "q3",
question: "Which factor is considered a modifiable risk factor for several types of cancer?",
options: {
A: "Age",
B: "Family history",
C: "Smoking",
D: "Genetic inheritance"
},
answer: "C"
},

{
id: "q4",
question: "A nurse is discussing cancer prevention with a client. Which recommendation is appropriate?",
options: {
A: "Avoid all physical activity.",
B: "Follow recommended screening guidelines.",
C: "Use tobacco products only occasionally.",
D: "Avoid all vaccinations."
},
answer: "B"
},

{
id: "q5",
question: "Which characteristic is most concerning for possible malignancy in a new skin lesion?",
options: {
A: "Stable appearance for many years",
B: "Symmetrical shape with uniform color",
C: "Rapid change in size, shape, or color",
D: "Small size without any changes"
},
answer: "C"
},

/* =========================
   PAGE 2 (q6–q10)
========================= */
{
id: "q6",
question: "Which process involves the abnormal, uncontrolled proliferation of cells?",
options: {
A: "Neoplasia",
B: "Hemostasis",
C: "Osmosis",
D: "Phagocytosis"
},
answer: "A"
},

{
id: "q7",
question: "A client asks why cancer staging is performed. Which response is best?",
options: {
A: "It determines the client's exact pain level.",
B: "It describes the extent of cancer and helps guide treatment.",
C: "It identifies the client's blood type.",
D: "It eliminates the need for diagnostic testing."
},
answer: "B"
},

{
id: "q8",
question: "Which diagnostic procedure involves removing a sample of tissue for microscopic examination?",
options: {
A: "Biopsy",
B: "Electrocardiogram",
C: "Spirometry",
D: "Urinalysis"
},
answer: "A"
},

{
id: "q9",
question: "Which statement about cancer grading is correct?",
options: {
A: "Grading describes the degree of abnormality of tumor cells.",
B: "Grading identifies the client's blood pressure.",
C: "Grading measures only tumor size.",
D: "Grading determines the client's hydration status."
},
answer: "A"
},

{
id: "q10",
question: "A client is scheduled for a biopsy. Which nursing action is most appropriate before the procedure?",
options: {
A: "Explain the procedure and verify informed consent according to policy.",
B: "Tell the client that the procedure will not cause discomfort.",
C: "Withhold all medications indefinitely.",
D: "Tell the client that cancer is already confirmed."
},
answer: "A"
},

/* =========================
   PAGE 3 (q11–q15)
========================= */
{
id: "q11",
question: "Which laboratory finding is particularly important to monitor in a client receiving myelosuppressive chemotherapy?",
options: {
A: "Complete blood count",
B: "Visual acuity",
C: "Hearing assessment only",
D: "Serum cholesterol only"
},
answer: "A"
},

{
id: "q12",
question: "A client receiving chemotherapy has a markedly decreased absolute neutrophil count. Which complication is the priority concern?",
options: {
A: "Constipation",
B: "Infection",
C: "Weight gain",
D: "Hyperactivity"
},
answer: "B"
},

{
id: "q13",
question: "Which finding in a neutropenic client requires immediate follow-up?",
options: {
A: "Temperature of 38.3°C (100.9°F)",
B: "Mild fatigue",
C: "Decreased appetite",
D: "Hair loss"
},
answer: "A"
},

{
id: "q14",
question: "Which nursing intervention is appropriate for a client with significant neutropenia?",
options: {
A: "Encourage exposure to visitors with respiratory infections.",
B: "Use meticulous hand hygiene and infection-prevention measures.",
C: "Place fresh flowers at the bedside.",
D: "Encourage consumption of raw foods without precautions."
},
answer: "B"
},

{
id: "q15",
question: "A client receiving chemotherapy has thrombocytopenia. Which finding should the nurse report promptly?",
options: {
A: "Petechiae and unusual bleeding",
B: "Mild fatigue",
C: "Temporary taste changes",
D: "Hair thinning"
},
answer: "A"
},

/* =========================
   PAGE 4 (q16–q20)
========================= */
{
id: "q16",
question: "Which intervention is appropriate for a client with chemotherapy-induced thrombocytopenia?",
options: {
A: "Use a soft toothbrush and avoid unnecessary trauma.",
B: "Encourage contact sports.",
C: "Administer intramuscular injections routinely.",
D: "Use a hard-bristled toothbrush."
},
answer: "A"
},

{
id: "q17",
question: "A client receiving chemotherapy develops anemia. Which symptom should the nurse expect?",
options: {
A: "Fatigue and decreased activity tolerance",
B: "Severe hypertension",
C: "Increased visual acuity",
D: "Hyperactive bowel sounds"
},
answer: "A"
},

{
id: "q18",
question: "Which nursing intervention is most appropriate for a client experiencing cancer-related fatigue?",
options: {
A: "Plan activities with rest periods.",
B: "Require continuous bed rest.",
C: "Encourage the client to ignore fatigue.",
D: "Schedule all activities at once."
},
answer: "A"
},

{
id: "q19",
question: "A client receiving chemotherapy reports severe oral soreness. Which intervention is appropriate?",
options: {
A: "Encourage gentle oral care with a soft toothbrush.",
B: "Use alcohol-based mouthwash frequently.",
C: "Encourage very spicy foods.",
D: "Use a hard-bristled toothbrush."
},
answer: "A"
},

{
id: "q20",
question: "Which chemotherapy adverse effect should the nurse anticipate and monitor for in many treatment regimens?",
options: {
A: "Nausea and vomiting",
B: "Permanent increased appetite in every client",
C: "Improved immune function",
D: "Increased platelet production"
},
answer: "A"
},

/* =========================
   PAGE 5 (q21–q25)
========================= */
{
id: "q21",
question: "A client receiving chemotherapy develops nausea. Which nursing intervention may help reduce symptoms?",
options: {
A: "Provide prescribed antiemetics and offer small, tolerable meals.",
B: "Encourage large meals immediately after treatment.",
C: "Withhold all fluids.",
D: "Encourage strong odors around the client."
},
answer: "A"
},

{
id: "q22",
question: "Which nutritional intervention is appropriate for a client with cancer who has poor appetite?",
options: {
A: "Offer small, nutrient-dense meals and snacks as tolerated.",
B: "Limit all protein.",
C: "Require three very large meals.",
D: "Avoid oral supplements in all cases."
},
answer: "A"
},

{
id: "q23",
question: "A client receiving chemotherapy reports a metallic taste. Which nursing response is appropriate?",
options: {
A: "Acknowledge that taste changes can occur and discuss food preferences and alternatives.",
B: "Tell the client that the symptom indicates treatment failure.",
C: "Instruct the client to stop eating.",
D: "Tell the client that taste changes cannot occur with chemotherapy."
},
answer: "A"
},

{
id: "q24",
question: "Which finding may indicate dehydration in a client undergoing cancer treatment?",
options: {
A: "Moist mucous membranes",
B: "Dark, concentrated urine and dizziness",
C: "Stable weight and normal intake",
D: "Clear urine with adequate output"
},
answer: "B"
},

{
id: "q25",
question: "A client with cancer has persistent vomiting. Which assessment is most important?",
options: {
A: "Fluid and electrolyte status",
B: "Hair growth pattern",
C: "Visual acuity only",
D: "Nail length"
},
answer: "A"
},

/* =========================
   PAGE 6 (q26–q30)
========================= */
{
id: "q26",
question: "Which adverse effect is commonly associated with some chemotherapy agents?",
options: {
A: "Alopecia",
B: "Improved hair growth",
C: "Permanent increase in immunity",
D: "Increased platelet production"
},
answer: "A"
},

{
id: "q27",
question: "A client asks whether hair loss from chemotherapy is permanent. Which response is best?",
options: {
A: "Hair loss is always permanent.",
B: "Hair loss never occurs with chemotherapy.",
C: "Hair may regrow after treatment, depending on the medication and individual response.",
D: "Hair loss means the cancer has metastasized."
},
answer: "C"
},

{
id: "q28",
question: "Which teaching is appropriate for a client experiencing chemotherapy-induced alopecia?",
options: {
A: "Protect the scalp from excessive sun and cold exposure.",
B: "Scrub the scalp vigorously.",
C: "Apply harsh chemicals to stimulate growth.",
D: "Avoid all head coverings."
},
answer: "A"
},

{
id: "q29",
question: "A client receiving chemotherapy develops diarrhea. Which complication should the nurse monitor for?",
options: {
A: "Fluid and electrolyte imbalance",
B: "Hypervolemia in every case",
C: "Improved nutritional status",
D: "Increased bone density"
},
answer: "A"
},

{
id: "q30",
question: "Which intervention is appropriate for a client with chemotherapy-induced diarrhea?",
options: {
A: "Monitor intake, output, hydration, and electrolyte status.",
B: "Encourage unlimited caffeine.",
C: "Ignore stool frequency.",
D: "Restrict all fluids."
},
answer: "A"
},

/* =========================
   PAGE 7 (q31–q35)
========================= */
{
id: "q31",
question: "A client receiving chemotherapy develops severe mucositis. Which food choice may be best tolerated?",
options: {
A: "Soft, cool, non-irritating foods",
B: "Very spicy foods",
C: "Hard crackers",
D: "Acidic citrus foods"
},
answer: "A"
},

{
id: "q32",
question: "Which finding may indicate chemotherapy-related peripheral neuropathy?",
options: {
A: "Numbness or tingling of the hands and feet",
B: "Improved sensation",
C: "Increased visual acuity",
D: "Decreased hair loss"
},
answer: "A"
},

{
id: "q33",
question: "A client receiving a neurotoxic chemotherapy medication reports new difficulty walking. What should the nurse do?",
options: {
A: "Document it as expected and take no action.",
B: "Assess the symptom and notify the healthcare provider as appropriate.",
C: "Encourage the client to walk without assistance.",
D: "Tell the client to stop all medications independently."
},
answer: "B"
},

{
id: "q34",
question: "Which safety intervention is appropriate for a client with chemotherapy-induced peripheral neuropathy?",
options: {
A: "Assess fall risk and provide appropriate safety measures.",
B: "Encourage walking barefoot.",
C: "Use heating pads at the highest setting.",
D: "Avoid assessing sensation."
},
answer: "A"
},

{
id: "q35",
question: "Which chemotherapy complication can result from rapid destruction of tumor cells?",
options: {
A: "Tumor lysis syndrome",
B: "Chronic hypertension only",
C: "Iron-deficiency anemia only",
D: "Osteoporosis only"
},
answer: "A"
},

/* =========================
   PAGE 8 (q36–q40)
========================= */
{
id: "q36",
question: "Which laboratory abnormality may occur with tumor lysis syndrome?",
options: {
A: "Hyperuricemia",
B: "Hypouricemia",
C: "Severe hypophosphatemia only",
D: "Persistent hypokalemia only"
},
answer: "A"
},

{
id: "q37",
question: "A client at high risk for tumor lysis syndrome is beginning chemotherapy. Which nursing action is important?",
options: {
A: "Monitor renal function and relevant electrolytes closely.",
B: "Restrict all fluids.",
C: "Avoid laboratory monitoring.",
D: "Encourage high-potassium supplements without an order."
},
answer: "A"
},

{
id: "q38",
question: "Which electrolyte abnormality is associated with tumor lysis syndrome?",
options: {
A: "Hypokalemia",
B: "Hyperkalemia",
C: "Hypophosphatemia",
D: "Hypercalcemia"
},
answer: "B"
},

{
id: "q39",
question: "Which intervention helps reduce the risk of kidney complications associated with tumor lysis syndrome when prescribed?",
options: {
A: "Adequate hydration and appropriate monitoring",
B: "Severe fluid restriction",
C: "Avoiding all urine output measurements",
D: "Increasing dietary potassium"
},
answer: "A"
},

{
id: "q40",
question: "A client receiving chemotherapy has an elevated uric acid level and decreased urine output. What should the nurse do?",
options: {
A: "Report the findings promptly and assess renal status.",
B: "Encourage the client to ignore the symptoms.",
C: "Administer potassium without an order.",
D: "Restrict all fluids regardless of the treatment plan."
},
answer: "A"
},

/* =========================
   PAGE 9 (q41–q45)
========================= */
{
id: "q41",
question: "A nurse is preparing to administer an antineoplastic medication. Which action is essential?",
options: {
A: "Follow hazardous-drug handling precautions and institutional policy.",
B: "Handle the medication with bare hands.",
C: "Place the medication on the patient's meal tray.",
D: "Dispose of supplies in regular household waste."
},
answer: "A"
},

{
id: "q42",
question: "Which personal protective equipment is appropriate when handling many hazardous antineoplastic medications?",
options: {
A: "No PPE is required.",
B: "Appropriate chemotherapy-rated gloves and protective equipment according to policy.",
C: "Only a cloth hat.",
D: "Only shoe covers."
},
answer: "B"
},

{
id: "q43",
question: "A chemotherapy medication infiltrates into surrounding tissue. What is the nurse's priority action?",
options: {
A: "Stop the infusion while following the facility extravasation protocol.",
B: "Flush the medication rapidly through the tissue.",
C: "Continue the infusion until the bag is empty.",
D: "Massage the affected area immediately."
},
answer: "A"
},

{
id: "q44",
question: "Which finding may indicate chemotherapy extravasation?",
options: {
A: "Pain, burning, swelling, or redness at the IV site",
B: "Improved blood return",
C: "Normal painless infusion",
D: "Clear urine"
},
answer: "A"
},

{
id: "q45",
question: "When administering vesicant chemotherapy through an IV, which assessment is especially important?",
options: {
A: "IV site condition and patency",
B: "Hair length",
C: "Visual acuity only",
D: "Bowel sounds once per shift only"
},
answer: "A"
},

/* =========================
   PAGE 10 (q46–q50)
========================= */
{
id: "q46",
question: "Which statement about radiation therapy is correct?",
options: {
A: "It can be used to destroy or control cancer cells in a targeted area.",
B: "It always treats the entire body equally.",
C: "It is used only for benign tumors.",
D: "It never causes local tissue effects."
},
answer: "A"
},

{
id: "q47",
question: "A client receiving external-beam radiation therapy develops skin irritation in the treatment field. Which teaching is appropriate?",
options: {
A: "Follow the radiation team's instructions for gentle skin care.",
B: "Scrub the treatment area vigorously.",
C: "Apply unapproved creams immediately before every treatment.",
D: "Expose the area to excessive sunlight."
},
answer: "A"
},

{
id: "q48",
question: "Which nursing intervention is appropriate for a client receiving external-beam radiation therapy?",
options: {
A: "Avoid unnecessary friction and protect the treated skin as instructed.",
B: "Use abrasive soaps on the treatment field.",
C: "Apply heating pads directly to the treatment area.",
D: "Scratch irritated skin."
},
answer: "A"
},

{
id: "q49",
question: "A client receiving radiation therapy reports fatigue. Which response is most appropriate?",
options: {
A: "Fatigue can occur; balance activity with planned rest.",
B: "Fatigue indicates treatment failure.",
C: "Remain completely inactive throughout treatment.",
D: "Increase strenuous exercise regardless of symptoms."
},
answer: "A"
},

{
id: "q50",
question: "A client receiving internal radiation therapy asks why visitor restrictions may be necessary. Which explanation is best?",
options: {
A: "They help reduce unnecessary radiation exposure to others.",
B: "The client becomes infectious because of radiation.",
C: "The treatment permanently changes the client's personality.",
D: "Visitors increase the cancer growth rate."
},
answer: "A"
},

/* =========================
   PAGE 11 (q51–q55)
========================= */
{
id: "q51",
question: "A nurse is caring for a client with a temporary internal radiation implant. Which principle is important?",
options: {
A: "Minimize time near the source, maximize distance, and use shielding as appropriate.",
B: "Remain at the bedside continuously.",
C: "Remove the implant without authorization.",
D: "Allow unrestricted visitors."
},
answer: "A"
},

{
id: "q52",
question: "Which action is appropriate if a temporary radiation source becomes displaced?",
options: {
A: "Follow emergency radiation-safety procedures and notify the appropriate team.",
B: "Pick it up with bare hands.",
C: "Return it to the client manually.",
D: "Place it in regular trash."
},
answer: "A"
},

{
id: "q53",
question: "A client undergoing cancer treatment reports new severe pain. What should the nurse do first?",
options: {
A: "Assess the pain and investigate possible causes.",
B: "Assume the pain is unavoidable.",
C: "Tell the client to tolerate it.",
D: "Avoid documenting the complaint."
},
answer: "A"
},

{
id: "q54",
question: "Which principle is important when managing cancer-related pain?",
options: {
A: "Use an individualized pain-management plan and reassess response.",
B: "Wait until pain becomes unbearable before treating it.",
C: "Avoid nonpharmacologic interventions.",
D: "Use the same treatment for every client."
},
answer: "A"
},

{
id: "q55",
question: "A client receiving opioid analgesia for cancer pain becomes difficult to arouse and has slow respirations. What is the priority?",
options: {
A: "Assess airway and breathing and initiate appropriate emergency measures.",
B: "Administer the next opioid dose.",
C: "Encourage the client to sleep without assessment.",
D: "Increase the opioid dose."
},
answer: "A"
},

/* =========================
   PAGE 12 (q56–q60)
========================= */
{
id: "q56",
question: "Which nonpharmacologic intervention may complement cancer pain management?",
options: {
A: "Relaxation techniques and guided imagery",
B: "Ignoring the pain",
C: "Withholding communication",
D: "Prolonged sleep deprivation"
},
answer: "A"
},

{
id: "q57",
question: "A client with advanced cancer reports pain of 8/10. Which nursing action is appropriate?",
options: {
A: "Assess the pain characteristics and administer prescribed analgesia.",
B: "Tell the client that severe pain is expected.",
C: "Wait until the next scheduled appointment.",
D: "Avoid reassessment."
},
answer: "A"
},

{
id: "q58",
question: "Which finding may suggest opioid-related constipation in a client receiving cancer pain therapy?",
options: {
A: "Decreased bowel frequency and hard stools",
B: "Frequent loose stools",
C: "Increased bowel sounds with diarrhea",
D: "Increased appetite"
},
answer: "A"
},

{
id: "q59",
question: "Which intervention is commonly included in a bowel regimen for a client receiving long-term opioid therapy, when appropriate?",
options: {
A: "Preventive measures such as prescribed laxatives, hydration, and activity as tolerated",
B: "Complete fluid restriction",
C: "Avoiding all fiber regardless of condition",
D: "Stopping opioids independently"
},
answer: "A"
},

{
id: "q60",
question: "A client with cancer has bone metastases. Which complication should the nurse monitor for?",
options: {
A: "Pathologic fracture and hypercalcemia",
B: "Improved bone strength",
C: "Permanent hypoglycemia",
D: "Increased platelet production"
},
answer: "A"
},

/* =========================
   PAGE 13 (q61–q65)
========================= */
{
id: "q61",
question: "A client with known bone metastases reports sudden severe back pain and leg weakness. What is the nurse's priority?",
options: {
A: "Encourage independent ambulation.",
B: "Assess for possible spinal cord compression and notify the healthcare team promptly.",
C: "Apply vigorous massage.",
D: "Tell the client to wait until the next visit."
},
answer: "B"
},

{
id: "q62",
question: "Which finding may occur with hypercalcemia related to malignancy?",
options: {
A: "Constipation and weakness",
B: "Tetany",
C: "Positive Trousseau sign",
D: "Severe carpopedal spasm"
},
answer: "A"
},

{
id: "q63",
question: "A client with cancer develops confusion, weakness, and constipation. The serum calcium is markedly elevated. Which action is appropriate?",
options: {
A: "Notify the healthcare provider and monitor hydration and cardiac status as indicated.",
B: "Encourage calcium supplements.",
C: "Restrict all fluids.",
D: "Ignore the laboratory result."
},
answer: "A"
},

{
id: "q64",
question: "Which cancer is commonly associated with superior vena cava syndrome?",
options: {
A: "Lung cancer",
B: "Basal cell skin cancer only",
C: "Localized colon polyps",
D: "Benign uterine fibroids"
},
answer: "A"
},

{
id: "q65",
question: "Which finding should raise concern for superior vena cava syndrome?",
options: {
A: "Facial and upper-extremity swelling with venous distention",
B: "Isolated ankle itching",
C: "Increased appetite",
D: "Improved oxygenation"
},
answer: "A"
},

/* =========================
   PAGE 14 (q66–q70)
========================= */
{
id: "q66",
question: "A client with suspected superior vena cava syndrome develops increasing respiratory distress. What is the nurse's priority?",
options: {
A: "Assess airway and breathing and notify the healthcare team promptly.",
B: "Place the client flat.",
C: "Encourage vigorous exercise.",
D: "Offer a large meal."
},
answer: "A"
},

{
id: "q67",
question: "A client with advanced cancer develops new confusion and severe headache. Which complication should the nurse consider?",
options: {
A: "Possible intracranial involvement or another acute cause requiring assessment",
B: "Normal aging only",
C: "Improved neurological function",
D: "Expected response to every cancer treatment"
},
answer: "A"
},

{
id: "q68",
question: "Which nursing intervention is appropriate for a client with cancer-related cachexia?",
options: {
A: "Focus on individualized nutritional goals and symptom management.",
B: "Force large meals.",
C: "Restrict protein in every case.",
D: "Ignore appetite changes."
},
answer: "A"
},

{
id: "q69",
question: "A client with advanced cancer has severe fatigue and poor appetite. Which nursing goal is most appropriate?",
options: {
A: "Promote comfort, adequate nutrition as tolerated, and quality of life.",
B: "Require maximal physical activity.",
C: "Eliminate all rest periods.",
D: "Force food intake regardless of preferences."
},
answer: "A"
},

{
id: "q70",
question: "Which assessment is particularly important for a client receiving systemic cancer therapy?",
options: {
A: "Monitor for treatment-related toxicities and changes in organ function.",
B: "Assess only body temperature once per month.",
C: "Ignore laboratory results.",
D: "Avoid reviewing medications."
},
answer: "A"
},

/* =========================
   PAGE 15 (q71–q75)
========================= */
{
id: "q71",
question: "A client receiving chemotherapy has an absolute neutrophil count of 400/mm³. Which nursing action is most appropriate?",
options: {
A: "Implement appropriate infection-prevention measures and monitor closely for fever.",
B: "Encourage contact with sick visitors.",
C: "Place fresh flowers in the room.",
D: "Avoid hand hygiene to reduce skin irritation."
},
answer: "A"
},

{
id: "q72",
question: "Which statement by a neutropenic client indicates a need for further teaching?",
options: {
A: "I will report a fever promptly.",
B: "I will practice careful hand hygiene.",
C: "I can share food and drinks with anyone who visits.",
D: "I will follow food-safety recommendations."
},
answer: "C"
},

{
id: "q73",
question: "A client undergoing chemotherapy asks why infection can become serious so quickly. Which explanation is best?",
options: {
A: "Chemotherapy can reduce white blood cells needed for immune defense.",
B: "Chemotherapy always increases white blood cells.",
C: "Cancer eliminates all bacteria from the body.",
D: "Infections cannot occur during chemotherapy."
},
answer: "A"
},

{
id: "q74",
question: "Which finding in a client receiving myelosuppressive therapy is most concerning?",
options: {
A: "Temperature of 38.1°C (100.6°F)",
B: "Mild taste changes",
C: "Temporary hair thinning",
D: "Mild fatigue after activity"
},
answer: "A"
},

{
id: "q75",
question: "A client with thrombocytopenia asks how to reduce bleeding risk. Which teaching is appropriate?",
options: {
A: "Avoid unnecessary trauma and follow prescribed precautions.",
B: "Use a razor blade for shaving.",
C: "Participate in contact sports.",
D: "Take aspirin without discussing it with the healthcare team."
},
answer: "A"
},

/* =========================
   PAGE 16 (q76–q80)
========================= */
{
id: "q76",
question: "Which assessment finding is most consistent with anemia during cancer treatment?",
options: {
A: "Fatigue, pallor, and shortness of breath with activity",
B: "Bounding pulse with hypertension",
C: "Increased energy",
D: "Improved exercise tolerance"
},
answer: "A"
},

{
id: "q77",
question: "A client with cancer has hemoglobin of 7.2 g/dL and reports dyspnea at rest. What should the nurse do?",
options: {
A: "Notify the healthcare provider promptly and assess the client's respiratory and cardiovascular status.",
B: "Encourage strenuous exercise.",
C: "Ignore the laboratory value.",
D: "Tell the client to increase activity."
},
answer: "A"
},

{
id: "q78",
question: "Which client should the oncology nurse assess first?",
options: {
A: "Client with mild chemotherapy-related fatigue",
B: "Client with new fever during severe neutropenia",
C: "Client with mild hair loss",
D: "Client with altered taste after chemotherapy"
},
answer: "B"
},

{
id: "q79",
question: "A client receiving chemotherapy reports burning at the IV site and swelling. Which action is the priority?",
options: {
A: "Stop the infusion and follow the extravasation protocol.",
B: "Increase the infusion rate.",
C: "Flush the IV forcefully.",
D: "Apply pressure and continue the infusion."
},
answer: "A"
},

{
id: "q80",
question: "Which statement about chemotherapy precautions is correct?",
options: {
A: "Handling precautions depend on the medication and should follow hazardous-drug policies.",
B: "All chemotherapy medications can be handled without gloves.",
C: "Chemotherapy waste belongs in ordinary trash.",
D: "PPE is never necessary."
},
answer: "A"
},

/* =========================
   PAGE 17 (q81–q85)
========================= */
{
id: "q81",
question: "A client receiving radiation therapy develops severe skin breakdown in the treatment field. What should the nurse do?",
options: {
A: "Assess the area and notify the radiation oncology team for appropriate management.",
B: "Apply any available cream without checking.",
C: "Scrub the area vigorously.",
D: "Expose the area to sunlight."
},
answer: "A"
},

{
id: "q82",
question: "Which instruction is appropriate for a client receiving radiation therapy to the head and neck?",
options: {
A: "Follow prescribed oral-care measures and report difficulty swallowing or severe mouth changes.",
B: "Use strong alcohol-based mouthwash frequently.",
C: "Ignore oral pain.",
D: "Stop drinking fluids."
},
answer: "A"
},

{
id: "q83",
question: "A client receiving radiation therapy has difficulty swallowing. Which nursing assessment is most important?",
options: {
A: "Nutritional and hydration status",
B: "Hair color",
C: "Nail length",
D: "Visual acuity only"
},
answer: "A"
},

{
id: "q84",
question: "Which intervention may help a client experiencing cancer-related fatigue?",
options: {
A: "Prioritize essential activities and schedule rest periods.",
B: "Avoid all rest.",
C: "Schedule strenuous activities during periods of greatest fatigue.",
D: "Require continuous bed rest."
},
answer: "A"
},

{
id: "q85",
question: "A client asks about the purpose of palliative care. Which response is best?",
options: {
A: "It focuses on symptom relief and quality of life and can be provided alongside disease-directed treatment.",
B: "It is only for the final hours of life.",
C: "It means all cancer treatment must stop.",
D: "It is only used when pain is absent."
},
answer: "A"
},

/* =========================
   PAGE 18 (q86–q90)
========================= */
{
id: "q86",
question: "Which statement best describes hospice care?",
options: {
A: "It focuses primarily on comfort and quality of life when curative treatment is no longer the goal.",
B: "It always requires hospitalization.",
C: "It is designed to cure all cancers.",
D: "It excludes family support."
},
answer: "A"
},

{
id: "q87",
question: "A client with advanced cancer asks about advance care planning. What should the nurse do?",
options: {
A: "Provide information and encourage discussion of the client's goals and preferences.",
B: "Tell the client not to discuss future care.",
C: "Choose treatment decisions for the client.",
D: "Tell the family to make all decisions regardless of the client's wishes."
},
answer: "A"
},

{
id: "q88",
question: "Which ethical principle supports a competent client's right to make informed decisions about cancer treatment?",
options: {
A: "Autonomy",
B: "Nonmaleficence only",
C: "Justice only",
D: "Fidelity only"
},
answer: "A"
},

{
id: "q89",
question: "A client refuses a recommended cancer treatment after receiving appropriate information. What should the nurse do?",
options: {
A: "Respect the client's informed decision and communicate concerns to the healthcare team.",
B: "Force the treatment.",
C: "Threaten the client.",
D: "Hide the treatment in food."
},
answer: "A"
},

{
id: "q90",
question: "Which nursing approach is most appropriate when discussing prognosis with a client who has cancer?",
options: {
A: "Provide honest, compassionate communication within the nurse's scope and refer questions appropriately.",
B: "Give false reassurance.",
C: "Avoid all discussion of prognosis.",
D: "Guarantee the outcome."
},
answer: "A"
},

/* =========================
   PAGE 19 (q91–q95)
========================= */
{
id: "q91",
question: "A client with cancer is experiencing anxiety before treatment. Which intervention is appropriate?",
options: {
A: "Provide clear information, encourage questions, and use therapeutic communication.",
B: "Avoid discussing concerns.",
C: "Tell the client not to express emotions.",
D: "Provide unrealistic reassurance."
},
answer: "A"
},

{
id: "q92",
question: "Which statement by a family member indicates an appropriate understanding of therapeutic communication?",
options: {
A: "I will listen and allow the client to express feelings without immediately giving advice.",
B: "I should tell the client to stay positive at all times.",
C: "I should avoid discussing difficult emotions.",
D: "I should make all decisions for the client."
},
answer: "A"
},

{
id: "q93",
question: "A client says, 'I am afraid of what will happen.' Which response is therapeutic?",
options: {
A: "You should not think about that.",
B: "Everything will definitely be fine.",
C: "Tell me more about what concerns you most.",
D: "Your family should answer that question."
},
answer: "C"
},

{
id: "q94",
question: "Which psychosocial issue may occur in clients receiving cancer treatment?",
options: {
A: "Body-image concerns and altered self-concept",
B: "Guaranteed improved self-esteem",
C: "Absence of emotional responses",
D: "Permanent absence of anxiety"
},
answer: "A"
},

{
id: "q95",
question: "A client experiencing hair loss says, 'I don't recognize myself anymore.' Which response is best?",
options: {
A: "Your feelings are understandable. What changes have been hardest for you?",
B: "Hair loss is not important.",
C: "You should simply ignore it.",
D: "Everyone experiences the same thing."
},
answer: "A"
},

/* =========================
   PAGE 20 (q96–q100)
========================= */
{
id: "q96",
question: "A client receiving chemotherapy has a platelet count of 18,000/mm³. Which finding requires immediate attention?",
options: {
A: "Mild fatigue",
B: "Active bleeding",
C: "Mild taste changes",
D: "Hair loss"
},
answer: "B"
},

{
id: "q97",
question: "Which intervention is appropriate for severe chemotherapy-induced thrombocytopenia?",
options: {
A: "Use bleeding precautions and monitor for signs of hemorrhage.",
B: "Encourage contact sports.",
C: "Use intramuscular injections routinely.",
D: "Administer aspirin routinely."
},
answer: "A"
},

{
id: "q98",
question: "A client with neutropenia develops a temperature of 38.5°C (101.3°F). Which action is most appropriate?",
options: {
A: "Wait until the next scheduled appointment.",
B: "Notify the healthcare team promptly and follow the facility's febrile-neutropenia protocol.",
C: "Give the client raw foods.",
D: "Encourage visitors with colds."
},
answer: "B"
},

{
id: "q99",
question: "Which finding may indicate sepsis in a high-risk oncology client?",
options: {
A: "New confusion, hypotension, and abnormal temperature",
B: "Stable vital signs",
C: "Improved appetite",
D: "Normal activity tolerance"
},
answer: "A"
},

{
id: "q100",
question: "A client receiving chemotherapy has chills, hypotension, and altered mental status. What should the nurse do first?",
options: {
A: "Recognize possible sepsis and initiate urgent assessment and emergency management.",
B: "Wait for the next routine vital signs.",
C: "Encourage the client to ambulate.",
D: "Offer a large meal."
},
answer: "A"
},

/* =========================
   PAGE 21 (q101–q105)
========================= */
{
id: "q101",
question: "A client with cancer is receiving a medication known to cause cardiotoxicity. Which assessment is particularly important?",
options: {
A: "Cardiovascular assessment and appropriate cardiac monitoring",
B: "Hair length",
C: "Visual acuity only",
D: "Skin color once per month"
},
answer: "A"
},

{
id: "q102",
question: "A client receiving potentially nephrotoxic cancer therapy has a rising serum creatinine. What should the nurse do?",
options: {
A: "Report the change and assess renal function and fluid status.",
B: "Ignore the laboratory result.",
C: "Encourage nephrotoxic medications.",
D: "Stop all medications independently."
},
answer: "A"
},

{
id: "q103",
question: "Which nursing assessment is important before administering a potentially hepatotoxic cancer medication?",
options: {
A: "Review liver function tests and relevant clinical findings.",
B: "Measure shoe size.",
C: "Assess hair texture only.",
D: "Ignore medication history."
},
answer: "A"
},

{
id: "q104",
question: "A client receiving immunotherapy develops new shortness of breath. What should the nurse do?",
options: {
A: "Assess promptly because immune-related adverse effects can affect organs such as the lungs.",
B: "Assume it is unrelated to treatment.",
C: "Tell the client to wait several weeks.",
D: "Encourage strenuous exercise."
},
answer: "A"
},

{
id: "q105",
question: "Which statement about targeted cancer therapy is correct?",
options: {
A: "It is designed to act on specific molecular or cellular targets involved in cancer.",
B: "It affects every cell in exactly the same way.",
C: "It can never cause adverse effects.",
D: "It is used only for infections."
},
answer: "A"
},

/* =========================
   PAGE 22 (q106–q110)
========================= */
{
id: "q106",
question: "A client receiving immunotherapy develops persistent diarrhea. What should the nurse do?",
options: {
A: "Assess the severity and notify the healthcare team because immune-related gastrointestinal toxicity may occur.",
B: "Assume the diarrhea is always harmless.",
C: "Tell the client to stop drinking fluids.",
D: "Encourage dehydration."
},
answer: "A"
},

{
id: "q107",
question: "A client receiving immunotherapy develops a new widespread rash. Which action is appropriate?",
options: {
A: "Assess the rash and report significant or worsening symptoms according to treatment protocols.",
B: "Tell the client that skin reactions are impossible.",
C: "Apply any medication without an order.",
D: "Ignore the finding."
},
answer: "A"
},

{
id: "q108",
question: "Which client statement demonstrates correct understanding of oral chemotherapy?",
options: {
A: "I will take the medication exactly as prescribed and follow handling instructions.",
B: "I can double the dose if I miss one.",
C: "I can share the medication with family members.",
D: "I do not need to report adverse effects."
},
answer: "A"
},

{
id: "q109",
question: "A client taking oral antineoplastic therapy reports accidentally missing a dose. Which response is most appropriate?",
options: {
A: "Take two doses immediately.",
B: "Follow the medication-specific missed-dose instructions or contact the oncology team.",
C: "Stop treatment permanently.",
D: "Give the missed dose to another person."
},
answer: "B"
},

{
id: "q110",
question: "Which intervention helps promote medication adherence during complex cancer treatment?",
options: {
A: "Use a clear medication schedule and encourage the client to report barriers.",
B: "Tell the client to rely only on memory.",
C: "Avoid reviewing medications.",
D: "Change doses independently."
},
answer: "A"
},

/* =========================
   PAGE 23 (q111–q115)
========================= */
{
id: "q111",
question: "A client with cancer reports new unilateral leg swelling and pain. Which complication should the nurse consider?",
options: {
A: "Venous thromboembolism",
B: "Improved circulation",
C: "Hypoglycemia",
D: "Normal chemotherapy response"
},
answer: "A"
},

{
id: "q112",
question: "A client with cancer suddenly develops chest pain and shortness of breath. What is the priority?",
options: {
A: "Assess for possible pulmonary embolism and initiate urgent evaluation.",
B: "Encourage the client to walk.",
C: "Wait for the next routine assessment.",
D: "Offer a large meal."
},
answer: "A"
},

{
id: "q113",
question: "Which nursing intervention can reduce venous thromboembolism risk when appropriate for an oncology client?",
options: {
A: "Encourage mobility as tolerated and follow prescribed prophylaxis.",
B: "Maintain complete immobility.",
C: "Avoid all hydration.",
D: "Massage a painful swollen leg."
},
answer: "A"
},

{
id: "q114",
question: "A client with cancer has a central venous catheter. Which finding requires prompt assessment?",
options: {
A: "Redness, drainage, or tenderness at the catheter site",
B: "Clean, dry dressing",
C: "No swelling",
D: "Normal catheter function"
},
answer: "A"
},

{
id: "q115",
question: "Which intervention helps reduce central-line infection risk?",
options: {
A: "Use meticulous aseptic technique during catheter care.",
B: "Touch sterile catheter connections with bare hands.",
C: "Reuse contaminated supplies.",
D: "Ignore dressing changes."
},
answer: "A"
},

/* =========================
   PAGE 24 (q116–q120)
========================= */
{
id: "q116",
question: "A client receiving chemotherapy develops fever, severe weakness, and decreased urine output. Which problem should the nurse prioritize?",
options: {
A: "Possible serious infection with systemic complications",
B: "Mild treatment-related fatigue",
C: "Normal hair loss",
D: "Expected taste change"
},
answer: "A"
},

{
id: "q117",
question: "A client with cancer has severe mucositis and cannot maintain adequate oral intake. Which problem should the nurse prioritize?",
options: {
A: "Risk for inadequate nutrition and fluid imbalance",
B: "Improved nutritional status",
C: "Increased immune function",
D: "Excessive bone growth"
},
answer: "A"
},

{
id: "q118",
question: "The nurse receives reports on four oncology clients. Which client should be assessed first?",
options: {
A: "Client with mild alopecia",
B: "Client with new fever and severe neutropenia",
C: "Client with mild taste changes",
D: "Client with mild fatigue after walking"
},
answer: "B"
},

{
id: "q119",
question: "A client receiving cancer therapy develops confusion, muscle weakness, and an abnormal cardiac rhythm shortly after treatment begins. Which complication should the nurse consider?",
options: {
A: "Tumor lysis syndrome with electrolyte abnormalities",
B: "Normal treatment response",
C: "Mild alopecia",
D: "Simple taste alteration"
},
answer: "A"
},

{
id: "q120",
question: "A client with advanced cancer has worsening pain, nausea, fatigue, and anxiety. Which nursing approach best reflects comprehensive oncology care?",
options: {
A: "Focus only on the tumor size.",
B: "Address physical symptoms, emotional needs, goals of care, and quality of life.",
C: "Avoid discussing symptoms.",
D: "Provide treatment without considering the client's preferences."
},
answer: "B"
}
];
