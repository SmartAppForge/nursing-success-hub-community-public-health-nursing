const QUESTIONS = [
/* =========================
   PAGE 1 (q1–q5)
========================= */
{
id: "q1",
question: "A nurse is assessing a client who may be experiencing fluid volume deficit. Which finding is most concerning?",
options: {
A: "Blood pressure of 118/76 mmHg",
B: "Urine output of 20 mL/hr",
C: "Moist oral mucosa",
D: "Weight gain of 0.5 kg"
},
answer: "B"
},

{
id: "q2",
question: "Which assessment finding is most consistent with fluid volume excess?",
options: {
A: "Flat neck veins",
B: "Poor skin turgor",
C: "Bilateral dependent edema",
D: "Concentrated urine"
},
answer: "C"
},

{
id: "q3",
question: "A client has had persistent vomiting for 2 days. Which acid-base imbalance is the client most at risk for developing?",
options: {
A: "Respiratory acidosis",
B: "Metabolic alkalosis",
C: "Respiratory alkalosis",
D: "Metabolic acidosis"
},
answer: "B"
},

{
id: "q4",
question: "Which laboratory value should the nurse recognize as within the expected range for serum sodium?",
options: {
A: "140 mEq/L",
B: "118 mEq/L",
C: "128 mEq/L",
D: "160 mEq/L"
},
answer: "A"
},

{
id: "q5",
question: "A client with severe diarrhea is at greatest risk for which acid-base disturbance?",
options: {
A: "Metabolic alkalosis",
B: "Respiratory alkalosis",
C: "Metabolic acidosis",
D: "Respiratory acidosis"
},
answer: "C"
},

/* =========================
   PAGE 2 (q6–q10)
========================= */
{
id: "q6",
question: "Which finding would the nurse expect in a client with hypernatremia?",
options: {
A: "Increased thirst",
B: "Absent thirst",
C: "Bradycardia",
D: "Hyporeflexia"
},
answer: "A"
},

{
id: "q7",
question: "A client has a serum potassium level of 2.8 mEq/L. Which finding requires immediate attention?",
options: {
A: "Mild nausea",
B: "Muscle weakness",
C: "Irregular cardiac rhythm",
D: "Increased thirst"
},
answer: "C"
},

{
id: "q8",
question: "Which client is at greatest risk for hyperkalemia?",
options: {
A: "A client receiving a potassium-wasting diuretic",
B: "A client with prolonged nasogastric suction",
C: "A client with severe renal impairment",
D: "A client with frequent diarrhea"
},
answer: "C"
},

{
id: "q9",
question: "The nurse is caring for a client with hypocalcemia. Which assessment finding is most characteristic?",
options: {
A: "Decreased neuromuscular excitability",
B: "Positive Trousseau sign",
C: "Flaccid muscles",
D: "Decreased deep tendon reflexes"
},
answer: "B"
},

{
id: "q10",
question: "Which electrolyte is the major intracellular cation?",
options: {
A: "Sodium",
B: "Calcium",
C: "Potassium",
D: "Chloride"
},
answer: "C"
},

/* =========================
   PAGE 3 (q11–q15)
========================= */
{
id: "q11",
question: "Which electrolyte is primarily responsible for maintaining extracellular fluid osmolality?",
options: {
A: "Potassium",
B: "Magnesium",
C: "Phosphate",
D: "Sodium"
},
answer: "D"
},

{
id: "q12",
question: "A client has a serum magnesium level of 1.0 mg/dL. Which finding should the nurse anticipate?",
options: {
A: "Hyperactive deep tendon reflexes",
B: "Respiratory depression",
C: "Severe lethargy",
D: "Bradycardia with absent reflexes"
},
answer: "A"
},

{
id: "q13",
question: "Which finding is most concerning in a client with hypermagnesemia?",
options: {
A: "Mild tremors",
B: "Increased bowel sounds",
C: "Respiratory depression",
D: "Hyperactive reflexes"
},
answer: "C"
},

{
id: "q14",
question: "Which assessment finding is associated with hypophosphatemia?",
options: {
A: "Muscle weakness",
B: "Hypertension",
C: "Bradycardia",
D: "Facial edema"
},
answer: "A"
},

{
id: "q15",
question: "A nurse is monitoring a client receiving IV fluids. Which assessment is the priority for detecting fluid overload?",
options: {
A: "Skin temperature",
B: "Lung sounds",
C: "Pupil size",
D: "Bowel sounds"
},
answer: "B"
},

/* =========================
   PAGE 4 (q16–q20)
========================= */
{
id: "q16",
question: "Which finding best indicates that a client with dehydration is responding to treatment?",
options: {
A: "Urine output increases",
B: "Heart rate increases",
C: "Weight decreases",
D: "Oral mucosa becomes drier"
},
answer: "A"
},

{
id: "q17",
question: "A client has a serum sodium level of 124 mEq/L. Which nursing intervention is appropriate?",
options: {
A: "Initiate seizure precautions as indicated",
B: "Encourage unrestricted free-water intake",
C: "Administer potassium immediately",
D: "Place the client in a high-Fowler position"
},
answer: "A"
},

{
id: "q18",
question: "Which client is most likely to develop hyponatremia?",
options: {
A: "A client with severe water loss",
B: "A client with excessive hypotonic fluid intake",
C: "A client receiving concentrated enteral feeding",
D: "A client with prolonged fever and sweating"
},
answer: "B"
},

{
id: "q19",
question: "A client with hypernatremia is confused and restless. What is the nurse's priority?",
options: {
A: "Encourage vigorous exercise",
B: "Assess neurological status and safety",
C: "Restrict all fluids",
D: "Administer potassium supplements"
},
answer: "B"
},

{
id: "q20",
question: "Which finding is most consistent with hypokalemia?",
options: {
A: "Peaked T waves",
B: "Muscle weakness and dysrhythmias",
C: "Facial twitching",
D: "Hyperactive bowel sounds"
},
answer: "B"
},

/* =========================
   PAGE 5 (q21–q25)
========================= */
{
id: "q21",
question: "Which ECG finding is commonly associated with hyperkalemia?",
options: {
A: "Peaked T waves",
B: "Prominent U waves",
C: "Prolonged QT interval only",
D: "ST elevation in all leads"
},
answer: "A"
},

{
id: "q22",
question: "A client receiving IV potassium reports burning at the IV site. What should the nurse do first?",
options: {
A: "Increase the infusion rate",
B: "Assess the IV site for infiltration or irritation",
C: "Apply a heating pad and continue the infusion",
D: "Flush the IV rapidly"
},
answer: "B"
},

{
id: "q23",
question: "Which prescription should the nurse question for a client with severe hypokalemia?",
options: {
A: "Cardiac monitoring",
B: "Serum potassium recheck",
C: "IV potassium replacement according to protocol",
D: "Rapid IV potassium administration by IV push"
},
answer: "D"
},

{
id: "q24",
question: "Which assessment finding is associated with hypercalcemia?",
options: {
A: "Tetany",
B: "Positive Chvostek sign",
C: "Constipation",
D: "Carpopedal spasm"
},
answer: "C"
},

{
id: "q25",
question: "A client with hypocalcemia develops muscle spasms. Which intervention is most appropriate?",
options: {
A: "Institute seizure precautions and notify the provider as indicated",
B: "Encourage high-sodium foods",
C: "Restrict calcium intake",
D: "Encourage rapid ambulation"
},
answer: "A"
},

/* =========================
   PAGE 6 (q26–q30)
========================= */
{
id: "q26",
question: "Which finding suggests fluid volume deficit rather than fluid volume excess?",
options: {
A: "Crackles",
B: "Jugular venous distention",
C: "Orthostatic hypotension",
D: "Peripheral edema"
},
answer: "C"
},

{
id: "q27",
question: "Which daily weight change is most suggestive of acute fluid retention?",
options: {
A: "0.1 kg decrease",
B: "0.2 kg increase",
C: "1 kg increase in 24 hours",
D: "0.1 kg increase over a week"
},
answer: "C"
},

{
id: "q28",
question: "The nurse is evaluating intake and output. Which finding requires follow-up?",
options: {
A: "Urine output of 45 mL/hr",
B: "Urine output of 10 mL/hr for 3 consecutive hours",
C: "Oral intake of 240 mL",
D: "Urine output of 600 mL over 8 hours"
},
answer: "B"
},

{
id: "q29",
question: "Which hormone promotes water reabsorption by the kidneys?",
options: {
A: "Aldosterone",
B: "Insulin",
C: "Antidiuretic hormone",
D: "Parathyroid hormone"
},
answer: "C"
},

{
id: "q30",
question: "A client is dehydrated. Which hormone response helps conserve water?",
options: {
A: "Decreased ADH release",
B: "Increased ADH release",
C: "Decreased thirst",
D: "Increased urinary water loss"
},
answer: "B"
},

/* =========================
   PAGE 7 (q31–q35)
========================= */
{
id: "q31",
question: "Which hormone increases sodium reabsorption and promotes potassium excretion in the kidneys?",
options: {
A: "Aldosterone",
B: "ADH",
C: "Calcitonin",
D: "Insulin"
},
answer: "A"
},

{
id: "q32",
question: "A client has fluid volume excess related to heart failure. Which assessment finding should the nurse expect?",
options: {
A: "Dry mucous membranes",
B: "Crackles in the lungs",
C: "Flat neck veins",
D: "Weight loss"
},
answer: "B"
},

{
id: "q33",
question: "Which intervention is most appropriate for a client with significant fluid volume excess?",
options: {
A: "Monitor daily weight and respiratory status",
B: "Encourage unrestricted fluids",
C: "Place the client flat",
D: "Increase sodium intake"
},
answer: "A"
},

{
id: "q34",
question: "Which finding indicates possible pulmonary edema in a client receiving IV fluids?",
options: {
A: "Clear breath sounds",
B: "Dry cough only",
C: "New bilateral crackles and increasing dyspnea",
D: "Urine output of 50 mL/hr"
},
answer: "C"
},

{
id: "q35",
question: "The nurse should prioritize which intervention for a client developing acute respiratory distress from fluid overload?",
options: {
A: "Place the client in an appropriate upright position and assess oxygenation",
B: "Encourage oral fluids",
C: "Increase IV fluid administration",
D: "Place the client flat"
},
answer: "A"
},

/* =========================
   PAGE 8 (q36–q40)
========================= */
{
id: "q36",
question: "Which ABG values are within the typical normal range?",
options: {
A: "pH 7.25, PaCO2 55, HCO3 24",
B: "pH 7.40, PaCO2 40, HCO3 24",
C: "pH 7.50, PaCO2 50, HCO3 30",
D: "pH 7.20, PaCO2 30, HCO3 15"
},
answer: "B"
},

{
id: "q37",
question: "A client's ABG results are pH 7.30, PaCO2 50 mmHg, HCO3 24 mEq/L. How should the nurse interpret these results?",
options: {
A: "Uncompensated respiratory acidosis",
B: "Uncompensated respiratory alkalosis",
C: "Uncompensated metabolic acidosis",
D: "Fully compensated metabolic alkalosis"
},
answer: "A"
},

{
id: "q38",
question: "A client's ABG results are pH 7.50, PaCO2 30 mmHg, HCO3 24 mEq/L. Which imbalance is present?",
options: {
A: "Metabolic acidosis",
B: "Metabolic alkalosis",
C: "Respiratory acidosis",
D: "Respiratory alkalosis"
},
answer: "D"
},

{
id: "q39",
question: "A client has pH 7.28, PaCO2 38 mmHg, and HCO3 17 mEq/L. What is the primary disorder?",
options: {
A: "Respiratory acidosis",
B: "Respiratory alkalosis",
C: "Metabolic acidosis",
D: "Metabolic alkalosis"
},
answer: "C"
},

{
id: "q40",
question: "A client has pH 7.48, PaCO2 48 mmHg, and HCO3 34 mEq/L. Which interpretation is most appropriate?",
options: {
A: "Metabolic alkalosis with respiratory compensation",
B: "Respiratory alkalosis with metabolic compensation",
C: "Metabolic acidosis",
D: "Respiratory acidosis without compensation"
},
answer: "A"
},

/* =========================
   PAGE 9 (q41–q45)
========================= */
{
id: "q41",
question: "A client with metabolic acidosis begins breathing rapidly and deeply. How should the nurse interpret this response?",
options: {
A: "The client is developing respiratory alkalosis as the primary disorder",
B: "The lungs are attempting to eliminate carbon dioxide",
C: "The kidneys are retaining hydrogen ions",
D: "The client is developing metabolic alkalosis"
},
answer: "B"
},

{
id: "q42",
question: "Which condition places a client at greatest risk for metabolic acidosis?",
options: {
A: "Prolonged vomiting",
B: "Hyperventilation",
C: "Severe diarrhea",
D: "Excessive antacid use"
},
answer: "C"
},

{
id: "q43",
question: "A client with diabetic ketoacidosis has a pH of 7.22. Which finding would the nurse expect?",
options: {
A: "Slow, shallow respirations",
B: "Deep, rapid respirations",
C: "Decreased respiratory rate from compensation",
D: "Respiratory depression"
},
answer: "B"
},

{
id: "q44",
question: "Which condition is commonly associated with metabolic alkalosis?",
options: {
A: "Severe diarrhea",
B: "Renal failure",
C: "Prolonged vomiting",
D: "Diabetic ketoacidosis"
},
answer: "C"
},

{
id: "q45",
question: "Which ABG pattern is consistent with respiratory acidosis?",
options: {
A: "Low pH and high PaCO2",
B: "High pH and low PaCO2",
C: "Low pH and low PaCO2",
D: "High pH and high PaCO2"
},
answer: "A"
},

/* =========================
   PAGE 10 (q46–q50)
========================= */
{
id: "q46",
question: "A client with severe opioid-induced respiratory depression is at risk for which acid-base imbalance?",
options: {
A: "Metabolic alkalosis",
B: "Respiratory acidosis",
C: "Metabolic acidosis",
D: "Respiratory alkalosis"
},
answer: "B"
},

{
id: "q47",
question: "Which client is at greatest risk for respiratory alkalosis?",
options: {
A: "A client hypoventilating after sedation",
B: "A client with prolonged vomiting",
C: "A client hyperventilating because of anxiety",
D: "A client with renal failure"
},
answer: "C"
},

{
id: "q48",
question: "A client is hyperventilating and reports tingling around the mouth and fingers. Which imbalance should the nurse suspect?",
options: {
A: "Respiratory alkalosis",
B: "Respiratory acidosis",
C: "Metabolic alkalosis",
D: "Metabolic acidosis"
},
answer: "A"
},

{
id: "q49",
question: "Which organ system provides the fastest compensation for acid-base disturbances?",
options: {
A: "Kidneys",
B: "Lungs",
C: "Liver",
D: "Pancreas"
},
answer: "B"
},

{
id: "q50",
question: "Which organ is primarily responsible for long-term regulation of bicarbonate and hydrogen ions?",
options: {
A: "Heart",
B: "Lungs",
C: "Kidneys",
D: "Spleen"
},
answer: "C"
},

/* =========================
   PAGE 11 (q51–q55)
========================= */
{
id: "q51",
question: "A client has ABGs of pH 7.32, PaCO2 30 mmHg, and HCO3 15 mEq/L. What is the best interpretation?",
options: {
A: "Partially compensated metabolic acidosis",
B: "Uncompensated respiratory acidosis",
C: "Partially compensated metabolic alkalosis",
D: "Fully compensated respiratory alkalosis"
},
answer: "A"
},

{
id: "q52",
question: "A client has pH 7.37, PaCO2 30 mmHg, and HCO3 17 mEq/L. Which interpretation is most appropriate?",
options: {
A: "Uncompensated metabolic acidosis",
B: "Fully compensated metabolic acidosis",
C: "Uncompensated respiratory alkalosis",
D: "Fully compensated metabolic alkalosis"
},
answer: "B"
},

{
id: "q53",
question: "Which finding is most concerning in a client with respiratory acidosis?",
options: {
A: "Confusion and decreased level of consciousness",
B: "Mild thirst",
C: "Increased urine output",
D: "Dry skin"
},
answer: "A"
},

{
id: "q54",
question: "A client with respiratory alkalosis is hyperventilating. Which intervention should the nurse prioritize?",
options: {
A: "Assess the cause of hyperventilation and support appropriate breathing control",
B: "Encourage rapid deep breathing",
C: "Administer sodium bicarbonate routinely",
D: "Restrict oxygen in every case"
},
answer: "A"
},

{
id: "q55",
question: "Which finding suggests worsening metabolic acidosis?",
options: {
A: "Increasingly deep and rapid respirations",
B: "Respiratory rate of 10/min",
C: "Increasing serum bicarbonate",
D: "Improved level of consciousness"
},
answer: "A"
},

/* =========================
   PAGE 12 (q56–q60)
========================= */
{
id: "q56",
question: "Which client is most likely to develop respiratory acidosis?",
options: {
A: "A client experiencing prolonged hyperventilation",
B: "A client with severe hypoventilation",
C: "A client with persistent vomiting",
D: "A client with severe diarrhea"
},
answer: "B"
},

{
id: "q57",
question: "Which intervention is appropriate for a client with respiratory acidosis caused by hypoventilation?",
options: {
A: "Address the underlying cause and support ventilation as prescribed",
B: "Encourage prolonged breath-holding",
C: "Administer large amounts of sodium bicarbonate without assessment",
D: "Restrict all oxygen"
},
answer: "A"
},

{
id: "q58",
question: "Which finding is expected in a client with metabolic alkalosis?",
options: {
A: "Low serum bicarbonate",
B: "High serum bicarbonate",
C: "Low blood pH",
D: "Deep Kussmaul respirations as the primary compensation"
},
answer: "B"
},

{
id: "q59",
question: "A client has metabolic alkalosis caused by prolonged vomiting. Which electrolyte imbalance may accompany this condition?",
options: {
A: "Hyperkalemia",
B: "Hypernatremia",
C: "Hypokalemia",
D: "Hyperphosphatemia"
},
answer: "C"
},

{
id: "q60",
question: "Which nursing assessment is particularly important for a client with severe acid-base imbalance?",
options: {
A: "Neurological status",
B: "Hair texture",
C: "Nail length",
D: "Visual acuity only"
},
answer: "A"
},

/* =========================
   PAGE 13 (q61–q65)
========================= */
{
id: "q61",
question: "Which IV fluid is generally considered isotonic?",
options: {
A: "0.9% sodium chloride",
B: "0.45% sodium chloride",
C: "3% sodium chloride",
D: "D5W after metabolism in all clinical situations"
},
answer: "A"
},

{
id: "q62",
question: "Which type of IV fluid generally moves water into cells and may be used cautiously for cellular dehydration?",
options: {
A: "Hypertonic",
B: "Isotonic",
C: "Hypotonic",
D: "Colloid only"
},
answer: "C"
},

{
id: "q63",
question: "A client is prescribed a hypertonic IV solution. Which assessment is especially important?",
options: {
A: "Signs of fluid overload",
B: "Hair loss",
C: "Visual acuity",
D: "Bowel frequency only"
},
answer: "A"
},

{
id: "q64",
question: "Which IV solution is commonly used for rapid intravascular volume replacement when clinically indicated?",
options: {
A: "0.45% sodium chloride",
B: "0.9% sodium chloride",
C: "3% sodium chloride",
D: "Sterile water"
},
answer: "B"
},

{
id: "q65",
question: "The nurse is administering IV fluids to an older adult. Which action is most important?",
options: {
A: "Monitor closely for signs of fluid overload",
B: "Assume all IV fluids are harmless",
C: "Avoid assessing lung sounds",
D: "Ignore changes in body weight"
},
answer: "A"
},

/* =========================
   PAGE 14 (q66–q70)
========================= */
{
id: "q66",
question: "Which finding is most consistent with hypovolemia?",
options: {
A: "Bounding pulse",
B: "Jugular venous distention",
C: "Tachycardia with hypotension",
D: "Pulmonary crackles"
},
answer: "C"
},

{
id: "q67",
question: "A client with fluid volume deficit has orthostatic hypotension. What should the nurse do first?",
options: {
A: "Assist the client with position changes and assess safety",
B: "Encourage independent ambulation",
C: "Place the client in a hot environment",
D: "Restrict fluid intake"
},
answer: "A"
},

{
id: "q68",
question: "Which finding suggests that a client with fluid volume excess is worsening?",
options: {
A: "Decreased edema",
B: "Improved oxygen saturation",
C: "Increasing dyspnea and crackles",
D: "Stable daily weight"
},
answer: "C"
},

{
id: "q69",
question: "Which laboratory finding may occur with significant fluid volume deficit?",
options: {
A: "Diluted hematocrit",
B: "Elevated hematocrit",
C: "Severely decreased serum osmolality in every case",
D: "Low urine specific gravity in every case"
},
answer: "B"
},

{
id: "q70",
question: "Which urine finding is commonly associated with dehydration?",
options: {
A: "Very dilute urine",
B: "Concentrated urine",
C: "Persistent glucose-free water loss only",
D: "Colorless urine in all cases"
},
answer: "B"
},

/* =========================
   PAGE 15 (q71–q75)
========================= */
{
id: "q71",
question: "A client with hypernatremia is receiving treatment. Which finding indicates improvement?",
options: {
A: "Increasing confusion",
B: "Worsening thirst",
C: "Improved neurological status",
D: "Increasing serum sodium"
},
answer: "C"
},

{
id: "q72",
question: "Which client should the nurse assess first?",
options: {
A: "Client with sodium 138 mEq/L and mild thirst",
B: "Client with potassium 6.4 mEq/L and ECG changes",
C: "Client with calcium 9.2 mg/dL and constipation",
D: "Client with magnesium 2.0 mg/dL and fatigue"
},
answer: "B"
},

{
id: "q73",
question: "A client has severe hyperkalemia. Which intervention may be prescribed to stabilize the cardiac membrane?",
options: {
A: "IV calcium according to emergency protocol",
B: "Oral water only",
C: "IV potassium chloride",
D: "Magnesium restriction only"
},
answer: "A"
},

{
id: "q74",
question: "Which food is a significant dietary source of potassium?",
options: {
A: "White rice",
B: "Bananas",
C: "Hard candy",
D: "Butter"
},
answer: "B"
},

{
id: "q75",
question: "A client with chronic kidney disease has elevated potassium. Which nursing action is appropriate?",
options: {
A: "Encourage high-potassium foods",
B: "Review medications and dietary potassium with the healthcare team",
C: "Administer potassium supplements routinely",
D: "Ignore the potassium level if the client feels well"
},
answer: "B"
},

/* =========================
   PAGE 16 (q76–q80)
========================= */
{
id: "q76",
question: "Which finding is associated with hypomagnesemia?",
options: {
A: "Neuromuscular irritability",
B: "Respiratory depression",
C: "Absent deep tendon reflexes",
D: "Severe lethargy as the only finding"
},
answer: "A"
},

{
id: "q77",
question: "Which client is at increased risk for hypomagnesemia?",
options: {
A: "A client with prolonged diarrhea",
B: "A client with mild hypertension",
C: "A client receiving adequate nutrition",
D: "A client with normal renal function and no losses"
},
answer: "A"
},

{
id: "q78",
question: "Which assessment finding is associated with hypocalcemia?",
options: {
A: "Positive Chvostek sign",
B: "Decreased neuromuscular excitability",
C: "Constipation",
D: "Hyporeflexia only"
},
answer: "A"
},

{
id: "q79",
question: "Which electrolyte imbalance increases the risk for tetany?",
options: {
A: "Hypernatremia",
B: "Hypocalcemia",
C: "Hyperkalemia",
D: "Hypermagnesemia"
},
answer: "B"
},

{
id: "q80",
question: "A client with hypocalcemia develops laryngeal muscle spasms. What is the nurse's priority?",
options: {
A: "Assess and maintain the airway",
B: "Offer oral fluids",
C: "Encourage ambulation",
D: "Restrict oxygen"
},
answer: "A"
},

/* =========================
   PAGE 17 (q81–q85)
========================= */
{
id: "q81",
question: "Which assessment is the most reliable indicator of short-term changes in fluid balance?",
options: {
A: "Daily body weight",
B: "Skin color",
C: "Hair texture",
D: "Pupil size"
},
answer: "A"
},

{
id: "q82",
question: "A client has a 2-kg weight gain over 2 days. What does this finding most strongly suggest?",
options: {
A: "Loss of approximately 2 L of fluid",
B: "Possible retention of approximately 2 L of fluid",
C: "Normal daily variation only",
D: "Severe protein deficiency"
},
answer: "B"
},

{
id: "q83",
question: "Which nursing intervention is appropriate when monitoring a client on fluid restriction?",
options: {
A: "Include fluids contained in foods when calculating intake as appropriate",
B: "Count only water",
C: "Ignore IV medications",
D: "Allow unlimited ice chips"
},
answer: "A"
},

{
id: "q84",
question: "A client on fluid restriction asks why ice chips count toward the fluid allowance. Which response is best?",
options: {
A: "Ice chips do not contain water.",
B: "Ice melts into water and contributes to total fluid intake.",
C: "Only hot liquids count as fluids.",
D: "Ice chips increase sodium levels directly."
},
answer: "B"
},

{
id: "q85",
question: "Which intervention helps prevent fluid imbalance in a hospitalized client?",
options: {
A: "Accurate intake and output monitoring",
B: "Ignoring daily weights",
C: "Measuring urine only once daily",
D: "Avoiding assessment of mucous membranes"
},
answer: "A"
},

/* =========================
   PAGE 18 (q86–q90)
========================= */
{
id: "q86",
question: "A client has metabolic acidosis related to renal dysfunction. Which laboratory value would the nurse expect?",
options: {
A: "Elevated bicarbonate",
B: "Decreased bicarbonate",
C: "Elevated pH",
D: "Decreased hydrogen ions"
},
answer: "B"
},

{
id: "q87",
question: "Which condition can cause respiratory acidosis?",
options: {
A: "Panic-induced hyperventilation",
B: "Severe hypoventilation",
C: "Prolonged vomiting",
D: "Severe diarrhea"
},
answer: "B"
},

{
id: "q88",
question: "Which condition commonly causes respiratory alkalosis?",
options: {
A: "Hypoventilation",
B: "Respiratory depression",
C: "Hyperventilation",
D: "Opioid overdose"
},
answer: "C"
},

{
id: "q89",
question: "A client with severe anxiety is hyperventilating. Which finding may occur because of respiratory alkalosis?",
options: {
A: "Perioral tingling",
B: "Severe hyperkalemia",
C: "Respiratory depression",
D: "Markedly increased PaCO2"
},
answer: "A"
},

{
id: "q90",
question: "Which ABG result indicates alkalemia?",
options: {
A: "pH 7.28",
B: "pH 7.31",
C: "pH 7.35",
D: "pH 7.49"
},
answer: "D"
},

/* =========================
   PAGE 19 (q91–q95)
========================= */
{
id: "q91",
question: "Which ABG result indicates acidemia?",
options: {
A: "pH 7.48",
B: "pH 7.45",
C: "pH 7.30",
D: "pH 7.40"
},
answer: "C"
},

{
id: "q92",
question: "A client's pH is 7.30, PaCO2 is 60 mmHg, and HCO3 is 29 mEq/L. What is the most likely interpretation?",
options: {
A: "Partially compensated respiratory acidosis",
B: "Uncompensated metabolic acidosis",
C: "Fully compensated respiratory alkalosis",
D: "Metabolic alkalosis"
},
answer: "A"
},

{
id: "q93",
question: "A client's pH is 7.52, PaCO2 is 28 mmHg, and HCO3 is 23 mEq/L. Which imbalance is present?",
options: {
A: "Respiratory acidosis",
B: "Respiratory alkalosis",
C: "Metabolic acidosis",
D: "Metabolic alkalosis"
},
answer: "B"
},

{
id: "q94",
question: "A client's pH is 7.25, PaCO2 is 38 mmHg, and HCO3 is 16 mEq/L. Which condition is present?",
options: {
A: "Metabolic acidosis",
B: "Respiratory acidosis",
C: "Respiratory alkalosis",
D: "Metabolic alkalosis"
},
answer: "A"
},

{
id: "q95",
question: "Which finding would the nurse expect in severe respiratory acidosis?",
options: {
A: "Neurological changes",
B: "Persistent hyperventilation",
C: "Low PaCO2",
D: "High blood pH"
},
answer: "A"
},

/* =========================
   PAGE 20 (q96–q100)
========================= */
{
id: "q96",
question: "A client with prolonged nasogastric suction is at risk for which acid-base imbalance?",
options: {
A: "Metabolic alkalosis",
B: "Metabolic acidosis",
C: "Respiratory alkalosis",
D: "Respiratory acidosis"
},
answer: "A"
},

{
id: "q97",
question: "A client with prolonged diarrhea has metabolic acidosis. Which electrolyte imbalance may occur simultaneously?",
options: {
A: "Hypercalcemia",
B: "Hypokalemia",
C: "Hypermagnesemia",
D: "Hypernatremia in every case"
},
answer: "B"
},

{
id: "q98",
question: "Which client statement indicates correct understanding of acid-base regulation?",
options: {
A: "The lungs primarily control bicarbonate levels.",
B: "The kidneys help regulate bicarbonate and hydrogen ions.",
C: "The liver is the primary organ for removing carbon dioxide.",
D: "The skin directly controls blood pH."
},
answer: "B"
},

{
id: "q99",
question: "Which finding should the nurse associate with respiratory alkalosis?",
options: {
A: "Increased PaCO2",
B: "Decreased PaCO2",
C: "Decreased pH from carbon dioxide retention",
D: "Hypoventilation"
},
answer: "B"
},

{
id: "q100",
question: "Which assessment finding is most concerning in a client with severe metabolic acidosis?",
options: {
A: "Deep, rapid respirations with altered mental status",
B: "Mild thirst",
C: "Normal respiratory pattern",
D: "Improved orientation"
},
answer: "A"
},

/* =========================
   PAGE 21 (q101–q105)
========================= */
{
id: "q101",
question: "The nurse is caring for four clients. Which client should be assessed first?",
options: {
A: "Client with sodium 137 mEq/L and mild fatigue",
B: "Client with potassium 6.7 mEq/L and an abnormal ECG",
C: "Client with calcium 9.0 mg/dL and constipation",
D: "Client with bicarbonate 24 mEq/L and mild nausea"
},
answer: "B"
},

{
id: "q102",
question: "A client receiving IV fluids suddenly develops dyspnea and bilateral crackles. What should the nurse do first?",
options: {
A: "Increase the IV infusion rate",
B: "Stop or slow the infusion according to protocol and assess the client",
C: "Encourage oral fluids",
D: "Place the client flat"
},
answer: "B"
},

{
id: "q103",
question: "A client with severe diarrhea is hypotensive and tachycardic. Which problem should the nurse prioritize?",
options: {
A: "Fluid volume deficit",
B: "Fluid volume excess",
C: "Hypervolemia",
D: "Respiratory alkalosis only"
},
answer: "A"
},

{
id: "q104",
question: "A client with vomiting has pH 7.51 and HCO3 32 mEq/L. Which intervention should the nurse anticipate?",
options: {
A: "Treatment directed at the cause of the metabolic alkalosis and correction of fluid/electrolyte losses",
B: "Administration of potassium without checking the level",
C: "Encouraging continued vomiting",
D: "Routine fluid restriction"
},
answer: "A"
},

{
id: "q105",
question: "A client with chronic lung disease has pH 7.35, PaCO2 55 mmHg, and HCO3 30 mEq/L. Which interpretation is most likely?",
options: {
A: "Fully compensated respiratory acidosis",
B: "Uncompensated metabolic alkalosis",
C: "Uncompensated respiratory alkalosis",
D: "Metabolic acidosis"
},
answer: "A"
},

/* =========================
   PAGE 22 (q106–q110)
========================= */
{
id: "q106",
question: "Which finding would indicate possible hypervolemia in a client with renal impairment?",
options: {
A: "Weight loss",
B: "Crackles and peripheral edema",
C: "Dry mucous membranes",
D: "Orthostatic hypotension"
},
answer: "B"
},

{
id: "q107",
question: "Which nursing intervention is appropriate for a client with hypervolemia?",
options: {
A: "Monitor weight, edema, lung sounds, and intake/output",
B: "Encourage unrestricted sodium intake",
C: "Administer IV fluids rapidly",
D: "Avoid monitoring respiratory status"
},
answer: "A"
},

{
id: "q108",
question: "A client with severe hyponatremia develops a seizure. What is the nurse's priority?",
options: {
A: "Maintain safety and protect the airway",
B: "Offer oral water",
C: "Encourage ambulation",
D: "Place the client in a standing position"
},
answer: "A"
},

{
id: "q109",
question: "Which finding is most concerning in a client with hypokalemia?",
options: {
A: "Mild thirst",
B: "Cardiac dysrhythmia",
C: "Dry lips",
D: "Increased appetite"
},
answer: "B"
},

{
id: "q110",
question: "A client has a potassium level of 2.6 mEq/L. Which intervention should the nurse anticipate?",
options: {
A: "Cardiac monitoring and prescribed potassium replacement",
B: "Administration of potassium by IV push",
C: "Encouraging a potassium-free diet",
D: "Discontinuing all monitoring"
},
answer: "A"
},

/* =========================
   PAGE 23 (q111–q115)
========================= */
{
id: "q111",
question: "A client with hyperkalemia has muscle weakness and ECG changes. Which action is the priority?",
options: {
A: "Place the client on cardiac monitoring and notify the appropriate healthcare provider",
B: "Encourage high-potassium foods",
C: "Administer potassium supplements",
D: "Delay treatment until the next laboratory draw"
},
answer: "A"
},

{
id: "q112",
question: "A client with hypocalcemia is at risk for which complication?",
options: {
A: "Severe neuromuscular irritability and seizures",
B: "Profound constipation only",
C: "Decreased neuromuscular excitability",
D: "Severe hyperreflexia caused by hypercalcemia"
},
answer: "A"
},

{
id: "q113",
question: "Which finding is most consistent with hypercalcemia?",
options: {
A: "Carpopedal spasm",
B: "Positive Trousseau sign",
C: "Constipation and weakness",
D: "Laryngeal spasm"
},
answer: "C"
},

{
id: "q114",
question: "Which client is at greatest risk for fluid volume deficit?",
options: {
A: "A client with persistent vomiting and diarrhea",
B: "A client with heart failure and edema",
C: "A client receiving IV fluids",
D: "A client with renal sodium retention"
},
answer: "A"
},

{
id: "q115",
question: "Which finding best demonstrates adequate renal perfusion in an adult client?",
options: {
A: "Urine output approximately 40 mL/hr",
B: "Urine output 5 mL/hr",
C: "No urine for 8 hours",
D: "Dark urine with severe oliguria"
},
answer: "A"
},

/* =========================
   PAGE 24 (q116–q120)
========================= */
{
id: "q116",
question: "A client has pH 7.29, PaCO2 52 mmHg, and HCO3 24 mEq/L. Which condition should the nurse identify?",
options: {
A: "Respiratory acidosis",
B: "Respiratory alkalosis",
C: "Metabolic alkalosis",
D: "Metabolic acidosis"
},
answer: "A"
},

{
id: "q117",
question: "A client has pH 7.49, PaCO2 40 mmHg, and HCO3 30 mEq/L. Which condition is present?",
options: {
A: "Respiratory acidosis",
B: "Metabolic alkalosis",
C: "Respiratory alkalosis",
D: "Metabolic acidosis"
},
answer: "B"
},

{
id: "q118",
question: "A client with diabetic ketoacidosis has deep, rapid respirations. Which statement best explains this response?",
options: {
A: "The body is attempting to decrease carbon dioxide and compensate for metabolic acidosis.",
B: "The kidneys are immediately eliminating bicarbonate through the lungs.",
C: "The client is developing primary metabolic alkalosis.",
D: "The respiratory system is retaining carbon dioxide."
},
answer: "A"
},

{
id: "q119",
question: "The nurse receives laboratory results for four clients. Which result requires the most immediate follow-up?",
options: {
A: "Sodium 139 mEq/L",
B: "Potassium 6.5 mEq/L with ECG changes",
C: "Calcium 9.1 mg/dL",
D: "Bicarbonate 24 mEq/L"
},
answer: "B"
},

{
id: "q120",
question: "A client with fluid volume excess has increasing dyspnea, oxygen desaturation, and new bilateral crackles. Which action should the nurse take first?",
options: {
A: "Assess airway and breathing, position the client appropriately, and provide oxygen as indicated",
B: "Encourage additional oral fluids",
C: "Place the client flat and reassess in 30 minutes",
D: "Increase the prescribed IV fluid rate"
},
answer: "A"
}
];
