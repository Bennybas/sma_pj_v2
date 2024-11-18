export const journeyData = [
    {
      number: 1,
      title: "Initial Assessment",

      
      description: "Critical period where primary care physicians play a key role in initial detection and assessment.",
    //   actions: [
    //     "Symptom Recognition",
    //     "Primary Care Visit",
    //     "Cognitive Assessment",
    //     "Referral Decision"
    //   ],
    actions: [
      { 
        name: "Early Signs of Weakness or Delayed Motor Milestones", 
        content: "(e.g., hypotonia, difficulty holding up the head, or delayed sitting/walking milestones)" 
      },
      { 
        name: "Visit to Pediatrician or Primary Care Physician", 
        content: "Initial discussion of observed symptoms and potential concerns." 
      },
      { 
        name: "Neurological or Genetic Screening Suggestions", 
        content: "Evaluation for neuromuscular issues using reflex tests or CK levels." 
      },
      { 
        name: "Referral to a Neurologist", 
        content: "Decision to involve a pediatric neurologist, geneticist, or SMA care expert based on clinical findings." 
      }
    ]
    ,
      metrics:[
        { value: "88%", label: "Paediatric SMA patients seeing a physician or specialist in 2023" },
        { value: "5.8 specialists", label: "Average number of specialists seen by paediatric SMA patients in 2023" },
        { value: "Paediatric neurologists, physical therapists, pulmonologists", label: "Most common specialists for paediatric SMA patients" },
        { value: "1 in 15,000", label: "Incidence rate of SMA based on U.S. public health state labs data" }
      ]
      ,
      barriers : {
        physician: [
          {
            description: "Delayed Symptom Recognition",
            subpoints: [
              "52% of patients or caregivers report delays in recognizing initial symptoms."
            ]
          },
          {
            description: "Access to Primary Care",
            subpoints: [
              "30% of patients face logistical challenges in accessing primary care facilities."
            ]
          },
          {
            description: "Rural Location Challenges",
            subpoints: [
              "35% of cases report geographic limitations, reducing timely access to diagnostic services."
            ]
          },
          {
            description: "Transportation Issues",
            subpoints: [
              "40% of patients face barriers related to reliable transport for initial evaluation."
            ]
          },
          {
            description: "Physical Infrastructural Gaps",
            subpoints: [
              "25% of primary care centers lack basic diagnostic equipment for SMA screening."
            ]
          },
          {
            description: "Limited Accessibility for Disabled Individuals",
            subpoints: [
              "15% of healthcare facilities are not adequately equipped to handle physically disabled patients."
            ]
          }
        ],
        
        system: [
          {
            description: "Inadequate Cognitive Assessment Tools",
            subpoints: [
              "45% of physicians report reliance on outdated tools during initial evaluations."
            ]
          },
          {
            description: "Limited Specialist Referral Networks",
            subpoints: [
              "Only 30% of primary care physicians have immediate access to specialists for neuromuscular disorders."
            ]
          },
          {
            description: "Resource Constraints in Primary Care",
            subpoints: [
              "40% of clinics report staff shortages, delaying comprehensive evaluations."
            ]
          },
          {
            description: "Insufficient Diagnostic Support",
            subpoints: [
              "25% of primary care settings lack genetic testing facilities."
            ]
          },
          {
            description: "Lack of Standardized Screening Protocols",
            subpoints: [
              "50% of primary care providers express uncertainty about proper SMA screening methods."
            ]
          },
          {
            description: "Complexity of Differential Diagnosis",
            subpoints: [
              "35% of cases are misdiagnosed initially, leading to delays in appropriate referrals."
            ]
          }
        ],
        
        patient: [
          {
            description: "Delayed Symptom Reporting",
            subpoints: [
              "Over 40% of patients or caregivers delay seeking medical advice due to symptom misinterpretation."
            ]
          },
          {
            description: "Fear and Stigma",
            subpoints: [
              "28% of families report hesitancy in approaching physicians due to stigma around neuromuscular diseases."
            ]
          },
          {
            description: "Limited Awareness of Early Signs",
            subpoints: [
              "60% of patients/caregivers are unaware of SMA-specific symptoms at the onset."
            ]
          },
          {
            description: "Financial Constraints",
            subpoints: [
              "50% of patients report delays in seeking care due to financial limitations."
            ]
          },
          {
            description: "Low Health Literacy",
            subpoints: [
              "35% of families struggle with understanding medical terminologies and diagnoses."
            ]
          },
          {
            description: "Cultural Barriers",
            subpoints: [
              "20% of families from minority groups report cultural hesitance in accessing primary care."
            ]
          }
        ]
      },
      findings: [
        {
          description: "SMA Types 3 and 4 Prevalence",
          subpoints: [
            "SMA Types 3 and 4 prevalence remained relatively stable over the past several years, indicating a consistent patient population. This suggests ongoing management needs for this demographic."
          ]
        },
        {
          description: "Pediatric vs. Adult Care Access",
          subpoints: [
            "Pediatric SMA patients access a wider range of specialized care than adults, highlighting an unequal distribution of healthcare resources. This disparity may affect overall patient outcomes."
          ]
        },
        {
          description: "Delays in Diagnosis",
          subpoints: [
            "Significant delays in diagnosis stem from multiple barriers including delayed symptom recognition, access limitations, and systemic weaknesses in initial assessment. These delays negatively impact timely intervention and treatment."
          ]
        },
        {
          description: "Geographic and Infrastructure Barriers",
          subpoints: [
            "Geographic limitations, transportation difficulties, and limited primary care access, compounded by inadequate primary care infrastructure, significantly hinder timely SMA evaluation."
          ]
        }
      ]      
      
    },
    {
      number: 2,
      title: "Diagnosis Confirmation",
      description: "Detailed diagnostic process including the use of biomarkers and differential diagnosis methods.",
      actions: [
        { 
          name: "Consultation with a Neurologist or Neuromuscular Specialist", 
          content: "Detailed evaluation of motor symptoms and clinical history." 
        },
        { 
          name: "Genetic Testing for SMA", 
          content: "Confirmation of SMN1 gene deletion/mutation through blood tests." 
        },
        { 
          name: "SMN2 Copy Number Analysis", 
          content: "Assessment to determine disease severity and guide treatment planning." 
        },
        { 
          name: "Diagnosis Confirmation and Staging", 
          content: "Classification as SMA Type 1, 2, 3, or 4 based on onset age, symptoms, and genetic findings." 
        }
      ]
      ,
      metrics: [
        { value: "95% or higher", label: "Genetic Testing Rate" },
        { value: ">98%", label: "SMN1 Gene Mutation Confirmation Rate" },
        { value: "95–98%", label: "SMN2 Copy Number Determination Rate" },
        { value: "50%", label: "Diagnosis Delay Rate (Type 4)" },
        { value: "30–50%", label: "Misdiagnosis Rate (Initial)" },
        { value: "12 years (2023)", label: "Average Age at Diagnosis" },
        { value: "8.1 years", label: "Average Age Not Identified by Screening" }
      ],
      
      barriers: {
        physician: [
          {
            description: "Limited Genetic Testing Facilities",
            subpoints: [
              "45% of healthcare centers lack access to genetic testing labs.",
              "30% of diagnostic labs report delays exceeding two weeks for genetic testing results."
            ]
          },
          {
            description: "Delayed Laboratory Reports",
            subpoints: [
              "30% of diagnostic labs report delays exceeding two weeks for genetic testing results."
            ]
          },
          {
            description: "Accessibility to Advanced Testing (SMN1/SMN2 Copy)",
            subpoints: [
              "Only 35% of rural areas have immediate access to advanced diagnostic services."
            ]
          },
          {
            description: "Resource Scarcity for Rare Disorders",
            subpoints: [
              "25% of tertiary care centers have insufficient diagnostic resources for rare disorders."
            ]
          },
          {
            description: "Cost of Genetic Testing",
            subpoints: [
              "High out-of-pocket costs (~40% of families struggle to afford genetic tests)."
            ]
          },
          {
            description: "Long Waiting Times at Referral Facilities",
            subpoints: [
              "33% of patients report waiting over four weeks for appointments at specialized centers."
            ]
          }
        ],
        system: [
          {
            description: "Limited Trained Genetic Counselors",
            subpoints: [
              "Only 20% of centers have dedicated staff to guide patients through genetic testing."
            ]
          },
          {
            description: "Fragmented Diagnostic Pathways",
            subpoints: [
              "35% of referrals between general practitioners and specialists are delayed due to bureaucratic inefficiencies."
            ]
          },
          {
            description: "Inconsistent Insurance Coverage",
            subpoints: [
              "50% of insurance plans exclude or limit coverage for genetic testing."
            ]
          },
          {
            description: "Inadequate Specialist Networks",
            subpoints: [
              "Only 30% of regions have sufficient neuromuscular specialists."
            ]
          },
          {
            description: "Lack of Data Sharing Between Clinics",
            subpoints: [
              "40% of diagnostic facilities report difficulty accessing patients' prior medical records."
            ]
          },
          {
            description: "Overreliance on Tertiary Care",
            subpoints: [
              "25% of diagnostic cases rely heavily on overloaded tertiary centers, delaying confirmations."
            ]
          }
        ],
        patient: [
          {
            description: "Financial Constraints",
            subpoints: [
              "60% of families face economic challenges in affording advanced diagnostics."
            ]
          },
          {
            description: "Fear of Genetic Testing",
            subpoints: [
              "25% of patients express anxiety over undergoing invasive or unfamiliar testing procedures."
            ]
          },
          {
            description: "Lack of Trust in Medical Systems",
            subpoints: [
              "20% of patients feel hesitant about the reliability of diagnostic facilities."
            ]
          },
          {
            description: "Low Awareness About Testing Benefits",
            subpoints: [
              "45% of patients/caregivers do not understand the necessity of genetic confirmation."
            ]
          },
          {
            description: "Fear of Genetic Disorders' Stigma",
            subpoints: [
              "30% of families avoid testing due to potential stigmatization."
            ]
          },
          {
            description: "Misinterpretation of Symptoms",
            subpoints: [
              "50% of patients believe initial symptoms do not warrant advanced testing."
            ]
          }
        ]
        
      },

      findings: [
        {
          description: "Urban-Rural Disparity",
          subpoints: [
            "Only 35% of rural areas have immediate access to advanced testing (e.g., SMN2 copy determination), causing delays for patients outside urban centers."
          ]
        },
        {
          description: "Cost Barriers",
          subpoints: [
            "Genetic testing costs remain prohibitive for ~40% of families, emphasizing the need for financial assistance or insurance reforms."
          ]
        },
        {
          description: "Delays in Testing Reports",
          subpoints: [
            "30% of labs report delays in generating results, prolonging the diagnostic journey."
          ]
        },
        {
          description: "Late Diagnoses for Milder Types",
          subpoints: [
            "The average age of diagnosis for cases not identified via newborn screening remains high, particularly for SMA Types 3 and 4, at 8.1 years in 2023."
          ]
        }
      ]      

      
    },
    {
      number: 3,
      title: "Treatment and Ongoing Management",
      description: "Long-term treatment, monitoring, and management of Alzheimer's disease and other dementias.",
      actions: [
        { 
          name: "Development of an Individualized Treatment Plan", 
          content: "Consideration of patient age, SMA type, motor abilities, and SMN2 copy number for therapy selection." 
        },
        { 
          name: "Initiation of Disease-Modifying Therapy (DMT)", 
          content: "Administration of FDA-approved treatments such as Spinraza, Zolgensma, or Evrysdi." 
        },
        { 
          name: "Supportive Therapies and Interventions", 
          content: "Physical therapy, respiratory support, and nutritional counseling to complement DMT." 
        },
        { 
          name: "Regular Monitoring and Outcome Tracking", 
          content: "Ongoing assessments using motor function scales like HFMSE and respiratory evaluations." 
        },
        { 
          name: "Comprehensive Care Coordination", 
          content: "Multidisciplinary management involving neurologists, pulmonologists, dietitians, and therapists." 
        }
      ]
      ,
      metrics: [
        { value: "98%", label: "Treatment Utilization Rate (Overall)" },
        { value: "1–2 weeks", label: "Treatment Initiation Time (Average)" },
        { value: "55%", label: "Insurance Denial Rate" },
        { value: "~75%", label: "Successful Appeal Rate After Denial" },
        { value: "Impact of treatment (30 days)", label: "Early Treatment Impact (Walking at 2 years)" },
        { value: "79%", label: "Proportion of Individuals Receiving Telemedicine" }
      ],
      barriers: {
        physician: [
          {
            description: "Long Wait Times for Approved Therapies",
            subpoints: [
              "30% of families experience delays exceeding three months for therapy approval.",
              "25% of patients face logistical barriers in accessing facilities for Zolgensma or Spinraza."
            ]
          },
          {
            description: "Accessibility to SMA-Approved Centers",
            subpoints: [
              "40% of rural populations have access to SMA-specialized treatment centers.",
              "35% of SMA-specialized centers report staffing shortages."
            ]
          },
          {
            description: "Supply Chain Issues for Medications",
            subpoints: [
              "20% of cases report delays in procuring prescribed medications."
            ]
          },
          {
            description: "Challenges in Physical Therapy Accessibility",
            subpoints: [
              "35% of patients report difficulties accessing regular rehabilitation facilities."
            ]
          },
          {
            description: "High Therapy Costs",
            subpoints: [
              "50% of families report financial challenges in initiating approved therapies."
            ]
          }
        ],
        system: [
          {
            description: "Insurance Denial for Gene Therapy",
            subpoints: [
              "50% of applications for expensive treatments like Zolgensma are denied initially."
            ]
          },
          {
            description: "Overburdened Healthcare Centers",
            subpoints: [
              "35% of SMA-specialized centers report staffing shortages."
            ]
          },
          {
            description: "Lack of Comprehensive Treatment Guidelines",
            subpoints: [
              "25% of general practitioners lack clear guidelines for SMA therapies."
            ]
          },
          {
            description: "Inefficient Coordination Between Providers",
            subpoints: [
              "30% of families report delays due to lack of communication among healthcare providers."
            ]
          },
          {
            description: "Limited Access to Clinical Trials",
            subpoints: [
              "Only 20% of eligible patients are enrolled in ongoing trials."
            ]
          },
          {
            description: "Regulatory Delays in Therapy Approvals",
            subpoints: [
              "15% of new SMA therapies face delays in regional licensing processes."
            ]
          }
        ],
        patient: [
          {
            description: "Non-Adherence to Therapy",
            subpoints: [
              "25% of patients struggle to maintain consistent therapy schedules."
            ]
          },
          {
            description: "Fear of Side Effects",
            subpoints: [
              "30% of caregivers express concerns about potential adverse effects of SMA treatments."
            ]
          },
          {
            description: "Lack of Knowledge About Treatment Options",
            subpoints: [
              "40% of patients/caregivers remain unaware of approved therapies."
            ]
          },
          {
            description: "Low Trust in Novel Therapies",
            subpoints: [
              "20% of families hesitate to adopt recently approved treatments."
            ]
          },
          {
            description: "Delayed Decision-Making",
            subpoints: [
              "35% of families take longer to approve treatments due to financial and emotional concerns."
            ]
          },
          {
            description: "Transport and Mobility Limitations",
            subpoints: [
              "30% of families report difficulties in attending regular treatment sessions."
            ]
          }
        ]
      },
      findings: [
        {
          description: "Adults’ Lower Treatment Rates",
          subpoints: [
            "Adults have the highest percentage of untreated individuals, potentially due to diagnostic delays or patient choice."
          ]
        },
        {
          description: "Efficacy and Safety",
          subpoints: [
            "While efficacy remains the top consideration, teens prioritize safety equally with efficacy (36%), unlike adults (26%)."
          ]
        },
        {
          description: "Insurance Denials",
          subpoints: [
            "50% of adults faced denials for durable medical equipment, highlighting significant barriers in accessing necessary resources."
          ]
        },
        {
          description: "Multiple Treatments",
          subpoints: [
            "28% of individuals received two or more treatments, with children more likely to undergo multiple therapies compared to teens and adults."
          ]
        }
      ]
      
      
    }
  ];
  
  export default journeyData;
  