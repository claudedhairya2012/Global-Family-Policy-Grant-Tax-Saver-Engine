/*
 * India — central-government and national-policy catalogue.
 *
 * Monetary figures, limits, and availability must be re-verified against the
 * linked official source before a user applies. `estimatedAnnualValue` is an
 * annual cash value, maximum deduction, or clearly described indicative value;
 * it is never a guaranteed entitlement.
 */
(function initialiseIndiaCentralPolicies(global) {
  "use strict";

  const ALL_INDIA = "All India (Central)";
  const REQUIRED_FIELDS = [
    "id",
    "country",
    "region",
    "title",
    "category",
    "audience",
    "minKids",
    "requiresHomeowner",
    "requiresSenior",
    "maxIncomeNumeric",
    "estimatedAnnualValue",
    "benefitDisplay",
    "incomeLimitDisplay",
    "description",
    "applicationSteps",
    "documents",
    "officialUrl"
  ];

  const freezePolicy = (policy) => {
    const missingFields = REQUIRED_FIELDS.filter((field) => !(field in policy));

    if (missingFields.length > 0) {
      throw new Error(`India central policy ${policy.id || "(unknown)"} is missing: ${missingFields.join(", ")}`);
    }

    return Object.freeze({
      ...policy,
      applicationSteps: Object.freeze([...policy.applicationSteps]),
      documents: Object.freeze([...policy.documents])
    });
  };

  const INDIA_CENTRAL_POLICIES = [
    {
      id: "in-central-section-87a-new-regime-fy-2025-26",
      country: "India",
      region: ALL_INDIA,
      title: "Section 87A Rebate — New Tax Regime FY 2025-26",
      category: "tax",
      audience: "Resident individual taxpayers using the new tax regime whose total income is within the rebate limit; salaried taxpayers may also receive the standard deduction.",
      minKids: 0,
      requiresHomeowner: false,
      requiresSenior: false,
      maxIncomeNumeric: 1275000,
      estimatedAnnualValue: 60000,
      benefitDisplay: "Income-tax rebate up to ₹60,000; a salaried taxpayer can generally have gross salary up to ₹12.75 lakh after the ₹75,000 standard deduction.",
      incomeLimitDisplay: "Up to ₹12 lakh total income under the new regime; up to ₹12.75 lakh gross salary where the standard deduction applies.",
      description: "For FY 2025-26, Section 87A can reduce income tax to nil for an eligible resident individual in the new regime. Marginal-relief rules may apply near the threshold. This is a tax computation feature, not a separate cash grant.",
      applicationSteps: [
        "Confirm that the New Tax Regime FY 2025-26 is the intended regime and calculate total income after permitted deductions.",
        "File the applicable income-tax return and complete the tax computation in the e-Filing portal.",
        "Review the Section 87A and marginal-relief calculation before verifying and submitting the return."
      ],
      documents: [
        "PAN and Aadhaar details",
        "Form 16 or salary certificate, if employed",
        "Annual Information Statement (AIS) and Form 26AS",
        "Income and deduction records used in the return"
      ],
      officialUrl: "https://www.incometax.gov.in/iec/foportal/"
    },
    {
      id: "in-central-section-80c-savings-investments-tuition",
      country: "India",
      region: ALL_INDIA,
      title: "Section 80C — PPF, EPF, ELSS, LIC and Tuition Fees",
      category: "tax",
      audience: "Individual or Hindu Undivided Family taxpayers who opt for the old tax regime and make eligible investments, insurance payments, provident-fund contributions or tuition-fee payments.",
      minKids: 0,
      requiresHomeowner: false,
      requiresSenior: false,
      maxIncomeNumeric: null,
      estimatedAnnualValue: 150000,
      benefitDisplay: "Eligible deduction up to ₹1.5 lakh per financial year under the old tax regime.",
      incomeLimitDisplay: "No national income ceiling; the overall Section 80C deduction cap is ₹1.5 lakh.",
      description: "Section 80C can cover qualifying PPF, EPF, ELSS, life-insurance premiums, principal repayment on an eligible housing loan and tuition fees for up to two children, subject to the statutory cap and conditions. The actual tax saving depends on the taxpayer's slab and chosen regime.",
      applicationSteps: [
        "Confirm that the old tax regime is more suitable after comparing total tax outcomes.",
        "Collect proof of eligible payments and investments made during the financial year.",
        "Claim the eligible total, up to the statutory cap, in the income-tax return or employer investment declaration."
      ],
      documents: [
        "PPF, EPF or ELSS contribution statements",
        "LIC premium receipts or policy certificate",
        "Recognised-school or university tuition-fee receipts",
        "Home-loan principal repayment certificate, where relevant",
        "Form 16 and PAN"
      ],
      officialUrl: "https://www.incometax.gov.in/iec/foportal/help/individual/return-applicable"
    },
    {
      id: "in-central-section-80d-health-insurance",
      country: "India",
      region: ALL_INDIA,
      title: "Section 80D — Health Insurance for Family and Senior-Citizen Parents",
      category: "tax",
      audience: "Individual or Hindu Undivided Family taxpayers in the old tax regime who pay qualifying health-insurance premiums or eligible preventive-health-check expenses for self, family or parents.",
      minKids: 0,
      requiresHomeowner: false,
      requiresSenior: false,
      maxIncomeNumeric: null,
      estimatedAnnualValue: 100000,
      benefitDisplay: "Eligible deduction commonly ranges from ₹75,000 to ₹1,00,000 where both the taxpayer/family and parents qualify as senior citizens, subject to Section 80D limits.",
      incomeLimitDisplay: "No national income ceiling; eligibility depends on qualifying premiums, relationship and senior-citizen status.",
      description: "Section 80D allows separate deductions for health insurance of self, spouse and dependent children, and for parents. Higher caps apply for senior citizens. A limited preventive health-check amount can be included within the applicable cap; payment-mode rules apply to insurance premiums.",
      applicationSteps: [
        "Identify the eligible premium paid for self/family and the separate premium paid for parents.",
        "Confirm the age category of every insured person on the policy and apply the correct Section 80D cap.",
        "Keep payment and policy evidence, then claim the eligible amount in the old-regime income-tax return."
      ],
      documents: [
        "Health-insurance policy schedule",
        "Premium payment receipt or bank/card payment proof",
        "Age proof for senior-citizen insured persons, when needed",
        "Preventive health-check receipt, if claimed",
        "PAN and Form 16"
      ],
      officialUrl: "https://www.incometax.gov.in/iec/foportal/help/individual/return-applicable"
    },
    {
      id: "in-central-section-24b-self-occupied-home-loan-interest",
      country: "India",
      region: ALL_INDIA,
      title: "Section 24(b) — Self-Occupied Home-Loan Interest",
      category: "housing",
      audience: "Individual homeowners paying interest on an eligible housing loan for a self-occupied property, subject to completion and other Income-tax Act conditions.",
      minKids: 0,
      requiresHomeowner: true,
      requiresSenior: false,
      maxIncomeNumeric: null,
      estimatedAnnualValue: 200000,
      benefitDisplay: "Interest deduction up to ₹2 lakh for an eligible self-occupied house property under the old tax regime, subject to conditions.",
      incomeLimitDisplay: "No national income ceiling; loan purpose, completion timing and property use determine the permitted claim.",
      description: "Section 24(b) can permit deduction of qualifying interest on borrowed capital for house property. The familiar ₹2 lakh self-occupied cap is generally relevant under the old tax regime and depends on statutory conditions, including completion timing. Let-out-property loss-set-off rules differ.",
      applicationSteps: [
        "Obtain the lender's annual interest and principal certificate.",
        "Confirm whether the property is self-occupied or let out and apply the correct house-property rules.",
        "Declare the eligible interest amount in the house-property schedule of the income-tax return."
      ],
      documents: [
        "Home-loan interest certificate",
        "Loan sanction letter and repayment statement",
        "Possession or completion certificate, where relevant",
        "Property ownership documents",
        "PAN and Form 16"
      ],
      officialUrl: "https://www.incometax.gov.in/iec/foportal/help/individual/return-applicable"
    },
    {
      id: "in-central-section-80e-higher-education-loan-interest",
      country: "India",
      region: ALL_INDIA,
      title: "Section 80E — Higher-Education Loan Interest",
      category: "tax",
      audience: "Individual taxpayers in the old tax regime who repay interest on a qualifying higher-education loan for themselves, spouse, children or a student for whom they are legal guardian.",
      minKids: 0,
      requiresHomeowner: false,
      requiresSenior: false,
      maxIncomeNumeric: null,
      estimatedAnnualValue: null,
      benefitDisplay: "100% of qualifying education-loan interest may be deductible; there is no separate rupee ceiling, subject to the statutory time limit and conditions.",
      incomeLimitDisplay: "No national income ceiling; only interest on an eligible loan from an approved financial institution or charitable institution qualifies.",
      description: "Section 80E is an old-regime deduction for qualifying higher-education loan interest. The deduction is for interest, not principal, and is generally available for the initial assessment year plus the next seven assessment years or until interest is fully paid, whichever is earlier.",
      applicationSteps: [
        "Request an annual interest certificate from the eligible lender.",
        "Confirm that the course, borrower relationship and lender meet Section 80E requirements.",
        "Claim only the qualifying interest in the old-regime income-tax return."
      ],
      documents: [
        "Education-loan sanction letter",
        "Annual interest certificate from the lender",
        "Loan repayment statement",
        "Student/course admission proof, if requested",
        "PAN and Form 16"
      ],
      officialUrl: "https://www.incometax.gov.in/iec/foportal/help/individual/return-applicable"
    },
    {
      id: "in-central-section-80ccd-1b-nps-additional-deduction",
      country: "India",
      region: ALL_INDIA,
      title: "Section 80CCD(1B) — Additional NPS Deduction",
      category: "tax",
      audience: "Individual taxpayers in the old tax regime who make an eligible contribution to their National Pension System Tier I account.",
      minKids: 0,
      requiresHomeowner: false,
      requiresSenior: false,
      maxIncomeNumeric: null,
      estimatedAnnualValue: 50000,
      benefitDisplay: "Additional deduction up to ₹50,000 for eligible NPS Tier I contributions, over and above the Section 80C ceiling.",
      incomeLimitDisplay: "No national income ceiling; contribution and account-type conditions apply.",
      description: "Section 80CCD(1B) provides a distinct additional deduction for eligible NPS Tier I self-contributions. It is commonly considered with, but is separate from, the Section 80C aggregate cap. Tax treatment and regime rules must be checked for the relevant financial year.",
      applicationSteps: [
        "Make an eligible Tier I NPS contribution within the financial year.",
        "Download the contribution transaction statement or receipt from the authorised NPS recordkeeper or point of presence.",
        "Claim the amount, up to ₹50,000, in the applicable income-tax return."
      ],
      documents: [
        "NPS PRAN details",
        "Tier I contribution receipt or transaction statement",
        "Bank payment proof",
        "PAN and Form 16"
      ],
      officialUrl: "https://www.pfrda.org.in/"
    },
    {
      id: "in-central-hra-exemption-section-10-13a",
      country: "India",
      region: ALL_INDIA,
      title: "HRA Exemption — Section 10(13A)",
      category: "tax",
      audience: "Salaried employees in the old tax regime who receive House Rent Allowance and pay rent for a residence not owned by them in the relevant location.",
      minKids: 0,
      requiresHomeowner: false,
      requiresSenior: false,
      maxIncomeNumeric: null,
      estimatedAnnualValue: null,
      benefitDisplay: "HRA exemption is the least of the statutory calculation amounts; no single national rupee cap applies.",
      incomeLimitDisplay: "No national income ceiling; salary structure, rent paid and metro/non-metro location affect the calculation.",
      description: "Section 10(13A), read with the relevant rules, can exempt part of HRA for an eligible salaried tenant under the old tax regime. The exempt amount is calculated using actual HRA, rent less 10% of salary, and 50% or 40% of salary depending on the city classification.",
      applicationSteps: [
        "Keep rent receipts and the rental agreement for the period claimed.",
        "Provide the landlord's PAN where required for rent above the prescribed threshold.",
        "Submit evidence to the employer for TDS purposes and reconcile the final claim in the income-tax return."
      ],
      documents: [
        "Salary slips or Form 16 showing HRA",
        "Rent receipts and rental agreement",
        "Landlord PAN, where required",
        "Bank transfer or payment proof for rent"
      ],
      officialUrl: "https://www.incometax.gov.in/iec/foportal/help/individual/return-applicable"
    },
    {
      id: "in-central-pm-surya-ghar-rooftop-solar",
      country: "India",
      region: ALL_INDIA,
      title: "PM Surya Ghar: Muft Bijli Yojana — Rooftop Solar Subsidy",
      category: "housing",
      audience: "Residential electricity consumers installing an eligible grid-connected rooftop solar system through the programme process, subject to local distribution-company requirements.",
      minKids: 0,
      requiresHomeowner: true,
      requiresSenior: false,
      maxIncomeNumeric: null,
      estimatedAnnualValue: 78000,
      benefitDisplay: "Central financial assistance up to ₹78,000 for eligible residential rooftop solar capacity; actual subsidy depends on approved capacity and installation details.",
      incomeLimitDisplay: "No standard national household-income ceiling is published for the central residential subsidy; property and electricity-connection requirements apply.",
      description: "PM Surya Ghar supports eligible residential rooftop solar installation through the national portal and participating distribution companies. The headline maximum central assistance is tied to system capacity; applicants should not order installation outside the prescribed workflow if it would affect eligibility.",
      applicationSteps: [
        "Register on the PM Surya Ghar portal using the electricity-consumer details for the residence.",
        "Select the state, distribution company and eligible vendor, then obtain approval before installation.",
        "Complete installation, inspection and net-metering steps, then submit bank details for the subsidy process."
      ],
      documents: [
        "Recent electricity bill and consumer account number",
        "Identity and address proof of the electricity consumer",
        "Bank account details or cancelled cheque",
        "Approved vendor quotation and installation documents",
        "Net-metering or inspection documents requested by the DISCOM"
      ],
      officialUrl: "https://pmsuryaghar.gov.in/"
    },
    {
      id: "in-central-pmay-urban-2-interest-subsidy-scheme",
      country: "India",
      region: ALL_INDIA,
      title: "PMAY-U 2.0 — Interest Subsidy Scheme for Urban Housing",
      category: "housing",
      audience: "Eligible urban households without a pucca house who meet PMAY-U 2.0 and lender requirements for the Interest Subsidy Scheme.",
      minKids: 0,
      requiresHomeowner: false,
      requiresSenior: false,
      maxIncomeNumeric: 900000,
      estimatedAnnualValue: 36000,
      benefitDisplay: "Interest subsidy benefit up to ₹1.80 lakh in total, commonly credited in instalments subject to scheme and loan conditions.",
      incomeLimitDisplay: "Household annual income up to ₹9 lakh for the Interest Subsidy Scheme; confirm current loan, carpet-area and property conditions.",
      description: "PMAY-U 2.0 includes an Interest Subsidy Scheme for eligible urban households obtaining qualifying home loans to purchase, construct or repurchase a home. The benefit is not a yearly cash payment: the total subsidy is subject to the approved loan and scheme rules.",
      applicationSteps: [
        "Confirm that the household and proposed property meet PMAY-U 2.0 ownership and urban-area criteria.",
        "Approach a participating lender or follow the official PMAY-U 2.0 workflow for the Interest Subsidy Scheme.",
        "Submit income, household and property evidence, then track the lender and scheme decision."
      ],
      documents: [
        "Aadhaar and PAN of adult household members, as requested",
        "Income proof and bank statements",
        "Home-loan sanction or application documents",
        "Property or construction documents",
        "Self-declaration regarding pucca-house ownership, where required"
      ],
      officialUrl: "https://pmay-urban.gov.in/"
    },
    {
      id: "in-central-sukanya-samriddhi-yojana",
      country: "India",
      region: ALL_INDIA,
      title: "Sukanya Samriddhi Yojana (SSY)",
      category: "childcare",
      audience: "Parents or legal guardians of an eligible girl child who wish to open a long-term small-savings account under the scheme rules.",
      minKids: 1,
      requiresHomeowner: false,
      requiresSenior: false,
      maxIncomeNumeric: null,
      estimatedAnnualValue: 150000,
      benefitDisplay: "Tax-advantaged small-savings contribution of up to ₹1.5 lakh per financial year; interest rate is notified periodically.",
      incomeLimitDisplay: "No household-income ceiling; girl-child age, account-count and contribution rules apply.",
      description: "SSY is a government small-savings account for an eligible girl child. Deposits are subject to annual minimum and maximum limits, and the account has defined maturity and withdrawal rules. Where available, old-regime tax treatment may interact with Section 80C; verify the current notified interest rate and tax rules.",
      applicationSteps: [
        "Check the girl child's age and the guardian/account-limit rules before opening an account.",
        "Open the account at an authorised post office or participating bank with the guardian.",
        "Make deposits within the annual limits and retain the passbook and deposit evidence."
      ],
      documents: [
        "Girl child's birth certificate",
        "Guardian identity and address proof",
        "Photographs and KYC documents requested by the bank or post office",
        "Initial deposit and subsequent deposit receipts"
      ],
      officialUrl: "https://www.indiapost.gov.in/Financial/pages/content/post-office-saving-schemes.aspx"
    },
    {
      id: "in-central-mahila-samman-savings-certificate-closed",
      country: "India",
      region: ALL_INDIA,
      title: "Mahila Samman Savings Certificate (MSSC) — Closed to New Accounts Unless Extended",
      category: "cash-benefit",
      audience: "Women and guardians of minor girls who held or were considering the former two-year small-savings product.",
      minKids: 0,
      requiresHomeowner: false,
      requiresSenior: false,
      maxIncomeNumeric: null,
      estimatedAnnualValue: 200000,
      benefitDisplay: "Former scheme allowed deposits up to ₹2 lakh with a notified two-year interest rate; check an authorised post office for any formally announced extension or successor.",
      incomeLimitDisplay: "No household-income ceiling applied while the product accepted new accounts.",
      description: "MSSC was a time-limited small-savings scheme. Its original account-opening window ended on 31 March 2025. This record is retained so existing account holders can identify the product and so users are not incorrectly told that a new account is currently available. Do not treat this as an open application route without an official extension notice.",
      applicationSteps: [
        "For an existing account, check the passbook and the issuing post office or bank for maturity and withdrawal instructions.",
        "For a proposed new account, confirm directly with India Post or an authorised bank that the scheme has been formally extended before proceeding.",
        "Keep the account record and payout details for tax and savings records."
      ],
      documents: [
        "Existing MSSC passbook or certificate, if held",
        "Account-holder identity proof",
        "Bank account details for maturity proceeds",
        "Official extension notice, if any, for a new-account enquiry"
      ],
      officialUrl: "https://www.indiapost.gov.in/Financial/pages/content/post-office-saving-schemes.aspx",
      status: "closed-to-new-accounts"
    },
    {
      id: "in-central-atal-pension-yojana",
      country: "India",
      region: ALL_INDIA,
      title: "Atal Pension Yojana (APY)",
      category: "senior-care",
      audience: "Eligible existing subscribers and qualifying citizens aged 18–40 who meet the current APY enrolment rules; income-tax payers are not eligible to newly join under the post-October-2022 rule.",
      minKids: 0,
      requiresHomeowner: false,
      requiresSenior: false,
      maxIncomeNumeric: null,
      estimatedAnnualValue: 60000,
      benefitDisplay: "Defined minimum pension of ₹1,000 to ₹5,000 per month from age 60, based on contribution choice and continued eligibility; maximum displayed annual pension is ₹60,000.",
      incomeLimitDisplay: "No stated household-income ceiling, but new enrolment has age, bank-account and taxpayer-status requirements.",
      description: "APY is a contributory pension scheme. The contribution depends on age of joining and chosen pension amount. New-enrolment conditions have changed over time, so taxpayers and prospective subscribers must confirm eligibility with the bank or official pension authority before relying on the scheme.",
      applicationSteps: [
        "Confirm age, citizenship, bank-account and current taxpayer-status eligibility before requesting enrolment.",
        "Apply through a participating bank or authorised channel and select the pension amount.",
        "Maintain sufficient funds for the selected periodic auto-debit contribution and retain the acknowledgement."
      ],
      documents: [
        "Aadhaar and PAN, where requested",
        "Savings-bank account details",
        "Mobile number",
        "APY enrolment acknowledgement"
      ],
      officialUrl: "https://www.pfrda.org.in/"
    },
    {
      id: "in-central-nps-vatsalya",
      country: "India",
      region: ALL_INDIA,
      title: "NPS Vatsalya — National Pension System for Minors",
      category: "childcare",
      audience: "Parents or legal guardians who want to open a market-linked NPS account in the name of a minor, subject to NPS Vatsalya rules.",
      minKids: 1,
      requiresHomeowner: false,
      requiresSenior: false,
      maxIncomeNumeric: null,
      estimatedAnnualValue: 50000,
      benefitDisplay: "Long-term market-linked retirement savings for a minor; tax deduction treatment, where available, must be checked for the applicable regime and year.",
      incomeLimitDisplay: "No household-income ceiling; minor, guardian, KYC and contribution rules apply.",
      description: "NPS Vatsalya allows a guardian to create an NPS account for a minor. The value is market-linked rather than guaranteed. The account is designed for long-term savings and has transition and withdrawal rules; any tax benefit must be verified against current Income-tax Act provisions and the selected tax regime.",
      applicationSteps: [
        "Review NPS Vatsalya features, charges, investment choices and withdrawal rules on the official NPS channel.",
        "Complete KYC for the guardian and minor through an authorised point of presence or online route.",
        "Select contribution and investment preferences, then save the PRAN and transaction confirmations."
      ],
      documents: [
        "Minor's birth certificate or age proof",
        "Guardian Aadhaar, PAN and KYC documents",
        "Guardian bank-account details",
        "Photograph and contact details as requested by the point of presence"
      ],
      officialUrl: "https://npstrust.org.in/nps-vatsalya"
    },
    {
      id: "in-central-ayushman-bharat-vay-vandana-card",
      country: "India",
      region: ALL_INDIA,
      title: "Ayushman Bharat Vay Vandana Card — Health Cover for Seniors Aged 70+",
      category: "senior-care",
      audience: "Indian citizens aged 70 years or above, regardless of household income, subject to Ayushman Bharat registration and the current scheme rules.",
      minKids: 0,
      requiresHomeowner: false,
      requiresSenior: true,
      maxIncomeNumeric: null,
      estimatedAnnualValue: 500000,
      benefitDisplay: "Health cover of up to ₹5 lakh per family per year for eligible treatment under the scheme, subject to empanelment and programme rules.",
      incomeLimitDisplay: "No income limit for the 70+ eligibility expansion; age, identity and scheme conditions must be verified.",
      description: "The Ayushman Bharat expansion for people aged 70+ is designed to provide an Ayushman Vay Vandana card irrespective of income. Cover is cashless only for eligible treatment at empanelled facilities and is subject to the programme's family-cover, duplicate-benefit and state implementation rules.",
      applicationSteps: [
        "Visit the National Health Authority beneficiary portal or an authorised enrolment point and search using the required identity details.",
        "Complete age and identity verification, then generate or download the Ayushman Vay Vandana card if eligible.",
        "Before treatment, confirm the hospital is empanelled and that the procedure is covered."
      ],
      documents: [
        "Aadhaar or other accepted identity document",
        "Age proof showing 70 years or above, if requested",
        "Mobile number for OTP verification",
        "Existing Ayushman card or family details, if available"
      ],
      officialUrl: "https://beneficiary.nha.gov.in/"
    },
    {
      id: "in-central-pradhan-mantri-bhartiya-janaushadhi-pariyojana",
      country: "India",
      region: ALL_INDIA,
      title: "Pradhan Mantri Bhartiya Janaushadhi Pariyojana — Affordable Generic Medicines",
      category: "senior-care",
      audience: "Any household with a valid prescription or medicine need who can obtain clinically appropriate generic medicines from a Janaushadhi Kendra.",
      minKids: 0,
      requiresHomeowner: false,
      requiresSenior: false,
      maxIncomeNumeric: null,
      estimatedAnnualValue: null,
      benefitDisplay: "Generic medicines are commonly priced about 50%–80% lower than comparable branded medicines; savings depend on prescription, availability and local prices.",
      incomeLimitDisplay: "No household-income limit.",
      description: "Janaushadhi Kendras offer quality-assured generic medicines and selected surgical or wellness products at lower prices. This is a price-saving programme, not insurance. Patients should follow a qualified clinician's prescription and ask a pharmacist about equivalent formulations and availability.",
      applicationSteps: [
        "Locate a nearby Jan Aushadhi Kendra through the official programme channel.",
        "Take the clinician's prescription and ask the pharmacist whether an appropriate generic formulation is available.",
        "Retain the bill and consult the prescribing clinician before changing any medicine."
      ],
      documents: [
        "Valid prescription for prescription-only medicines",
        "Medical record or prior prescription, if useful for pharmacist review",
        "Payment method"
      ],
      officialUrl: "https://janaushadhi.gov.in/"
    },
    {
      id: "in-central-central-sector-scholarship-college-university",
      country: "India",
      region: ALL_INDIA,
      title: "Central Sector Scheme of Scholarship for College and University Students",
      category: "childcare",
      audience: "Meritorious students who meet the Central Sector Scheme academic, board-ranking, course and family-income requirements and apply through the National Scholarship Portal.",
      minKids: 1,
      requiresHomeowner: false,
      requiresSenior: false,
      maxIncomeNumeric: 450000,
      estimatedAnnualValue: 12000,
      benefitDisplay: "Scholarship generally starts at ₹12,000 per year for eligible undergraduate study and can be higher in later or professional-study years, subject to current rules.",
      incomeLimitDisplay: "Gross parental/family income up to ₹4.5 lakh per year, alongside merit and course requirements.",
      description: "The Central Sector scholarship supports eligible meritorious students from lower-income families pursuing recognised college or university courses. Awards, renewal, board quota and course exclusions are governed by the current Ministry and National Scholarship Portal notice.",
      applicationSteps: [
        "Read the current National Scholarship Portal notice and confirm board merit, course and income eligibility.",
        "Create or update the student profile on the National Scholarship Portal during the application window.",
        "Upload documents, submit through the institution where required and track verification and renewal status."
      ],
      documents: [
        "Class XII marksheet and board details",
        "Family-income certificate",
        "College admission or bonafide certificate",
        "Student bank-account details",
        "Aadhaar and other portal KYC documents"
      ],
      officialUrl: "https://scholarships.gov.in/"
    },
    {
      id: "in-central-aicte-pragati-scholarship-girls",
      country: "India",
      region: ALL_INDIA,
      title: "AICTE Pragati Scholarship — Girls in Technical Education",
      category: "childcare",
      audience: "Eligible girl students admitted to approved technical diploma or degree programmes, subject to AICTE, institution and household-income conditions.",
      minKids: 1,
      requiresHomeowner: false,
      requiresSenior: false,
      maxIncomeNumeric: 800000,
      estimatedAnnualValue: 50000,
      benefitDisplay: "Scholarship up to ₹50,000 per year for eligible students, subject to the current AICTE/NSP notice and renewal conditions.",
      incomeLimitDisplay: "Annual family income up to ₹8 lakh under the commonly published scheme condition; confirm the current notice.",
      description: "AICTE Pragati is intended to support girls pursuing approved technical education. Eligibility can include institute approval, admission mode, family-income ceiling, family-count limits and portal deadlines. The current call for applications is authoritative.",
      applicationSteps: [
        "Confirm that the programme and institution are AICTE-approved and that the student meets the current scheme criteria.",
        "Apply through the National Scholarship Portal during the notified window.",
        "Complete institute verification and retain acknowledgement for renewal tracking."
      ],
      documents: [
        "Admission letter and institute bonafide certificate",
        "Family-income certificate",
        "Class X/XII marksheets as applicable",
        "Student Aadhaar and bank-account details",
        "AICTE/NSP documents requested in the current notice"
      ],
      officialUrl: "https://aicte-india.org/schemes/students-development-schemes"
    },
    {
      id: "in-central-aicte-saksham-scholarship-disability",
      country: "India",
      region: ALL_INDIA,
      title: "AICTE Saksham Scholarship — Students with Disabilities",
      category: "childcare",
      audience: "Eligible students with a qualifying disability who are admitted to approved technical diploma or degree programmes and meet current AICTE and income conditions.",
      minKids: 1,
      requiresHomeowner: false,
      requiresSenior: false,
      maxIncomeNumeric: 800000,
      estimatedAnnualValue: 50000,
      benefitDisplay: "Scholarship up to ₹50,000 per year for eligible students, subject to the current AICTE/NSP notice and renewal rules.",
      incomeLimitDisplay: "Annual family income up to ₹8 lakh under the commonly published condition; disability and programme criteria also apply.",
      description: "AICTE Saksham supports eligible students with disabilities in approved technical education. The disability certificate, institute approval, income evidence and application timeline are decisive; applicants must use the current official notice rather than relying only on prior-year rules.",
      applicationSteps: [
        "Check the current AICTE Saksham notice for disability, course, institute and income requirements.",
        "Create or update the student application on the National Scholarship Portal.",
        "Upload the disability certificate and complete institution-level verification before the deadline."
      ],
      documents: [
        "Valid disability certificate or UDID record",
        "Admission letter and institute bonafide certificate",
        "Family-income certificate",
        "Student bank-account and Aadhaar details",
        "Academic marksheets requested in the current notice"
      ],
      officialUrl: "https://aicte-india.org/schemes/students-development-schemes"
    },
    {
      id: "in-central-pm-yasasvi-scholarship",
      country: "India",
      region: ALL_INDIA,
      title: "PM YASASVI — Scholarship Support for OBC, EBC and DNT Students",
      category: "childcare",
      audience: "Eligible students from notified Other Backward Classes, Economically Backward Classes or Denotified/nomadic/semi-nomadic communities who meet the applicable income, school, merit and portal rules.",
      minKids: 1,
      requiresHomeowner: false,
      requiresSenior: false,
      maxIncomeNumeric: 250000,
      estimatedAnnualValue: 20000,
      benefitDisplay: "Scholarship assistance varies by class, scheme component and current notice; awards can reach about ₹20,000 per year under relevant components.",
      incomeLimitDisplay: "Often up to ₹2.5 lakh annual parental income for relevant components; category, class and current notice must be checked.",
      description: "PM YASASVI is an umbrella scholarship initiative for eligible OBC, EBC and DNT students. Delivery channels and component rules may change, so the current Ministry of Social Justice and Empowerment or NSP notice controls eligibility, award amount and application process.",
      applicationSteps: [
        "Identify the relevant PM YASASVI component and read the current official notice.",
        "Confirm community certificate, income, class and school/institute eligibility.",
        "Apply on the notified official portal and complete any institution verification before the deadline."
      ],
      documents: [
        "Caste or community certificate for the applicable category",
        "Family-income certificate",
        "Current academic marksheet and school/institute bonafide certificate",
        "Student Aadhaar and bank-account details",
        "Domicile certificate, if the current notice requests it"
      ],
      officialUrl: "https://socialjustice.gov.in/schemes/"
    },
    {
      id: "in-central-inspire-scholarship-higher-education",
      country: "India",
      region: ALL_INDIA,
      title: "INSPIRE Scholarship for Higher Education (SHE)",
      category: "childcare",
      audience: "High-achieving students pursuing eligible natural or basic science courses who meet the Department of Science and Technology's current academic and course criteria.",
      minKids: 1,
      requiresHomeowner: false,
      requiresSenior: false,
      maxIncomeNumeric: null,
      estimatedAnnualValue: 80000,
      benefitDisplay: "Scholarship support of ₹80,000 per year for eligible scholars, subject to selection, course and renewal requirements.",
      incomeLimitDisplay: "No standard household-income ceiling; academic achievement, eligible course and current call conditions govern selection.",
      description: "INSPIRE-SHE is a merit-focused scholarship for students pursuing eligible science education. It is not a universal college grant. Academic route, subject, institution, timing and renewal conditions must be checked in the current Department of Science and Technology call.",
      applicationSteps: [
        "Review the current INSPIRE-SHE eligibility notice and confirm the academic route and eligible course.",
        "Register and submit the online application through the INSPIRE portal during the call period.",
        "Upload academic and admission documents, then track selection and renewal requirements."
      ],
      documents: [
        "Class XII marksheet and qualifying achievement evidence",
        "College admission letter or bonafide certificate",
        "Bank-account details in the student's name",
        "Identity and portal KYC documents",
        "Course and subject evidence requested in the current call"
      ],
      officialUrl: "https://online-inspire.gov.in/"
    },
    {
      id: "in-central-vidyalakshmi-education-loan-portal",
      country: "India",
      region: ALL_INDIA,
      title: "Vidya Lakshmi Education Loan Portal",
      category: "childcare",
      audience: "Students and families seeking to compare or apply for participating education-loan schemes through the national single-window portal.",
      minKids: 1,
      requiresHomeowner: false,
      requiresSenior: false,
      maxIncomeNumeric: null,
      estimatedAnnualValue: null,
      benefitDisplay: "Single-window access to participating education-loan applications and information; loan amount, rate and approval are determined by the lender.",
      incomeLimitDisplay: "No single national income limit; each participating loan scheme and lender sets its own underwriting rules.",
      description: "Vidya Lakshmi is an application and information portal, not a guaranteed loan or scholarship. It can help a student submit education-loan applications to participating banks, but admission, course costs, co-borrower finances, collateral rules and lender credit decisions remain relevant.",
      applicationSteps: [
        "Create a student profile on the Vidya Lakshmi portal and review participating schemes.",
        "Enter course, institution and cost details accurately, then select suitable lender schemes.",
        "Submit the common application form and respond promptly to lender requests for documents or clarification."
      ],
      documents: [
        "College admission letter and fee structure",
        "Academic marksheets",
        "Student and co-borrower KYC documents",
        "Co-borrower income proof and bank statements",
        "Collateral documents, if requested by the lender"
      ],
      officialUrl: "https://www.vidyalakshmi.co.in/Students/"
    },
    {
      id: "in-central-nmms-national-means-cum-merit-scholarship",
      country: "India",
      region: ALL_INDIA,
      title: "National Means-cum-Merit Scholarship Scheme (NMMS)",
      category: "childcare",
      audience: "Eligible Class VIII students in participating government, government-aided or local-body schools who meet the parental-income, academic and state examination criteria.",
      minKids: 1,
      requiresHomeowner: false,
      requiresSenior: false,
      maxIncomeNumeric: 350000,
      estimatedAnnualValue: 12000,
      benefitDisplay: "₹12,000 per year for selected students, subject to examination selection and annual continuation conditions.",
      incomeLimitDisplay: "Parental annual income up to ₹3.5 lakh under the commonly published threshold; state examination rules also apply.",
      description: "NMMS is a centrally sponsored scholarship selected through state or UT examinations for eligible Class VIII students. School type, parental income, minimum marks, examination result and continuation conditions all matter. State notices set the operational calendar.",
      applicationSteps: [
        "Check the state or UT NMMS notification and confirm school type, marks and income eligibility.",
        "Apply through the school or state examination portal before the notified deadline.",
        "Take the required examination and complete scholarship-portal verification if selected."
      ],
      documents: [
        "Class VII/VIII marksheet or school record",
        "Parental-income certificate",
        "School bonafide certificate",
        "Student Aadhaar and bank-account details",
        "Domicile or category documents if requested by the state notice"
      ],
      officialUrl: "https://ncert.nic.in/nmms.php"
    },
    {
      id: "in-central-pradhan-mantri-matru-vandana-yojana",
      country: "India",
      region: ALL_INDIA,
      title: "Pradhan Mantri Matru Vandana Yojana (PMMVY)",
      category: "cash-benefit",
      audience: "Eligible pregnant women and lactating mothers who meet the current PMMVY conditions and are not excluded by employment or other scheme rules.",
      minKids: 1,
      requiresHomeowner: false,
      requiresSenior: false,
      maxIncomeNumeric: null,
      estimatedAnnualValue: 6000,
      benefitDisplay: "Maternity benefit is generally ₹5,000 for an eligible first child and ₹6,000 for an eligible second child where the second child is a girl, subject to current conditions.",
      incomeLimitDisplay: "No single published household-income limit; beneficiary category and exclusion rules apply.",
      description: "PMMVY provides conditional maternity support to eligible beneficiaries. Benefit amount, birth-order conditions, registration, institutional-health-service milestones and exclusions must be confirmed under the current Mission Shakti and state implementation guidance.",
      applicationSteps: [
        "Register the pregnancy at the local Anganwadi Centre or approved health facility within the required timeline.",
        "Ask the local functionary which PMMVY conditions and instalment milestones apply to the beneficiary.",
        "Provide identity and bank details, complete required health-service milestones and track the payment status."
      ],
      documents: [
        "Aadhaar or accepted identity document",
        "Mother and Child Protection card or pregnancy registration record",
        "Bank or post-office account details",
        "Mobile number",
        "Documents requested by the Anganwadi Centre or health facility"
      ],
      officialUrl: "https://pmmvy.wcd.gov.in/"
    },
    {
      id: "in-central-pradhan-mantri-ujjwala-yojana",
      country: "India",
      region: ALL_INDIA,
      title: "Pradhan Mantri Ujjwala Yojana (PMUY)",
      category: "cash-benefit",
      audience: "Eligible adult women from qualifying low-income households who do not already have an LPG connection in the household, subject to current PMUY rules.",
      minKids: 0,
      requiresHomeowner: false,
      requiresSenior: false,
      maxIncomeNumeric: null,
      estimatedAnnualValue: 3000,
      benefitDisplay: "Support can include a deposit-free LPG connection and, where notified, refill subsidy; illustrative annual refill support at ₹300 for up to 10 refills is ₹3,000.",
      incomeLimitDisplay: "Eligibility is based on qualifying household categories and LPG-connection status rather than a single universal income cap.",
      description: "PMUY helps eligible women obtain LPG access. Connection support and refill subsidy are subject to current government notification, beneficiary identification, household status and distributor process. The displayed refill figure is illustrative and must be checked against the current subsidy notification.",
      applicationSteps: [
        "Check household eligibility and existing-LPG-connection status with an authorised LPG distributor or the official portal.",
        "Submit the PMUY application in the name of the eligible adult woman.",
        "Complete KYC, safety verification and bank-linking steps required for the connection and any subsidy."
      ],
      documents: [
        "Aadhaar and identity proof of the adult woman applicant",
        "Address proof",
        "Bank-account details",
        "Ration card or category evidence, if requested",
        "Declaration regarding existing LPG connection"
      ],
      officialUrl: "https://www.pmuy.gov.in/"
    },
    {
      id: "in-central-pradhan-mantri-shram-yogi-maandhan",
      country: "India",
      region: ALL_INDIA,
      title: "Pradhan Mantri Shram Yogi Maandhan (PM-SYM)",
      category: "employment",
      audience: "Eligible unorganised workers aged 18–40 who meet the income, occupation, pension and contribution conditions of the scheme.",
      minKids: 0,
      requiresHomeowner: false,
      requiresSenior: false,
      maxIncomeNumeric: 180000,
      estimatedAnnualValue: 36000,
      benefitDisplay: "Assured pension of ₹3,000 per month from age 60 for eligible contributors who continue under the scheme; displayed annual pension is ₹36,000.",
      incomeLimitDisplay: "Monthly income up to ₹15,000 (₹1.8 lakh annualised) under the scheme criteria, with other exclusion conditions.",
      description: "PM-SYM is a contributory pension scheme for eligible unorganised workers. Enrolment age, monthly income, occupation, NPS/ESIC/EPFO or taxpayer exclusions, Aadhaar-linked savings account and regular contributions are important. Confirm current rules at a Common Service Centre or official labour channel.",
      applicationSteps: [
        "Confirm the worker's age, occupation, monthly income and exclusion-status eligibility.",
        "Visit a Common Service Centre or authorised enrolment channel with Aadhaar and bank details.",
        "Choose the contribution plan, authorise auto-debit and keep the pension-card or enrolment acknowledgement."
      ],
      documents: [
        "Aadhaar card",
        "Savings-bank account or Jan Dhan account details",
        "Mobile number",
        "Occupation and income declaration or evidence requested at enrolment"
      ],
      officialUrl: "https://labour.gov.in/pm-sym"
    }
  ].map(freezePolicy);

  const frozenPolicies = Object.freeze(INDIA_CENTRAL_POLICIES);

  Object.defineProperty(global, "INDIA_CENTRAL_POLICIES", {
    value: frozenPolicies,
    writable: false,
    configurable: false,
    enumerable: true
  });
})(typeof globalThis !== "undefined" ? globalThis : window);
