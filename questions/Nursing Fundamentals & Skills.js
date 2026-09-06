const QUESTIONS = [
/* =========================
   PAGE 1 (q1–q5)
========================= */
{
id: "q1",
question: "A nurse is preparing to provide care to a client. Which action should the nurse take first to promote client safety?",
options: {
A: "Review the client's meal preference",
B: "Verify the client's identity using two identifiers",
C: "Ask the client about discharge plans",
D: "Document the planned intervention"
},
answer: "B"
},
{
id: "q2",
question: "Which action is most important before performing a nursing procedure?",
options: {
A: "Explain the procedure and provide appropriate privacy",
B: "Gather equipment after beginning the procedure",
C: "Ask another client to assist",
D: "Document the procedure before performing it"
},
answer: "A"
},
{
id: "q3",
question: "Which nursing action best demonstrates respect for client autonomy?",
options: {
A: "Making decisions for the client",
B: "Allowing the family to make all decisions",
C: "Providing information so the client can make informed choices",
D: "Withholding information to prevent anxiety"
},
answer: "C"
},
{
id: "q4",
question: "Which intervention is most appropriate for maintaining client privacy during a physical examination?",
options: {
A: "Leave the door open for convenience",
B: "Expose the entire body throughout the examination",
C: "Ask visitors to remain in the room",
D: "Expose only the area being examined"
},
answer: "D"
},
{
id: "q5",
question: "Which action is an example of maintaining professional boundaries?",
options: {
A: "Accepting an expensive personal gift from a client",
B: "Maintaining a therapeutic relationship focused on the client's needs",
C: "Sharing personal financial problems with the client",
D: "Connecting with the client through a personal social media account"
},
answer: "B"
},

/* =========================
   PAGE 2 (q6–q10)
========================= */
{
id: "q6",
question: "Which statement best describes informed consent?",
options: {
A: "The nurse independently explains all surgical risks and obtains the provider's consent",
B: "The client agrees to treatment after receiving appropriate information about the procedure",
C: "The family can always provide consent for a competent adult",
D: "Consent is unnecessary for invasive procedures"
},
answer: "B"
},
{
id: "q7",
question: "A nurse is preparing to administer medication. Which action is essential before administration?",
options: {
A: "Verify the medication order and client identity",
B: "Ask another client whether the medication looks correct",
C: "Administer the medication before checking allergies",
D: "Document administration before giving the medication"
},
answer: "A"
},
{
id: "q8",
question: "Which action demonstrates effective therapeutic communication?",
options: {
A: "Changing the topic when the client expresses concern",
B: "Giving false reassurance",
C: "Using medical terminology whenever possible",
D: "Using active listening and clarifying the client's statements"
},
answer: "D"
},
{
id: "q9",
question: "Which response by the nurse is most therapeutic when a client says, 'I am afraid about my surgery'?",
options: {
A: "There is nothing to worry about.",
B: "Everyone feels that way.",
C: "Tell me more about what concerns you.",
D: "You should try not to think about it."
},
answer: "C"
},
{
id: "q10",
question: "Which nursing action best promotes effective communication with a client who has limited English proficiency?",
options: {
A: "Use a qualified medical interpreter",
B: "Ask a young family member to translate",
C: "Speak louder in English",
D: "Avoid discussing complex information"
},
answer: "A"
},

/* =========================
   PAGE 3 (q11–q15)
========================= */
{
id: "q11",
question: "Which infection-control action is most effective for preventing transmission of microorganisms?",
options: {
A: "Wearing gloves for every client interaction",
B: "Performing hand hygiene at appropriate times",
C: "Using antibiotics routinely",
D: "Keeping all clients in isolation"
},
answer: "B"
},
{
id: "q12",
question: "When should the nurse perform hand hygiene?",
options: {
A: "Only when hands appear visibly dirty",
B: "Only after removing gloves",
C: "Before and after appropriate client contact and procedures",
D: "Only before meals"
},
answer: "C"
},
{
id: "q13",
question: "A nurse removes gloves after caring for a client. What should the nurse do next?",
options: {
A: "Perform hand hygiene",
B: "Touch the computer immediately",
C: "Put on another pair of gloves without hand hygiene",
D: "Leave the room without cleaning the hands"
},
answer: "A"
},
{
id: "q14",
question: "Which item is considered personal protective equipment?",
options: {
A: "Stethoscope",
B: "Blood pressure cuff",
C: "Hospital bed",
D: "Protective gown"
},
answer: "D"
},
{
id: "q15",
question: "Which precaution is appropriate for a client with an infection requiring contact precautions?",
options: {
A: "Use appropriate gown and gloves according to facility policy",
B: "Use only a surgical mask",
C: "Place the client in a negative-pressure room for every contact infection",
D: "Use no additional precautions"
},
answer: "A"
},

/* =========================
   PAGE 4 (q16–q20)
========================= */
{
id: "q16",
question: "Which action is appropriate when caring for a client on airborne precautions?",
options: {
A: "Use only gloves",
B: "Place the client in an appropriate airborne infection isolation room when indicated",
C: "Keep the client in a standard room with the door open",
D: "Use only eye protection"
},
answer: "B"
},
{
id: "q17",
question: "Which action helps prevent healthcare-associated infections?",
options: {
A: "Using the same equipment for all clients without cleaning",
B: "Reusing disposable supplies",
C: "Following aseptic technique during invasive procedures",
D: "Skipping hand hygiene when wearing gloves"
},
answer: "C"
},
{
id: "q18",
question: "Which statement about sterile technique is correct?",
options: {
A: "A sterile object that becomes wet may be considered contaminated",
B: "The outer edge of a sterile field is always sterile",
C: "Sterile supplies can be placed below waist level",
D: "The nurse may turn away from a sterile field without concern"
},
answer: "A"
},
{
id: "q19",
question: "Which action contaminates a sterile field?",
options: {
A: "Opening a sterile package away from the body",
B: "Keeping sterile items above waist level",
C: "Placing a sterile item on the sterile field",
D: "Reaching over the sterile field"
},
answer: "D"
},
{
id: "q20",
question: "Which action is appropriate when opening a sterile package?",
options: {
A: "Touch the inside of the package with bare hands",
B: "Open the first flap away from the body",
C: "Place the package directly on the floor",
D: "Reach across the sterile contents"
},
answer: "B"
},

/* =========================
   PAGE 5 (q21–q25)
========================= */
{
id: "q21",
question: "Which nursing intervention is most appropriate for preventing pressure injuries in an immobile client?",
options: {
A: "Reposition the client regularly and offload pressure areas",
B: "Massage reddened bony prominences vigorously",
C: "Keep the client in one position",
D: "Restrict fluid intake"
},
answer: "A"
},
{
id: "q22",
question: "Which finding should the nurse recognize as an early sign of pressure-related skin injury?",
options: {
A: "Intact skin with normal color",
B: "Persistent nonblanchable redness over a bony prominence",
C: "Warm hands",
D: "Dry hair"
},
answer: "B"
},
{
id: "q23",
question: "Which intervention is appropriate for reducing shear and friction?",
options: {
A: "Drag the client across the bed",
B: "Raise the head of the bed to the highest position continuously",
C: "Use appropriate lifting or repositioning equipment",
D: "Pull the client by the arms"
},
answer: "C"
},
{
id: "q24",
question: "Which client is at greatest risk for developing a pressure injury?",
options: {
A: "Client who walks independently",
B: "Client with intact mobility and adequate nutrition",
C: "Client who changes position independently",
D: "Client who is immobile and incontinent"
},
answer: "D"
},
{
id: "q25",
question: "Which intervention supports skin integrity in a client with urinary incontinence?",
options: {
A: "Cleanse the skin promptly and use appropriate moisture protection",
B: "Leave the skin exposed to urine",
C: "Scrub the skin vigorously",
D: "Limit all oral fluids"
},
answer: "A"
},

/* =========================
   PAGE 6 (q26–q30)
========================= */
{
id: "q26",
question: "Which intervention is most appropriate for preventing falls?",
options: {
A: "Keep the bed in the highest position",
B: "Keep frequently used items within the client's reach",
C: "Encourage the client to walk without assistance",
D: "Turn off all room lighting"
},
answer: "B"
},
{
id: "q27",
question: "A client is identified as a fall risk. Which action should the nurse take?",
options: {
A: "Place the call light within reach and reinforce its use",
B: "Keep the client unattended during transfers",
C: "Remove all assistive devices",
D: "Encourage the client to climb over bed rails"
},
answer: "A"
},
{
id: "q28",
question: "Which intervention is appropriate when transferring a weak client from bed to chair?",
options: {
A: "Ask the client to stand without assistance",
B: "Lock the wheelchair before the transfer",
C: "Leave the wheelchair unlocked for easier movement",
D: "Pull the client by the neck"
},
answer: "B"
},
{
id: "q29",
question: "Which device is commonly used to assist with safe transfer of a client who can bear some weight?",
options: {
A: "Suction catheter",
B: "Chest tube",
C: "Gait belt",
D: "Oxygen mask"
},
answer: "C"
},
{
id: "q30",
question: "Which action should the nurse take when a client reports dizziness before ambulation?",
options: {
A: "Assist the client to remain seated or in bed and assess the cause",
B: "Tell the client to walk quickly",
C: "Leave the client standing",
D: "Ignore the symptom"
},
answer: "A"
},

/* =========================
   PAGE 7 (q31–q35)
========================= */
{
id: "q31",
question: "Which body-mechanics principle should the nurse use when lifting or moving a client?",
options: {
A: "Keep the load far from the body",
B: "Bend at the waist",
C: "Use a wide base of support and bend the knees",
D: "Twist the torso while lifting"
},
answer: "C"
},
{
id: "q32",
question: "Which action reduces the risk of nurse injury during client repositioning?",
options: {
A: "Use appropriate assistive equipment",
B: "Lift the client alone whenever possible",
C: "Twist while pulling",
D: "Keep the bed at floor level"
},
answer: "A"
},
{
id: "q33",
question: "Which position is commonly used to facilitate lung expansion in a client experiencing dyspnea?",
options: {
A: "Flat supine",
B: "High-Fowler's",
C: "Prone with the head flat",
D: "Trendelenburg"
},
answer: "B"
},
{
id: "q34",
question: "Which position is generally appropriate for administering a cleansing enema?",
options: {
A: "Right lateral",
B: "Supine",
C: "Left lateral",
D: "Prone"
},
answer: "C"
},
{
id: "q35",
question: "Which position may be used for a client experiencing hypotension when clinically appropriate and safe?",
options: {
A: "Flat or supine positioning with appropriate assessment",
B: "Standing",
C: "High-Fowler's without assessment",
D: "Sitting at the edge of the bed"
},
answer: "A"
},

/* =========================
   PAGE 8 (q36–q40)
========================= */
{
id: "q36",
question: "Which intervention is appropriate for preventing complications of immobility?",
options: {
A: "Encourage mobility and range-of-motion exercises as appropriate",
B: "Keep the client completely immobile",
C: "Restrict all repositioning",
D: "Avoid respiratory exercises"
},
answer: "A"
},
{
id: "q37",
question: "Which complication is associated with prolonged immobility?",
options: {
A: "Improved muscle strength",
B: "Deep vein thrombosis",
C: "Improved lung expansion",
D: "Increased bone density"
},
answer: "B"
},
{
id: "q38",
question: "Which intervention helps prevent venous stasis in an immobile client?",
options: {
A: "Encourage appropriate leg movement and ambulation",
B: "Keep the legs completely still",
C: "Place pillows directly behind the knees continuously",
D: "Restrict mobility"
},
answer: "A"
},
{
id: "q39",
question: "Which assessment finding may indicate a possible deep vein thrombosis?",
options: {
A: "Bilateral equal leg temperature",
B: "Sudden unilateral leg swelling and tenderness",
C: "Normal pedal pulses",
D: "Warm hands"
},
answer: "B"
},
{
id: "q40",
question: "Which intervention helps prevent respiratory complications associated with immobility?",
options: {
A: "Encourage appropriate repositioning, mobility, and deep-breathing exercises",
B: "Keep the client flat continuously",
C: "Restrict coughing",
D: "Avoid turning the client"
},
answer: "A"
},

/* =========================
   PAGE 9 (q41–q45)
========================= */
{
id: "q41",
question: "Which intervention is appropriate for promoting adequate nutrition?",
options: {
A: "Provide meals according to the prescribed diet and assess intake",
B: "Ignore the client's food preferences",
C: "Restrict food without an indication",
D: "Skip nutritional assessment"
},
answer: "A"
},
{
id: "q42",
question: "A client has difficulty swallowing. Which nursing intervention is appropriate?",
options: {
A: "Encourage rapid eating",
B: "Place the client flat during meals",
C: "Follow prescribed swallowing precautions and maintain appropriate positioning",
D: "Provide thin liquids regardless of recommendations"
},
answer: "C"
},
{
id: "q43",
question: "Which finding increases a client's risk for aspiration?",
options: {
A: "Alertness and intact swallowing",
B: "Difficulty swallowing with decreased level of consciousness",
C: "Normal gag and cough responses",
D: "Independent feeding without difficulty"
},
answer: "B"
},
{
id: "q44",
question: "Which action is appropriate when assisting a client with feeding?",
options: {
A: "Feed the client rapidly",
B: "Offer large amounts of food at once",
C: "Place the client in an appropriate upright position",
D: "Leave the client alone if swallowing is impaired"
},
answer: "C"
},
{
id: "q45",
question: "Which assessment finding may indicate dehydration?",
options: {
A: "Dry mucous membranes and decreased urine output",
B: "Peripheral edema",
C: "Jugular venous distention",
D: "Rapid weight gain"
},
answer: "A"
},

/* =========================
   PAGE 10 (q46–q50)
========================= */
{
id: "q46",
question: "Which intervention is appropriate for monitoring fluid balance?",
options: {
A: "Measure intake and output accurately",
B: "Estimate urine output visually",
C: "Record only oral intake",
D: "Record only intravenous fluids"
},
answer: "A"
},
{
id: "q47",
question: "Which finding should the nurse recognize as possible fluid volume overload?",
options: {
A: "Dry mucous membranes",
B: "Rapid weight gain and peripheral edema",
C: "Poor skin turgor",
D: "Decreased jugular venous pressure"
},
answer: "B"
},
{
id: "q48",
question: "Which action is appropriate when measuring urine output from a urinary drainage bag?",
options: {
A: "Measure the urine using an appropriate calibrated container",
B: "Estimate the amount by looking at the bag",
C: "Empty the bag without measuring",
D: "Record the client's fluid intake as urine output"
},
answer: "A"
},
{
id: "q49",
question: "Which finding requires prompt attention in a client with an indwelling urinary catheter?",
options: {
A: "Urine flowing freely into the drainage bag",
B: "Drainage bag below bladder level",
C: "No urine output with lower abdominal discomfort",
D: "Clear tubing"
},
answer: "C"
},
{
id: "q50",
question: "Which intervention helps reduce the risk of catheter-associated urinary tract infection?",
options: {
A: "Maintain a closed drainage system and appropriate catheter care",
B: "Disconnect the tubing frequently",
C: "Keep the drainage bag above bladder level",
D: "Irrigate the catheter routinely without an indication"
},
answer: "A"
},

/* =========================
   PAGE 11 (q51–q55)
========================= */
{
id: "q51",
question: "Which intervention is appropriate for preventing constipation in a client without contraindications?",
options: {
A: "Encourage appropriate fluids, fiber, and physical activity",
B: "Restrict fluids",
C: "Encourage prolonged bed rest",
D: "Avoid dietary fiber"
},
answer: "A"
},
{
id: "q52",
question: "Which finding may indicate fecal impaction?",
options: {
A: "Regular formed stools",
B: "Abdominal comfort",
C: "Liquid stool leakage with rectal pressure or discomfort",
D: "Normal bowel pattern"
},
answer: "C"
},
{
id: "q53",
question: "Which intervention is appropriate when collecting a stool specimen?",
options: {
A: "Mix the specimen with toilet water",
B: "Use the appropriate clean specimen container and follow collection instructions",
C: "Collect the specimen from a diaper containing urine",
D: "Leave the specimen unlabeled"
},
answer: "B"
},
{
id: "q54",
question: "Which assessment finding may indicate gastrointestinal bleeding?",
options: {
A: "Black, tarry stool",
B: "Brown formed stool",
C: "Normal bowel sounds",
D: "Soft abdomen"
},
answer: "A"
},
{
id: "q55",
question: "Which nursing action is appropriate for a client experiencing diarrhea?",
options: {
A: "Assess hydration status and monitor stool characteristics",
B: "Restrict all fluids",
C: "Ignore electrolyte status",
D: "Encourage foods that worsen symptoms"
},
answer: "A"
},

/* =========================
   PAGE 12 (q56–q60)
========================= */
{
id: "q56",
question: "Which intervention promotes oral hygiene for a dependent client?",
options: {
A: "Position the client safely and provide appropriate oral care",
B: "Place the client flat if swallowing is impaired",
C: "Use excessive amounts of fluid",
D: "Skip oral care when the client is dependent"
},
answer: "A"
},
{
id: "q57",
question: "Which action is appropriate when providing oral care to an unconscious client?",
options: {
A: "Place the client flat and pour water into the mouth",
B: "Use appropriate positioning and suction as needed to reduce aspiration risk",
C: "Give the client a large amount of water",
D: "Leave the client unattended"
},
answer: "B"
},
{
id: "q58",
question: "Which intervention helps maintain oral health in a client with dry mouth?",
options: {
A: "Provide appropriate oral hygiene and prescribed or allowed moisture measures",
B: "Avoid oral care",
C: "Use alcohol-containing products routinely",
D: "Restrict all oral fluids without an indication"
},
answer: "A"
},
{
id: "q59",
question: "Which action is appropriate when assisting a client with bathing?",
options: {
A: "Expose the entire body throughout the bath",
B: "Maintain privacy and expose only the area being washed",
C: "Leave the client unattended when weak",
D: "Use very hot water"
},
answer: "B"
},
{
id: "q60",
question: "Which finding during bathing should the nurse report or further assess?",
options: {
A: "Intact skin",
B: "New redness over a bony prominence",
C: "Warm hands",
D: "Clean fingernails"
},
answer: "B"
},

/* =========================
   PAGE 13 (q61–q65)
========================= */
{
id: "q61",
question: "Which intervention is most appropriate for preventing postoperative atelectasis?",
options: {
A: "Encourage coughing, deep breathing, and incentive spirometry as prescribed",
B: "Keep the client on bed rest without repositioning",
C: "Restrict fluid intake",
D: "Avoid respiratory exercises"
},
answer: "A"
},
{
id: "q62",
question: "Which finding may indicate postoperative respiratory compromise?",
options: {
A: "Oxygen saturation within the prescribed target",
B: "Clear speech",
C: "New increasing dyspnea and decreased oxygen saturation",
D: "Normal respiratory effort"
},
answer: "C"
},
{
id: "q63",
question: "Which intervention is appropriate for preventing postoperative venous thromboembolism?",
options: {
A: "Encourage early mobility as appropriate",
B: "Keep the client immobile",
C: "Place pillows behind both knees continuously",
D: "Restrict leg movement"
},
answer: "A"
},
{
id: "q64",
question: "Which finding may indicate postoperative wound infection?",
options: {
A: "Clean incision with expected healing",
B: "Increasing redness, warmth, swelling, and purulent drainage",
C: "Dry intact dressing",
D: "Minimal expected discomfort"
},
answer: "B"
},
{
id: "q65",
question: "Which action should the nurse take if a postoperative client reports sudden shortness of breath and chest discomfort?",
options: {
A: "Encourage the client to walk",
B: "Treat it as an expected postoperative finding",
C: "Assess immediately and activate appropriate emergency response",
D: "Offer a meal"
},
answer: "C"
},

/* =========================
   PAGE 14 (q66–q70)
========================= */
{
id: "q66",
question: "Which intervention is appropriate for preventing complications of prolonged bed rest?",
options: {
A: "Reposition regularly and encourage mobility as tolerated",
B: "Keep the client in one position",
C: "Avoid range-of-motion exercises",
D: "Restrict oral fluids"
},
answer: "A"
},
{
id: "q67",
question: "Which range-of-motion exercise is performed by the nurse when the client cannot move the joint independently?",
options: {
A: "Active range of motion",
B: "Passive range of motion",
C: "Resistive exercise",
D: "Aerobic exercise"
},
answer: "B"
},
{
id: "q68",
question: "Which action is appropriate when performing passive range-of-motion exercises?",
options: {
A: "Move the joint beyond resistance",
B: "Perform rapid movements",
C: "Support the extremity and move the joint gently through its available range",
D: "Continue despite severe pain"
},
answer: "C"
},
{
id: "q69",
question: "Which finding during range-of-motion exercise requires the nurse to stop and reassess?",
options: {
A: "Smooth movement",
B: "Mild expected stiffness",
C: "Severe pain or new resistance",
D: "Normal joint movement"
},
answer: "C"
},
{
id: "q70",
question: "Which intervention is appropriate for maintaining mobility in a client who can ambulate safely?",
options: {
A: "Encourage regular ambulation as tolerated",
B: "Keep the client in bed",
C: "Discourage activity",
D: "Avoid assistive devices when prescribed"
},
answer: "A"
},

/* =========================
   PAGE 15 (q71–q75)
========================= */
{
id: "q71",
question: "Which action is appropriate when using a cane?",
options: {
A: "Hold the cane on the stronger side unless otherwise directed",
B: "Hold the cane behind the body",
C: "Place the cane several feet away",
D: "Use the cane only while sitting"
},
answer: "A"
},
{
id: "q72",
question: "Which instruction is appropriate when teaching a client to use a walker?",
options: {
A: "Move the walker excessively far ahead",
B: "Lift the walker and walk several steps at once",
C: "Advance the walker a safe distance, then step into it",
D: "Pull on the walker to stand"
},
answer: "C"
},
{
id: "q73",
question: "Which action is appropriate when assisting a client with crutches?",
options: {
A: "Place body weight on the axillae",
B: "Support weight through the hands and use the prescribed technique",
C: "Adjust crutches so they are extremely tight against the armpits",
D: "Use crutches without instruction"
},
answer: "B"
},
{
id: "q74",
question: "Which finding indicates that crutches may need adjustment?",
options: {
A: "Client supports weight through the hands",
B: "Client maintains appropriate posture",
C: "Client reports numbness in the hands or pressure under the arms",
D: "Client uses the prescribed gait"
},
answer: "C"
},
{
id: "q75",
question: "Which action should the nurse take before ambulating a client who has been on bed rest?",
options: {
A: "Assess strength, balance, and tolerance for position changes",
B: "Immediately ask the client to walk independently",
C: "Remove the client's footwear",
D: "Skip assessment if the client feels confident"
},
answer: "A"
},

/* =========================
   PAGE 16 (q76–q80)
========================= */
{
id: "q76",
question: "Which intervention is appropriate for oxygen administration?",
options: {
A: "Apply oxygen without assessing the client's condition",
B: "Verify the prescribed device and flow rate",
C: "Allow smoking near the oxygen source",
D: "Use petroleum-based products around oxygen equipment"
},
answer: "B"
},
{
id: "q77",
question: "Which safety instruction is essential for a client receiving oxygen?",
options: {
A: "Keep oxygen away from flames and ignition sources",
B: "Smoke only near an open window",
C: "Use candles near the oxygen device",
D: "Store oxygen next to a heat source"
},
answer: "A"
},
{
id: "q78",
question: "Which finding should the nurse report promptly in a client receiving oxygen?",
options: {
A: "Improved breathing",
B: "Oxygen saturation within the prescribed target",
C: "Increasing respiratory distress despite oxygen therapy",
D: "Comfortable breathing"
},
answer: "C"
},
{
id: "q79",
question: "Which nursing intervention promotes effective coughing and secretion clearance?",
options: {
A: "Encourage appropriate hydration, positioning, coughing, and deep breathing",
B: "Suppress all coughing",
C: "Keep the client flat continuously",
D: "Avoid mobility"
},
answer: "A"
},
{
id: "q80",
question: "Which finding may indicate ineffective airway clearance?",
options: {
A: "Clear breath sounds",
B: "Effective cough",
C: "No respiratory secretions",
D: "Coarse breath sounds with difficulty clearing secretions"
},
answer: "D"
},

/* =========================
   PAGE 17 (q81–q85)
========================= */
{
id: "q81",
question: "Which intervention is appropriate when suctioning a client?",
options: {
A: "Apply suction continuously while inserting the catheter",
B: "Use appropriate technique and limit suction duration according to policy",
C: "Insert the catheter forcefully",
D: "Suction without assessing the client's response"
},
answer: "B"
},
{
id: "q82",
question: "Which finding during suctioning requires the nurse to stop and reassess the client?",
options: {
A: "Improved secretion clearance",
B: "Brief coughing",
C: "Significant oxygen desaturation or distress",
D: "Clearer breath sounds"
},
answer: "C"
},
{
id: "q83",
question: "Which action is appropriate when caring for a client with a tracheostomy?",
options: {
A: "Keep appropriate emergency airway equipment available",
B: "Remove the tracheostomy tube routinely",
C: "Ignore changes in secretions",
D: "Apply excessive pressure around the stoma"
},
answer: "A"
},
{
id: "q84",
question: "Which finding around a tracheostomy stoma requires further assessment?",
options: {
A: "Intact skin",
B: "Small expected amount of secretions",
C: "New swelling, redness, or purulent drainage",
D: "Secure ties"
},
answer: "C"
},
{
id: "q85",
question: "Which intervention is appropriate for a client using an incentive spirometer?",
options: {
A: "Encourage slow, deep inhalation through the device",
B: "Ask the client to blow forcefully into the device",
C: "Use the device only once daily",
D: "Avoid coughing afterward"
},
answer: "A"
},

/* =========================
   PAGE 18 (q86–q90)
========================= */
{
id: "q86",
question: "Which nursing action is appropriate for managing a peripheral intravenous catheter?",
options: {
A: "Assess the site regularly for complications",
B: "Ignore pain at the insertion site",
C: "Cover signs of infiltration",
D: "Use the catheter indefinitely without assessment"
},
answer: "A"
},
{
id: "q87",
question: "Which finding suggests infiltration of a peripheral IV?",
options: {
A: "Warm, dry skin without swelling",
B: "Cool, pale, swollen tissue around the insertion site",
C: "Normal infusion without discomfort",
D: "Blood return when expected"
},
answer: "B"
},
{
id: "q88",
question: "Which finding may indicate phlebitis at an IV site?",
options: {
A: "Redness, warmth, and tenderness along the vein",
B: "Cool intact skin",
C: "No discomfort",
D: "Normal infusion without redness"
},
answer: "A"
},
{
id: "q89",
question: "Which action should the nurse take when an IV site shows signs of infiltration?",
options: {
A: "Increase the infusion rate",
B: "Apply pressure while continuing the infusion",
C: "Stop the infusion and follow facility protocol",
D: "Ignore the finding"
},
answer: "C"
},
{
id: "q90",
question: "Which assessment is important when administering an IV medication?",
options: {
A: "Verify medication compatibility and assess the IV site",
B: "Skip allergy verification",
C: "Administer without checking the order",
D: "Ignore the client's response"
},
answer: "A"
},

/* =========================
   PAGE 19 (q91–q95)
========================= */
{
id: "q91",
question: "Which principle is important when administering medications safely?",
options: {
A: "Use the medication rights and verify the order",
B: "Rely on memory instead of checking the medication",
C: "Skip identification if the client is familiar",
D: "Document before administration"
},
answer: "A"
},
{
id: "q92",
question: "Which medication administration error should the nurse recognize as a serious safety concern?",
options: {
A: "Administering a medication to the wrong client",
B: "Using two client identifiers",
C: "Checking allergies",
D: "Comparing the medication with the order"
},
answer: "A"
},
{
id: "q93",
question: "Which action is appropriate when a medication order appears unclear?",
options: {
A: "Guess the intended dose",
B: "Ask another client",
C: "Clarify the order before administration",
D: "Administer the usual dose"
},
answer: "C"
},
{
id: "q94",
question: "Which finding after medication administration requires prompt nursing assessment?",
options: {
A: "Expected therapeutic response",
B: "New difficulty breathing and facial swelling",
C: "Improved symptoms",
D: "No adverse effects"
},
answer: "B"
},
{
id: "q95",
question: "Which action helps reduce medication errors during handoff?",
options: {
A: "Provide an accurate medication list and communicate recent changes",
B: "Omit medications that seem unimportant",
C: "Rely on the client to remember everything",
D: "Avoid discussing high-risk medications"
},
answer: "A"
},

/* =========================
   PAGE 20 (q96–q100)
========================= */
{
id: "q96",
question: "Which intervention is appropriate when caring for a client experiencing acute pain?",
options: {
A: "Assess the pain and provide appropriate prescribed interventions",
B: "Tell the client to ignore the pain",
C: "Wait until pain becomes severe",
D: "Assume pain based only on vital signs"
},
answer: "A"
},
{
id: "q97",
question: "Which statement about pain assessment is correct?",
options: {
A: "Pain should be assessed only after medication",
B: "The client's report is an important source of pain information",
C: "Pain is always reflected by abnormal vital signs",
D: "Clients with chronic pain cannot accurately report pain"
},
answer: "B"
},
{
id: "q98",
question: "Which nonpharmacologic intervention may help reduce pain when appropriate?",
options: {
A: "Ignoring the client's pain",
B: "Using relaxation, positioning, or other appropriate comfort measures",
C: "Restricting communication",
D: "Keeping the client in an uncomfortable position"
},
answer: "B"
},
{
id: "q99",
question: "Which action should the nurse take after administering a pain medication?",
options: {
A: "Reassess pain and response within the appropriate timeframe",
B: "Assume the medication was effective",
C: "Avoid reassessing pain",
D: "Wait until discharge"
},
answer: "A"
},
{
id: "q100",
question: "Which finding may indicate that pain is interfering with recovery?",
options: {
A: "Client participates in activity as tolerated",
B: "Client sleeps comfortably",
C: "Severe pain prevents coughing, deep breathing, or mobility",
D: "Client reports adequate pain control"
},
answer: "C"
},

/* =========================
   PAGE 21 (q101–q105)
========================= */
{
id: "q101",
question: "Which nursing action is appropriate for promoting sleep?",
options: {
A: "Cluster care when possible and reduce unnecessary nighttime disturbances",
B: "Turn on bright lights throughout the night",
C: "Schedule all procedures during sleep",
D: "Encourage caffeine before bedtime"
},
answer: "A"
},
{
id: "q102",
question: "Which finding suggests sleep deprivation?",
options: {
A: "Improved concentration",
B: "Increased alertness",
C: "Daytime fatigue and difficulty concentrating",
D: "Normal energy level"
},
answer: "C"
},
{
id: "q103",
question: "Which intervention may promote sleep for a hospitalized client?",
options: {
A: "Maintain a quiet environment and establish a consistent bedtime routine when possible",
B: "Wake the client frequently without clinical need",
C: "Provide stimulating activities immediately before bedtime",
D: "Keep the television volume high"
},
answer: "A"
},
{
id: "q104",
question: "Which assessment is important when evaluating a client's sleep pattern?",
options: {
A: "Usual bedtime, sleep duration, awakenings, and factors affecting sleep",
B: "Only blood pressure",
C: "Only body temperature",
D: "Only dietary preferences"
},
answer: "A"
},
{
id: "q105",
question: "Which finding should prompt further assessment of a client's sleep?",
options: {
A: "Reports sleeping well",
B: "New severe daytime sleepiness affecting safety",
C: "Normal bedtime routine",
D: "Occasional brief awakening"
},
answer: "B"
},

/* =========================
   PAGE 22 (q106–q110)
========================= */
{
id: "q106",
question: "Which intervention is appropriate when providing end-of-life care?",
options: {
A: "Focus on comfort, dignity, and the client's preferences",
B: "Ignore family concerns",
C: "Perform unnecessary procedures",
D: "Avoid discussing comfort needs"
},
answer: "A"
},
{
id: "q107",
question: "Which nursing action demonstrates culturally sensitive care?",
options: {
A: "Assume all clients from the same culture have identical beliefs",
B: "Ask the client about preferences and beliefs relevant to care",
C: "Ignore cultural preferences",
D: "Require the client to follow the nurse's personal beliefs"
},
answer: "B"
},
{
id: "q108",
question: "Which intervention is appropriate when a client's cultural practice differs from the nurse's personal beliefs?",
options: {
A: "Respect the client's practice when it is safe and consistent with the plan of care",
B: "Tell the client the practice is incorrect",
C: "Refuse all care",
D: "Make decisions based on stereotypes"
},
answer: "A"
},
{
id: "q109",
question: "Which action is appropriate when caring for a client who requests a spiritual practice?",
options: {
A: "Dismiss the request",
B: "Assess the client's preference and facilitate appropriate spiritual support",
C: "Tell the client spirituality is unrelated to nursing",
D: "Impose the nurse's own beliefs"
},
answer: "B"
},
{
id: "q110",
question: "Which nursing intervention best supports emotional well-being?",
options: {
A: "Provide active listening, emotional support, and appropriate resources",
B: "Avoid discussing feelings",
C: "Change the subject whenever the client is distressed",
D: "Give personal advice about major life decisions"
},
answer: "A"
},

/* =========================
   PAGE 23 (q111–q115)
========================= */
{
id: "q111",
question: "Which action is appropriate when delegating a nursing task?",
options: {
A: "Delegate tasks without considering competence",
B: "Ensure the task is appropriate for the person's scope, competence, and client condition",
C: "Delegate all assessment activities",
D: "Delegate responsibility for the nursing process"
},
answer: "B"
},
{
id: "q112",
question: "Which task is generally appropriate for a nursing assistant when the client is stable and the task is within the assistant's training?",
options: {
A: "Initial nursing assessment",
B: "Developing the nursing care plan",
C: "Measuring routine vital signs",
D: "Evaluating response to medication"
},
answer: "C"
},
{
id: "q113",
question: "Which responsibility cannot be delegated by the registered nurse?",
options: {
A: "Routine hygiene assistance",
B: "Routine measurement of vital signs for a stable client",
C: "Initial nursing assessment and clinical judgment",
D: "Assistance with ambulation when appropriate"
},
answer: "C"
},
{
id: "q114",
question: "After delegating a task, what remains the nurse's responsibility?",
options: {
A: "Nothing once the task is delegated",
B: "Follow-up and evaluation of the client's response",
C: "Allowing the assistant to change the care plan",
D: "Avoiding communication with the assistant"
},
answer: "B"
},
{
id: "q115",
question: "Which situation requires the nurse to reconsider delegation?",
options: {
A: "Stable client requiring routine hygiene",
B: "Client with rapidly changing condition requiring nursing judgment",
C: "Stable client needing assistance with feeding",
D: "Stable client requiring routine vital signs"
},
answer: "B"
},

/* =========================
   PAGE 24 (q116–q120)
========================= */
{
id: "q116",
question: "A nurse finds a client on the floor next to the bed. What should the nurse do first?",
options: {
A: "Move the client back to bed immediately",
B: "Assess the client for injury and level of consciousness",
C: "Complete an incident report first",
D: "Leave the client to obtain supplies"
},
answer: "B"
},
{
id: "q117",
question: "Which action is appropriate when a client experiences a sudden change in condition?",
options: {
A: "Recognize the change, assess the client, and initiate appropriate escalation",
B: "Wait until the next shift",
C: "Document only and take no action",
D: "Ask the family to manage the problem"
},
answer: "A"
},
{
id: "q118",
question: "Which nursing action best demonstrates prioritization of care?",
options: {
A: "Complete the easiest task first",
B: "Prioritize the client with an immediate threat to airway, breathing, or circulation",
C: "Treat all findings as equally urgent",
D: "Prioritize requests according to arrival time only"
},
answer: "B"
},
{
id: "q119",
question: "A nurse receives four client requests. Which client should the nurse assess first?",
options: {
A: "Client requesting assistance choosing lunch",
B: "Client reporting sudden difficulty breathing",
C: "Client requesting a blanket",
D: "Client asking about visiting hours"
},
answer: "B"
},
{
id: "q120",
question: "Which action best reflects safe fundamental nursing practice?",
options: {
A: "Rely on routine without reassessing the client",
B: "Follow the care plan without considering changes",
C: "Combine assessment, safety, evidence-based interventions, communication, and evaluation",
D: "Complete tasks as quickly as possible regardless of client response"
},
answer: "C"
}
];
