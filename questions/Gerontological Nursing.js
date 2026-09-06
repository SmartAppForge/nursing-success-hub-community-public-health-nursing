const QUESTIONS = [
/* =========================
   PAGE 1 (q1–q5)
========================= */
{
id: "q1",
question: "Which physiologic change is commonly associated with normal aging?",
options: {
A: "Increased total body water",
B: "Decreased skin elasticity",
C: "Increased renal filtration",
D: "Increased muscle mass"
},
answer: "B"
},

{
id: "q2",
question: "Which statement by a nurse best describes healthy aging?",
options: {
A: "Aging inevitably causes severe cognitive impairment.",
B: "Older adults should avoid most physical activity.",
C: "Normal aging involves predictable changes but does not automatically cause disease.",
D: "Chronic illness is unavoidable in every older adult."
},
answer: "C"
},

{
id: "q3",
question: "Which age-related change increases an older adult's risk for dehydration?",
options: {
A: "Reduced thirst sensation",
B: "Increased total body water",
C: "Increased renal concentrating ability",
D: "Increased muscle mass"
},
answer: "A"
},

{
id: "q4",
question: "Which intervention is most appropriate when assessing an older adult's functional status?",
options: {
A: "Assess only laboratory values.",
B: "Assess ability to perform activities of daily living.",
C: "Assume independence based on age.",
D: "Focus only on medication use."
},
answer: "B"
},

{
id: "q5",
question: "Which change is commonly associated with aging of the cardiovascular system?",
options: {
A: "Increased arterial stiffness",
B: "Markedly increased cardiac reserve",
C: "Increased maximal heart rate",
D: "Improved vascular compliance"
},
answer: "A"
},

/* =========================
   PAGE 2 (q6–q10)
========================= */
{
id: "q6",
question: "An older adult reports difficulty seeing objects in dim lighting. Which age-related change may contribute to this problem?",
options: {
A: "Increased retinal sensitivity",
B: "Improved dark adaptation",
C: "Reduced ability to adapt to changes in lighting",
D: "Increased lens transparency"
},
answer: "C"
},

{
id: "q7",
question: "Which finding should the nurse recognize as potentially abnormal rather than an expected consequence of aging?",
options: {
A: "Slower reaction time",
B: "Mild decrease in skin elasticity",
C: "New onset confusion",
D: "Reduced muscle mass"
},
answer: "C"
},

{
id: "q8",
question: "Which intervention best promotes independence in an older adult?",
options: {
A: "Perform all activities for the client.",
B: "Encourage the client to perform tasks independently when safe.",
C: "Limit decision-making by the client.",
D: "Avoid assistive devices."
},
answer: "B"
},

{
id: "q9",
question: "Which assessment is particularly important because older adults may have atypical presentations of illness?",
options: {
A: "Functional and cognitive assessment",
B: "Hair color assessment",
C: "Height measurement only",
D: "Visual acuity only"
},
answer: "A"
},

{
id: "q10",
question: "Which factor most directly increases an older adult's risk for falls?",
options: {
A: "Good balance",
B: "Regular physical activity",
C: "Appropriate footwear",
D: "Impaired gait and balance"
},
answer: "D"
},

/* =========================
   PAGE 3 (q11–q15)
========================= */
{
id: "q11",
question: "Which intervention is appropriate for reducing fall risk in an older adult's home?",
options: {
A: "Remove loose rugs and improve lighting.",
B: "Keep frequently used objects on high shelves.",
C: "Encourage walking without assistive devices.",
D: "Dim all lights at night."
},
answer: "A"
},

{
id: "q12",
question: "An older adult takes several medications prescribed by different providers. Which concern should the nurse prioritize?",
options: {
A: "Polypharmacy and potential medication interactions",
B: "Increased appetite",
C: "Improved renal clearance",
D: "Increased medication tolerance"
},
answer: "A"
},

{
id: "q13",
question: "Why are older adults often more vulnerable to adverse medication effects?",
options: {
A: "They always take higher doses.",
B: "Age-related changes can affect drug metabolism and elimination.",
C: "They have increased liver function.",
D: "They have increased total body water."
},
answer: "B"
},

{
id: "q14",
question: "Which nursing intervention is most appropriate when an older adult has difficulty remembering multiple medications?",
options: {
A: "Provide a complex medication schedule.",
B: "Use a simplified schedule and appropriate medication-management aids.",
C: "Tell the client to stop unnecessary medications independently.",
D: "Avoid involving caregivers when appropriate."
},
answer: "B"
},

{
id: "q15",
question: "Which medication-related finding requires prompt follow-up in an older adult?",
options: {
A: "New dizziness after starting a medication",
B: "Stable blood pressure",
C: "Improved symptoms",
D: "Correct medication use"
},
answer: "A"
},

/* =========================
   PAGE 4 (q16–q20)
========================= */
{
id: "q16",
question: "Which age-related renal change can affect medication management?",
options: {
A: "Increased renal blood flow",
B: "Increased glomerular filtration",
C: "Reduced renal function",
D: "Increased nephron number"
},
answer: "C"
},

{
id: "q17",
question: "An older adult has several chronic conditions and multiple prescriptions. Which nursing action is most appropriate?",
options: {
A: "Review all medications for duplication and interactions.",
B: "Recommend stopping medications without provider consultation.",
C: "Ignore over-the-counter medications.",
D: "Assume all prescriptions remain appropriate indefinitely."
},
answer: "A"
},

{
id: "q18",
question: "Which teaching strategy is most effective when providing health information to an older adult with mild hearing impairment?",
options: {
A: "Speak while facing away from the client.",
B: "Speak clearly while facing the client.",
C: "Speak extremely rapidly.",
D: "Avoid written information."
},
answer: "B"
},

{
id: "q19",
question: "Which communication technique is appropriate when interacting with an older adult with hearing loss?",
options: {
A: "Shout directly into the client's ear.",
B: "Speak clearly at a normal pace and reduce background noise.",
C: "Speak only to the caregiver.",
D: "Use exaggerated mouth movements."
},
answer: "B"
},

{
id: "q20",
question: "An older adult with hearing impairment appears not to understand instructions. What should the nurse do first?",
options: {
A: "Assume cognitive impairment.",
B: "Repeat the instructions more quickly.",
C: "Assess whether hearing difficulty is interfering with communication.",
D: "End the teaching session."
},
answer: "C"
},

/* =========================
   PAGE 5 (q21–q25)
========================= */
{
id: "q21",
question: "Which finding is more suggestive of delirium than dementia?",
options: {
A: "Gradual cognitive decline over years",
B: "Stable memory impairment",
C: "Acute onset with fluctuating attention",
D: "Progressive loss of executive function"
},
answer: "C"
},

{
id: "q22",
question: "An older hospitalized adult suddenly becomes confused and inattentive. Which action should the nurse take?",
options: {
A: "Consider delirium and assess for underlying causes.",
B: "Assume the client has dementia.",
C: "Restrict all communication.",
D: "Ignore the change."
},
answer: "A"
},

{
id: "q23",
question: "Which condition can precipitate delirium in an older adult?",
options: {
A: "Stable chronic condition",
B: "Acute infection",
C: "Regular sleep",
D: "Familiar surroundings"
},
answer: "B"
},

{
id: "q24",
question: "Which intervention can help reduce delirium risk in hospitalized older adults?",
options: {
A: "Promote orientation, sleep, hydration, mobility, and use of needed sensory aids.",
B: "Keep the client isolated.",
C: "Avoid clocks and calendars.",
D: "Keep lights on continuously."
},
answer: "A"
},

{
id: "q25",
question: "Which finding is most consistent with dementia?",
options: {
A: "Sudden onset over several hours",
B: "Fluctuating attention caused by an acute illness",
C: "Progressive cognitive decline affecting daily function",
D: "Rapid improvement after hydration"
},
answer: "C"
},

/* =========================
   PAGE 6 (q26–q30)
========================= */
{
id: "q26",
question: "Which nursing intervention is appropriate for an older adult with dementia?",
options: {
A: "Maintain a consistent routine.",
B: "Frequently change the environment.",
C: "Give several instructions simultaneously.",
D: "Argue with incorrect statements."
},
answer: "A"
},

{
id: "q27",
question: "A client with dementia becomes agitated during bathing. Which approach is most appropriate?",
options: {
A: "Force the client to complete the bath.",
B: "Identify possible triggers and modify the approach.",
C: "Use complex explanations.",
D: "Increase environmental stimulation."
},
answer: "B"
},

{
id: "q28",
question: "Which communication strategy is best for a client with moderate dementia?",
options: {
A: "Use short, simple statements and allow adequate response time.",
B: "Ask several questions at once.",
C: "Use abstract concepts.",
D: "Correct every minor mistake."
},
answer: "A"
},

{
id: "q29",
question: "An older adult with dementia repeatedly asks the same question. What is the nurse's best response?",
options: {
A: "Tell the client to stop asking.",
B: "Respond calmly and provide reassurance.",
C: "Ignore the client completely.",
D: "Challenge the client about memory loss."
},
answer: "B"
},

{
id: "q30",
question: "Which environmental intervention promotes safety for a client with cognitive impairment?",
options: {
A: "Keep pathways clear and use appropriate identification cues.",
B: "Rearrange furniture frequently.",
C: "Remove all familiar objects.",
D: "Keep the environment completely dark."
},
answer: "A"
},

/* =========================
   PAGE 7 (q31–q35)
========================= */
{
id: "q31",
question: "Which nursing assessment is essential for an older adult at risk for malnutrition?",
options: {
A: "Food intake, weight trends, oral health, and ability to obtain food",
B: "Hair color only",
C: "Hearing only",
D: "Height only"
},
answer: "A"
},

{
id: "q32",
question: "Which factor may contribute to inadequate nutrition in older adults?",
options: {
A: "Dental problems",
B: "Adequate food access",
C: "Good appetite",
D: "Independent meal preparation"
},
answer: "A"
},

{
id: "q33",
question: "An older adult has difficulty chewing because of poorly fitting dentures. What should the nurse do?",
options: {
A: "Ignore the problem.",
B: "Assess nutritional impact and facilitate appropriate dental or dietary support.",
C: "Restrict food choices.",
D: "Recommend skipping meals."
},
answer: "B"
},

{
id: "q34",
question: "Which intervention can help prevent dehydration in an older adult?",
options: {
A: "Offer fluids regularly unless contraindicated.",
B: "Wait until thirst occurs.",
C: "Restrict fluids routinely.",
D: "Offer fluids only with meals."
},
answer: "A"
},

{
id: "q35",
question: "Which finding may indicate dehydration in an older adult?",
options: {
A: "New weakness and concentrated urine",
B: "Clear urine with adequate output",
C: "Moist mucous membranes",
D: "Stable weight"
},
answer: "A"
},

/* =========================
   PAGE 8 (q36–q40)
========================= */
{
id: "q36",
question: "Which gastrointestinal change may occur with normal aging?",
options: {
A: "Increased intestinal motility",
B: "Reduced gastrointestinal motility",
C: "Complete loss of digestion",
D: "Increased metabolic rate"
},
answer: "B"
},

{
id: "q37",
question: "Which intervention is appropriate for preventing constipation in an older adult when not contraindicated?",
options: {
A: "Encourage adequate fluids, fiber, and physical activity.",
B: "Encourage prolonged bed rest.",
C: "Restrict dietary fiber.",
D: "Use laxatives routinely without assessment."
},
answer: "A"
},

{
id: "q38",
question: "An older adult reports constipation. Which assessment is most important?",
options: {
A: "Bowel pattern, diet, fluid intake, medications, and activity",
B: "Hair texture",
C: "Hearing acuity only",
D: "Visual acuity only"
},
answer: "A"
},

{
id: "q39",
question: "Which medication class commonly contributes to constipation in older adults?",
options: {
A: "Opioids",
B: "Some stool softeners",
C: "Fiber supplements",
D: "Some hydration therapies"
},
answer: "A"
},

{
id: "q40",
question: "Which intervention helps reduce aspiration risk in an older adult with swallowing difficulty?",
options: {
A: "Follow prescribed swallowing strategies and maintain appropriate positioning during meals.",
B: "Feed the client while lying flat.",
C: "Rush meals.",
D: "Provide large bites."
},
answer: "A"
},

/* =========================
   PAGE 9 (q41–q45)
========================= */
{
id: "q41",
question: "Which age-related change can increase the risk of aspiration?",
options: {
A: "Improved swallowing reflex",
B: "Changes in swallowing coordination",
C: "Increased saliva production",
D: "Increased respiratory reserve"
},
answer: "B"
},

{
id: "q42",
question: "An older adult coughs repeatedly while eating. What should the nurse do?",
options: {
A: "Continue feeding rapidly.",
B: "Stop the meal temporarily and assess swallowing safety.",
C: "Give larger bites.",
D: "Have the client lie down."
},
answer: "B"
},

{
id: "q43",
question: "Which intervention is appropriate for promoting mobility in older adults?",
options: {
A: "Encourage activity appropriate to the individual's condition and abilities.",
B: "Maintain bed rest whenever possible.",
C: "Discourage assistive devices.",
D: "Avoid strength-building activity."
},
answer: "A"
},

{
id: "q44",
question: "Which complication is associated with prolonged immobility in an older adult?",
options: {
A: "Improved muscle strength",
B: "Pressure injury",
C: "Improved balance",
D: "Increased bone density"
},
answer: "B"
},

{
id: "q45",
question: "Which intervention can help preserve muscle function in an older adult?",
options: {
A: "Appropriate resistance and weight-bearing activity",
B: "Continuous bed rest",
C: "Avoidance of movement",
D: "Prolonged inactivity"
},
answer: "A"
},

/* =========================
   PAGE 10 (q46–q50)
========================= */
{
id: "q46",
question: "Which factor increases an older adult's risk for osteoporosis-related fractures?",
options: {
A: "Adequate calcium and vitamin D intake",
B: "Regular weight-bearing activity",
C: "Loss of bone density",
D: "Good balance"
},
answer: "C"
},

{
id: "q47",
question: "Which intervention is appropriate for preventing falls in an older adult with impaired balance?",
options: {
A: "Encourage use of an appropriately fitted assistive device.",
B: "Tell the client to walk faster.",
C: "Remove all handrails.",
D: "Encourage walking in poorly lit areas."
},
answer: "A"
},

{
id: "q48",
question: "Which assessment is most important before recommending a new mobility aid?",
options: {
A: "Functional ability, gait, balance, and correct device fit",
B: "Hair color",
C: "Favorite food",
D: "Handwriting style"
},
answer: "A"
},

{
id: "q49",
question: "An older adult uses a cane. Which finding indicates a need for further teaching?",
options: {
A: "The cane is held on the stronger side.",
B: "The client maintains an upright posture.",
C: "The cane is adjusted to an appropriate height.",
D: "The client uses the cane to support all body weight without instruction."
},
answer: "D"
},

{
id: "q50",
question: "Which intervention is most appropriate after an older adult experiences a fall?",
options: {
A: "Immediately lift the client without assessment.",
B: "Assess for injury before moving the client when possible.",
C: "Tell the client to walk immediately.",
D: "Ignore the event if there is no obvious bleeding."
},
answer: "B"
},

/* =========================
   PAGE 11 (q51–q55)
========================= */
{
id: "q51",
question: "Which skin change is expected with normal aging?",
options: {
A: "Increased skin thickness",
B: "Reduced elasticity and thinner skin",
C: "Increased sebaceous activity",
D: "Improved wound healing"
},
answer: "B"
},

{
id: "q52",
question: "Which intervention is important for protecting an older adult's fragile skin?",
options: {
A: "Use gentle cleansing and moisturization as appropriate.",
B: "Scrub the skin vigorously.",
C: "Use very hot water.",
D: "Remove all natural skin oils."
},
answer: "A"
},

{
id: "q53",
question: "Why are older adults at increased risk for pressure injuries?",
options: {
A: "Their skin and underlying tissues may be more vulnerable to pressure and shear.",
B: "Their skin becomes thicker.",
C: "Their mobility always increases.",
D: "Their circulation always improves."
},
answer: "A"
},

{
id: "q54",
question: "Which intervention should the nurse prioritize for an immobile older adult?",
options: {
A: "Regular skin assessment and pressure redistribution",
B: "Continuous supine positioning",
C: "Massage over reddened areas",
D: "Avoidance of repositioning"
},
answer: "A"
},

{
id: "q55",
question: "An older adult has a new area of nonblanchable redness over the sacrum. What should the nurse do?",
options: {
A: "Relieve pressure and reassess the area.",
B: "Massage the area vigorously.",
C: "Apply additional pressure.",
D: "Ignore the finding."
},
answer: "A"
},

/* =========================
   PAGE 12 (q56–q60)
========================= */
{
id: "q56",
question: "Which sensory change is commonly associated with aging?",
options: {
A: "Improved high-frequency hearing",
B: "Increased ability to hear faint sounds",
C: "Reduced sensitivity to high-frequency sounds",
D: "Improved visual acuity in dim light"
},
answer: "C"
},

{
id: "q57",
question: "Which intervention can improve communication with an older adult who has vision impairment?",
options: {
A: "Identify yourself and explain what you are doing.",
B: "Move objects without telling the client.",
C: "Speak only to family members.",
D: "Avoid describing the environment."
},
answer: "A"
},

{
id: "q58",
question: "An older adult with low vision is admitted to the hospital. Which intervention promotes safety?",
options: {
A: "Keep frequently used items in consistent locations.",
B: "Move furniture frequently.",
C: "Keep pathways cluttered.",
D: "Turn off all lights."
},
answer: "A"
},

{
id: "q59",
question: "Which condition should the nurse suspect when an older adult has sudden visual loss?",
options: {
A: "Normal aging",
B: "Potential acute ocular or neurologic problem requiring prompt assessment",
C: "Expected age-related change",
D: "Normal adaptation"
},
answer: "B"
},

{
id: "q60",
question: "Which nursing action is appropriate for an older adult with cataracts?",
options: {
A: "Provide adequate lighting and reduce fall hazards.",
B: "Keep the room dark.",
C: "Move objects without warning.",
D: "Encourage walking without assistance."
},
answer: "A"
},

/* =========================
   PAGE 13 (q61–q65)
========================= */
{
id: "q61",
question: "Which psychological intervention promotes healthy aging?",
options: {
A: "Encourage meaningful activities and social connections.",
B: "Limit social interaction.",
C: "Discourage hobbies.",
D: "Make all decisions for the client."
},
answer: "A"
},

{
id: "q62",
question: "An older adult reports loneliness after moving to a new community. Which nursing intervention is appropriate?",
options: {
A: "Explore social support and connect the client with appropriate community resources.",
B: "Tell the client loneliness is unavoidable.",
C: "Discourage community activities.",
D: "Ignore the concern."
},
answer: "A"
},

{
id: "q63",
question: "Which finding may indicate depression in an older adult?",
options: {
A: "Persistent loss of interest in previously enjoyed activities",
B: "Occasional sadness after a loss",
C: "Stable appetite",
D: "Normal social engagement"
},
answer: "A"
},

{
id: "q64",
question: "An older adult reports persistent sadness, withdrawal, and loss of interest. What should the nurse do?",
options: {
A: "Perform further assessment for depression and safety concerns.",
B: "Assume it is normal aging.",
C: "Tell the client to remain alone.",
D: "Ignore the symptoms."
},
answer: "A"
},

{
id: "q65",
question: "Which factor can support psychological well-being in later life?",
options: {
A: "Maintaining autonomy and meaningful social roles",
B: "Social isolation",
C: "Loss of all decision-making",
D: "Avoiding activity"
},
answer: "A"
},

/* =========================
   PAGE 14 (q66–q70)
========================= */
{
id: "q66",
question: "Which nursing action best supports autonomy in an older adult?",
options: {
A: "Allow the client to participate in care decisions whenever possible.",
B: "Make decisions without consultation.",
C: "Ask family members to decide everything.",
D: "Restrict choices unnecessarily."
},
answer: "A"
},

{
id: "q67",
question: "An older adult has difficulty performing a complex activity but can perform simpler tasks independently. What should the nurse do?",
options: {
A: "Provide the minimum assistance needed while promoting independence.",
B: "Perform every task for the client.",
C: "Discourage participation.",
D: "Remove all assistive devices."
},
answer: "A"
},

{
id: "q68",
question: "Which finding may indicate elder abuse?",
options: {
A: "Injuries with explanations that are inconsistent with the observed findings",
B: "Well-maintained skin",
C: "Appropriate caregiver interaction",
D: "Adequate nutrition"
},
answer: "A"
},

{
id: "q69",
question: "A nurse suspects that an older adult may be experiencing abuse. What is the priority action?",
options: {
A: "Follow mandatory reporting laws and facility policy while protecting the client's safety.",
B: "Confront the suspected perpetrator alone.",
C: "Ignore the concern.",
D: "Discuss the suspicion publicly."
},
answer: "A"
},

{
id: "q70",
question: "Which behavior may be concerning for possible financial exploitation?",
options: {
A: "Unexplained sudden changes in financial arrangements",
B: "Independent budgeting",
C: "Routine bill payment",
D: "Voluntary charitable donation"
},
answer: "A"
},

/* =========================
   PAGE 15 (q71–q75)
========================= */
{
id: "q71",
question: "Which nursing assessment is essential when evaluating an older adult's ability to live independently?",
options: {
A: "Activities of daily living and instrumental activities of daily living",
B: "Hair color",
C: "Favorite television program",
D: "Handwriting only"
},
answer: "A"
},

{
id: "q72",
question: "Which activity is considered an instrumental activity of daily living?",
options: {
A: "Eating",
B: "Bathing",
C: "Managing medications",
D: "Toileting"
},
answer: "C"
},

{
id: "q73",
question: "Which activity is considered a basic activity of daily living?",
options: {
A: "Managing finances",
B: "Shopping",
C: "Bathing",
D: "Using transportation"
},
answer: "C"
},

{
id: "q74",
question: "An older adult can perform basic self-care but cannot safely manage medications or finances. What does this finding suggest?",
options: {
A: "The client may have limitations in instrumental activities of daily living.",
B: "The client is completely dependent.",
C: "The client has no functional limitations.",
D: "The client necessarily has dementia."
},
answer: "A"
},

{
id: "q75",
question: "Which intervention can help an older adult maintain independence at home?",
options: {
A: "Modify the environment to reduce hazards and support function.",
B: "Remove all assistive equipment.",
C: "Discourage adaptive strategies.",
D: "Require complete caregiver assistance."
},
answer: "A"
},

/* =========================
   PAGE 16 (q76–q80)
========================= */
{
id: "q76",
question: "Which factor can increase an older adult's risk for medication-related harm?",
options: {
A: "Multiple medications and altered drug clearance",
B: "Medication reconciliation",
C: "Simplified medication schedules",
D: "Regular follow-up"
},
answer: "A"
},

{
id: "q77",
question: "Which nursing action is most important during medication reconciliation?",
options: {
A: "Include prescription drugs, over-the-counter medications, and supplements.",
B: "Review only prescription medications.",
C: "Ignore medications taken occasionally.",
D: "Assume the client's medication list is always current."
},
answer: "A"
},

{
id: "q78",
question: "An older adult reports dizziness after taking a new antihypertensive medication. What should the nurse do?",
options: {
A: "Assess vital signs, medication use, and fall risk.",
B: "Tell the client to double the dose.",
C: "Ignore the symptom.",
D: "Encourage rapid position changes."
},
answer: "A"
},

{
id: "q79",
question: "Which teaching is appropriate for preventing orthostatic symptoms in an older adult taking antihypertensive medication?",
options: {
A: "Change positions slowly and sit at the bedside before standing.",
B: "Stand up rapidly.",
C: "Avoid reporting dizziness.",
D: "Walk immediately after waking without assessment."
},
answer: "A"
},

{
id: "q80",
question: "Which finding after a medication change requires the nurse's priority attention?",
options: {
A: "New confusion and repeated falls",
B: "Stable appetite",
C: "Improved sleep",
D: "Stable blood pressure"
},
answer: "A"
},

/* =========================
   PAGE 17 (q81–q85)
========================= */
{
id: "q81",
question: "Which respiratory change commonly occurs with normal aging?",
options: {
A: "Increased lung elasticity",
B: "Reduced chest wall compliance",
C: "Increased vital capacity",
D: "Increased respiratory reserve"
},
answer: "B"
},

{
id: "q82",
question: "Which intervention promotes respiratory health in an older adult?",
options: {
A: "Encourage appropriate physical activity and vaccinations according to recommendations.",
B: "Discourage mobility.",
C: "Avoid respiratory assessments.",
D: "Encourage smoking."
},
answer: "A"
},

{
id: "q83",
question: "An older adult with pneumonia has new confusion but no high fever. How should the nurse interpret this finding?",
options: {
A: "Confusion can be an atypical presentation of infection in older adults.",
B: "Confusion always indicates dementia.",
C: "The infection is impossible without fever.",
D: "The finding should be ignored."
},
answer: "A"
},

{
id: "q84",
question: "Which finding in an older adult with respiratory infection requires prompt assessment?",
options: {
A: "New confusion and increased respiratory effort",
B: "Stable respiratory rate",
C: "Normal oxygenation",
D: "Improved cough"
},
answer: "A"
},

{
id: "q85",
question: "Which intervention can help prevent complications of immobility in an older adult?",
options: {
A: "Encourage mobility and repositioning as appropriate.",
B: "Maintain bed rest.",
C: "Avoid range-of-motion exercises.",
D: "Keep the client in one position."
},
answer: "A"
},

/* =========================
   PAGE 18 (q86–q90)
========================= */
{
id: "q86",
question: "Which intervention is appropriate for maintaining bone health in older adults?",
options: {
A: "Appropriate weight-bearing activity and adequate nutrition",
B: "Prolonged bed rest",
C: "Avoidance of sunlight and activity in all cases",
D: "Restriction of calcium-containing foods"
},
answer: "A"
},

{
id: "q87",
question: "Which factor increases fracture risk in an older adult?",
options: {
A: "History of falls and reduced bone density",
B: "Good balance",
C: "Regular strength training",
D: "Adequate vitamin D intake"
},
answer: "A"
},

{
id: "q88",
question: "Which intervention is appropriate for an older adult with osteoporosis?",
options: {
A: "Implement fall-prevention strategies and encourage prescribed activity.",
B: "Encourage prolonged immobility.",
C: "Avoid all physical activity.",
D: "Remove assistive devices."
},
answer: "A"
},

{
id: "q89",
question: "Which assessment finding may indicate a fall-related injury even when the client denies severe pain?",
options: {
A: "New inability to bear weight",
B: "Normal gait",
C: "Normal range of motion",
D: "No change from baseline"
},
answer: "A"
},

{
id: "q90",
question: "An older adult falls and reports hip pain with inability to stand. What should the nurse do?",
options: {
A: "Keep the client safe, assess for injury, and avoid unnecessary movement until evaluated.",
B: "Immediately encourage walking.",
C: "Massage the hip.",
D: "Ask the client to continue normal activities."
},
answer: "A"
},

/* =========================
   PAGE 19 (q91–q95)
========================= */
{
id: "q91",
question: "Which sleep change may occur with normal aging?",
options: {
A: "More frequent nighttime awakenings",
B: "Complete elimination of REM sleep",
C: "No change in sleep pattern",
D: "Permanent insomnia in every older adult"
},
answer: "A"
},

{
id: "q92",
question: "Which intervention promotes sleep in an older adult?",
options: {
A: "Maintain a consistent sleep schedule and reduce nighttime disturbances.",
B: "Encourage caffeine immediately before bedtime.",
C: "Keep bright lights on all night.",
D: "Encourage long daytime naps routinely."
},
answer: "A"
},

{
id: "q93",
question: "An older adult reports persistent insomnia. Which assessment is most appropriate?",
options: {
A: "Review medications, sleep habits, pain, mood, and environmental factors.",
B: "Assume insomnia is unavoidable with aging.",
C: "Recommend sedatives without assessment.",
D: "Ignore daytime symptoms."
},
answer: "A"
},

{
id: "q94",
question: "Which intervention may help an older adult maintain a healthy sleep-wake cycle?",
options: {
A: "Encourage daytime activity and exposure to natural light when appropriate.",
B: "Keep the client in bed all day.",
C: "Avoid daytime activity.",
D: "Encourage irregular sleep schedules."
},
answer: "A"
},

{
id: "q95",
question: "Which factor can contribute to sleep disturbance in older adults?",
options: {
A: "Pain",
B: "Comfortable environment",
C: "Regular activity",
D: "Consistent bedtime routine"
},
answer: "A"
},

/* =========================
   PAGE 20 (q96–q100)
========================= */
{
id: "q96",
question: "Which assessment is important when caring for an older adult experiencing chronic pain?",
options: {
A: "Pain intensity, location, characteristics, function, and response to treatment",
B: "Age alone",
C: "Blood pressure only",
D: "Pain tolerance based on age"
},
answer: "A"
},

{
id: "q97",
question: "Which statement about pain in older adults is correct?",
options: {
A: "Persistent pain should not automatically be considered a normal part of aging.",
B: "Older adults do not experience severe pain.",
C: "Pain assessment is unnecessary in dementia.",
D: "Older adults should tolerate pain without treatment."
},
answer: "A"
},

{
id: "q98",
question: "An older adult with dementia cannot describe pain clearly. Which assessment strategy is appropriate?",
options: {
A: "Use behavioral and observational pain indicators in addition to self-report when needed.",
B: "Assume the client has no pain.",
C: "Avoid pain assessment.",
D: "Assess only blood pressure."
},
answer: "A"
},

{
id: "q99",
question: "Which intervention can complement pharmacologic pain management?",
options: {
A: "Appropriate positioning, relaxation, heat or cold when indicated, and other nonpharmacologic strategies",
B: "Ignoring pain",
C: "Prolonged immobility for every client",
D: "Avoiding communication"
},
answer: "A"
},

{
id: "q100",
question: "Which finding suggests that pain treatment may be effective?",
options: {
A: "Improved comfort and ability to participate in desired activities",
B: "Increased functional limitation",
C: "Increasing distress",
D: "New confusion without assessment"
},
answer: "A"
},

/* =========================
   PAGE 21 (q101–q105)
========================= */
{
id: "q101",
question: "Which intervention promotes medication adherence in an older adult with mild memory difficulty?",
options: {
A: "Use a simple schedule and appropriate reminders.",
B: "Provide complicated instructions.",
C: "Change medication times frequently.",
D: "Avoid written instructions."
},
answer: "A"
},

{
id: "q102",
question: "Which finding may indicate that an older adult needs additional support with medication management?",
options: {
A: "Repeated missed doses and inability to explain the medication schedule",
B: "Accurate medication knowledge",
C: "Consistent adherence",
D: "Correct use of a medication organizer"
},
answer: "A"
},

{
id: "q103",
question: "An older adult is discharged with several new medications. Which nursing action is the priority?",
options: {
A: "Reconcile medications and verify the client understands the regimen.",
B: "Tell the client to use the old medication list.",
C: "Avoid discussing side effects.",
D: "Assume the client understands everything."
},
answer: "A"
},

{
id: "q104",
question: "Which finding should prompt the nurse to assess an older adult for possible adverse drug effects?",
options: {
A: "New confusion, dizziness, or unusual sedation",
B: "Stable function",
C: "Improved symptoms",
D: "Correct medication administration"
},
answer: "A"
},

{
id: "q105",
question: "Which intervention is appropriate when an older adult has difficulty swallowing tablets?",
options: {
A: "Assess swallowing ability and consult the pharmacist or prescriber about appropriate formulations.",
B: "Crush every medication automatically.",
C: "Stop all medications.",
D: "Tell the client to swallow tablets without water."
},
answer: "A"
},

/* =========================
   PAGE 22 (q106–q110)
========================= */
{
id: "q106",
question: "Which finding in an older adult should not be dismissed as normal aging?",
options: {
A: "Sudden change in mental status",
B: "Gradual decrease in skin elasticity",
C: "Some reduction in muscle mass",
D: "Slower reaction time"
},
answer: "A"
},

{
id: "q107",
question: "An older adult becomes acutely confused after surgery. Which action should the nurse take first?",
options: {
A: "Assess for reversible causes such as infection, hypoxia, medication effects, or metabolic abnormalities.",
B: "Assume dementia.",
C: "Restrict fluids.",
D: "Keep the client isolated."
},
answer: "A"
},

{
id: "q108",
question: "Which intervention helps maintain orientation for an older adult who is hospitalized?",
options: {
A: "Use clocks, calendars, familiar objects, and regular communication.",
B: "Keep the client in darkness.",
C: "Frequently change rooms.",
D: "Avoid explaining procedures."
},
answer: "A"
},

{
id: "q109",
question: "Which assessment is especially important when an older adult's functional ability suddenly declines?",
options: {
A: "Assess for acute illness, medication effects, pain, and environmental factors.",
B: "Assume normal aging.",
C: "Discontinue all activity.",
D: "Ignore the change."
},
answer: "A"
},

{
id: "q110",
question: "An older adult who was previously independent suddenly needs assistance with toileting and walking. What should the nurse do?",
options: {
A: "Assess for an acute change in health status.",
B: "Assume the decline is caused by age.",
C: "Immediately arrange permanent institutional care.",
D: "Avoid further assessment."
},
answer: "A"
},

/* =========================
   PAGE 23 (q111–q115)
========================= */
{
id: "q111",
question: "Which nursing intervention best supports healthy aging?",
options: {
A: "Promote physical activity, social engagement, preventive care, and independence.",
B: "Encourage isolation.",
C: "Discourage decision-making.",
D: "Promote inactivity."
},
answer: "A"
},

{
id: "q112",
question: "An older adult wants to continue living independently despite several chronic conditions. What should the nurse prioritize?",
options: {
A: "Assess functional abilities, safety, support systems, and the client's preferences.",
B: "Automatically recommend institutional placement.",
C: "Ignore the client's preferences.",
D: "Require family members to make all decisions."
},
answer: "A"
},

{
id: "q113",
question: "Which action demonstrates person-centered gerontological nursing?",
options: {
A: "Incorporating the older adult's values, preferences, abilities, and goals into care.",
B: "Using the same plan for every older adult.",
C: "Making decisions solely based on age.",
D: "Ignoring cultural and personal preferences."
},
answer: "A"
},

{
id: "q114",
question: "Which older adult should the nurse assess first?",
options: {
A: "Client with stable arthritis pain",
B: "Client with new confusion and difficulty breathing",
C: "Client requesting assistance with bathing",
D: "Client asking about meal choices"
},
answer: "B"
},

{
id: "q115",
question: "A hospitalized older adult becomes weak, confused, and incontinent over 24 hours. Which nursing action is most appropriate?",
options: {
A: "Assess for an acute medical cause rather than assuming normal aging.",
B: "Document the findings as expected aging.",
C: "Restrict all fluids.",
D: "Avoid mobility."
},
answer: "A"
},

/* =========================
   PAGE 24 (q116–q120)
========================= */
{
id: "q116",
question: "Which intervention is most appropriate for reducing hospitalization-related functional decline in an older adult?",
options: {
A: "Encourage safe mobility, adequate nutrition, orientation, and independence.",
B: "Maintain bed rest throughout hospitalization.",
C: "Perform all activities for the client.",
D: "Limit daytime activity."
},
answer: "A"
},

{
id: "q117",
question: "An older adult has several chronic illnesses and takes multiple medications. Which nursing approach is most appropriate?",
options: {
A: "Use comprehensive assessment, medication reconciliation, and individualized care planning.",
B: "Treat each condition without considering the others.",
C: "Focus only on laboratory values.",
D: "Assume all medications are appropriate indefinitely."
},
answer: "A"
},

{
id: "q118",
question: "Which finding requires the most urgent evaluation in an older adult?",
options: {
A: "Gradual decrease in skin elasticity",
B: "Sudden onset of chest discomfort and shortness of breath",
C: "Mild age-related hearing loss",
D: "Occasional nighttime awakening"
},
answer: "B"
},

{
id: "q119",
question: "Which nursing intervention best promotes quality of life for an older adult with chronic illness?",
options: {
A: "Support symptom management, independence, meaningful activities, and the client's goals.",
B: "Focus only on disease treatment.",
C: "Restrict all activities.",
D: "Make all decisions for the client."
},
answer: "A"
},

{
id: "q120",
question: "A nurse is developing a comprehensive care plan for an older adult. Which approach is most appropriate?",
options: {
A: "Address physical health, cognition, function, medications, nutrition, safety, psychosocial needs, and personal goals.",
B: "Focus exclusively on chronic diseases.",
C: "Assume all changes are caused by aging.",
D: "Focus only on medication administration."
},
answer: "A"
}
];
