const QUESTIONS = [

  // ============================================================
  // PAGE 1 (q1–q5)
  // ============================================================

  {
    id: "q1",
    question: "What is the primary purpose of nursing research?",
    options: {
      A: "To increase the workload of nurses",
      B: "To generate knowledge that improves nursing practice and patient outcomes",
      C: "To replace clinical judgment",
      D: "To eliminate the need for nursing education"
    },
    answer: "B"
  },

  {
    id: "q2",
    question: "Which statement best describes evidence-based practice (EBP) in nursing?",
    options: {
      A: "Using only information from nursing textbooks",
      B: "Following hospital policies without question",
      C: "Integrating best available evidence with clinical expertise and patient preferences",
      D: "Using personal experience as the only source of evidence"
    },
    answer: "C"
  },

  {
    id: "q3",
    question: "What is the first step in the evidence-based practice process?",
    options: {
      A: "Apply the intervention",
      B: "Ask a focused clinical question",
      C: "Evaluate the patient outcome",
      D: "Publish the research findings"
    },
    answer: "B"
  },

  {
    id: "q4",
    question: "Which characteristic is essential for a good nursing research question?",
    options: {
      A: "It should be vague and broad",
      B: "It should be impossible to measure",
      C: "It should be clear, focused, and researchable",
      D: "It should always have multiple independent variables"
    },
    answer: "C"
  },

  {
    id: "q5",
    question: "Which professional activity is an example of using research evidence in nursing practice?",
    options: {
      A: "Changing a treatment solely because another nurse prefers it",
      B: "Implementing an intervention after reviewing high-quality research supporting its effectiveness",
      C: "Ignoring current clinical guidelines",
      D: "Using an outdated procedure because it has always been used"
    },
    answer: "B"
  },

  // ============================================================
  // PAGE 2 (q6–q10)
  // ============================================================

  {
    id: "q6",
    question: "Which component of a PICO question identifies the population or patient group?",
    options: {
      A: "P",
      B: "I",
      C: "C",
      D: "O"
    },
    answer: "A"
  },

  {
    id: "q7",
    question: "In the PICO framework, what does the letter I represent?",
    options: {
      A: "Information",
      B: "Intervention",
      C: "Investigator",
      D: "Incidence"
    },
    answer: "B"
  },

  {
    id: "q8",
    question: "In a PICO question, what does the letter O represent?",
    options: {
      A: "Observation",
      B: "Organization",
      C: "Outcome",
      D: "Option"
    },
    answer: "C"
  },

  {
    id: "q9",
    question: "A nurse asks, 'In older adults with hypertension, does a home blood pressure monitoring program compared with usual care improve blood pressure control?' Which element represents the comparison?",
    options: {
      A: "Older adults with hypertension",
      B: "Home blood pressure monitoring",
      C: "Usual care",
      D: "Blood pressure control"
    },
    answer: "C"
  },

  {
    id: "q10",
    question: "Which type of question is most appropriate for determining whether an intervention is effective?",
    options: {
      A: "Intervention or therapy question",
      B: "Etiology question only",
      C: "Meaning question only",
      D: "Background question"
    },
    answer: "A"
  },

  // ============================================================
  // PAGE 3 (q11–q15)
  // ============================================================

  {
    id: "q11",
    question: "What is a primary source of research evidence?",
    options: {
      A: "A systematic review summarizing previous studies",
      B: "An original research article reporting the investigators' findings",
      C: "A nursing encyclopedia",
      D: "A general health website"
    },
    answer: "B"
  },

  {
    id: "q12",
    question: "What is a secondary source of evidence?",
    options: {
      A: "An original randomized controlled trial",
      B: "A patient's clinical record",
      C: "A systematic review of multiple research studies",
      D: "An interview conducted by the researcher"
    },
    answer: "C"
  },

  {
    id: "q13",
    question: "Which source generally provides the strongest evidence for evaluating the effectiveness of a clinical intervention?",
    options: {
      A: "Randomized controlled trial",
      B: "Expert opinion alone",
      C: "Personal anecdote",
      D: "Unstructured observation"
    },
    answer: "A"
  },

  {
    id: "q14",
    question: "What is the purpose of a literature review in a research study?",
    options: {
      A: "To replace data collection",
      B: "To identify what is already known and gaps in existing knowledge",
      C: "To guarantee the research hypothesis is correct",
      D: "To eliminate the need for ethical approval"
    },
    answer: "B"
  },

  {
    id: "q15",
    question: "Which database is commonly used by nurses to search for nursing and health-related literature?",
    options: {
      A: "CINAHL",
      B: "IMDb",
      C: "Weather database",
      D: "Sports database"
    },
    answer: "A"
  },

  // ============================================================
  // PAGE 4 (q16–q20)
  // ============================================================

  {
    id: "q16",
    question: "What is a quantitative research approach primarily concerned with?",
    options: {
      A: "Numerical measurement and statistical analysis",
      B: "Personal stories only",
      C: "Cultural interpretation without measurement",
      D: "Historical storytelling"
    },
    answer: "A"
  },

  {
    id: "q17",
    question: "What is a major characteristic of qualitative research?",
    options: {
      A: "It focuses exclusively on numerical data",
      B: "It explores experiences, meanings, perceptions, or social processes",
      C: "It always requires a randomized controlled trial",
      D: "It cannot involve interviews"
    },
    answer: "B"
  },

  {
    id: "q18",
    question: "Which research approach is most appropriate for exploring how patients experience living with chronic pain?",
    options: {
      A: "Qualitative research",
      B: "Randomized controlled trial only",
      C: "Laboratory experiment only",
      D: "Purely mathematical modeling"
    },
    answer: "A"
  },

  {
    id: "q19",
    question: "Which type of data is expressed numerically?",
    options: {
      A: "Quantitative data",
      B: "Narrative data only",
      C: "Thematic data only",
      D: "Ethnographic descriptions only"
    },
    answer: "A"
  },

  {
    id: "q20",
    question: "Which method is commonly used to collect qualitative research data?",
    options: {
      A: "In-depth interviews",
      B: "Random number generation",
      C: "Blood pressure calculation only",
      D: "Laboratory calibration"
    },
    answer: "A"
  },

  // ============================================================
  // PAGE 5 (q21–q25)
  // ============================================================

  {
    id: "q21",
    question: "What is the independent variable in a research study?",
    options: {
      A: "The outcome being measured",
      B: "The variable manipulated or introduced by the researcher",
      C: "The participant's demographic information only",
      D: "The research conclusion"
    },
    answer: "B"
  },

  {
    id: "q22",
    question: "What is the dependent variable?",
    options: {
      A: "The variable that is measured as an outcome",
      B: "The intervention selected by the researcher",
      C: "The researcher's personal preference",
      D: "The sampling method"
    },
    answer: "A"
  },

  {
    id: "q23",
    question: "A researcher studies whether a nurse-led education program affects patients' medication adherence. What is the dependent variable?",
    options: {
      A: "Nurse-led education program",
      B: "Medication adherence",
      C: "The research team",
      D: "The hospital"
    },
    answer: "B"
  },

  {
    id: "q24",
    question: "What is a hypothesis?",
    options: {
      A: "A proposed relationship between variables that can be tested",
      B: "A final research result",
      C: "A list of references",
      D: "A participant consent form"
    },
    answer: "A"
  },

  {
    id: "q25",
    question: "Which hypothesis predicts that there is no relationship or difference between variables?",
    options: {
      A: "Directional hypothesis",
      B: "Research hypothesis",
      C: "Null hypothesis",
      D: "Clinical hypothesis"
    },
    answer: "C"
  },

  // ============================================================
  // PAGE 6 (q26–q30)
  // ============================================================

  {
    id: "q26",
    question: "What is a research variable?",
    options: {
      A: "A characteristic or attribute that can vary among participants or observations",
      B: "A fixed research conclusion",
      C: "A literature citation",
      D: "An ethical approval document"
    },
    answer: "A"
  },

  {
    id: "q27",
    question: "Which is an example of a demographic variable?",
    options: {
      A: "Age",
      B: "Randomization",
      C: "Research hypothesis",
      D: "Literature review"
    },
    answer: "A"
  },

  {
    id: "q28",
    question: "What does operational definition mean in research?",
    options: {
      A: "A general dictionary definition",
      B: "A precise description of how a variable will be measured or manipulated",
      C: "The name of the research institution",
      D: "A list of participants"
    },
    answer: "B"
  },

  {
    id: "q29",
    question: "Why are operational definitions important?",
    options: {
      A: "They make variables measurable and clearly understood",
      B: "They eliminate the need for data collection",
      C: "They guarantee statistically significant results",
      D: "They replace informed consent"
    },
    answer: "A"
  },

  {
    id: "q30",
    question: "Which variable can influence the relationship between an independent and dependent variable and may need to be controlled?",
    options: {
      A: "Confounding variable",
      B: "Reference variable",
      C: "Publication variable",
      D: "Citation variable"
    },
    answer: "A"
  },

  // ============================================================
  // PAGE 7 (q31–q35)
  // ============================================================

  {
    id: "q31",
    question: "What is a research design?",
    options: {
      A: "The overall plan for conducting a research study",
      B: "The title of the research article",
      C: "The participant's medical history",
      D: "The statistical result only"
    },
    answer: "A"
  },

  {
    id: "q32",
    question: "Which research design involves randomly assigning participants to intervention and control groups?",
    options: {
      A: "Case study",
      B: "Randomized controlled trial",
      C: "Descriptive study",
      D: "Phenomenological study"
    },
    answer: "B"
  },

  {
    id: "q33",
    question: "What is the major purpose of randomization in a clinical trial?",
    options: {
      A: "To increase researcher bias",
      B: "To help create comparable groups and reduce selection bias",
      C: "To eliminate all research errors",
      D: "To guarantee every participant receives the intervention"
    },
    answer: "B"
  },

  {
    id: "q34",
    question: "What is a control group?",
    options: {
      A: "The group that always receives the experimental intervention",
      B: "A comparison group that does not receive the experimental intervention or receives usual care/placebo as specified",
      C: "The group conducting the research",
      D: "The group that analyzes the literature"
    },
    answer: "B"
  },

  {
    id: "q35",
    question: "Which study design primarily describes characteristics or frequencies without testing an intervention?",
    options: {
      A: "Descriptive study",
      B: "Randomized controlled trial",
      C: "Experimental laboratory trial",
      D: "Crossover trial"
    },
    answer: "A"
  },

  // ============================================================
  // PAGE 8 (q36–q40)
  // ============================================================

  {
    id: "q36",
    question: "What is a cohort study?",
    options: {
      A: "A study that follows a group of people over time to examine outcomes related to exposures",
      B: "A study that always randomly assigns treatment",
      C: "A study based only on historical documents",
      D: "A study involving no participants"
    },
    answer: "A"
  },

  {
    id: "q37",
    question: "What is a case-control study?",
    options: {
      A: "A study that begins with participants having an outcome and compares them with participants without it",
      B: "A randomized intervention study",
      C: "A qualitative phenomenology study",
      D: "A study with no comparison group"
    },
    answer: "A"
  },

  {
    id: "q38",
    question: "Which study design examines variables at one point in time?",
    options: {
      A: "Cross-sectional study",
      B: "Longitudinal cohort study",
      C: "Randomized controlled trial",
      D: "Experimental trial"
    },
    answer: "A"
  },

  {
    id: "q39",
    question: "What is a quasi-experimental study?",
    options: {
      A: "A study that includes an intervention but lacks at least one feature of a true experiment, such as randomization",
      B: "A study with no variables",
      C: "A study that uses only historical documents",
      D: "A study that cannot measure outcomes"
    },
    answer: "A"
  },

  {
    id: "q40",
    question: "Which qualitative approach focuses on understanding the lived experiences of individuals?",
    options: {
      A: "Phenomenology",
      B: "Randomized trial",
      C: "Correlation study",
      D: "Case-control design"
    },
    answer: "A"
  },

  // ============================================================
  // PAGE 9 (q41–q45)
  // ============================================================

  {
    id: "q41",
    question: "What is a population in research?",
    options: {
      A: "The entire group of individuals to whom the researcher wants the findings to apply",
      B: "Only the researchers",
      C: "The statistical software used",
      D: "The study instrument"
    },
    answer: "A"
  },

  {
    id: "q42",
    question: "What is a sample?",
    options: {
      A: "A subset of the population selected for a study",
      B: "The entire world population",
      C: "The research hypothesis",
      D: "The final research report"
    },
    answer: "A"
  },

  {
    id: "q43",
    question: "What is sampling?",
    options: {
      A: "The process of selecting participants from a population",
      B: "The process of writing the discussion section",
      C: "The process of calculating reliability",
      D: "The process of publishing an article"
    },
    answer: "A"
  },

  {
    id: "q44",
    question: "Which sampling method gives each member of the population an equal or known chance of selection?",
    options: {
      A: "Probability sampling",
      B: "Convenience sampling",
      C: "Purposive sampling",
      D: "Snowball sampling"
    },
    answer: "A"
  },

  {
    id: "q45",
    question: "Which sampling method selects participants because they are easily accessible?",
    options: {
      A: "Random sampling",
      B: "Convenience sampling",
      C: "Stratified random sampling",
      D: "Systematic sampling"
    },
    answer: "B"
  },

  // ============================================================
  // PAGE 10 (q46–q50)
  // ============================================================

  {
    id: "q46",
    question: "What is sampling bias?",
    options: {
      A: "A systematic error caused by obtaining a sample that does not adequately represent the target population",
      B: "A type of statistical significance",
      C: "A method of randomization",
      D: "A form of informed consent"
    },
    answer: "A"
  },

  {
    id: "q47",
    question: "Why is sample size important in quantitative research?",
    options: {
      A: "It can affect the precision and statistical power of the study",
      B: "It guarantees the hypothesis will be supported",
      C: "It eliminates all confounding variables",
      D: "It replaces the research design"
    },
    answer: "A"
  },

  {
    id: "q48",
    question: "What is statistical power?",
    options: {
      A: "The ability of a study to detect an effect when a true effect exists",
      B: "The ability to avoid informed consent",
      C: "The number of researchers involved",
      D: "The length of the research article"
    },
    answer: "A"
  },

  {
    id: "q49",
    question: "What does representativeness of a sample refer to?",
    options: {
      A: "How closely the sample reflects the characteristics of the target population",
      B: "How expensive the sample is",
      C: "How many researchers collected the data",
      D: "How long participants were interviewed"
    },
    answer: "A"
  },

  {
    id: "q50",
    question: "Which sampling strategy is often used in qualitative research when participants are deliberately selected because they have relevant experience?",
    options: {
      A: "Purposive sampling",
      B: "Simple random sampling",
      C: "Systematic random sampling",
      D: "Cluster random sampling"
    },
    answer: "A"
  },

  // ============================================================
  // PAGE 11 (q51–q55)
  // ============================================================

  {
    id: "q51",
    question: "What is validity in research measurement?",
    options: {
      A: "The extent to which an instrument measures what it is intended to measure",
      B: "The consistency of a measurement over time only",
      C: "The number of study participants",
      D: "The probability value"
    },
    answer: "A"
  },

  {
    id: "q52",
    question: "What is reliability?",
    options: {
      A: "The consistency or stability of a measurement",
      B: "The ability to generalize every study finding",
      C: "The absence of participants",
      D: "The size of the research budget"
    },
    answer: "A"
  },

  {
    id: "q53",
    question: "A blood pressure device produces nearly the same reading each time under the same conditions. This demonstrates:",
    options: {
      A: "Reliability",
      B: "Randomization",
      C: "External validity",
      D: "Sampling bias"
    },
    answer: "A"
  },

  {
    id: "q54",
    question: "Which statement about validity and reliability is correct?",
    options: {
      A: "A measurement can be reliable without necessarily being valid",
      B: "Validity and reliability always mean exactly the same thing",
      C: "Reliability is never important in research",
      D: "Validity means that a sample is large"
    },
    answer: "A"
  },

  {
    id: "q55",
    question: "What does inter-rater reliability assess?",
    options: {
      A: "Consistency between different observers or raters",
      B: "The number of study participants",
      C: "The statistical significance of an intervention",
      D: "The cost of research"
    },
    answer: "A"
  },

  // ============================================================
  // PAGE 12 (q56–q60)
  // ============================================================

  {
    id: "q56",
    question: "What is descriptive statistics used for?",
    options: {
      A: "Summarizing and describing characteristics of collected data",
      B: "Proving that an intervention always works",
      C: "Replacing participant recruitment",
      D: "Obtaining informed consent"
    },
    answer: "A"
  },

  {
    id: "q57",
    question: "Which measure of central tendency represents the arithmetic average?",
    options: {
      A: "Median",
      B: "Mode",
      C: "Mean",
      D: "Range"
    },
    answer: "C"
  },

  {
    id: "q58",
    question: "What is the median?",
    options: {
      A: "The most frequently occurring value",
      B: "The middle value when observations are arranged in order",
      C: "The arithmetic average",
      D: "The difference between the highest and lowest values"
    },
    answer: "B"
  },

  {
    id: "q59",
    question: "What is the mode?",
    options: {
      A: "The most frequently occurring value",
      B: "The middle value",
      C: "The average value",
      D: "The standard deviation"
    },
    answer: "A"
  },

  {
    id: "q60",
    question: "What does standard deviation describe?",
    options: {
      A: "The amount of variation or dispersion around the mean",
      B: "The sample's ethical quality",
      C: "The number of variables",
      D: "The research hypothesis"
    },
    answer: "A"
  },

  // ============================================================
  // PAGE 13 (q61–q65)
  // ============================================================

  {
    id: "q61",
    question: "What does a correlation coefficient describe?",
    options: {
      A: "The strength and direction of a relationship between variables",
      B: "The ethical quality of a study",
      C: "The number of participants who withdrew",
      D: "The reliability of the researcher"
    },
    answer: "A"
  },

  {
    id: "q62",
    question: "A positive correlation means that:",
    options: {
      A: "As one variable increases, the other tends to increase",
      B: "One variable always causes the other",
      C: "The variables have no relationship",
      D: "As one variable increases, the other must decrease"
    },
    answer: "A"
  },

  {
    id: "q63",
    question: "What does a negative correlation indicate?",
    options: {
      A: "Both variables always increase together",
      B: "As one variable increases, the other tends to decrease",
      C: "There is no relationship between variables",
      D: "One variable necessarily causes the other"
    },
    answer: "B"
  },

  {
    id: "q64",
    question: "Which statement about correlation is most accurate?",
    options: {
      A: "Correlation by itself does not establish causation",
      B: "Correlation always proves causation",
      C: "Correlation eliminates bias",
      D: "Correlation can only be used in qualitative research"
    },
    answer: "A"
  },

  {
    id: "q65",
    question: "What does a p-value help researchers determine?",
    options: {
      A: "How compatible the observed data are with the null hypothesis under the statistical model",
      B: "Whether the research is ethically approved",
      C: "Whether every participant received treatment",
      D: "Whether the sample is representative in every respect"
    },
    answer: "A"
  },

  // ============================================================
  // PAGE 14 (q66–q70)
  // ============================================================

  {
    id: "q66",
    question: "If a study uses a significance level of 0.05, which p-value is generally considered statistically significant?",
    options: {
      A: "0.80",
      B: "0.50",
      C: "0.10",
      D: "0.03"
    },
    answer: "D"
  },

  {
    id: "q67",
    question: "What does a confidence interval provide?",
    options: {
      A: "A range of plausible values for a population parameter based on the study data and model",
      B: "A guarantee that the true value is inside the interval",
      C: "A replacement for informed consent",
      D: "A list of all participants"
    },
    answer: "A"
  },

  {
    id: "q68",
    question: "What is statistical significance?",
    options: {
      A: "Evidence that an observed result would be relatively unlikely under the null hypothesis at the chosen significance level",
      B: "Proof that a finding is clinically important",
      C: "Proof that a study has no bias",
      D: "Proof that all patients will benefit"
    },
    answer: "A"
  },

  {
    id: "q69",
    question: "What is clinical significance?",
    options: {
      A: "The practical importance of a finding for patient care or outcomes",
      B: "The p-value alone",
      C: "The number of references in an article",
      D: "The probability of publication"
    },
    answer: "A"
  },

  {
    id: "q70",
    question: "A research finding is statistically significant but produces only a very small improvement that has little practical effect on patients. This illustrates the difference between:",
    options: {
      A: "Validity and reliability",
      B: "Statistical significance and clinical significance",
      C: "Population and sample",
      D: "Qualitative and quantitative research"
    },
    answer: "B"
  },

  // ============================================================
  // PAGE 15 (q71–q75)
  // ============================================================

  {
    id: "q71",
    question: "What is research ethics primarily concerned with?",
    options: {
      A: "Protecting the rights, safety, dignity, and welfare of research participants",
      B: "Increasing the number of publications",
      C: "Guaranteeing positive findings",
      D: "Reducing the number of researchers"
    },
    answer: "A"
  },

  {
    id: "q72",
    question: "What is informed consent?",
    options: {
      A: "A process in which participants receive relevant information and voluntarily agree to participate",
      B: "A document that guarantees treatment success",
      C: "A method of statistical analysis",
      D: "A requirement only for researchers"
    },
    answer: "A"
  },

  {
    id: "q73",
    question: "Which principle means that research participants should be treated fairly and equitably?",
    options: {
      A: "Justice",
      B: "Randomization",
      C: "Reliability",
      D: "Correlation"
    },
    answer: "A"
  },

  {
    id: "q74",
    question: "Which ethical principle emphasizes maximizing benefits and minimizing harm?",
    options: {
      A: "Beneficence",
      B: "Sampling",
      C: "Validity",
      D: "Blinding"
    },
    answer: "A"
  },

  {
    id: "q75",
    question: "Which ethical principle supports a participant's right to make voluntary decisions about participation?",
    options: {
      A: "Respect for persons",
      B: "Statistical power",
      C: "Randomization",
      D: "Generalizability"
    },
    answer: "A"
  },

  // ============================================================
  // PAGE 16 (q76–q80)
  // ============================================================

  {
    id: "q76",
    question: "What is the primary role of an Institutional Review Board (IRB) or research ethics committee?",
    options: {
      A: "To protect human research participants by reviewing the ethical aspects of proposed studies",
      B: "To write the research article",
      C: "To recruit all participants",
      D: "To perform statistical analysis"
    },
    answer: "A"
  },

  {
    id: "q77",
    question: "Which action by a researcher represents a violation of research integrity?",
    options: {
      A: "Reporting results accurately",
      B: "Fabricating research data",
      C: "Protecting participant confidentiality",
      D: "Obtaining informed consent"
    },
    answer: "B"
  },

  {
    id: "q78",
    question: "What is plagiarism?",
    options: {
      A: "Using another person's ideas or words without appropriate acknowledgment",
      B: "Repeating a study with permission",
      C: "Publishing research findings",
      D: "Collecting original data"
    },
    answer: "A"
  },

  {
    id: "q79",
    question: "What does confidentiality mean in research?",
    options: {
      A: "Protecting participants' private information from unauthorized disclosure",
      B: "Making all participant information public",
      C: "Allowing participants to alter research findings",
      D: "Avoiding data collection"
    },
    answer: "A"
  },

  {
    id: "q80",
    question: "A researcher removes identifying information from a dataset before analysis. What is the primary purpose of this action?",
    options: {
      A: "To improve statistical significance",
      B: "To protect participant privacy",
      C: "To increase sample size",
      D: "To eliminate the need for ethical review"
    },
    answer: "B"
  },

  // ============================================================
  // PAGE 17 (q81–q85)
  // ============================================================

  {
    id: "q81",
    question: "What is bias in research?",
    options: {
      A: "A systematic influence that can distort study results",
      B: "A type of informed consent",
      C: "A statistical software program",
      D: "A research database"
    },
    answer: "A"
  },

  {
    id: "q82",
    question: "What is selection bias?",
    options: {
      A: "Bias resulting from systematic differences in how participants are selected or retained",
      B: "Bias caused only by incorrect statistical calculations",
      C: "Bias caused by publication formatting",
      D: "Bias that occurs only in laboratory studies"
    },
    answer: "A"
  },

  {
    id: "q83",
    question: "What is recall bias?",
    options: {
      A: "Systematic differences in participants' ability or willingness to remember and report past information",
      B: "Random assignment to groups",
      C: "A method of blinding researchers",
      D: "A statistical test"
    },
    answer: "A"
  },

  {
    id: "q84",
    question: "What is researcher bias?",
    options: {
      A: "The influence of a researcher's expectations or beliefs on study procedures or interpretation",
      B: "A type of probability sampling",
      C: "An ethical principle",
      D: "A measure of central tendency"
    },
    answer: "A"
  },

  {
    id: "q85",
    question: "Which strategy can help reduce researcher bias in a clinical trial?",
    options: {
      A: "Blinding when feasible",
      B: "Changing outcomes after data collection",
      C: "Selecting only participants who support the hypothesis",
      D: "Ignoring protocol deviations"
    },
    answer: "A"
  },

  // ============================================================
  // PAGE 18 (q86–q90)
  // ============================================================

  {
    id: "q86",
    question: "What is blinding in a research study?",
    options: {
      A: "Withholding certain group-allocation information from participants, researchers, assessors, or others when appropriate",
      B: "Removing all participants from a study",
      C: "Hiding the research results from the ethics committee",
      D: "Deleting study data"
    },
    answer: "A"
  },

  {
    id: "q87",
    question: "What is internal validity?",
    options: {
      A: "The extent to which the observed study results can be attributed to the variables being studied rather than systematic errors or alternative explanations",
      B: "The ability to generalize findings to every population",
      C: "The number of references used",
      D: "The size of the research team"
    },
    answer: "A"
  },

  {
    id: "q88",
    question: "What is external validity?",
    options: {
      A: "The extent to which findings may apply to other populations, settings, or situations",
      B: "The consistency of a measurement instrument",
      C: "The p-value of a study",
      D: "The number of study variables"
    },
    answer: "A"
  },

  {
    id: "q89",
    question: "Which factor can limit the generalizability of research findings?",
    options: {
      A: "A sample that is very different from the population of interest",
      B: "Clear inclusion criteria",
      C: "Adequate sample selection",
      D: "Transparent reporting"
    },
    answer: "A"
  },

  {
    id: "q90",
    question: "What is attrition in research?",
    options: {
      A: "Loss of participants during the course of a study",
      B: "Random assignment of participants",
      C: "A method of data analysis",
      D: "A form of informed consent"
    },
    answer: "A"
  },

  // ============================================================
  // PAGE 19 (q91–q95)
  // ============================================================

  {
    id: "q91",
    question: "What is a systematic review?",
    options: {
      A: "A structured synthesis of evidence addressing a specific research question using predefined methods",
      B: "A personal opinion about a clinical topic",
      C: "A single patient case report",
      D: "An informal internet search"
    },
    answer: "A"
  },

  {
    id: "q92",
    question: "What is a meta-analysis?",
    options: {
      A: "A statistical method that combines quantitative results from multiple studies when appropriate",
      B: "A qualitative interview",
      C: "A hospital policy",
      D: "A research consent form"
    },
    answer: "A"
  },

  {
    id: "q93",
    question: "What is a scoping review primarily used to do?",
    options: {
      A: "Map the breadth and nature of evidence or literature on a topic",
      B: "Randomize patients to treatment groups",
      C: "Replace all primary research",
      D: "Measure blood pressure"
    },
    answer: "A"
  },

  {
    id: "q94",
    question: "Why are systematic reviews useful in evidence-based practice?",
    options: {
      A: "They can synthesize findings from multiple relevant studies",
      B: "They guarantee that all studies have identical results",
      C: "They eliminate the need for clinical judgment",
      D: "They always prove causation"
    },
    answer: "A"
  },

  {
    id: "q95",
    question: "What is a clinical practice guideline?",
    options: {
      A: "A systematically developed recommendation intended to assist decisions about patient care",
      B: "A patient's personal diary",
      C: "A researcher's private notes",
      D: "A statistical database"
    },
    answer: "A"
  },

  // ============================================================
  // PAGE 20 (q96–q100)
  // ============================================================

  {
    id: "q96",
    question: "When critically appraising a research article, what should the nurse assess first?",
    options: {
      A: "Whether the study addresses a relevant clinical question",
      B: "The color of the article's graphs",
      C: "The number of pages only",
      D: "The author's job title only"
    },
    answer: "A"
  },

  {
    id: "q97",
    question: "Which question is most important when assessing the validity of a research study?",
    options: {
      A: "Was the study designed and conducted in a way that minimizes bias?",
      B: "Does the article have a long title?",
      C: "Does the article contain many photographs?",
      D: "Was the study conducted in another country?"
    },
    answer: "A"
  },

  {
    id: "q98",
    question: "Why should nurses evaluate the methods section of a research article?",
    options: {
      A: "To determine how the study was conducted and whether the methods support the conclusions",
      B: "To identify the author's favorite topic",
      C: "To determine the article's font size",
      D: "To avoid reading the results"
    },
    answer: "A"
  },

  {
    id: "q99",
    question: "Which question should a nurse ask when evaluating the results of a study?",
    options: {
      A: "Are the statistical methods appropriate for the research question and data?",
      B: "Is the article longer than ten pages?",
      C: "Does the study have a colorful title?",
      D: "Was the researcher a nurse?"
    },
    answer: "A"
  },

  {
    id: "q100",
    question: "Why is it important to examine a study's limitations?",
    options: {
      A: "Limitations help readers understand factors that may affect interpretation and applicability of the findings",
      B: "Limitations prove that the study is useless",
      C: "Limitations replace the results section",
      D: "Limitations guarantee future studies will have no errors"
    },
    answer: "A"
  },

  // ============================================================
  // PAGE 21 (q101–q105)
  // ============================================================

  {
    id: "q101",
    question: "Which statement best describes translational research in nursing?",
    options: {
      A: "Research that helps move scientific findings into clinical practice and improved health outcomes",
      B: "Research that only studies laboratory animals",
      C: "Research that avoids clinical applications",
      D: "Research that replaces evidence with opinion"
    },
    answer: "A"
  },

  {
    id: "q102",
    question: "What is implementation science concerned with?",
    options: {
      A: "Understanding and improving the adoption and use of evidence-based interventions in real-world settings",
      B: "Writing fictional research reports",
      C: "Eliminating clinical guidelines",
      D: "Measuring only laboratory variables"
    },
    answer: "A"
  },

  {
    id: "q103",
    question: "A nurse wants to introduce an evidence-based fall-prevention program on a hospital unit. What should the nurse do before implementation?",
    options: {
      A: "Assess the evidence, clinical setting, resources, and barriers to implementation",
      B: "Implement it immediately without informing staff",
      C: "Ignore patient preferences",
      D: "Use only personal experience"
    },
    answer: "A"
  },

  {
    id: "q104",
    question: "What is an implementation barrier?",
    options: {
      A: "A factor that makes adoption or use of an evidence-based practice more difficult",
      B: "A factor that always improves patient outcomes",
      C: "A research hypothesis",
      D: "A statistical test"
    },
    answer: "A"
  },

  {
    id: "q105",
    question: "Which factor is important when determining whether evidence can be applied to a specific patient?",
    options: {
      A: "Patient preferences, values, clinical condition, and context",
      B: "The researcher's favorite intervention",
      C: "The number of pages in the article",
      D: "The color of the journal cover"
    },
    answer: "A"
  },

  // ============================================================
  // PAGE 22 (q106–q110)
  // ============================================================

  {
    id: "q106",
    question: "Which statement best describes the role of clinical expertise in evidence-based practice?",
    options: {
      A: "Clinical expertise helps nurses integrate research evidence with individual patient circumstances",
      B: "Clinical expertise makes research evidence unnecessary",
      C: "Clinical expertise means using tradition only",
      D: "Clinical expertise replaces patient preferences"
    },
    answer: "A"
  },

  {
    id: "q107",
    question: "Why are patient preferences important in evidence-based practice?",
    options: {
      A: "They help ensure care decisions are consistent with the patient's values and goals",
      B: "They replace scientific evidence",
      C: "They eliminate the need for assessment",
      D: "They determine statistical significance"
    },
    answer: "A"
  },

  {
    id: "q108",
    question: "A patient declines an evidence-supported intervention after discussing its benefits and risks. What should the nurse do?",
    options: {
      A: "Respect the patient's informed decision and explore acceptable alternatives",
      B: "Force the intervention because research supports it",
      C: "Ignore the patient's concerns",
      D: "Document that the patient is not eligible for care"
    },
    answer: "A"
  },

  {
    id: "q109",
    question: "What is shared decision-making?",
    options: {
      A: "A collaborative process in which clinicians and patients consider evidence, options, and patient values",
      B: "A process in which only the nurse makes decisions",
      C: "A process in which only researchers make decisions",
      D: "A statistical technique"
    },
    answer: "A"
  },

  {
    id: "q110",
    question: "Which statement best reflects the relationship between research evidence and clinical judgment?",
    options: {
      A: "Research evidence should be integrated with clinical expertise and patient circumstances",
      B: "Research evidence should always be followed regardless of patient condition",
      C: "Clinical judgment should always override strong evidence",
      D: "Neither research nor clinical judgment is necessary"
    },
    answer: "A"
  },

  // ============================================================
  // PAGE 23 (q111–q115)
  // ============================================================

  {
    id: "q111",
    question: "What is evidence hierarchy used for?",
    options: {
      A: "To help clinicians understand the relative strength of different types of evidence",
      B: "To rank nurses according to experience",
      C: "To determine hospital salaries",
      D: "To replace critical appraisal"
    },
    answer: "A"
  },

  {
    id: "q112",
    question: "Which source would generally provide stronger evidence about intervention effectiveness?",
    options: {
      A: "A well-conducted systematic review of randomized controlled trials",
      B: "A single personal anecdote",
      C: "An unsupported expert opinion",
      D: "An informal social media comment"
    },
    answer: "A"
  },

  {
    id: "q113",
    question: "Why should nurses consider the quality of evidence rather than simply the number of studies available?",
    options: {
      A: "Multiple poorly designed studies may provide weaker evidence than fewer high-quality studies",
      B: "The number of studies always determines truth",
      C: "Study quality has no relationship to evidence",
      D: "One low-quality study is always sufficient"
    },
    answer: "A"
  },

  {
    id: "q114",
    question: "What does applicability of research evidence mean?",
    options: {
      A: "The extent to which evidence is relevant and usable for a particular patient, population, or clinical setting",
      B: "The number of citations an article receives",
      C: "The age of the researcher",
      D: "The length of the research paper"
    },
    answer: "A"
  },

  {
    id: "q115",
    question: "A nurse finds a recent, high-quality study but the participants differ substantially from the nurse's patient population. What is the most appropriate action?",
    options: {
      A: "Critically assess whether the findings are applicable to the nurse's patients",
      B: "Automatically apply the intervention to every patient",
      C: "Ignore all other evidence",
      D: "Assume the findings are invalid"
    },
    answer: "A"
  },

  // ============================================================
  // PAGE 24 (q116–q120)
  // ============================================================

  {
    id: "q116",
    question: "What is dissemination of research findings?",
    options: {
      A: "Sharing research results with appropriate audiences through channels such as publications, presentations, or professional education",
      B: "Deleting research data",
      C: "Preventing clinicians from seeing research results",
      D: "Changing results after publication"
    },
    answer: "A"
  },

  {
    id: "q117",
    question: "Why is replication important in nursing research?",
    options: {
      A: "Repeating research can help determine whether findings are consistent and reproducible",
      B: "It guarantees identical results in every population",
      C: "It eliminates the need for new research questions",
      D: "It prevents publication"
    },
    answer: "A"
  },

  {
    id: "q118",
    question: "Which action demonstrates a nurse's commitment to evidence-based practice?",
    options: {
      A: "Regularly evaluating current evidence and integrating appropriate findings into practice",
      B: "Using procedures only because they are traditional",
      C: "Avoiding professional guidelines",
      D: "Ignoring changes in clinical evidence"
    },
    answer: "A"
  },

  {
    id: "q119",
    question: "After implementing an evidence-based intervention, what should the nurse do next?",
    options: {
      A: "Evaluate patient and practice outcomes",
      B: "Assume the intervention is effective",
      C: "Stop collecting information",
      D: "Ignore unintended effects"
    },
    answer: "A"
  },

  {
    id: "q120",
    question: "Which sequence best represents the general evidence-based practice process?",
    options: {
      A: "Ask, acquire, appraise, apply, and assess",
      B: "Apply, ignore, publish, and repeat",
      C: "Randomize, diagnose, prescribe, and discharge",
      D: "Search, publish, eliminate, and repeat"
    },
    answer: "A"
  }

];
