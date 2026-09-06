const QUESTIONS = [

  // ============================================================
  // PAGE 1 — q1–q5
  // ============================================================

  {
    id: "q1",
    question: "A nurse is assessing a client who reports sudden shortness of breath and chest pain. Which action should the nurse take first?",
    options: {
      A: "Assess the client's oxygen saturation",
      B: "Obtain a detailed medication history",
      C: "Encourage the client to ambulate",
      D: "Provide a high-protein snack"
    },
    answer: "A"
  },

  {
    id: "q2",
    question: "Which finding should the nurse report immediately in a client receiving oxygen therapy?",
    options: {
      A: "Oxygen saturation of 96%",
      B: "Dry nasal mucosa",
      C: "New onset of confusion and restlessness",
      D: "Respiratory rate of 18/min"
    },
    answer: "C"
  },

  {
    id: "q3",
    question: "A nurse is caring for a client with heart failure. Which finding indicates worsening fluid retention?",
    options: {
      A: "Weight loss of 1 kg",
      B: "Decreased ankle edema",
      C: "New bilateral crackles",
      D: "Urine output of 1,500 mL/day"
    },
    answer: "C"
  },

  {
    id: "q4",
    question: "Which intervention is most appropriate when a client is at risk for falls?",
    options: {
      A: "Keep the bed in the highest position",
      B: "Place the call light within reach",
      C: "Keep all four side rails raised",
      D: "Encourage the client to walk without assistance"
    },
    answer: "B"
  },

  {
    id: "q5",
    question: "A nurse is preparing to administer medication to a client. Which action is essential for medication safety?",
    options: {
      A: "Ask another client to confirm the medication",
      B: "Compare the medication with the prescription",
      C: "Administer all medications at the same time",
      D: "Document the medication before giving it"
    },
    answer: "B"
  },

  // ============================================================
  // PAGE 2 — q6–q10
  // ============================================================

  {
    id: "q6",
    question: "A client with diabetes mellitus is experiencing diaphoresis, tremors, and confusion. Which condition should the nurse suspect?",
    options: {
      A: "Hyperglycemia",
      B: "Hypoglycemia",
      C: "Hypernatremia",
      D: "Hypocalcemia"
    },
    answer: "B"
  },

  {
    id: "q7",
    question: "Which food should a nurse recommend to a client who needs to increase dietary potassium?",
    options: {
      A: "Banana",
      B: "White bread",
      C: "Applesauce",
      D: "Rice cakes"
    },
    answer: "A"
  },

  {
    id: "q8",
    question: "A client has a serum potassium level of 2.8 mEq/L. Which assessment finding should the nurse anticipate?",
    options: {
      A: "Muscle weakness",
      B: "Hyperactive reflexes",
      C: "Peaked T waves",
      D: "Severe hypertension"
    },
    answer: "A"
  },

  {
    id: "q9",
    question: "Which assessment finding is most consistent with dehydration?",
    options: {
      A: "Bounding pulse",
      B: "Distended neck veins",
      C: "Dry mucous membranes",
      D: "Peripheral edema"
    },
    answer: "C"
  },

  {
    id: "q10",
    question: "A nurse is caring for a client with an indwelling urinary catheter. Which action helps prevent catheter-associated infection?",
    options: {
      A: "Keep the drainage bag above bladder level",
      B: "Disconnect the tubing daily",
      C: "Maintain a closed drainage system",
      D: "Irrigate the catheter routinely"
    },
    answer: "C"
  },

  // ============================================================
  // PAGE 3 — q11–q15
  // ============================================================

  {
    id: "q11",
    question: "Which assessment finding is most concerning in a client with a head injury?",
    options: {
      A: "Mild headache",
      B: "Increasing level of consciousness",
      C: "New unequal pupils",
      D: "Bruising on the arm"
    },
    answer: "C"
  },

  {
    id: "q12",
    question: "A client is having a generalized tonic-clonic seizure. What should the nurse do first?",
    options: {
      A: "Insert a tongue blade",
      B: "Restrain the client's extremities",
      C: "Protect the client from injury",
      D: "Give oral medication"
    },
    answer: "C"
  },

  {
    id: "q13",
    question: "Which finding is expected in a client with Parkinson disease?",
    options: {
      A: "Tremor at rest",
      B: "Sudden hearing loss",
      C: "Increased muscle strength",
      D: "Hyperactive bowel sounds"
    },
    answer: "A"
  },

  {
    id: "q14",
    question: "A nurse is assessing a client after a stroke. Which finding suggests impaired swallowing?",
    options: {
      A: "Clear speech",
      B: "Coughing while drinking water",
      C: "Strong hand grip",
      D: "Symmetrical facial movement"
    },
    answer: "B"
  },

  {
    id: "q15",
    question: "Which intervention is appropriate for a client with increased intracranial pressure?",
    options: {
      A: "Keep the head of the bed elevated as prescribed",
      B: "Place the client in Trendelenburg position",
      C: "Encourage frequent coughing",
      D: "Perform repeated vigorous suctioning"
    },
    answer: "A"
  },

  // ============================================================
  // PAGE 4 — q16–q20
  // ============================================================

  {
    id: "q16",
    question: "A nurse is caring for a client with chronic obstructive pulmonary disease. Which position usually promotes easier breathing?",
    options: {
      A: "Supine",
      B: "High-Fowler's",
      C: "Trendelenburg",
      D: "Prone with the head flat"
    },
    answer: "B"
  },

  {
    id: "q17",
    question: "Which finding is characteristic of hypoxemia?",
    options: {
      A: "Cyanosis",
      B: "Warm dry skin",
      C: "Bradycardia only",
      D: "Increased appetite"
    },
    answer: "A"
  },

  {
    id: "q18",
    question: "A client with asthma develops severe wheezing and difficulty speaking. Which medication should the nurse expect to administer for rapid bronchodilation?",
    options: {
      A: "Albuterol",
      B: "Warfarin",
      C: "Furosemide",
      D: "Levothyroxine"
    },
    answer: "A"
  },

  {
    id: "q19",
    question: "Which instruction should the nurse give a client using an incentive spirometer?",
    options: {
      A: "Exhale forcefully into the device",
      B: "Inhale slowly and deeply through the mouthpiece",
      C: "Use the device only when experiencing pain",
      D: "Breathe rapidly into the device"
    },
    answer: "B"
  },

  {
    id: "q20",
    question: "A nurse is caring for a client with pneumonia. Which finding indicates improvement?",
    options: {
      A: "Increasing respiratory distress",
      B: "Decreased oxygen saturation",
      C: "Improved breath sounds and oxygenation",
      D: "Increasing confusion"
    },
    answer: "C"
  },

  // ============================================================
  // PAGE 5 — q21–q25
  // ============================================================

  {
    id: "q21",
    question: "Which symptom is commonly associated with myocardial infarction?",
    options: {
      A: "Chest pressure or discomfort",
      B: "Increased appetite",
      C: "Sudden improvement in exercise tolerance",
      D: "Localized itching"
    },
    answer: "A"
  },

  {
    id: "q22",
    question: "A client taking digoxin reports nausea and visual changes. What should the nurse do?",
    options: {
      A: "Administer the next dose early",
      B: "Hold the medication and notify the provider",
      C: "Encourage a high-sodium diet",
      D: "Tell the client these findings are always expected"
    },
    answer: "B"
  },

  {
    id: "q23",
    question: "Which finding is expected in a client with left-sided heart failure?",
    options: {
      A: "Pulmonary crackles",
      B: "Ascites only",
      C: "Enlarged liver only",
      D: "Dependent edema without respiratory symptoms"
    },
    answer: "A"
  },

  {
    id: "q24",
    question: "A client with atrial fibrillation is prescribed an anticoagulant. What is the primary purpose of this medication?",
    options: {
      A: "Reduce blood glucose",
      B: "Prevent thromboembolism",
      C: "Increase heart rate",
      D: "Decrease urine production"
    },
    answer: "B"
  },

  {
    id: "q25",
    question: "Which assessment finding requires immediate attention in a client receiving a blood transfusion?",
    options: {
      A: "Mild hunger",
      B: "Chills and fever",
      C: "Improved energy",
      D: "Warm hands"
    },
    answer: "B"
  },

  // ============================================================
  // PAGE 6 — q26–q30
  // ============================================================

  {
    id: "q26",
    question: "A client with chronic kidney disease has a serum potassium level of 6.2 mEq/L. Which action is the priority?",
    options: {
      A: "Place the client on cardiac monitoring",
      B: "Encourage potassium-rich foods",
      C: "Administer potassium supplements",
      D: "Encourage increased oral fluids"
    },
    answer: "A"
  },

  {
    id: "q27",
    question: "Which finding is commonly associated with chronic kidney disease?",
    options: {
      A: "Decreased creatinine",
      B: "Anemia",
      C: "Increased erythropoietin production",
      D: "Persistent hypoglycemia"
    },
    answer: "B"
  },

  {
    id: "q28",
    question: "A client receiving hemodialysis has an arteriovenous fistula. Which action should the nurse take?",
    options: {
      A: "Measure blood pressure on the fistula arm",
      B: "Assess for a thrill and bruit",
      C: "Apply tight clothing over the fistula",
      D: "Use the fistula for routine blood draws"
    },
    answer: "B"
  },

  {
    id: "q29",
    question: "Which finding should the nurse expect in a client with urinary retention?",
    options: {
      A: "Bladder distention",
      B: "Decreased bladder volume",
      C: "Complete absence of discomfort",
      D: "Increased urine output"
    },
    answer: "A"
  },

  {
    id: "q30",
    question: "A nurse is teaching a client with recurrent urinary tract infections. Which instruction is appropriate?",
    options: {
      A: "Delay urination as long as possible",
      B: "Maintain adequate fluid intake unless contraindicated",
      C: "Always wipe from back to front",
      D: "Avoid urinating after sexual activity"
    },
    answer: "B"
  },

  // ============================================================
  // PAGE 7 — q31–q35
  // ============================================================

  {
    id: "q31",
    question: "Which assessment finding is most consistent with hypocalcemia?",
    options: {
      A: "Muscle spasms and tingling",
      B: "Decreased neuromuscular excitability",
      C: "Flushed skin",
      D: "Severe bradycardia only"
    },
    answer: "A"
  },

  {
    id: "q32",
    question: "A client with hyperthyroidism is at risk for which complication?",
    options: {
      A: "Thyroid storm",
      B: "Severe hypothermia",
      C: "Myxedema coma",
      D: "Profound bradycardia"
    },
    answer: "A"
  },

  {
    id: "q33",
    question: "Which finding is characteristic of hypothyroidism?",
    options: {
      A: "Heat intolerance",
      B: "Weight loss",
      C: "Cold intolerance",
      D: "Tachycardia"
    },
    answer: "C"
  },

  {
    id: "q34",
    question: "A client with diabetes mellitus has a blood glucose level of 52 mg/dL and is awake and able to swallow. What should the nurse provide?",
    options: {
      A: "A rapid-acting carbohydrate",
      B: "A high-fat meal only",
      C: "Insulin",
      D: "Nothing by mouth"
    },
    answer: "A"
  },

  {
    id: "q35",
    question: "Which finding is associated with diabetic ketoacidosis?",
    options: {
      A: "Kussmaul respirations",
      B: "Severe bradycardia",
      C: "Low blood glucose",
      D: "Decreased ketone production"
    },
    answer: "A"
  },

  // ============================================================
  // PAGE 8 — q36–q40
  // ============================================================

  {
    id: "q36",
    question: "Which assessment finding is most concerning in a client with gastrointestinal bleeding?",
    options: {
      A: "Heart rate of 128/min",
      B: "Mild hunger",
      C: "Normal skin color",
      D: "Soft abdomen"
    },
    answer: "A"
  },

  {
    id: "q37",
    question: "A client with cirrhosis develops confusion and changes in behavior. Which complication should the nurse suspect?",
    options: {
      A: "Hepatic encephalopathy",
      B: "Hypothyroidism",
      C: "Urinary retention",
      D: "Otitis media"
    },
    answer: "A"
  },

  {
    id: "q38",
    question: "Which finding is expected in a client with intestinal obstruction?",
    options: {
      A: "Abdominal distention",
      B: "Increased stool passage",
      C: "Improved appetite",
      D: "Decreased abdominal discomfort"
    },
    answer: "A"
  },

  {
    id: "q39",
    question: "A client with pancreatitis reports severe abdominal pain. Which laboratory value is commonly elevated?",
    options: {
      A: "Lipase",
      B: "Hemoglobin only",
      C: "Calcium always increases",
      D: "Sodium only"
    },
    answer: "A"
  },

  {
    id: "q40",
    question: "Which diet is commonly recommended during an acute episode of pancreatitis as oral intake is resumed?",
    options: {
      A: "High-fat diet",
      B: "Low-fat diet",
      C: "Very high-protein diet only",
      D: "Unlimited fried foods"
    },
    answer: "B"
  },

  // ============================================================
  // PAGE 9 — q41–q45
  // ============================================================

  {
    id: "q41",
    question: "A nurse is assessing a client with iron-deficiency anemia. Which finding should the nurse expect?",
    options: {
      A: "Fatigue",
      B: "Increased oxygen-carrying capacity",
      C: "Severe hypertension in every case",
      D: "Increased hemoglobin"
    },
    answer: "A"
  },

  {
    id: "q42",
    question: "Which food is a good source of dietary iron?",
    options: {
      A: "Lean red meat",
      B: "White sugar",
      C: "Clear soda",
      D: "Butter"
    },
    answer: "A"
  },

  {
    id: "q43",
    question: "A client with thrombocytopenia is at increased risk for which complication?",
    options: {
      A: "Bleeding",
      B: "Hyperglycemia",
      C: "Urinary retention",
      D: "Fluid overload only"
    },
    answer: "A"
  },

  {
    id: "q44",
    question: "Which nursing intervention is appropriate for a client with neutropenia?",
    options: {
      A: "Monitor for signs of infection",
      B: "Encourage exposure to sick visitors",
      C: "Use fresh flowers in the room",
      D: "Avoid hand hygiene"
    },
    answer: "A"
  },

  {
    id: "q45",
    question: "A client receiving chemotherapy has a very low white blood cell count. Which instruction is most important?",
    options: {
      A: "Report fever promptly",
      B: "Share personal grooming items",
      C: "Avoid all prescribed medications",
      D: "Eat raw foods without precautions"
    },
    answer: "A"
  },

  // ============================================================
  // PAGE 10 — q46–q50
  // ============================================================

  {
    id: "q46",
    question: "Which intervention is appropriate for a client experiencing severe pain?",
    options: {
      A: "Assess the pain and administer prescribed analgesia",
      B: "Tell the client pain is expected",
      C: "Ignore the client's pain rating",
      D: "Wait until the pain becomes unbearable"
    },
    answer: "A"
  },

  {
    id: "q47",
    question: "A client receiving morphine has a respiratory rate of 8/min. What is the nurse's priority action?",
    options: {
      A: "Continue the medication as prescribed",
      B: "Hold the opioid and assess the client",
      C: "Encourage the client to sleep",
      D: "Give another dose"
    },
    answer: "B"
  },

  {
    id: "q48",
    question: "Which nonpharmacological intervention may help reduce anxiety?",
    options: {
      A: "Slow deep breathing",
      B: "Increasing environmental noise",
      C: "Avoiding communication",
      D: "Withholding information"
    },
    answer: "A"
  },

  {
    id: "q49",
    question: "A client says, \"I am very anxious about my surgery.\" Which response is therapeutic?",
    options: {
      A: "There is nothing to worry about.",
      B: "Tell me what concerns you most about the surgery.",
      C: "You should not think about it.",
      D: "Everyone feels that way."
    },
    answer: "B"
  },

  {
    id: "q50",
    question: "Which intervention promotes sleep in a hospitalized client?",
    options: {
      A: "Cluster nighttime care when possible",
      B: "Keep bright lights on throughout the night",
      C: "Wake the client frequently without clinical need",
      D: "Encourage caffeine before bedtime"
    },
    answer: "A"
  },

  // ============================================================
  // PAGE 11 — q51–q55
  // ============================================================

  {
    id: "q51",
    question: "Which action is appropriate when caring for a client with suspected tuberculosis?",
    options: {
      A: "Use airborne precautions",
      B: "Use only standard precautions",
      C: "Place the client in a positive-pressure room",
      D: "Allow unrestricted visitors"
    },
    answer: "A"
  },

  {
    id: "q52",
    question: "Which precaution is required for a client with Clostridioides difficile infection?",
    options: {
      A: "Contact precautions",
      B: "Airborne precautions only",
      C: "Protective isolation only",
      D: "No precautions"
    },
    answer: "A"
  },

  {
    id: "q53",
    question: "Which action is the most effective way to prevent transmission of infection?",
    options: {
      A: "Hand hygiene",
      B: "Wearing jewelry",
      C: "Using antibiotics for every client",
      D: "Avoiding all patient contact"
    },
    answer: "A"
  },

  {
    id: "q54",
    question: "A client with influenza is coughing frequently. Which precaution is generally appropriate?",
    options: {
      A: "Droplet precautions",
      B: "Airborne precautions only",
      C: "No precautions",
      D: "Protective isolation"
    },
    answer: "A"
  },

  {
    id: "q55",
    question: "Which finding may indicate sepsis and requires prompt evaluation?",
    options: {
      A: "Acute change in mental status",
      B: "Normal vital signs",
      C: "Normal urine output",
      D: "Improved appetite"
    },
    answer: "A"
  },

  // ============================================================
  // PAGE 12 — q56–q60
  // ============================================================

  {
    id: "q56",
    question: "A pregnant client reports painless vaginal bleeding during the third trimester. Which condition should the nurse suspect?",
    options: {
      A: "Placenta previa",
      B: "Appendicitis",
      C: "Hyperthyroidism",
      D: "Cystitis"
    },
    answer: "A"
  },

  {
    id: "q57",
    question: "Which finding during pregnancy requires immediate evaluation?",
    options: {
      A: "Severe headache with visual disturbances",
      B: "Mild fatigue",
      C: "Occasional hunger",
      D: "Mild urinary frequency"
    },
    answer: "A"
  },

  {
    id: "q58",
    question: "A nurse is assessing a newborn. Which finding requires immediate attention?",
    options: {
      A: "Central cyanosis",
      B: "Strong cry",
      C: "Pink skin",
      D: "Regular respirations"
    },
    answer: "A"
  },

  {
    id: "q59",
    question: "Which action should the nurse take immediately after birth to help prevent neonatal heat loss?",
    options: {
      A: "Dry the newborn thoroughly",
      B: "Leave the newborn uncovered",
      C: "Place the newborn near a cold window",
      D: "Delay drying for several hours"
    },
    answer: "A"
  },

  {
    id: "q60",
    question: "Which finding in a postpartum client should the nurse report immediately?",
    options: {
      A: "Heavy vaginal bleeding with large clots",
      B: "Mild uterine cramping",
      C: "Mild fatigue",
      D: "Breast fullness"
    },
    answer: "A"
  },

  // ============================================================
  // PAGE 13 — q61–q65
  // ============================================================

  {
    id: "q61",
    question: "Which developmental milestone is expected in a healthy infant around 6 months of age?",
    options: {
      A: "Sitting with support",
      B: "Driving a vehicle",
      C: "Reading independently",
      D: "Walking independently in all cases"
    },
    answer: "A"
  },

  {
    id: "q62",
    question: "Which action is appropriate when administering medication to a child?",
    options: {
      A: "Calculate the dose according to the child's weight when appropriate",
      B: "Use the adult dose automatically",
      C: "Estimate the dose visually",
      D: "Ignore the child's weight"
    },
    answer: "A"
  },

  {
    id: "q63",
    question: "A child with dehydration has dry mucous membranes and decreased urine output. Which intervention is appropriate?",
    options: {
      A: "Administer prescribed fluid replacement",
      B: "Restrict all fluids",
      C: "Encourage strenuous activity",
      D: "Delay treatment"
    },
    answer: "A"
  },

  {
    id: "q64",
    question: "Which finding may indicate respiratory distress in an infant?",
    options: {
      A: "Nasal flaring",
      B: "Quiet regular breathing",
      C: "Pink mucous membranes",
      D: "Strong feeding ability"
    },
    answer: "A"
  },

  {
    id: "q65",
    question: "Which intervention is appropriate for a child experiencing a febrile seizure?",
    options: {
      A: "Protect the child from injury",
      B: "Place an object in the child's mouth",
      C: "Restrain the child",
      D: "Force oral fluids during the seizure"
    },
    answer: "A"
  },

  // ============================================================
  // PAGE 14 — q66–q70
  // ============================================================

  {
    id: "q66",
    question: "A client with depression says, \"I don't see any reason to continue.\" What should the nurse do first?",
    options: {
      A: "Ask directly about thoughts of self-harm",
      B: "Change the subject",
      C: "Tell the client to think positively",
      D: "Leave the client alone"
    },
    answer: "A"
  },

  {
    id: "q67",
    question: "Which finding is commonly associated with mania?",
    options: {
      A: "Decreased need for sleep",
      B: "Markedly slowed activity",
      C: "Persistent fatigue only",
      D: "Social withdrawal in every case"
    },
    answer: "A"
  },

  {
    id: "q68",
    question: "Which response is therapeutic when a client reports hearing voices?",
    options: {
      A: "I understand that you hear the voices, but I do not hear them.",
      B: "The voices are definitely real.",
      C: "You should listen to them.",
      D: "Ignore everything you hear."
    },
    answer: "A"
  },

  {
    id: "q69",
    question: "A client is having a panic attack. Which nursing intervention is appropriate?",
    options: {
      A: "Remain with the client and use short, calm statements",
      B: "Provide extensive written instructions immediately",
      C: "Leave the client alone",
      D: "Encourage rapid breathing"
    },
    answer: "A"
  },

  {
    id: "q70",
    question: "Which behavior may indicate alcohol withdrawal?",
    options: {
      A: "Tremors and agitation",
      B: "Improved concentration",
      C: "Markedly decreased pulse in all cases",
      D: "Increased appetite only"
    },
    answer: "A"
  },

  // ============================================================
  // PAGE 15 — q71–q75
  // ============================================================

  {
    id: "q71",
    question: "Which laboratory value is most important to monitor in a client receiving warfarin?",
    options: {
      A: "INR",
      B: "Blood glucose",
      C: "Serum calcium",
      D: "Amylase"
    },
    answer: "A"
  },

  {
    id: "q72",
    question: "Which medication reverses the effects of heparin?",
    options: {
      A: "Protamine sulfate",
      B: "Vitamin K",
      C: "Naloxone",
      D: "Flumazenil"
    },
    answer: "A"
  },

  {
    id: "q73",
    question: "Which medication is commonly used to reverse opioid-induced respiratory depression?",
    options: {
      A: "Naloxone",
      B: "Warfarin",
      C: "Insulin",
      D: "Digoxin"
    },
    answer: "A"
  },

  {
    id: "q74",
    question: "A client taking an ACE inhibitor reports swelling of the lips and tongue. What should the nurse do?",
    options: {
      A: "Treat this as a potential emergency and notify the provider immediately",
      B: "Give the next dose early",
      C: "Tell the client it is harmless",
      D: "Encourage exercise"
    },
    answer: "A"
  },

  {
    id: "q75",
    question: "Which instruction is appropriate for a client taking oral corticosteroids for a prolonged period?",
    options: {
      A: "Do not stop the medication abruptly unless instructed",
      B: "Double every dose",
      C: "Stop immediately when symptoms improve",
      D: "Avoid all follow-up appointments"
    },
    answer: "A"
  },

  // ============================================================
  // PAGE 16 — q76–q80
  // ============================================================

  {
    id: "q76",
    question: "Which action is appropriate when administering insulin?",
    options: {
      A: "Verify the insulin type and dose carefully",
      B: "Use any insulin vial available",
      C: "Skip glucose monitoring",
      D: "Administer insulin without checking the prescription"
    },
    answer: "A"
  },

  {
    id: "q77",
    question: "A client taking furosemide is at risk for which electrolyte imbalance?",
    options: {
      A: "Hypokalemia",
      B: "Hyperkalemia in every case",
      C: "Hypermagnesemia only",
      D: "Hypercalcemia in every case"
    },
    answer: "A"
  },

  {
    id: "q78",
    question: "Which adverse effect should the nurse monitor for in a client receiving aminoglycoside antibiotics?",
    options: {
      A: "Nephrotoxicity and ototoxicity",
      B: "Improved hearing",
      C: "Increased bone density",
      D: "Hypoglycemia only"
    },
    answer: "A"
  },

  {
    id: "q79",
    question: "A client receiving vancomycin develops flushing and itching during the infusion. Which complication should the nurse suspect?",
    options: {
      A: "Infusion-related reaction",
      B: "Hypoglycemia",
      C: "Urinary retention",
      D: "Hyperthyroidism"
    },
    answer: "A"
  },

  {
    id: "q80",
    question: "Which instruction should the nurse give a client taking antibiotics?",
    options: {
      A: "Take the medication exactly as prescribed",
      B: "Stop immediately when symptoms improve without guidance",
      C: "Share the medication with family members",
      D: "Save unused doses for future illness"
    },
    answer: "A"
  },

  // ============================================================
  // PAGE 17 — q81–q85
  // ============================================================

  {
    id: "q81",
    question: "A client has a sodium level of 124 mEq/L. Which finding should the nurse monitor for closely?",
    options: {
      A: "Neurological changes",
      B: "Improved reflexes only",
      C: "Increased urine concentration only",
      D: "Severe thirst in every case"
    },
    answer: "A"
  },

  {
    id: "q82",
    question: "Which finding is associated with hypernatremia?",
    options: {
      A: "Intense thirst",
      B: "Severe muscle relaxation only",
      C: "Decreased serum osmolality",
      D: "Water excess in every case"
    },
    answer: "A"
  },

  {
    id: "q83",
    question: "A client has metabolic acidosis. Which respiratory response should the nurse expect?",
    options: {
      A: "Increased respiratory rate and depth",
      B: "Complete apnea",
      C: "Markedly decreased respiratory effort",
      D: "No respiratory compensation"
    },
    answer: "A"
  },

  {
    id: "q84",
    question: "Which arterial blood gas result is consistent with respiratory acidosis?",
    options: {
      A: "pH 7.30, PaCO2 52 mmHg",
      B: "pH 7.50, PaCO2 30 mmHg",
      C: "pH 7.45, PaCO2 40 mmHg",
      D: "pH 7.40, PaCO2 40 mmHg"
    },
    answer: "A"
  },

  {
    id: "q85",
    question: "Which arterial blood gas result is consistent with respiratory alkalosis?",
    options: {
      A: "pH 7.50, PaCO2 30 mmHg",
      B: "pH 7.30, PaCO2 52 mmHg",
      C: "pH 7.35, PaCO2 40 mmHg",
      D: "pH 7.40, PaCO2 40 mmHg"
    },
    answer: "A"
  },

  // ============================================================
  // PAGE 18 — q86–q90
  // ============================================================

  {
    id: "q86",
    question: "Which intervention helps prevent pressure injuries in an immobile client?",
    options: {
      A: "Reposition the client regularly",
      B: "Keep the client in one position",
      C: "Massage reddened bony areas vigorously",
      D: "Keep the skin continuously moist"
    },
    answer: "A"
  },

  {
    id: "q87",
    question: "A client has a pressure injury with full-thickness skin loss and visible adipose tissue. Which stage is most consistent with this description?",
    options: {
      A: "Stage 3",
      B: "Stage 1",
      C: "Stage 2",
      D: "Unstageable only"
    },
    answer: "A"
  },

  {
    id: "q88",
    question: "Which intervention is appropriate for preventing venous thromboembolism after surgery?",
    options: {
      A: "Early ambulation as prescribed",
      B: "Prolonged bed rest",
      C: "Avoiding leg movement",
      D: "Keeping the knees flexed continuously"
    },
    answer: "A"
  },

  {
    id: "q89",
    question: "Which finding may indicate a deep vein thrombosis?",
    options: {
      A: "Unilateral leg swelling and pain",
      B: "Bilateral equal pulses with no symptoms",
      C: "Improved mobility",
      D: "Normal leg appearance"
    },
    answer: "A"
  },

  {
    id: "q90",
    question: "A client suddenly develops dyspnea and chest pain after surgery. Which complication should the nurse suspect?",
    options: {
      A: "Pulmonary embolism",
      B: "Constipation",
      C: "Mild dehydration only",
      D: "Insomnia"
    },
    answer: "A"
  },

  // ============================================================
  // PAGE 19 — q91–q95
  // ============================================================

  {
    id: "q91",
    question: "Which action is appropriate before a client undergoes surgery?",
    options: {
      A: "Verify informed consent according to facility policy",
      B: "Sign the consent for the client",
      C: "Ignore allergies",
      D: "Allow the client to eat if NPO is prescribed"
    },
    answer: "A"
  },

  {
    id: "q92",
    question: "Which postoperative finding requires immediate nursing intervention?",
    options: {
      A: "Difficulty breathing",
      B: "Mild incisional pain",
      C: "Mild fatigue",
      D: "Small amount of expected drainage"
    },
    answer: "A"
  },

  {
    id: "q93",
    question: "Which intervention helps prevent postoperative atelectasis?",
    options: {
      A: "Deep breathing and incentive spirometry",
      B: "Prolonged immobility",
      C: "Avoiding coughing",
      D: "Keeping the client completely flat"
    },
    answer: "A"
  },

  {
    id: "q94",
    question: "A postoperative client has abdominal wound dehiscence. What should the nurse do first?",
    options: {
      A: "Cover the area with sterile saline-moistened dressings",
      B: "Push the organs back into the abdomen",
      C: "Leave the wound uncovered",
      D: "Encourage vigorous coughing"
    },
    answer: "A"
  },

  {
    id: "q95",
    question: "Which finding may indicate postoperative infection?",
    options: {
      A: "Increasing redness, warmth, and purulent drainage",
      B: "Clean dry incision",
      C: "Decreasing pain",
      D: "Normal temperature"
    },
    answer: "A"
  },

  // ============================================================
  // PAGE 20 — q96–q100
  // ============================================================

  {
    id: "q96",
    question: "Which client should the nurse assess first?",
    options: {
      A: "A client with new onset of difficulty breathing",
      B: "A client requesting a blanket",
      C: "A client asking about lunch",
      D: "A client waiting for routine discharge instructions"
    },
    answer: "A"
  },

  {
    id: "q97",
    question: "Which task is appropriate for the nurse to delegate to unlicensed assistive personnel?",
    options: {
      A: "Obtaining vital signs for a stable client",
      B: "Assessing a new admission",
      C: "Developing a nursing care plan",
      D: "Teaching medication administration"
    },
    answer: "A"
  },

  {
    id: "q98",
    question: "Which task should generally be performed by the registered nurse rather than delegated to unlicensed assistive personnel?",
    options: {
      A: "Initial nursing assessment",
      B: "Routine bed making",
      C: "Assisting with hygiene",
      D: "Measuring intake and output"
    },
    answer: "A"
  },

  {
    id: "q99",
    question: "A nurse discovers that the wrong medication was administered. What is the priority action?",
    options: {
      A: "Assess the client for adverse effects",
      B: "Hide the error",
      C: "Alter the medical record",
      D: "Wait until the next shift"
    },
    answer: "A"
  },

  {
    id: "q100",
    question: "Which action demonstrates appropriate use of the nursing process?",
    options: {
      A: "Assess before developing nursing interventions",
      B: "Implement interventions before collecting data",
      C: "Evaluate without reassessing the client",
      D: "Skip assessment when the client has a diagnosis"
    },
    answer: "A"
  },

  // ============================================================
  // PAGE 21 — q101–q105
  // ============================================================

  {
    id: "q101",
    question: "Which client has the highest priority for assessment?",
    options: {
      A: "A client with stridor and respiratory distress",
      B: "A client with chronic mild back pain",
      C: "A client requesting assistance with television controls",
      D: "A client waiting for a routine bath"
    },
    answer: "A"
  },

  {
    id: "q102",
    question: "A client with chest pain has a prescription for sublingual nitroglycerin. Which instruction is appropriate?",
    options: {
      A: "Place the tablet under the tongue as directed",
      B: "Swallow the tablet whole with water",
      C: "Take it only after vigorous exercise",
      D: "Store it in direct sunlight"
    },
    answer: "A"
  },

  {
    id: "q103",
    question: "Which finding may indicate hypovolemic shock?",
    options: {
      A: "Tachycardia and hypotension",
      B: "Bounding pulse and hypertension",
      C: "Bradycardia with warm flushed skin in all cases",
      D: "Increased urine output"
    },
    answer: "A"
  },

  {
    id: "q104",
    question: "Which intervention is appropriate for a client experiencing anaphylaxis?",
    options: {
      A: "Administer epinephrine as prescribed and support the airway",
      B: "Encourage oral fluids first",
      C: "Place the client alone in a room",
      D: "Delay treatment until laboratory results return"
    },
    answer: "A"
  },

  {
    id: "q105",
    question: "Which finding suggests adequate tissue perfusion after treatment for shock?",
    options: {
      A: "Improved urine output and mental status",
      B: "Increasing confusion",
      C: "Worsening hypotension",
      D: "Decreasing peripheral perfusion"
    },
    answer: "A"
  },

  // ============================================================
  // PAGE 22 — q106–q110
  // ============================================================

  {
    id: "q106",
    question: "A client with a new cast reports severe pain that is not relieved by prescribed medication. Which complication should the nurse suspect?",
    options: {
      A: "Compartment syndrome",
      B: "Improved circulation",
      C: "Normal healing only",
      D: "Mild dehydration"
    },
    answer: "A"
  },

  {
    id: "q107",
    question: "Which finding is concerning in a client with a casted extremity?",
    options: {
      A: "Pale, cool fingers with decreased sensation",
      B: "Warm skin with normal sensation",
      C: "Strong distal pulse",
      D: "Normal capillary refill"
    },
    answer: "A"
  },

  {
    id: "q108",
    question: "Which intervention is appropriate for a client with osteoporosis?",
    options: {
      A: "Encourage weight-bearing activity as appropriate",
      B: "Encourage prolonged bed rest",
      C: "Avoid calcium and vitamin D",
      D: "Discourage all physical activity"
    },
    answer: "A"
  },

  {
    id: "q109",
    question: "Which finding is characteristic of rheumatoid arthritis?",
    options: {
      A: "Symmetrical joint inflammation",
      B: "Only one brief episode of pain",
      C: "No joint stiffness",
      D: "Complete absence of inflammation"
    },
    answer: "A"
  },

  {
    id: "q110",
    question: "Which intervention helps prevent complications of immobility?",
    options: {
      A: "Perform range-of-motion exercises as appropriate",
      B: "Maintain complete bed rest indefinitely",
      C: "Avoid repositioning",
      D: "Restrict all movement"
    },
    answer: "A"
  },

  // ============================================================
  // PAGE 23 — q111–q115
  // ============================================================

  {
    id: "q111",
    question: "Which teaching is appropriate for a client with hypertension?",
    options: {
      A: "Follow the prescribed treatment plan and monitor blood pressure",
      B: "Stop medication whenever blood pressure improves",
      C: "Increase sodium intake substantially",
      D: "Avoid all physical activity"
    },
    answer: "A"
  },

  {
    id: "q112",
    question: "Which lifestyle change can help reduce cardiovascular risk?",
    options: {
      A: "Regular physical activity appropriate to the client's condition",
      B: "Smoking cigarettes",
      C: "Increasing saturated fat intake",
      D: "Avoiding all medical follow-up"
    },
    answer: "A"
  },

  {
    id: "q113",
    question: "Which finding is most concerning in a client with hypertension?",
    options: {
      A: "Severe headache with neurological changes",
      B: "Occasional mild fatigue",
      C: "Normal blood pressure",
      D: "Stable appetite"
    },
    answer: "A"
  },

  {
    id: "q114",
    question: "A client with diabetes is learning foot care. Which instruction is appropriate?",
    options: {
      A: "Inspect the feet daily",
      B: "Walk barefoot regularly",
      C: "Use very hot water to test sensation",
      D: "Ignore small wounds"
    },
    answer: "A"
  },

  {
    id: "q115",
    question: "Which finding in a client with diabetes may indicate peripheral neuropathy?",
    options: {
      A: "Decreased sensation in the feet",
      B: "Improved sensation",
      C: "Increased visual acuity",
      D: "Increased hearing"
    },
    answer: "A"
  },

  // ============================================================
  // PAGE 24 — q116–q120
  // ============================================================

  {
    id: "q116",
    question: "Which statement by a client demonstrates understanding of discharge teaching?",
    options: {
      A: "I will contact my healthcare provider if I develop the warning signs we discussed.",
      B: "I will stop all medications when I feel better.",
      C: "I do not need follow-up appointments.",
      D: "I will change my medication doses on my own."
    },
    answer: "A"
  },

  {
    id: "q117",
    question: "Which intervention is most important when educating a client about medication safety at home?",
    options: {
      A: "Keep an accurate list of medications and doses",
      B: "Share medications with family members",
      C: "Store all medications without labels",
      D: "Change doses independently"
    },
    answer: "A"
  },

  {
    id: "q118",
    question: "Which finding should the nurse recognize as a potential medical emergency?",
    options: {
      A: "Sudden onset of facial drooping and weakness on one side",
      B: "Mild chronic fatigue",
      C: "Occasional hunger",
      D: "Stable vital signs"
    },
    answer: "A"
  },

  {
    id: "q119",
    question: "A nurse is teaching a client about health promotion. Which recommendation is appropriate?",
    options: {
      A: "Attend recommended preventive health screenings",
      B: "Avoid all vaccinations",
      C: "Ignore changes in health status",
      D: "Use prescription medications belonging to others"
    },
    answer: "A"
  },

  {
    id: "q120",
    question: "Which principle should guide the nurse when prioritizing client care?",
    options: {
      A: "Address actual or potential airway, breathing, and circulation problems first",
      B: "Always address requests in the order they are received",
      C: "Complete documentation before addressing emergencies",
      D: "Prioritize comfort requests over life-threatening problems"
    },
    answer: "A"
  }

];
