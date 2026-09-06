const QUESTIONS = [
/* =========================
   PAGE 1 (q1–q5)
========================= */
{
id: "q1",
question: "A nurse is beginning a comprehensive health assessment. Which action should the nurse perform first?",
options: {
A: "Review the client's diagnostic test results",
B: "Establish rapport and explain the assessment process",
C: "Palpate the abdomen",
D: "Measure the client's blood pressure"
},
answer: "B"
},
{
id: "q2",
question: "Which technique should the nurse use when inspecting a client's skin?",
options: {
A: "Use adequate lighting and systematically observe the skin",
B: "Palpate all areas before observing them",
C: "Use percussion to identify skin abnormalities",
D: "Ask the client to describe the color of the skin"
},
answer: "A"
},
{
id: "q3",
question: "The nurse is assessing a client's respiratory rate. Which technique provides the most accurate measurement?",
options: {
A: "Tell the client to breathe normally for 15 seconds",
B: "Ask the client to take several deep breaths",
C: "Count respirations while the client is unaware that respirations are being counted",
D: "Count only the client's inspirations"
},
answer: "C"
},
{
id: "q4",
question: "Which finding during a general survey requires the nurse's immediate attention?",
options: {
A: "Body temperature of 37.1°C (98.8°F)",
B: "Slightly dry skin",
C: "Mild fatigue after walking",
D: "Difficulty speaking and new facial asymmetry"
},
answer: "D"
},
{
id: "q5",
question: "Which information is considered subjective data?",
options: {
A: "Blood pressure of 148/86 mm Hg",
B: "Client reports feeling dizzy when standing",
C: "Respiratory rate of 24/min",
D: "Skin is pale and cool"
},
answer: "B"
},

/* =========================
   PAGE 2 (q6–q10)
========================= */
{
id: "q6",
question: "Which assessment finding is an example of objective data?",
options: {
A: "The client reports nausea",
B: "The client states that the pain is severe",
C: "The nurse observes a respiratory rate of 28/min",
D: "The client says the wound feels warm"
},
answer: "C"
},
{
id: "q7",
question: "When obtaining a health history, which question is most appropriate when assessing the client's chief concern?",
options: {
A: "Can you describe what brought you to the healthcare facility today?",
B: "Why did you wait so long to seek care?",
C: "You do not have any serious problems, correct?",
D: "You have been taking your medications incorrectly, haven't you?"
},
answer: "A"
},
{
id: "q8",
question: "Which approach best demonstrates therapeutic communication during an assessment?",
options: {
A: "Changing the subject when the client becomes emotional",
B: "Asking several questions at once",
C: "Giving advice before completing the assessment",
D: "Using open-ended questions and allowing the client time to respond"
},
answer: "D"
},
{
id: "q9",
question: "A client has difficulty hearing. Which action should the nurse take during the health history?",
options: {
A: "Speak loudly from behind the client",
B: "Face the client directly and speak clearly",
C: "Avoid asking questions that require detailed answers",
D: "Ask a family member to answer all questions"
},
answer: "B"
},
{
id: "q10",
question: "Which finding should the nurse document as a client's past medical history?",
options: {
A: "Current chest pain",
B: "Current respiratory rate",
C: "History of appendectomy 10 years ago",
D: "Current abdominal tenderness"
},
answer: "C"
},

/* =========================
   PAGE 3 (q11–q15)
========================= */
{
id: "q11",
question: "Which question best assesses a client's medication history?",
options: {
A: "What prescription, over-the-counter, and herbal products do you currently use?",
B: "Do you usually follow your doctor's instructions?",
C: "Do you think your medications are working?",
D: "Have you ever forgotten a medication?"
},
answer: "A"
},
{
id: "q12",
question: "Which information is most important when assessing a client's allergy history?",
options: {
A: "The client's favorite medication",
B: "The time of day medications are usually taken",
C: "The pharmacy used by the client",
D: "The substance causing the allergy and the client's reaction"
},
answer: "D"
},
{
id: "q13",
question: "The nurse is assessing a client's family history. Which information is most relevant?",
options: {
A: "The client's employment history",
B: "Diseases affecting close biological relatives",
C: "The client's preferred exercise routine",
D: "The client's dietary preferences"
},
answer: "B"
},
{
id: "q14",
question: "Which finding should the nurse consider when assessing health literacy?",
options: {
A: "The client prefers written information",
B: "The client asks questions about treatment",
C: "The client has difficulty understanding medication instructions",
D: "The client brings a medication list to the appointment"
},
answer: "C"
},
{
id: "q15",
question: "Which question is most appropriate for assessing a client's social history?",
options: {
A: "What types of support do you have at home?",
B: "What was your blood pressure yesterday?",
C: "When was your last vaccination?",
D: "Where is your abdominal pain located?"
},
answer: "A"
},

/* =========================
   PAGE 4 (q16–q20)
========================= */
{
id: "q16",
question: "Which component of the health history focuses on the client's current symptoms and concerns?",
options: {
A: "Family history",
B: "Past medical history",
C: "Social history",
D: "History of present illness"
},
answer: "D"
},
{
id: "q17",
question: "When assessing pain, which question best evaluates the location of the pain?",
options: {
A: "How severe is the pain?",
B: "Can you point to where the pain begins?",
C: "What makes the pain worse?",
D: "When did the pain start?"
},
answer: "B"
},
{
id: "q18",
question: "Which assessment question evaluates the quality of pain?",
options: {
A: "Is the pain sharp, burning, aching, or pressure-like?",
B: "Where does the pain occur?",
C: "How long does the pain last?",
D: "What makes the pain better?"
},
answer: "A"
},
{
id: "q19",
question: "Which question assesses the timing of a client's pain?",
options: {
A: "What does the pain feel like?",
B: "Does the pain move anywhere?",
C: "When did the pain begin, and how long does it last?",
D: "What makes the pain worse?"
},
answer: "C"
},
{
id: "q20",
question: "A client rates pain as 8/10. What should the nurse do next?",
options: {
A: "Document the score and continue the assessment without intervention",
B: "Tell the client that 8/10 is expected",
C: "Wait until the provider evaluates the client",
D: "Further assess the pain and initiate appropriate pain-management measures"
},
answer: "D"
},

/* =========================
   PAGE 5 (q21–q25)
========================= */
{
id: "q21",
question: "Which vital sign should the nurse assess before administering an antihypertensive medication that lowers blood pressure?",
options: {
A: "Blood pressure",
B: "Temperature",
C: "Oxygen saturation",
D: "Pain score"
},
answer: "A"
},
{
id: "q22",
question: "Which technique is appropriate when measuring a client's blood pressure manually?",
options: {
A: "Place the cuff over thick clothing",
B: "Use a cuff with a bladder that is too small",
C: "Position the client's arm approximately at heart level",
D: "Ask the client to talk during the measurement"
},
answer: "C"
},
{
id: "q23",
question: "A client's blood pressure is unexpectedly high. What should the nurse do first?",
options: {
A: "Immediately administer an additional antihypertensive",
B: "Recheck the blood pressure using correct technique",
C: "Document the value as the client's baseline",
D: "Tell the client the result is dangerous"
},
answer: "B"
},
{
id: "q24",
question: "Which factor can falsely elevate a client's blood pressure reading?",
options: {
A: "Resting quietly before measurement",
B: "Correct cuff size",
C: "Arm supported at heart level",
D: "Talking during the measurement"
},
answer: "D"
},
{
id: "q25",
question: "Which pulse characteristic refers to the strength of the heartbeat felt during palpation?",
options: {
A: "Rate",
B: "Rhythm",
C: "Amplitude",
D: "Location"
},
answer: "C"
},

/* =========================
   PAGE 6 (q26–q30)
========================= */
{
id: "q26",
question: "A nurse notes an irregular radial pulse. What is the most appropriate action?",
options: {
A: "Count the apical pulse for a full minute",
B: "Count the radial pulse for 15 seconds",
C: "Ask the client to exercise",
D: "Ignore the irregularity if the rate is normal"
},
answer: "A"
},
{
id: "q27",
question: "Which finding represents tachycardia in an adult?",
options: {
A: "Pulse of 48/min",
B: "Pulse of 72/min",
C: "Pulse of 88/min",
D: "Pulse of 112/min"
},
answer: "D"
},
{
id: "q28",
question: "Which finding represents bradypnea in an adult?",
options: {
A: "Respiratory rate of 8/min",
B: "Respiratory rate of 18/min",
C: "Respiratory rate of 22/min",
D: "Respiratory rate of 28/min"
},
answer: "A"
},
{
id: "q29",
question: "Which assessment finding is most concerning in a client with respiratory distress?",
options: {
A: "Respiratory rate of 20/min",
B: "Oxygen saturation of 98%",
C: "Cyanosis around the lips",
D: "Occasional nonproductive cough"
},
answer: "C"
},
{
id: "q30",
question: "Which technique should the nurse use when measuring oxygen saturation with a pulse oximeter?",
options: {
A: "Place the sensor over an area with thick artificial nails without adjustment",
B: "Ensure the sensor is positioned correctly and assess the waveform or signal quality",
C: "Place the sensor on the same limb as an inflated blood-pressure cuff",
D: "Assume the displayed value is accurate regardless of perfusion"
},
answer: "B"
},

/* =========================
   PAGE 7 (q31–q35)
========================= */
{
id: "q31",
question: "Which factor can interfere with pulse oximetry accuracy?",
options: {
A: "Poor peripheral perfusion",
B: "Normal skin temperature",
C: "Correct sensor placement",
D: "Adequate circulation"
},
answer: "A"
},
{
id: "q32",
question: "Which assessment finding suggests increased work of breathing?",
options: {
A: "Regular respirations without effort",
B: "Use of accessory muscles",
C: "Clear speech without pauses",
D: "Normal chest expansion"
},
answer: "B"
},
{
id: "q33",
question: "The nurse is assessing lung sounds. Which finding should be reported promptly?",
options: {
A: "Clear breath sounds bilaterally",
B: "Symmetric chest expansion",
C: "New absence of breath sounds on one side",
D: "Respiratory rate of 16/min"
},
answer: "C"
},
{
id: "q34",
question: "Which sound is commonly associated with narrowed airways?",
options: {
A: "Wheeze",
B: "Pleural friction rub",
C: "Normal vesicular sound",
D: "Silence"
},
answer: "A"
},
{
id: "q35",
question: "Which finding is most consistent with fluid accumulation in the lungs?",
options: {
A: "Clear breath sounds",
B: "Fine crackles",
C: "Absent bowel sounds",
D: "Hyperactive bowel sounds"
},
answer: "B"
},

/* =========================
   PAGE 8 (q36–q40)
========================= */
{
id: "q36",
question: "Which technique should the nurse use when inspecting the client's chest during a respiratory assessment?",
options: {
A: "Observe respiratory pattern, effort, and chest symmetry",
B: "Begin by auscultating only the anterior chest",
C: "Ask the client to hold the breath throughout inspection",
D: "Inspect the chest only after percussion"
},
answer: "A"
},
{
id: "q37",
question: "Which finding indicates increased respiratory effort?",
options: {
A: "Quiet breathing",
B: "Regular respiratory pattern",
C: "Nasal flaring and intercostal retractions",
D: "Symmetrical chest movement"
},
answer: "C"
},
{
id: "q38",
question: "Which assessment is most appropriate for evaluating peripheral circulation?",
options: {
A: "Assess skin color, temperature, pulses, and capillary refill",
B: "Measure only respiratory rate",
C: "Inspect only the client's abdomen",
D: "Assess bowel sounds"
},
answer: "A"
},
{
id: "q39",
question: "Which finding may indicate decreased peripheral perfusion?",
options: {
A: "Warm extremities",
B: "Capillary refill of 2 seconds",
C: "Strong bilateral pulses",
D: "Cool extremity with delayed capillary refill"
},
answer: "D"
},
{
id: "q40",
question: "When assessing edema, which finding should the nurse document?",
options: {
A: "Only the client's blood pressure",
B: "Location, severity, and whether pitting is present",
C: "Only the client's pulse rate",
D: "The client's height"
},
answer: "B"
},

/* =========================
   PAGE 9 (q41–q45)
========================= */
{
id: "q41",
question: "Which assessment technique is used to determine the presence of fluid in tissues by pressing the skin?",
options: {
A: "Palpation for pitting edema",
B: "Percussion",
C: "Auscultation",
D: "Inspection only"
},
answer: "A"
},
{
id: "q42",
question: "Which finding is most concerning when assessing a peripheral pulse?",
options: {
A: "Equal pulses bilaterally",
B: "Pulse amplitude of 2+ bilaterally",
C: "Sudden absence of a previously palpable pulse",
D: "Warm skin"
},
answer: "C"
},
{
id: "q43",
question: "Which assessment is included in a cardiovascular examination?",
options: {
A: "Assessing bowel sounds",
B: "Assessing heart rate, rhythm, peripheral pulses, and edema",
C: "Assessing visual acuity only",
D: "Assessing abdominal girth only"
},
answer: "B"
},
{
id: "q44",
question: "Which finding may indicate fluid volume overload?",
options: {
A: "Dry mucous membranes",
B: "Poor skin turgor",
C: "Orthostatic hypotension",
D: "Peripheral edema and rapid weight gain"
},
answer: "D"
},
{
id: "q45",
question: "Which assessment finding is most suggestive of dehydration?",
options: {
A: "Dry mucous membranes",
B: "Peripheral edema",
C: "Jugular venous distention",
D: "Crackles in the lungs"
},
answer: "A"
},

/* =========================
   PAGE 10 (q46–q50)
========================= */
{
id: "q46",
question: "Which assessment finding may indicate orthostatic hypotension?",
options: {
A: "Blood pressure increases when standing",
B: "Blood pressure remains unchanged",
C: "Blood pressure decreases after moving from lying to standing",
D: "Pulse decreases significantly while standing"
},
answer: "C"
},
{
id: "q47",
question: "When assessing orthostatic vital signs, what should the nurse do?",
options: {
A: "Measure vital signs only after exercise",
B: "Compare vital signs in different positions while monitoring for symptoms",
C: "Ask the client to stand immediately without assistance",
D: "Measure temperature after standing"
},
answer: "B"
},
{
id: "q48",
question: "Which abdominal assessment sequence is correct?",
options: {
A: "Inspection, auscultation, percussion, palpation",
B: "Palpation, percussion, inspection, auscultation",
C: "Auscultation, palpation, inspection, percussion",
D: "Percussion, palpation, auscultation, inspection"
},
answer: "A"
},
{
id: "q49",
question: "Why is auscultation performed before palpation during an abdominal assessment?",
options: {
A: "Palpation increases blood pressure",
B: "Palpation can alter bowel sounds",
C: "Auscultation causes abdominal pain",
D: "Palpation makes the abdomen easier to visualize"
},
answer: "B"
},
{
id: "q50",
question: "Which abdominal finding should the nurse report immediately?",
options: {
A: "Soft, nontender abdomen",
B: "Active bowel sounds",
C: "Rigid, board-like abdomen with severe pain",
D: "Mild hunger before a meal"
},
answer: "C"
},

/* =========================
   PAGE 11 (q51–q55)
========================= */
{
id: "q51",
question: "Which finding is considered a normal abdominal assessment finding?",
options: {
A: "Soft and nontender abdomen",
B: "Rigid abdomen",
C: "Rebound tenderness",
D: "Severe localized guarding"
},
answer: "A"
},
{
id: "q52",
question: "Which finding may indicate gastrointestinal obstruction?",
options: {
A: "Normal appetite",
B: "Soft abdomen without discomfort",
C: "Normal bowel movements",
D: "Abdominal distention with vomiting and altered bowel sounds"
},
answer: "D"
},
{
id: "q53",
question: "When assessing the abdomen, what should the nurse observe first?",
options: {
A: "Skin color and abdominal contour",
B: "Deep tenderness",
C: "Rebound tenderness",
D: "Organ size by palpation"
},
answer: "A"
},
{
id: "q54",
question: "Which finding suggests possible ascites?",
options: {
A: "Scaphoid abdomen",
B: "Increased abdominal girth with fluid-related distention",
C: "Flat abdomen after eating",
D: "Localized abdominal bruising only"
},
answer: "B"
},
{
id: "q55",
question: "Which bowel sound finding should prompt further assessment?",
options: {
A: "Normal active bowel sounds",
B: "Bowel sounds present in all quadrants",
C: "Persistent absence of bowel sounds after appropriate assessment",
D: "Occasional bowel sounds"
},
answer: "C"
},

/* =========================
   PAGE 12 (q56–q60)
========================= */
{
id: "q56",
question: "Which assessment finding is associated with urinary retention?",
options: {
A: "Distended lower abdomen with difficulty voiding",
B: "Clear urine with normal output",
C: "Frequent normal-volume urination",
D: "Nocturnal sweating"
},
answer: "A"
},
{
id: "q57",
question: "Which information is most important when assessing urinary elimination?",
options: {
A: "Favorite beverage",
B: "Frequency, amount, color, odor, and difficulty with urination",
C: "Preferred sleeping position",
D: "Usual exercise duration only"
},
answer: "B"
},
{
id: "q58",
question: "Which urine finding should the nurse report?",
options: {
A: "Pale yellow urine",
B: "Clear urine",
C: "Small variation in urine color related to hydration",
D: "Visible blood in the urine without an expected explanation"
},
answer: "D"
},
{
id: "q59",
question: "Which finding may indicate impaired kidney function?",
options: {
A: "Adequate urine output",
B: "Clear urine",
C: "Marked decrease in urine output",
D: "Normal hydration"
},
answer: "C"
},
{
id: "q60",
question: "Which assessment finding is most concerning in a client with decreased urine output?",
options: {
A: "Urine output suddenly falls to a very low level",
B: "Urine is pale yellow",
C: "Client voids without difficulty",
D: "Client reports normal urinary frequency"
},
answer: "A"
},

/* =========================
   PAGE 13 (q61–q65)
========================= */
{
id: "q61",
question: "Which technique is most appropriate for assessing a client's level of consciousness?",
options: {
A: "Ask the client to identify the current location and time",
B: "Assess only the client's blood pressure",
C: "Inspect the client's skin",
D: "Measure abdominal circumference"
},
answer: "A"
},
{
id: "q62",
question: "A client who was previously alert is now difficult to arouse. What should the nurse do first?",
options: {
A: "Document the finding at the end of the shift",
B: "Reassess the client and immediately evaluate airway, breathing, and circulation",
C: "Ask the family to leave the room",
D: "Offer food"
},
answer: "B"
},
{
id: "q63",
question: "Which assessment evaluates orientation?",
options: {
A: "Ask the client to squeeze both hands",
B: "Ask the client to identify person, place, time, and situation",
C: "Assess pedal pulses",
D: "Measure respiratory depth"
},
answer: "B"
},
{
id: "q64",
question: "Which pupil finding requires immediate attention?",
options: {
A: "Pupils equal and reactive to light",
B: "Pupils constrict with light",
C: "New unequal pupils accompanied by a change in consciousness",
D: "Pupils equal in size"
},
answer: "C"
},
{
id: "q65",
question: "Which assessment is used to evaluate motor strength?",
options: {
A: "Ask the client to push and pull against resistance",
B: "Ask the client to identify odors",
C: "Inspect the skin",
D: "Auscultate the lungs"
},
answer: "A"
},

/* =========================
   PAGE 14 (q66–q70)
========================= */
{
id: "q66",
question: "Which finding suggests unilateral weakness?",
options: {
A: "Equal hand grips",
B: "Symmetric movement of all extremities",
C: "Strong bilateral leg movement",
D: "One-sided decrease in motor strength"
},
answer: "D"
},
{
id: "q67",
question: "Which assessment finding is commonly associated with a stroke?",
options: {
A: "Sudden facial droop and unilateral weakness",
B: "Gradual improvement in speech",
C: "Normal coordination",
D: "Symmetric pupil response"
},
answer: "A"
},
{
id: "q68",
question: "Which assessment is appropriate for evaluating cranial nerve function related to facial movement?",
options: {
A: "Ask the client to shrug the shoulders",
B: "Ask the client to smile and show the teeth",
C: "Ask the client to identify a smell",
D: "Ask the client to swallow water"
},
answer: "B"
},
{
id: "q69",
question: "Which finding indicates impaired balance or coordination?",
options: {
A: "Steady gait",
B: "Symmetric hand grips",
C: "Unsteady gait with difficulty maintaining balance",
D: "Normal rapid alternating movements"
},
answer: "C"
},
{
id: "q70",
question: "When assessing a client's gait, which finding requires further evaluation?",
options: {
A: "Stable gait",
B: "Symmetric arm movement",
C: "Appropriate foot placement",
D: "New shuffling gait with frequent loss of balance"
},
answer: "D"
},

/* =========================
   PAGE 15 (q71–q75)
========================= */
{
id: "q71",
question: "Which assessment is most appropriate for evaluating visual acuity?",
options: {
A: "Snellen-type visual acuity testing",
B: "Palpating the carotid artery",
C: "Auscultating bowel sounds",
D: "Assessing capillary refill"
},
answer: "A"
},
{
id: "q72",
question: "Which finding may indicate impaired vision?",
options: {
A: "Reading without difficulty",
B: "Normal pupil response",
C: "New difficulty seeing objects clearly",
D: "Symmetric eye movement"
},
answer: "C"
},
{
id: "q73",
question: "Which assessment technique is appropriate when evaluating hearing?",
options: {
A: "Assess the client's ability to hear spoken words or use appropriate hearing tests",
B: "Measure abdominal circumference",
C: "Percuss the lungs",
D: "Assess bowel sounds"
},
answer: "A"
},
{
id: "q74",
question: "Which finding should the nurse investigate further during a hearing assessment?",
options: {
A: "Client responds appropriately to normal conversation",
B: "Client reports new unilateral hearing loss",
C: "Client hears both low and normal conversational sounds",
D: "Client understands questions"
},
answer: "B"
},
{
id: "q75",
question: "Which assessment is used to evaluate the integrity of the cranial nerve responsible for smell?",
options: {
A: "Ask the client to identify a familiar odor",
B: "Ask the client to smile",
C: "Ask the client to shrug the shoulders",
D: "Ask the client to follow a finger with the eyes"
},
answer: "A"
},

/* =========================
   PAGE 16 (q76–q80)
========================= */
{
id: "q76",
question: "Which skin finding requires prompt evaluation?",
options: {
A: "Evenly distributed pigmentation",
B: "New rapidly changing pigmented lesion",
C: "Intact skin",
D: "Normal skin temperature"
},
answer: "B"
},
{
id: "q77",
question: "When assessing a mole, which characteristic is concerning?",
options: {
A: "Symmetric shape",
B: "Uniform color",
C: "Smooth border",
D: "Asymmetry with irregular borders and changing appearance"
},
answer: "D"
},
{
id: "q78",
question: "Which finding may indicate impaired skin integrity?",
options: {
A: "Intact skin",
B: "Normal pigmentation",
C: "Open area with drainage",
D: "Warm, dry skin"
},
answer: "C"
},
{
id: "q79",
question: "Which assessment is most important when evaluating a pressure injury?",
options: {
A: "Location, size, tissue appearance, drainage, and surrounding skin",
B: "Client's favorite food",
C: "Respiratory rate only",
D: "Blood pressure only"
},
answer: "A"
},
{
id: "q80",
question: "Which finding suggests possible infection of a wound?",
options: {
A: "Clean wound edges",
B: "Minimal expected drainage",
C: "Increasing redness, warmth, swelling, and purulent drainage",
D: "Intact surrounding skin"
},
answer: "C"
},

/* =========================
   PAGE 17 (q81–q85)
========================= */
{
id: "q81",
question: "Which assessment is most important when evaluating a client's risk for falls?",
options: {
A: "Favorite foods",
B: "Gait, balance, medications, vision, and environmental hazards",
C: "Hair color",
D: "Preferred sleeping time"
},
answer: "B"
},
{
id: "q82",
question: "Which client is at greatest risk for falling?",
options: {
A: "Client with steady gait and normal vision",
B: "Client who walks independently",
C: "Client with new dizziness and an unsteady gait",
D: "Client with normal muscle strength"
},
answer: "C"
},
{
id: "q83",
question: "Which finding indicates a need for additional safety assessment?",
options: {
A: "Client reports feeling dizzy when standing",
B: "Client has a stable gait",
C: "Client uses prescribed assistive equipment correctly",
D: "Client has adequate lighting"
},
answer: "A"
},
{
id: "q84",
question: "Which assessment is most appropriate for determining nutritional status?",
options: {
A: "Assess weight trends, dietary intake, appetite, and relevant physical findings",
B: "Assess only blood pressure",
C: "Assess only pulse rate",
D: "Assess only skin temperature"
},
answer: "A"
},
{
id: "q85",
question: "Which finding may suggest malnutrition?",
options: {
A: "Stable weight",
B: "Adequate dietary intake",
C: "Unintentional weight loss and muscle wasting",
D: "Normal appetite"
},
answer: "C"
},

/* =========================
   PAGE 18 (q86–q90)
========================= */
{
id: "q86",
question: "Which assessment finding is most concerning in an older adult?",
options: {
A: "Gradual decrease in height over many years",
B: "Sudden new confusion",
C: "Mildly dry skin",
D: "Slightly slower gait without change"
},
answer: "B"
},
{
id: "q87",
question: "Which statement about assessing older adults is correct?",
options: {
A: "New confusion should always be considered normal aging",
B: "Pain assessment is unnecessary if the client does not complain",
C: "Functional ability should be included in the assessment",
D: "Medication review is not important"
},
answer: "C"
},
{
id: "q88",
question: "Which question best assesses functional status?",
options: {
A: "Can you independently bathe, dress, eat, and use the toilet?",
B: "What is your favorite television program?",
C: "What was your childhood occupation?",
D: "What is your favorite color?"
},
answer: "A"
},
{
id: "q89",
question: "Which assessment evaluates an instrumental activity of daily living?",
options: {
A: "Eating",
B: "Bathing",
C: "Using the telephone or managing medications",
D: "Toileting"
},
answer: "C"
},
{
id: "q90",
question: "Which finding may indicate cognitive impairment?",
options: {
A: "Correctly recalling recent events",
B: "Consistent orientation",
C: "Following instructions appropriately",
D: "New difficulty remembering familiar information"
},
answer: "D"
},

/* =========================
   PAGE 19 (q91–q95)
========================= */
{
id: "q91",
question: "Which tool is commonly used to screen for depression symptoms?",
options: {
A: "A validated depression screening questionnaire",
B: "Blood pressure cuff",
C: "Pulse oximeter",
D: "Peak flow meter"
},
answer: "A"
},
{
id: "q92",
question: "Which assessment finding may indicate anxiety?",
options: {
A: "Relaxed posture",
B: "Calm speech",
C: "Restlessness and excessive worry",
D: "Stable mood"
},
answer: "C"
},
{
id: "q93",
question: "When assessing a client's mental status, which area should the nurse evaluate?",
options: {
A: "Appearance, behavior, speech, mood, thought process, cognition, and perception",
B: "Only blood pressure",
C: "Only respiratory rate",
D: "Only bowel sounds"
},
answer: "A"
},
{
id: "q94",
question: "Which finding may suggest impaired thought process?",
options: {
A: "Logical and organized speech",
B: "Clear answers to questions",
C: "Appropriate responses",
D: "Disorganized speech with unrelated responses"
},
answer: "D"
},
{
id: "q95",
question: "Which assessment finding requires immediate safety-focused follow-up?",
options: {
A: "Client reports mild situational anxiety",
B: "Client appears tired",
C: "Client reports thoughts of harming another person",
D: "Client reports difficulty sleeping"
},
answer: "C"
},

/* =========================
   PAGE 20 (q96–q100)
========================= */
{
id: "q96",
question: "Which assessment is appropriate when evaluating pain in a nonverbal client?",
options: {
A: "Use an appropriate behavioral or observational pain assessment tool",
B: "Assume the client has no pain",
C: "Wait until the client speaks",
D: "Assess only blood pressure"
},
answer: "A"
},
{
id: "q97",
question: "Which behavior may indicate pain in a nonverbal client?",
options: {
A: "Relaxed facial expression",
B: "Guarding and grimacing",
C: "Normal sleep pattern",
D: "Calm posture"
},
answer: "B"
},
{
id: "q98",
question: "Which question best assesses the impact of pain on function?",
options: {
A: "What color is the pain?",
B: "Does anyone else have this pain?",
C: "How does the pain affect your ability to walk, sleep, or perform daily activities?",
D: "What is your favorite medication?"
},
answer: "C"
},
{
id: "q99",
question: "Which finding indicates that a pain intervention may have been effective?",
options: {
A: "The client reports improved comfort and increased ability to function",
B: "The nurse assumes the medication worked",
C: "The client becomes more restless",
D: "The pain score is not reassessed"
},
answer: "A"
},
{
id: "q100",
question: "Which principle is most important when assessing pain?",
options: {
A: "The nurse determines the severity based only on facial expression",
B: "Pain should be assessed only when vital signs are abnormal",
C: "The client's self-report is an important source of pain information",
D: "Pain intensity is the same for every client"
},
answer: "C"
},

/* =========================
   PAGE 21 (q101–q105)
========================= */
{
id: "q101",
question: "Which assessment finding requires the nurse to prioritize airway assessment?",
options: {
A: "New hoarseness with difficulty breathing",
B: "Mild headache",
C: "Chronic knee pain",
D: "Mild constipation"
},
answer: "A"
},
{
id: "q102",
question: "A client suddenly becomes short of breath. Which assessment should the nurse perform first?",
options: {
A: "Assess bowel sounds",
B: "Evaluate airway and breathing",
C: "Obtain a dietary history",
D: "Assess sleep habits"
},
answer: "B"
},
{
id: "q103",
question: "Which finding is most concerning during an initial assessment?",
options: {
A: "Mild fatigue",
B: "Chronic back discomfort",
C: "New confusion accompanied by low oxygen saturation",
D: "Decreased appetite for one day"
},
answer: "C"
},
{
id: "q104",
question: "Which finding may indicate inadequate tissue oxygenation?",
options: {
A: "Warm skin with normal mentation",
B: "Normal oxygen saturation",
C: "Clear speech",
D: "Cyanosis with altered level of consciousness"
},
answer: "D"
},
{
id: "q105",
question: "Which assessment finding should be addressed first?",
options: {
A: "Client with a new change in airway patency",
B: "Client reporting chronic mild joint pain",
C: "Client requesting a snack",
D: "Client asking about discharge time"
},
answer: "A"
},

/* =========================
   PAGE 22 (q106–q110)
========================= */
{
id: "q106",
question: "Which technique helps ensure accurate assessment findings?",
options: {
A: "Use the same assessment sequence consistently when appropriate",
B: "Skip abnormal findings to save time",
C: "Rely only on the client's previous chart",
D: "Record findings before assessing the client"
},
answer: "A"
},
{
id: "q107",
question: "Which action is appropriate when the nurse identifies an unexpected assessment finding?",
options: {
A: "Ignore it if the client appears comfortable",
B: "Validate the finding and determine whether further assessment is needed",
C: "Immediately document a diagnosis",
D: "Tell the client that the finding is definitely serious"
},
answer: "B"
},
{
id: "q108",
question: "Which documentation is most appropriate?",
options: {
A: "Client looks bad",
B: "Client seems uncomfortable",
C: "Client appears to be getting worse",
D: "Respiratory rate 30/min; client using accessory muscles and reporting dyspnea"
},
answer: "D"
},
{
id: "q109",
question: "Which documentation principle should the nurse follow?",
options: {
A: "Use objective, specific, and measurable descriptions",
B: "Use vague statements",
C: "Record personal assumptions as facts",
D: "Document only abnormal vital signs"
},
answer: "A"
},
{
id: "q110",
question: "Which statement represents appropriate documentation of a wound?",
options: {
A: "Wound looks terrible",
B: "Wound is probably infected",
C: "Wound measures 3 cm × 2 cm with moderate serous drainage",
D: "Wound appears normal"
},
answer: "C"
},

/* =========================
   PAGE 23 (q111–q115)
========================= */
{
id: "q111",
question: "Which assessment finding should the nurse compare with previous documentation?",
options: {
A: "A new change in the client's neurological status",
B: "The client's unchanged hair color",
C: "The client's preferred meal",
D: "The client's unchanged height"
},
answer: "A"
},
{
id: "q112",
question: "Why is trending assessment data important?",
options: {
A: "It eliminates the need for physical assessment",
B: "It helps identify changes in the client's condition over time",
C: "It replaces communication with the client",
D: "It prevents documentation"
},
answer: "B"
},
{
id: "q113",
question: "A nurse notices that a client's respiratory rate has increased from 18/min to 30/min. What is the priority?",
options: {
A: "Ignore the change because both values are documented",
B: "Assess the client's respiratory status and determine the cause",
C: "Wait until the next shift",
D: "Ask the client about dietary preferences"
},
answer: "B"
},
{
id: "q114",
question: "Which finding represents a significant change that should be communicated promptly?",
options: {
A: "Stable vital signs",
B: "Improved appetite",
C: "New onset of confusion and weakness",
D: "Normal urine color"
},
answer: "C"
},
{
id: "q115",
question: "Which action demonstrates appropriate clinical judgment during assessment?",
options: {
A: "Recognize abnormal findings, validate them, and prioritize appropriate follow-up",
B: "Record every abnormal finding as a diagnosis",
C: "Ignore findings outside the nurse's specialty",
D: "Wait for the client to identify every problem"
},
answer: "A"
},

/* =========================
   PAGE 24 (q116–q120)
========================= */
{
id: "q116",
question: "Which assessment finding requires the most immediate intervention?",
options: {
A: "Client reports mild chronic fatigue",
B: "Client has a new onset of severe difficulty breathing",
C: "Client reports mild constipation",
D: "Client has dry skin"
},
answer: "B"
},
{
id: "q117",
question: "Which action is most important before beginning a physical assessment?",
options: {
A: "Maintain privacy, explain the procedure, and obtain appropriate consent",
B: "Immediately begin palpation",
C: "Ask the client to remove all clothing without explanation",
D: "Document the findings before assessment"
},
answer: "A"
},
{
id: "q118",
question: "A client reports dizziness when standing. Which assessment is most appropriate?",
options: {
A: "Assess orthostatic vital signs while maintaining client safety",
B: "Ask the client to walk rapidly",
C: "Tell the client to ignore the dizziness",
D: "Measure only the temperature"
},
answer: "A"
},
{
id: "q119",
question: "Which finding should cause the nurse to reassess the client's neurological status immediately?",
options: {
A: "Stable orientation",
B: "Normal hand grips",
C: "New unilateral weakness and difficulty speaking",
D: "Normal pupil response"
},
answer: "C"
},
{
id: "q120",
question: "A nurse completes a comprehensive assessment and identifies several abnormal findings. What is the best next step?",
options: {
A: "Document everything at the end of the week",
B: "Prioritize findings according to clinical urgency and initiate appropriate follow-up",
C: "Ignore findings that are not painful",
D: "Wait for the client to request assistance"
},
answer: "B"
}
];
