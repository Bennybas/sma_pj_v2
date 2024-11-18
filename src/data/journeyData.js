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
          name: "Symptom Onset ", 
          content: "Family or patient notices memory lapses, confusion, or behavioral changes." 
        },
        { 
          name: "Primary Care Physician", 
          content: "Discussion of memory and cognitive symptoms, physical exam, and basic screening with PCP." 
        },
        { 
          name: "Cognitive Assessment", 
          content: "Cognitive testing like MMSE (Mini-Mental State Examination) MMSE (Mini-Mental State Examination) ,MoCA (Montreal Cognitive Assessment) are performed by the PCP" 
        },
        { 
          name: "Referral Decision", 
          content: "PCP refers to a neurologist for further evaluation if Alzheimer's is suspected." 
        }
      ],
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
          description: "Strengthen Awareness Programs",
          subpoints: [
            "Launch SMA awareness campaigns and collaborate with schools and community centers to educate the public and help caregivers identify symptoms early."
          ]
        },
        {
          description: "Enhance Pediatric Screening",
          subpoints: [
            "Implement nationwide newborn screening for SMA and provide pediatricians with training for early detection and referral."
          ]
        },
        {
          description: "Improve Primary Care Capabilities",
          subpoints: [
            "Equip primary care centers with diagnostic tools for SMA and implement telemedicine initiatives for remote consultations with specialists."
          ]
        },
        {
          description: "Subsidize Screening Costs",
          subpoints: [
            "Offer free or low-cost screening to underserved populations to remove financial barriers."
          ]
        },
        {
          description: "Leverage Technology for Early Diagnosis",
          subpoints: [
            "Develop AI tools for early detection of SMA symptoms and promote mobile apps to track developmental milestones."
          ]
        }
      ]
      
    },
    {
      number: 2,
      title: "Diagnosis and Assessment",
      description: "Detailed diagnostic process including the use of biomarkers and differential diagnosis methods.",
      actions: [
        { 
          name: "Specialist Consultation", 
          content: "Neurologist or geriatric specialist reviews cognitive symptoms and medical history." 
        },
        { 
          name: "Comprehensive Testing", 
          content: "Neurologist also performs cognitive tests like MMSE, MoCA and neuropsychological evaluations." 
        },
        { 
          name: "Biomarker Analysis", 
          content: "Brain imaging (MRI, CT, or PET) and CSF(Cerebrospinal Fluid) or blood tests to detect Alzheimer's-related proteins (beta-amyloid, tau)." 
        },
        { 
          name: "Diagnosis & Staging", 
          content: "Confirmation of Alzheimer’s type, with staging to assess disease severity." 
        }
      ],
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
        description: "Strengthen Awareness Programs",
        subpoints: [
          "Launch SMA awareness campaigns and collaborate with schools/community centers to educate the public and help caregivers identify symptoms early."
        ]
      },
      {
        description: "Enhance Pediatric Screening",
        subpoints: [
          "Implement state-funded newborn screening for SMA and train pediatricians for early identification and referral."
        ]
      },
      {
        description: "Improve Primary Care Capabilities",
        subpoints: [
          "Equip primary care centers with basic diagnostic tools and launch telemedicine to connect primary physicians with SMA specialists."
        ]
      },
      {
        description: "Subsidize Screening Costs",
        subpoints: [
          "Provide free or low-cost initial screenings to reduce financial barriers for underserved populations."
        ]
      },
      {
        description: "Leverage Technology for Early Diagnosis",
        subpoints: [
          "Develop AI tools for early SMA symptom detection and promote mobile apps to track motor milestones."
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
          name: "Treatment Planning", 
          content: "Develop a care plan that includes FDA-approved medications like cholinesterase inhibitors (e.g., leqembi,donepezil, rivastigmine, galantamine) for mild to moderate stages, and memantine for moderate to severe stages. Incorporate lifestyle recommendations, such as regular physical activity and brain-healthy nutrition." 
        },
        { 
          name: "Implementation", 
          content: "Start prescribed medications, establish consistent routines, and introduce targeted cognitive activities (e.g., memory exercises, social interactions) tailored to the patient's cognitive level." 
        },
        { 
          name: "Monitoring Protocol", 
          content: "Conduct regular assessments (e.g., MMSE or MoCA) every 6-12 months, monitor for medication side effects, and adjust treatment if symptoms progress or new side effects emerge." 
        },
        { 
          name: "Care Coordination", 
          content: "Facilitate coordination among neurologists, primary care, family caregivers, and Alzheimer's support services to manage ongoing needs, home safety, and caregiver education and support." 
        }
      ],
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
          description: "Optimize Therapy Approvals",
          subpoints: [
            "Streamline regulatory processes and create funding mechanisms to fast-track and cover high-cost SMA therapies like Zolgensma and Spinraza."
          ]
        },
        {
          description: "Increase SMA Treatment Centers",
          subpoints: [
            "Expand SMA-specialized centers in underserved regions and train more neuromuscular specialists to manage therapies."
          ]
        },
        {
          description: "Leverage Digital Health Tools",
          subpoints: [
            "Use digital health apps for monitoring patient progress, therapy adherence, and telehealth for follow-ups to reduce in-person visits."
          ]
        },
        {
          description: "Expand Financial Aid Programs",
          subpoints: [
            "Advocate for government subsidies, NGO collaborations, and insurer coverage to reduce therapy costs for families."
          ]
        },
        {
          description: "Educate Families About Treatments",
          subpoints: [
            "Create multilingual resources and host workshops to educate families about SMA treatments, benefits, and side effects."
          ]
        }
      ]
      
    }
  ];
  
  export default journeyData;
  