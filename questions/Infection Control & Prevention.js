const QUESTIONS = [
/* =========================
   PAGE 1 (q1–q5)
========================= */
{
id: "q1",
question: "Which nursing action is considered the most important measure for preventing the transmission of microorganisms in healthcare settings?",
options: {
A: "Wearing gloves for every client interaction",
B: "Performing appropriate hand hygiene",
C: "Administering antibiotics routinely",
D: "Using isolation rooms for every client"
},
answer: "B"
},
{
id: "q2",
question: "When should a nurse perform hand hygiene?",
options: {
A: "Only when hands appear visibly soiled",
B: "Only after removing gloves",
C: "Before and after appropriate client contact and procedures",
D: "Only before eating"
},
answer: "C"
},
{
id: "q3",
question: "A nurse removes gloves after providing care. What should the nurse do next?",
options: {
A: "Perform hand hygiene",
B: "Touch the computer keyboard",
C: "Put on another pair of gloves",
D: "Leave the room immediately"
},
answer: "A"
},
{
id: "q4",
question: "Which statement about alcohol-based hand sanitizer is correct?",
options: {
A: "It should never be used in healthcare settings",
B: "It replaces handwashing when hands are visibly soiled",
C: "It is appropriate when hands are not visibly soiled and according to facility policy",
D: "It should be used only after contact with blood"
},
answer: "C"
},
{
id: "q5",
question: "Which situation requires handwashing with soap and water rather than relying solely on alcohol-based hand rub?",
options: {
A: "Hands are visibly soiled",
B: "Before entering a clean room",
C: "After touching a bedside table",
D: "Before taking a pulse"
},
answer: "A"
},

/* =========================
   PAGE 2 (q6–q10)
========================= */
{
id: "q6",
question: "Which microorganism is classified as a bacterium?",
options: {
A: "Influenza virus",
B: "Candida species",
C: "Staphylococcus aureus",
D: "Giardia species"
},
answer: "C"
},
{
id: "q7",
question: "Which microorganism requires a host cell to reproduce?",
options: {
A: "Virus",
B: "Bacterium",
C: "Fungus",
D: "Protozoan"
},
answer: "A"
},
{
id: "q8",
question: "Which organism is classified as a fungus?",
options: {
A: "Influenza virus",
B: "Candida albicans",
C: "Escherichia coli",
D: "Giardia lamblia"
},
answer: "B"
},
{
id: "q9",
question: "Which term describes a microorganism capable of causing disease?",
options: {
A: "Normal flora",
B: "Pathogen",
C: "Antibody",
D: "Antigen"
},
answer: "B"
},
{
id: "q10",
question: "Which statement best describes normal microbiota?",
options: {
A: "Microorganisms that are always harmful",
B: "Microorganisms normally present on or in the body that may provide benefits",
C: "Microorganisms found only in hospitals",
D: "Microorganisms that always cause infection"
},
answer: "B"
},

/* =========================
   PAGE 3 (q11–q15)
========================= */
{
id: "q11",
question: "Which sequence correctly represents the chain of infection?",
options: {
A: "Agent, reservoir, portal of exit, mode of transmission, portal of entry, susceptible host",
B: "Host, agent, medication, reservoir, immunity, treatment",
C: "Reservoir, antibiotic, host, vaccine, portal of entry, treatment",
D: "Agent, vaccine, host, medication, portal of exit, diagnosis"
},
answer: "A"
},
{
id: "q12",
question: "Which action most directly breaks the chain of infection at the portal of exit?",
options: {
A: "Using appropriate respiratory hygiene and cough etiquette",
B: "Increasing room temperature",
C: "Administering fluids",
D: "Measuring blood pressure"
},
answer: "A"
},
{
id: "q13",
question: "Which is an example of a reservoir for microorganisms?",
options: {
A: "Healthy skin only",
B: "A contaminated surface or infected person",
C: "A sterile surgical instrument",
D: "A clean dressing"
},
answer: "B"
},
{
id: "q14",
question: "Which action helps prevent microorganisms from entering a susceptible host?",
options: {
A: "Using aseptic technique for invasive procedures",
B: "Reusing disposable equipment",
C: "Leaving wounds uncovered",
D: "Skipping hand hygiene"
},
answer: "A"
},
{
id: "q15",
question: "Which person represents a susceptible host?",
options: {
A: "A person with intact immunity and no risk factors",
B: "A client receiving immunosuppressive therapy",
C: "A person who has completed appropriate vaccination",
D: "A healthcare worker using appropriate precautions"
},
answer: "B"
},

/* =========================
   PAGE 4 (q16–q20)
========================= */
{
id: "q16",
question: "Which intervention is an example of medical asepsis?",
options: {
A: "Maintaining a sterile surgical field",
B: "Performing hand hygiene and cleaning contaminated equipment",
C: "Using sterile gloves for surgery",
D: "Preparing a sterile dressing field"
},
answer: "B"
},
{
id: "q17",
question: "Which term refers to practices designed to eliminate all microorganisms, including spores, from an object?",
options: {
A: "Disinfection",
B: "Cleaning",
C: "Sterilization",
D: "Sanitation"
},
answer: "C"
},
{
id: "q18",
question: "Which process destroys many or all pathogenic microorganisms on inanimate objects but may not reliably destroy bacterial spores?",
options: {
A: "Sterilization",
B: "Disinfection",
C: "Hand hygiene",
D: "Antisepsis"
},
answer: "B"
},
{
id: "q19",
question: "Which term describes reducing microorganisms on living tissue using an antimicrobial substance?",
options: {
A: "Antisepsis",
B: "Sterilization",
C: "Disinfection",
D: "Pasteurization"
},
answer: "A"
},
{
id: "q20",
question: "Which item requires sterilization when it is intended to enter normally sterile tissue?",
options: {
A: "Bedside table",
B: "Blood pressure cuff",
C: "Surgical instrument",
D: "Stethoscope"
},
answer: "C"
},

/* =========================
   PAGE 5 (q21–q25)
========================= */
{
id: "q21",
question: "A nurse is preparing a sterile field. Which action is appropriate?",
options: {
A: "Keep sterile items above waist level",
B: "Reach across the sterile field",
C: "Turn away from the sterile field",
D: "Place sterile items below waist level"
},
answer: "A"
},
{
id: "q22",
question: "Which action contaminates a sterile field?",
options: {
A: "Keeping the field within view",
B: "Opening sterile supplies correctly",
C: "Reaching over the sterile field",
D: "Keeping sterile items above waist level"
},
answer: "C"
},
{
id: "q23",
question: "A sterile package becomes wet before use. How should the nurse interpret this finding?",
options: {
A: "The package remains sterile",
B: "The package should be considered contaminated",
C: "Only the outside is contaminated",
D: "The package can be dried and used"
},
answer: "B"
},
{
id: "q24",
question: "Which principle applies to the edge of a sterile field?",
options: {
A: "The outer edge is considered contaminated according to sterile-field principles",
B: "The outer edge is the most sterile area",
C: "Only the center of a sterile item is contaminated",
D: "The edge may be touched with clean gloves"
},
answer: "A"
},
{
id: "q25",
question: "Which action is appropriate when opening a sterile package?",
options: {
A: "Open the first flap toward the body",
B: "Reach across the sterile contents",
C: "Open the first flap away from the body",
D: "Touch the inside surface with bare hands"
},
answer: "C"
},

/* =========================
   PAGE 6 (q26–q30)
========================= */
{
id: "q26",
question: "Which type of transmission occurs when microorganisms spread through respiratory droplets during coughing or sneezing?",
options: {
A: "Contact transmission",
B: "Droplet transmission",
C: "Vector transmission",
D: "Foodborne transmission"
},
answer: "B"
},
{
id: "q27",
question: "Which precaution is commonly required for a client with an infection spread primarily by large respiratory droplets?",
options: {
A: "Droplet precautions",
B: "Airborne precautions only",
C: "No precautions",
D: "Protective isolation only"
},
answer: "A"
},
{
id: "q28",
question: "Which situation is an example of indirect contact transmission?",
options: {
A: "A person coughs directly into another person's face",
B: "A mosquito transmits an organism",
C: "A client becomes infected after touching contaminated equipment",
D: "A person inhales airborne particles"
},
answer: "C"
},
{
id: "q29",
question: "Which situation represents vector transmission?",
options: {
A: "Transmission through contaminated food",
B: "Transmission through a mosquito bite",
C: "Transmission through a contaminated doorknob",
D: "Transmission through a respiratory droplet"
},
answer: "B"
},
{
id: "q30",
question: "Which action is appropriate for reducing contact transmission?",
options: {
A: "Perform hand hygiene and use appropriate personal protective equipment",
B: "Leave contaminated equipment at the bedside",
C: "Share equipment without cleaning",
D: "Avoid cleaning frequently touched surfaces"
},
answer: "A"
},

/* =========================
   PAGE 7 (q31–q35)
========================= */
{
id: "q31",
question: "Which precaution is used for infections transmitted through airborne particles?",
options: {
A: "Standard precautions only",
B: "Airborne precautions",
C: "Contact precautions only",
D: "Droplet precautions only"
},
answer: "B"
},
{
id: "q32",
question: "Which room is generally appropriate for a client requiring airborne infection isolation?",
options: {
A: "A negative-pressure airborne infection isolation room when indicated",
B: "A room with the door permanently open",
C: "A shared room without additional precautions",
D: "A room with positive pressure"
},
answer: "A"
},
{
id: "q33",
question: "Which respiratory protection is appropriate for a nurse entering the room of a client requiring airborne precautions?",
options: {
A: "Appropriate fit-tested respirator according to facility policy",
B: "Cloth scarf",
C: "Gloves only",
D: "Surgical cap only"
},
answer: "A"
},
{
id: "q34",
question: "Which action is appropriate for a client on droplet precautions?",
options: {
A: "Use appropriate respiratory protection according to facility policy",
B: "Allow unrestricted visitors without instruction",
C: "Use no precautions if the client is afebrile",
D: "Use sterile gloves for every interaction"
},
answer: "A"
},
{
id: "q35",
question: "Which statement about standard precautions is correct?",
options: {
A: "They apply only to clients with known infections",
B: "They are used for the care of all clients based on the potential for exposure to infectious material",
C: "They eliminate the need for hand hygiene",
D: "They require every client to be placed in isolation"
},
answer: "B"
},

/* =========================
   PAGE 8 (q36–q40)
========================= */
{
id: "q36",
question: "A nurse is caring for a client with suspected tuberculosis. Which action is most appropriate?",
options: {
A: "Use appropriate airborne precautions",
B: "Use only contact precautions",
C: "Place the client in a positive-pressure room",
D: "Allow the client to share a room without precautions"
},
answer: "A"
},
{
id: "q37",
question: "A client with a respiratory infection is coughing frequently. Which nursing intervention helps reduce transmission?",
options: {
A: "Encourage respiratory hygiene and cough etiquette",
B: "Ask the client to cough toward other clients",
C: "Remove all tissues from the room",
D: "Discourage hand hygiene"
},
answer: "A"
},
{
id: "q38",
question: "Which intervention is appropriate when transporting a client on transmission-based precautions?",
options: {
A: "Follow facility precautions and limit transport to medically necessary purposes",
B: "Remove all precautions before transport",
C: "Ignore the client's infectious status",
D: "Transport without notifying the receiving area"
},
answer: "A"
},
{
id: "q39",
question: "Which action should the nurse take when a client on isolation precautions must leave the room?",
options: {
A: "Apply appropriate precautions to the client and transport process",
B: "Remove all personal protective equipment from the client",
C: "Cancel all necessary diagnostic procedures",
D: "Allow unrestricted movement through crowded areas"
},
answer: "A"
},
{
id: "q40",
question: "Which nursing action helps prevent transmission from contaminated equipment?",
options: {
A: "Clean and disinfect reusable equipment according to policy before use on another client",
B: "Store contaminated equipment in the clean supply area",
C: "Reuse equipment without cleaning",
D: "Clean equipment only once a week"
},
answer: "A"
},

/* =========================
   PAGE 9 (q41–q45)
========================= */
{
id: "q41",
question: "Which action is appropriate when removing personal protective equipment?",
options: {
A: "Remove contaminated items using a sequence that minimizes self-contamination",
B: "Touch the front of a contaminated gown with bare hands",
C: "Remove gloves after touching clean equipment",
D: "Shake contaminated gowns before disposal"
},
answer: "A"
},
{
id: "q42",
question: "Which part of a used gown is considered potentially contaminated?",
options: {
A: "The inside collar only",
B: "The front and sleeves that may have contacted infectious material",
C: "The clean ties only",
D: "The outside of the storage cabinet"
},
answer: "B"
},
{
id: "q43",
question: "A nurse is wearing gloves and needs to adjust the client's clean bedside table. What should the nurse do?",
options: {
A: "Touch the table while wearing contaminated gloves",
B: "Remove gloves, perform hand hygiene, and use clean hands or clean gloves as appropriate",
C: "Wipe the table with the client's blanket",
D: "Keep the same gloves throughout the shift"
},
answer: "B"
},
{
id: "q44",
question: "Which PPE protects the eyes from splashes of potentially infectious material?",
options: {
A: "Shoe covers",
B: "Eye protection",
C: "Hair cover",
D: "Apron only"
},
answer: "B"
},
{
id: "q45",
question: "When should a nurse wear a gown as part of standard precautions?",
options: {
A: "Whenever clothing or skin may be exposed to blood, body fluids, or other potentially infectious material",
B: "Only during medication administration",
C: "Only when entering a client's room",
D: "Only during oral medication administration"
},
answer: "A"
},

/* =========================
   PAGE 10 (q46–q50)
========================= */
{
id: "q46",
question: "Which action is safest when handling a used needle?",
options: {
A: "Recap it using two hands",
B: "Bend it before disposal",
C: "Dispose of it immediately in an appropriate sharps container",
D: "Place it on the bedside table temporarily"
},
answer: "C"
},
{
id: "q47",
question: "Which practice helps prevent needlestick injuries?",
options: {
A: "Using safety-engineered devices when available and disposing of sharps promptly",
B: "Carrying uncapped needles through the unit",
C: "Recapping needles routinely",
D: "Passing needles hand-to-hand"
},
answer: "A"
},
{
id: "q48",
question: "A sharps container is nearly full. What should the nurse do?",
options: {
A: "Push items down to create more space",
B: "Continue filling it until completely full",
C: "Follow facility procedure for replacing the container",
D: "Remove sharps by hand"
},
answer: "C"
},
{
id: "q49",
question: "Which action is appropriate after an accidental needlestick injury?",
options: {
A: "Immediately perform appropriate first aid and report the exposure according to policy",
B: "Ignore the injury if there is no pain",
C: "Continue working without reporting",
D: "Wait several days before notifying anyone"
},
answer: "A"
},
{
id: "q50",
question: "Which body fluid is considered potentially infectious for bloodborne pathogens?",
options: {
A: "Blood",
B: "Sweat without visible blood",
C: "Tears without visible blood",
D: "Intact skin secretions"
},
answer: "A"
},

/* =========================
   PAGE 11 (q51–q55)
========================= */
{
id: "q51",
question: "Which intervention is most appropriate for preventing urinary catheter-associated infection?",
options: {
A: "Maintain a closed drainage system and remove the catheter as soon as appropriate",
B: "Disconnect the system frequently",
C: "Keep the drainage bag above bladder level",
D: "Irrigate the catheter routinely without an indication"
},
answer: "A"
},
{
id: "q52",
question: "Where should the urinary drainage bag be positioned?",
options: {
A: "Above the client's bladder",
B: "At the level of the client's chest",
C: "Below the level of the bladder without touching the floor",
D: "On the client's bed above the bladder"
},
answer: "C"
},
{
id: "q53",
question: "Which finding may indicate a catheter-associated urinary tract infection?",
options: {
A: "New fever and urinary symptoms",
B: "Clear urine with adequate output",
C: "A closed drainage system",
D: "Drainage bag below bladder level"
},
answer: "A"
},
{
id: "q54",
question: "Which action reduces infection risk during urinary catheter insertion?",
options: {
A: "Use sterile technique according to policy",
B: "Use clean gloves only for all insertion procedures",
C: "Touch the catheter tip with bare hands",
D: "Reuse single-use supplies"
},
answer: "A"
},
{
id: "q55",
question: "Which action should the nurse avoid when caring for an indwelling urinary catheter?",
options: {
A: "Maintaining dependent drainage",
B: "Performing appropriate hygiene",
C: "Disconnecting the closed system unnecessarily",
D: "Securing the catheter appropriately"
},
answer: "C"
},

/* =========================
   PAGE 12 (q56–q60)
========================= */
{
id: "q56",
question: "Which intervention helps prevent central line-associated bloodstream infection?",
options: {
A: "Use appropriate aseptic technique during line access and care",
B: "Access the line without hand hygiene",
C: "Leave the dressing unchanged indefinitely",
D: "Use nonsterile supplies for every procedure"
},
answer: "A"
},
{
id: "q57",
question: "Which finding at a central venous catheter site requires further assessment?",
options: {
A: "Clean, intact dressing",
B: "Redness, warmth, swelling, or purulent drainage",
C: "Secure catheter",
D: "Dry insertion site"
},
answer: "B"
},
{
id: "q58",
question: "Which action is appropriate when changing a central-line dressing?",
options: {
A: "Follow sterile or aseptic technique according to facility policy",
B: "Use the same gloves used for other clients",
C: "Touch the insertion site with bare hands",
D: "Reuse dressing materials"
},
answer: "A"
},
{
id: "q59",
question: "Which finding may indicate a bloodstream infection related to an invasive device?",
options: {
A: "New fever with chills and local catheter-site changes",
B: "Normal temperature and stable condition",
C: "Clean dressing",
D: "Normal vital signs"
},
answer: "A"
},
{
id: "q60",
question: "Which principle is important when accessing an intravenous catheter?",
options: {
A: "Disinfect the access point according to facility protocol before access",
B: "Touch the sterile connection after cleaning it",
C: "Skip disinfection if gloves are worn",
D: "Reuse contaminated caps"
},
answer: "A"
},

/* =========================
   PAGE 13 (q61–q65)
========================= */
{
id: "q61",
question: "Which action is most effective for preventing surgical site infection?",
options: {
A: "Maintain appropriate aseptic technique throughout the procedure",
B: "Touch sterile instruments with bare hands",
C: "Reuse contaminated instruments",
D: "Leave the incision uncovered unnecessarily"
},
answer: "A"
},
{
id: "q62",
question: "Which postoperative finding may indicate a surgical site infection?",
options: {
A: "Increasing redness, warmth, swelling, and purulent drainage",
B: "Clean incision with expected healing",
C: "Minimal expected discomfort",
D: "Dry intact dressing"
},
answer: "A"
},
{
id: "q63",
question: "Which intervention supports prevention of postoperative infection?",
options: {
A: "Perform appropriate hand hygiene before wound care",
B: "Touch the wound with unclean gloves",
C: "Reuse contaminated dressings",
D: "Skip wound assessment"
},
answer: "A"
},
{
id: "q64",
question: "Which client factor can increase the risk of infection?",
options: {
A: "Intact immune function",
B: "Adequate nutrition",
C: "Immunosuppression",
D: "Good skin integrity"
},
answer: "C"
},
{
id: "q65",
question: "Which intervention helps reduce infection risk in a client with impaired skin integrity?",
options: {
A: "Keep wounds clean and use appropriate dressing technique",
B: "Leave contaminated dressings in place indefinitely",
C: "Touch wounds with bare hands",
D: "Avoid monitoring the wound"
},
answer: "A"
},

/* =========================
   PAGE 14 (q66–q70)
========================= */
{
id: "q66",
question: "Which finding is most concerning in a neutropenic client?",
options: {
A: "Normal temperature",
B: "New fever",
C: "Stable appetite",
D: "Intact skin"
},
answer: "B"
},
{
id: "q67",
question: "Which intervention is appropriate for a client with significant neutropenia?",
options: {
A: "Monitor for infection and follow protective measures according to policy",
B: "Allow exposure to individuals with known infections",
C: "Encourage contact with sick visitors",
D: "Ignore minor signs of infection"
},
answer: "A"
},
{
id: "q68",
question: "Which assessment finding may indicate infection in an immunocompromised client?",
options: {
A: "New fever, chills, or unexplained change in condition",
B: "Normal vital signs",
C: "Stable appetite",
D: "Normal energy level"
},
answer: "A"
},
{
id: "q69",
question: "Which intervention helps prevent infection in a client receiving chemotherapy?",
options: {
A: "Avoid unnecessary exposure to infectious individuals and monitor for signs of infection",
B: "Encourage crowded gatherings",
C: "Ignore minor wounds",
D: "Avoid hand hygiene"
},
answer: "A"
},
{
id: "q70",
question: "Which finding in an immunocompromised client requires prompt evaluation?",
options: {
A: "New fever",
B: "Normal temperature",
C: "Stable blood pressure",
D: "Normal respiratory rate"
},
answer: "A"
},

/* =========================
   PAGE 15 (q71–q75)
========================= */
{
id: "q71",
question: "Which action is appropriate for preventing transmission of gastrointestinal infections?",
options: {
A: "Perform hand hygiene and follow appropriate contact precautions",
B: "Share contaminated equipment",
C: "Skip environmental cleaning",
D: "Use antibiotics for every client"
},
answer: "A"
},
{
id: "q72",
question: "A client has frequent diarrhea caused by a spore-forming organism. Which action is especially important?",
options: {
A: "Follow appropriate contact precautions and hand hygiene practices",
B: "Use only an alcohol-based hand rub regardless of policy",
C: "Share equipment with other clients",
D: "Avoid cleaning the environment"
},
answer: "A"
},
{
id: "q73",
question: "Which environmental intervention helps reduce transmission of infectious organisms?",
options: {
A: "Regular cleaning and disinfection of high-touch surfaces",
B: "Cleaning only visibly dirty floors",
C: "Reusing contaminated cloths between rooms",
D: "Ignoring shared equipment"
},
answer: "A"
},
{
id: "q74",
question: "Which item is considered a high-touch environmental surface?",
options: {
A: "Bed rail",
B: "Ceiling",
C: "Unused storage wall",
D: "Window outside the room"
},
answer: "A"
},
{
id: "q75",
question: "Which practice reduces cross-contamination during environmental cleaning?",
options: {
A: "Use appropriate cleaning products and change contaminated materials according to policy",
B: "Use the same cloth for every room",
C: "Clean from dirty areas toward clean areas",
D: "Reuse disposable cleaning materials"
},
answer: "A"
},

/* =========================
   PAGE 16 (q76–q80)
========================= */
{
id: "q76",
question: "Which action is appropriate when handling soiled linen?",
options: {
A: "Shake the linen to remove debris",
B: "Hold soiled linen away from the uniform and place it directly into the appropriate container",
C: "Place it on the floor temporarily",
D: "Carry it against the body"
},
answer: "B"
},
{
id: "q77",
question: "Why should contaminated linen not be shaken?",
options: {
A: "It can increase the spread of microorganisms into the environment",
B: "It makes the linen heavier",
C: "It damages the washing machine",
D: "It changes the linen color"
},
answer: "A"
},
{
id: "q78",
question: "Which action is appropriate when transporting contaminated linen?",
options: {
A: "Place it in the designated leak-resistant container according to policy",
B: "Carry it uncovered through the unit",
C: "Place it on clean supply carts",
D: "Mix it with clean linen"
},
answer: "A"
},
{
id: "q79",
question: "Which action helps prevent contamination when handling specimens?",
options: {
A: "Use appropriate PPE and place specimens in properly labeled containers",
B: "Carry specimens without containers",
C: "Leave specimens unlabeled",
D: "Touch specimen contents directly"
},
answer: "A"
},
{
id: "q80",
question: "Which information should be included when labeling a clinical specimen?",
options: {
A: "Required client identifiers and specimen information according to policy",
B: "Only the client's room number",
C: "Only the nurse's name",
D: "The client's favorite food"
},
answer: "A"
},

/* =========================
   PAGE 17 (q81–q85)
========================= */
{
id: "q81",
question: "Which action is appropriate when collecting a wound culture?",
options: {
A: "Follow the prescribed collection technique and use the appropriate sterile collection device",
B: "Touch the specimen swab to the bed",
C: "Use a contaminated cotton swab",
D: "Collect the specimen after applying unrelated topical products unless directed"
},
answer: "A"
},
{
id: "q82",
question: "Which finding suggests a wound may be infected?",
options: {
A: "Increasing pain, redness, warmth, swelling, or purulent drainage",
B: "Clean wound edges",
C: "Expected minimal drainage",
D: "Normal healing appearance"
},
answer: "A"
},
{
id: "q83",
question: "Which action should the nurse take before changing a wound dressing?",
options: {
A: "Perform hand hygiene and prepare the required supplies",
B: "Touch the wound immediately",
C: "Reuse old dressing materials",
D: "Skip assessment of the wound"
},
answer: "A"
},
{
id: "q84",
question: "Which action helps prevent contamination during sterile wound care?",
options: {
A: "Keep sterile supplies within the sterile field and avoid touching sterile surfaces with contaminated items",
B: "Reach across the sterile field",
C: "Place sterile supplies on the floor",
D: "Touch sterile supplies with contaminated gloves"
},
answer: "A"
},
{
id: "q85",
question: "Which finding during wound assessment should be reported promptly?",
options: {
A: "Increasing redness and purulent drainage",
B: "Clean dry wound",
C: "Expected mild tenderness",
D: "Intact surrounding skin"
},
answer: "A"
},

/* =========================
   PAGE 18 (q86–q90)
========================= */
{
id: "q86",
question: "Which intervention is important for preventing respiratory infection transmission?",
options: {
A: "Encourage respiratory hygiene and appropriate hand hygiene",
B: "Share tissues among clients",
C: "Ignore coughing",
D: "Reuse respiratory equipment without cleaning"
},
answer: "A"
},
{
id: "q87",
question: "Which action is appropriate when a client is coughing and sneezing frequently?",
options: {
A: "Provide tissues and reinforce respiratory hygiene and cough etiquette",
B: "Tell the client to cough toward staff",
C: "Remove the waste container",
D: "Avoid hand hygiene"
},
answer: "A"
},
{
id: "q88",
question: "Which client should be assessed first?",
options: {
A: "Client with a mild chronic cough",
B: "Client with sudden severe respiratory distress",
C: "Client requesting tissues",
D: "Client asking for water"
},
answer: "B"
},
{
id: "q89",
question: "Which finding may indicate worsening respiratory infection?",
options: {
A: "Increasing dyspnea and decreasing oxygen saturation",
B: "Improved breath sounds",
C: "Normal respiratory rate",
D: "Improved activity tolerance"
},
answer: "A"
},
{
id: "q90",
question: "Which intervention can help reduce pulmonary infection complications in an appropriate client?",
options: {
A: "Encourage mobility, deep breathing, coughing, and adequate hydration when appropriate",
B: "Maintain prolonged bed rest",
C: "Discourage coughing",
D: "Restrict fluids without an indication"
},
answer: "A"
},

/* =========================
   PAGE 19 (q91–q95)
========================= */
{
id: "q91",
question: "Which intervention is appropriate for preventing infection related to respiratory equipment?",
options: {
A: "Clean, disinfect, or sterilize reusable equipment according to manufacturer and facility instructions",
B: "Share equipment without cleaning",
C: "Store contaminated equipment with clean supplies",
D: "Reuse disposable equipment"
},
answer: "A"
},
{
id: "q92",
question: "Which action helps prevent ventilator-associated complications?",
options: {
A: "Use evidence-based infection-prevention measures and appropriate oral care according to protocol",
B: "Avoid oral care",
C: "Keep the client completely flat when not clinically indicated",
D: "Ignore ventilator tubing contamination"
},
answer: "A"
},
{
id: "q93",
question: "Which finding may indicate a healthcare-associated respiratory infection?",
options: {
A: "New fever, worsening respiratory secretions, and increased oxygen needs",
B: "Improved oxygenation",
C: "Clear secretions decreasing over time",
D: "Stable respiratory status"
},
answer: "A"
},
{
id: "q94",
question: "Which action is appropriate when handling a client's suction equipment?",
options: {
A: "Use appropriate infection-control technique and follow equipment cleaning or disposal guidelines",
B: "Share disposable suction catheters",
C: "Store contaminated equipment in the clean supply area",
D: "Skip hand hygiene"
},
answer: "A"
},
{
id: "q95",
question: "Which intervention reduces the risk of aspiration-related infection?",
options: {
A: "Use appropriate positioning and swallowing precautions",
B: "Feed clients while lying flat",
C: "Give food rapidly",
D: "Ignore swallowing difficulties"
},
answer: "A"
},

/* =========================
   PAGE 20 (q96–q100)
========================= */
{
id: "q96",
question: "Which intervention is important for preventing infection associated with enteral feeding?",
options: {
A: "Perform hand hygiene and use appropriate handling technique",
B: "Reuse feeding supplies without cleaning",
C: "Leave formula at unsafe temperatures",
D: "Ignore tubing contamination"
},
answer: "A"
},
{
id: "q97",
question: "Which finding may indicate infection in a client receiving enteral nutrition?",
options: {
A: "New fever and respiratory changes",
B: "Stable temperature",
C: "Clear lungs",
D: "Normal respiratory status"
},
answer: "A"
},
{
id: "q98",
question: "Which action helps prevent infection when administering enteral nutrition?",
options: {
A: "Follow prescribed formula storage, administration, and equipment-cleaning procedures",
B: "Use expired formula",
C: "Leave feeding equipment uncleaned",
D: "Reuse disposable equipment indefinitely"
},
answer: "A"
},
{
id: "q99",
question: "Which nursing intervention helps prevent infection in a client with a feeding tube?",
options: {
A: "Provide appropriate tube-site care and monitor for redness, swelling, or drainage",
B: "Ignore the insertion site",
C: "Touch the site with contaminated gloves",
D: "Keep the site covered with a dirty dressing"
},
answer: "A"
},
{
id: "q100",
question: "Which finding at a feeding-tube insertion site requires further assessment?",
options: {
A: "Clean, intact skin",
B: "Dry dressing",
C: "Increasing redness, warmth, swelling, or purulent drainage",
D: "No discomfort"
},
answer: "C"
},

/* =========================
   PAGE 21 (q101–q105)
========================= */
{
id: "q101",
question: "Which practice helps prevent antibiotic resistance?",
options: {
A: "Use antibiotics only when indicated and according to the prescribed regimen",
B: "Use antibiotics for viral infections routinely",
C: "Share leftover antibiotics",
D: "Stop antibiotics without guidance whenever symptoms improve"
},
answer: "A"
},
{
id: "q102",
question: "Which statement about antibiotics is correct?",
options: {
A: "Antibiotics are effective against all viruses",
B: "Antibiotics should be used appropriately to treat susceptible bacterial infections",
C: "Antibiotics never cause adverse effects",
D: "Antibiotics eliminate the need for infection-control measures"
},
answer: "B"
},
{
id: "q103",
question: "Which nursing action is important when administering an antimicrobial medication?",
options: {
A: "Verify allergies and monitor for adverse reactions",
B: "Ignore the client's allergy history",
C: "Administer the medication without checking the order",
D: "Assume all clients tolerate the medication"
},
answer: "A"
},
{
id: "q104",
question: "A client develops difficulty breathing and facial swelling shortly after receiving an antibiotic. What is the priority?",
options: {
A: "Recognize a possible severe allergic reaction and initiate immediate assessment and emergency management",
B: "Give the next dose",
C: "Document the reaction at discharge",
D: "Encourage the client to walk"
},
answer: "A"
},
{
id: "q105",
question: "Which finding may indicate an adverse reaction to an antimicrobial medication?",
options: {
A: "New rash or difficulty breathing",
B: "Improved infection symptoms",
C: "Normal vital signs",
D: "Improved appetite"
},
answer: "A"
},

/* =========================
   PAGE 22 (q106–q110)
========================= */
{
id: "q106",
question: "Which intervention is important for preventing vaccine-preventable infections?",
options: {
A: "Maintain recommended immunizations according to current guidelines",
B: "Avoid all vaccinations",
C: "Vaccinate only after exposure to every infection",
D: "Use antibiotics instead of vaccination"
},
answer: "A"
},
{
id: "q107",
question: "Which action should the nurse take before administering a vaccine?",
options: {
A: "Verify the client's history, allergies, current condition, and vaccine requirements",
B: "Ignore previous vaccine reactions",
C: "Skip identification",
D: "Administer without checking the product"
},
answer: "A"
},
{
id: "q108",
question: "Which statement about vaccination is correct?",
options: {
A: "Vaccination can reduce the risk of certain infectious diseases",
B: "Vaccines treat every active bacterial infection",
C: "Vaccination eliminates the need for hand hygiene",
D: "Vaccines provide identical protection against every microorganism"
},
answer: "A"
},
{
id: "q109",
question: "Which action is appropriate after administering an immunization?",
options: {
A: "Document the vaccine according to required standards and monitor the client as appropriate",
B: "Discard all documentation",
C: "Tell the client no adverse reactions are possible",
D: "Ignore any immediate symptoms"
},
answer: "A"
},
{
id: "q110",
question: "Which client statement indicates a need for additional vaccine education?",
options: {
A: "I understand that vaccines can help prevent certain infections.",
B: "I will follow the recommended schedule provided by my healthcare professional.",
C: "If I receive a vaccine, I no longer need to practice hand hygiene.",
D: "I should tell my healthcare professional about previous serious vaccine reactions."
},
answer: "C"
},

/* =========================
   PAGE 23 (q111–q115)
========================= */
{
id: "q111",
question: "Which action should the nurse take when a client is suspected of having a highly transmissible infection?",
options: {
A: "Implement appropriate precautions promptly while awaiting further information",
B: "Wait for laboratory confirmation before using any precautions",
C: "Allow unrestricted visitors",
D: "Ignore symptoms"
},
answer: "A"
},
{
id: "q112",
question: "Which finding should cause the nurse to initiate further infection assessment?",
options: {
A: "New fever with chills and an unexplained change in condition",
B: "Stable temperature",
C: "Normal wound appearance",
D: "Improved appetite"
},
answer: "A"
},
{
id: "q113",
question: "A client has a fever and a draining wound. Which action is the nurse's priority?",
options: {
A: "Assess the client and wound, implement appropriate precautions, and notify the healthcare team as indicated",
B: "Ignore the drainage",
C: "Remove all dressings permanently",
D: "Allow the client to share equipment"
},
answer: "A"
},
{
id: "q114",
question: "Which nursing action best demonstrates infection-control clinical judgment?",
options: {
A: "Identify potential transmission risks and select appropriate precautions",
B: "Use the same precautions for every infection without assessment",
C: "Ignore the mode of transmission",
D: "Wait for another nurse to identify every risk"
},
answer: "A"
},
{
id: "q115",
question: "Which client should the nurse assess first?",
options: {
A: "Client with a stable chronic infection",
B: "Client with sudden respiratory distress and suspected infectious disease",
C: "Client requesting a meal",
D: "Client asking about visiting hours"
},
answer: "B"
},

/* =========================
   PAGE 24 (q116–q120)
========================= */
{
id: "q116",
question: "A nurse notices that a colleague is about to enter an isolation room without the required PPE. What should the nurse do?",
options: {
A: "Ignore the situation",
B: "Promptly address the safety concern and ensure appropriate precautions are used",
C: "Wait until the end of the shift",
D: "Allow the colleague to proceed"
},
answer: "B"
},
{
id: "q117",
question: "Which action is most important when preparing to perform an invasive nursing procedure?",
options: {
A: "Use appropriate aseptic technique and prepare all required sterile supplies",
B: "Touch sterile equipment with contaminated gloves",
C: "Skip hand hygiene",
D: "Reuse single-use supplies"
},
answer: "A"
},
{
id: "q118",
question: "A nurse discovers that a reusable piece of equipment was used on a client but was not disinfected before being placed in the clean supply area. What should the nurse do?",
options: {
A: "Use it for the next client",
B: "Remove it from the clean area and ensure appropriate cleaning and disinfection",
C: "Cover it with a clean towel",
D: "Ignore the situation"
},
answer: "B"
},
{
id: "q119",
question: "Which combination provides the strongest approach to infection prevention in healthcare?",
options: {
A: "Hand hygiene, appropriate PPE, aseptic technique, environmental cleaning, and transmission-based precautions when indicated",
B: "Antibiotics for every client",
C: "Gloves without hand hygiene",
D: "Isolation for every client"
},
answer: "A"
},
{
id: "q120",
question: "A nurse is developing an infection-prevention plan for a client. Which approach is most appropriate?",
options: {
A: "Use the same intervention for every client",
B: "Base precautions on the client's condition, potential transmission route, and current infection-control guidelines",
C: "Focus only on medication administration",
D: "Ignore environmental factors"
},
answer: "B"
}
];
