/*
 * Global Family Policy, Grant & Tax-Saver Engine
 * Shared application configuration.
 *
 * This file intentionally contains display metadata and conservative UI defaults,
 * not legal eligibility thresholds. Individual policy records and the eligibility
 * engine remain the source of truth for programme-specific rules.
 */
(function initialiseAppConfig(global) {
  "use strict";

  const region = (id, label, code, type) => ({ id, label, code, type });

  const freezeDeep = (value) => {
    if (!value || typeof value !== "object" || Object.isFrozen(value)) {
      return value;
    }

    Object.getOwnPropertyNames(value).forEach((propertyName) => {
      freezeDeep(value[propertyName]);
    });

    return Object.freeze(value);
  };

  const indiaStates = [
    region("andhra-pradesh", "Andhra Pradesh", "AP", "state"),
    region("arunachal-pradesh", "Arunachal Pradesh", "AR", "state"),
    region("assam", "Assam", "AS", "state"),
    region("bihar", "Bihar", "BR", "state"),
    region("chhattisgarh", "Chhattisgarh", "CG", "state"),
    region("goa", "Goa", "GA", "state"),
    region("gujarat", "Gujarat", "GJ", "state"),
    region("haryana", "Haryana", "HR", "state"),
    region("himachal-pradesh", "Himachal Pradesh", "HP", "state"),
    region("jharkhand", "Jharkhand", "JH", "state"),
    region("karnataka", "Karnataka", "KA", "state"),
    region("kerala", "Kerala", "KL", "state"),
    region("madhya-pradesh", "Madhya Pradesh", "MP", "state"),
    region("maharashtra", "Maharashtra", "MH", "state"),
    region("manipur", "Manipur", "MN", "state"),
    region("meghalaya", "Meghalaya", "ML", "state"),
    region("mizoram", "Mizoram", "MZ", "state"),
    region("nagaland", "Nagaland", "NL", "state"),
    region("odisha", "Odisha", "OD", "state"),
    region("punjab", "Punjab", "PB", "state"),
    region("rajasthan", "Rajasthan", "RJ", "state"),
    region("sikkim", "Sikkim", "SK", "state"),
    region("tamil-nadu", "Tamil Nadu", "TN", "state"),
    region("telangana", "Telangana", "TS", "state"),
    region("tripura", "Tripura", "TR", "state"),
    region("uttar-pradesh", "Uttar Pradesh", "UP", "state"),
    region("uttarakhand", "Uttarakhand", "UK", "state"),
    region("west-bengal", "West Bengal", "WB", "state")
  ];

  const indiaUnionTerritories = [
    region("andaman-nicobar-islands", "Andaman and Nicobar Islands", "AN", "union-territory"),
    region("chandigarh", "Chandigarh", "CH", "union-territory"),
    region(
      "dadra-nagar-haveli-daman-diu",
      "Dadra and Nagar Haveli and Daman and Diu",
      "DH",
      "union-territory"
    ),
    region("delhi", "Delhi (NCT)", "DL", "union-territory"),
    region("jammu-kashmir", "Jammu and Kashmir", "JK", "union-territory"),
    region("ladakh", "Ladakh", "LA", "union-territory"),
    region("lakshadweep", "Lakshadweep", "LD", "union-territory"),
    region("puducherry", "Puducherry", "PY", "union-territory")
  ];

  const usaStates = [
    region("alabama", "Alabama", "AL", "state"),
    region("alaska", "Alaska", "AK", "state"),
    region("arizona", "Arizona", "AZ", "state"),
    region("arkansas", "Arkansas", "AR", "state"),
    region("california", "California", "CA", "state"),
    region("colorado", "Colorado", "CO", "state"),
    region("connecticut", "Connecticut", "CT", "state"),
    region("delaware", "Delaware", "DE", "state"),
    region("florida", "Florida", "FL", "state"),
    region("georgia", "Georgia", "GA", "state"),
    region("hawaii", "Hawaii", "HI", "state"),
    region("idaho", "Idaho", "ID", "state"),
    region("illinois", "Illinois", "IL", "state"),
    region("indiana", "Indiana", "IN", "state"),
    region("iowa", "Iowa", "IA", "state"),
    region("kansas", "Kansas", "KS", "state"),
    region("kentucky", "Kentucky", "KY", "state"),
    region("louisiana", "Louisiana", "LA", "state"),
    region("maine", "Maine", "ME", "state"),
    region("maryland", "Maryland", "MD", "state"),
    region("massachusetts", "Massachusetts", "MA", "state"),
    region("michigan", "Michigan", "MI", "state"),
    region("minnesota", "Minnesota", "MN", "state"),
    region("mississippi", "Mississippi", "MS", "state"),
    region("missouri", "Missouri", "MO", "state"),
    region("montana", "Montana", "MT", "state"),
    region("nebraska", "Nebraska", "NE", "state"),
    region("nevada", "Nevada", "NV", "state"),
    region("new-hampshire", "New Hampshire", "NH", "state"),
    region("new-jersey", "New Jersey", "NJ", "state"),
    region("new-mexico", "New Mexico", "NM", "state"),
    region("new-york", "New York", "NY", "state"),
    region("north-carolina", "North Carolina", "NC", "state"),
    region("north-dakota", "North Dakota", "ND", "state"),
    region("ohio", "Ohio", "OH", "state"),
    region("oklahoma", "Oklahoma", "OK", "state"),
    region("oregon", "Oregon", "OR", "state"),
    region("pennsylvania", "Pennsylvania", "PA", "state"),
    region("rhode-island", "Rhode Island", "RI", "state"),
    region("south-carolina", "South Carolina", "SC", "state"),
    region("south-dakota", "South Dakota", "SD", "state"),
    region("tennessee", "Tennessee", "TN", "state"),
    region("texas", "Texas", "TX", "state"),
    region("utah", "Utah", "UT", "state"),
    region("vermont", "Vermont", "VT", "state"),
    region("virginia", "Virginia", "VA", "state"),
    region("washington", "Washington", "WA", "state"),
    region("west-virginia", "West Virginia", "WV", "state"),
    region("wisconsin", "Wisconsin", "WI", "state"),
    region("wyoming", "Wyoming", "WY", "state")
  ];

  const usaFederalDistrict = [
    region("district-of-columbia", "Washington, D.C. (District of Columbia)", "DC", "federal-district")
  ];

  const swissCantons = [
    region("zurich", "Zurich", "ZH", "canton"),
    region("bern", "Bern", "BE", "canton"),
    region("lucerne", "Lucerne", "LU", "canton"),
    region("uri", "Uri", "UR", "canton"),
    region("schwyz", "Schwyz", "SZ", "canton"),
    region("obwalden", "Obwalden", "OW", "canton"),
    region("nidwalden", "Nidwalden", "NW", "canton"),
    region("glarus", "Glarus", "GL", "canton"),
    region("zug", "Zug", "ZG", "canton"),
    region("fribourg", "Fribourg", "FR", "canton"),
    region("solothurn", "Solothurn", "SO", "canton"),
    region("basel-stadt", "Basel-Stadt", "BS", "canton"),
    region("basel-landschaft", "Basel-Landschaft", "BL", "canton"),
    region("schaffhausen", "Schaffhausen", "SH", "canton"),
    region("appenzell-ausserrhoden", "Appenzell Ausserrhoden", "AR", "canton"),
    region("appenzell-innerrhoden", "Appenzell Innerrhoden", "AI", "canton"),
    region("st-gallen", "St. Gallen", "SG", "canton"),
    region("graubunden", "Graubünden", "GR", "canton"),
    region("aargau", "Aargau", "AG", "canton"),
    region("thurgau", "Thurgau", "TG", "canton"),
    region("ticino", "Ticino", "TI", "canton"),
    region("vaud", "Vaud", "VD", "canton"),
    region("valais", "Valais", "VS", "canton"),
    region("neuchatel", "Neuchâtel", "NE", "canton"),
    region("geneva", "Geneva", "GE", "canton"),
    region("jura", "Jura", "JU", "canton")
  ];

  const australiaStates = [
    region("new-south-wales", "New South Wales", "NSW", "state"),
    region("victoria", "Victoria", "VIC", "state"),
    region("queensland", "Queensland", "QLD", "state"),
    region("western-australia", "Western Australia", "WA", "state"),
    region("south-australia", "South Australia", "SA", "state"),
    region("tasmania", "Tasmania", "TAS", "state")
  ];

  const australiaTerritories = [
    region("australian-capital-territory", "Australian Capital Territory", "ACT", "territory"),
    region("northern-territory", "Northern Territory", "NT", "territory")
  ];

  const APP_CONFIG = {
    app: {
      id: "global-family-policy-grant-tax-saver-engine",
      name: "Global Family Policy, Grant & Tax-Saver Engine",
      version: "1.0.0",
      locale: "en",
      defaultCountry: "india",
      profileStorageKey: "gfp-family-profile-v1",
      actionPlanStorageKey: "gfp-family-action-plan-v1"
    },

    countryOrder: ["india", "usa", "switzerland", "australia"],

    categories: [
      { id: "all", label: "All" },
      { id: "tax", label: "Tax saving" },
      { id: "cash-benefit", label: "Cash benefits" },
      { id: "childcare", label: "Childcare & education" },
      { id: "housing", label: "Housing" },
      { id: "senior-care", label: "Senior care" },
      { id: "employment", label: "Employment" }
    ],

    countries: {
      india: {
        id: "india",
        name: "India",
        shortName: "India",
        flag: "🇮🇳",
        locale: "en-IN",
        regionSelector: {
          label: "State / Union Territory",
          allOptionLabel: "All India / not selected",
          singularLabel: "State / Union Territory"
        },
        currency: {
          code: "INR",
          symbol: "₹",
          display: "₹",
          locale: "en-IN",
          fractionDigits: 0
        },
        income: {
          label: "Annual household income",
          helpText: "Enter gross annual household income before deductions.",
          unit: "annual",
          slider: {
            min: 0,
            max: 10000000,
            step: 50000,
            keyboardStep: 50000,
            marks: [
              { value: 0, label: "₹0" },
              { value: 500000, label: "₹5L" },
              { value: 1000000, label: "₹10L" },
              { value: 2000000, label: "₹20L" },
              { value: 5000000, label: "₹50L" },
              { value: 10000000, label: "₹1Cr" }
            ]
          },
          defaultMiddleClassBracket: {
            id: "middle-income",
            label: "Illustrative middle-income household",
            min: 600000,
            max: 1800000,
            defaultAnnualIncome: 1200000
          }
        },
        taxProfile: {
          label: "Tax regime",
          helperText: "Choose the regime you intend to use; programme and deduction rules can differ.",
          defaultValue: "new-tax-regime-fy-2025-26",
          options: [
            {
              value: "new-tax-regime-fy-2025-26",
              label: "New Tax Regime FY 2025-26"
            },
            {
              value: "old-tax-regime",
              label: "Old Tax Regime"
            }
          ]
        },
        taxRegimes: [
          {
            id: "new-tax-regime-fy-2025-26",
            label: "New Tax Regime FY 2025-26"
          },
          {
            id: "old-tax-regime",
            label: "Old Tax Regime"
          }
        ],
        regions: [...indiaStates, ...indiaUnionTerritories],
        regionGroups: {
          states: indiaStates,
          unionTerritories: indiaUnionTerritories
        },
        officialPortalBaseUrl: "https://www.myscheme.gov.in/",
        officialPortals: {
          publicSchemes: {
            label: "myScheme",
            baseUrl: "https://www.myscheme.gov.in/"
          },
          incomeTax: {
            label: "Income Tax Department e-Filing",
            baseUrl: "https://www.incometax.gov.in/iec/foportal/"
          },
          nationalPortal: {
            label: "National Portal of India",
            baseUrl: "https://www.india.gov.in/"
          }
        }
      },

      usa: {
        id: "usa",
        name: "United States of America",
        shortName: "USA",
        flag: "🇺🇸",
        locale: "en-US",
        regionSelector: {
          label: "State / District",
          allOptionLabel: "All USA / not selected",
          singularLabel: "State / District"
        },
        currency: {
          code: "USD",
          symbol: "$",
          display: "$",
          locale: "en-US",
          fractionDigits: 0
        },
        income: {
          label: "Annual household income",
          helpText: "Enter estimated annual gross household income before deductions.",
          unit: "annual",
          slider: {
            min: 0,
            max: 500000,
            step: 5000,
            keyboardStep: 5000,
            marks: [
              { value: 0, label: "$0" },
              { value: 50000, label: "$50k" },
              { value: 100000, label: "$100k" },
              { value: 200000, label: "$200k" },
              { value: 350000, label: "$350k" },
              { value: 500000, label: "$500k+" }
            ]
          },
          defaultMiddleClassBracket: {
            id: "middle-income",
            label: "Illustrative middle-income household",
            min: 50000,
            max: 150000,
            defaultAnnualIncome: 85000
          }
        },
        taxProfile: {
          label: "Tax filing status",
          helperText: "Select the filing status most relevant to the household for screening purposes.",
          defaultValue: "married-filing-jointly",
          options: [
            {
              value: "married-filing-jointly",
              label: "Married Filing Jointly"
            },
            {
              value: "single",
              label: "Single"
            },
            {
              value: "head-of-household",
              label: "Head of Household"
            }
          ]
        },
        filingStatuses: [
          {
            id: "married-filing-jointly",
            label: "Married Filing Jointly"
          },
          {
            id: "single",
            label: "Single"
          },
          {
            id: "head-of-household",
            label: "Head of Household"
          }
        ],
        regions: [...usaStates, ...usaFederalDistrict],
        regionGroups: {
          states: usaStates,
          federalDistrict: usaFederalDistrict
        },
        officialPortalBaseUrl: "https://www.benefits.gov/",
        officialPortals: {
          benefits: {
            label: "Benefits.gov",
            baseUrl: "https://www.benefits.gov/"
          },
          internalRevenueService: {
            label: "Internal Revenue Service",
            baseUrl: "https://www.irs.gov/"
          },
          usaGov: {
            label: "USA.gov Benefits",
            baseUrl: "https://www.usa.gov/benefits"
          }
        }
      },

      switzerland: {
        id: "switzerland",
        name: "Switzerland",
        shortName: "Switzerland",
        flag: "🇨🇭",
        locale: "de-CH",
        regionSelector: {
          label: "Canton",
          allOptionLabel: "All Switzerland / not selected",
          singularLabel: "Canton"
        },
        currency: {
          code: "CHF",
          symbol: "CHF",
          display: "CHF",
          locale: "de-CH",
          fractionDigits: 0
        },
        income: {
          label: "Annual household income",
          helpText: "Enter estimated annual gross household income in Swiss francs.",
          unit: "annual",
          slider: {
            min: 0,
            max: 500000,
            step: 5000,
            keyboardStep: 5000,
            marks: [
              { value: 0, label: "CHF 0" },
              { value: 50000, label: "CHF 50k" },
              { value: 100000, label: "CHF 100k" },
              { value: 200000, label: "CHF 200k" },
              { value: 350000, label: "CHF 350k" },
              { value: 500000, label: "CHF 500k+" }
            ]
          },
          defaultMiddleClassBracket: {
            id: "middle-income",
            label: "Illustrative middle-income household",
            min: 50000,
            max: 140000,
            defaultAnnualIncome: 90000
          }
        },
        taxProfile: {
          label: "Tax level",
          helperText: "Swiss tax outcomes commonly depend on federal, cantonal and communal rules.",
          defaultValue: "federal-cantonal-communal",
          options: [
            {
              value: "federal-cantonal-communal",
              label: "Federal + Cantonal + Communal"
            }
          ]
        },
        taxLevels: [
          {
            id: "federal-cantonal-communal",
            label: "Federal + Cantonal + Communal"
          }
        ],
        regions: swissCantons,
        regionGroups: {
          cantons: swissCantons
        },
        officialPortalBaseUrl: "https://www.ch.ch/en/",
        officialPortals: {
          governmentInformation: {
            label: "Swiss Government Information",
            baseUrl: "https://www.ch.ch/en/"
          },
          federalTaxAdministration: {
            label: "Swiss Federal Tax Administration",
            baseUrl: "https://www.estv.admin.ch/estv/en/home.html"
          },
          socialInsurance: {
            label: "AHV/IV Social Insurance Information",
            baseUrl: "https://www.ahv-iv.ch/en/"
          }
        }
      },

      australia: {
        id: "australia",
        name: "Australia",
        shortName: "Australia",
        flag: "🇦🇺",
        locale: "en-AU",
        regionSelector: {
          label: "State / Territory",
          allOptionLabel: "All Australia / not selected",
          singularLabel: "State / Territory"
        },
        currency: {
          code: "AUD",
          symbol: "A$",
          display: "A$",
          locale: "en-AU",
          fractionDigits: 0
        },
        income: {
          label: "Annual household income",
          helpText: "Enter estimated annual gross household income before deductions.",
          unit: "annual",
          slider: {
            min: 0,
            max: 500000,
            step: 5000,
            keyboardStep: 5000,
            marks: [
              { value: 0, label: "A$0" },
              { value: 50000, label: "A$50k" },
              { value: 100000, label: "A$100k" },
              { value: 200000, label: "A$200k" },
              { value: 350000, label: "A$350k" },
              { value: 500000, label: "A$500k+" }
            ]
          },
          defaultMiddleClassBracket: {
            id: "middle-income",
            label: "Illustrative middle-income household",
            min: 60000,
            max: 180000,
            defaultAnnualIncome: 105000
          }
        },
        taxProfile: {
          label: "Assessment system",
          helperText: "Choose the main public system relevant to the support you want to explore.",
          defaultValue: "services-australia-centrelink",
          options: [
            {
              value: "services-australia-centrelink",
              label: "Services Australia / Centrelink"
            },
            {
              value: "ato",
              label: "ATO"
            }
          ]
        },
        assessmentSystems: [
          {
            id: "services-australia-centrelink",
            label: "Services Australia / Centrelink"
          },
          {
            id: "ato",
            label: "ATO"
          }
        ],
        regions: [...australiaStates, ...australiaTerritories],
        regionGroups: {
          states: australiaStates,
          territories: australiaTerritories
        },
        officialPortalBaseUrl: "https://www.servicesaustralia.gov.au/",
        officialPortals: {
          servicesAustralia: {
            label: "Services Australia / Centrelink",
            baseUrl: "https://www.servicesaustralia.gov.au/"
          },
          australianTaxationOffice: {
            label: "Australian Taxation Office",
            baseUrl: "https://www.ato.gov.au/"
          },
          australiaGov: {
            label: "Australian Government",
            baseUrl: "https://www.gov.au/"
          }
        }
      }
    }
  };

  Object.defineProperty(global, "APP_CONFIG", {
    value: freezeDeep(APP_CONFIG),
    writable: false,
    configurable: false,
    enumerable: true
  });
})(typeof globalThis !== "undefined" ? globalThis : window);
