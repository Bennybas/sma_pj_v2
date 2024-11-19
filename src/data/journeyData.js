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
      barriers: {
        physician: [
          {
            description: "Delayed Symptom Recognition",
            subpoints: [
              "52% of patients or caregivers report delays in recognizing initial symptoms, impacting timely diagnosis."
            ]
          },
          {
            description: "Limited Accessibility for Disabled Patients",
            subpoints: [
              "15% of healthcare facilities are inadequately equipped to handle physically disabled patients."
            ]
          },
          {
            description: "Rural and Logistical Challenges",
            subpoints: [
              "35% of cases report geographic limitations, while 40% face transportation-related issues for timely evaluations."
            ]
          }
        ],
      
        system: [
          {
            description: "Insufficient Diagnostic and Screening Infrastructure",
            subpoints: [
              "25% of clinics lack genetic testing facilities, and 50% of providers express uncertainty about standardized SMA screening protocols."
            ]
          },
          {
            description: "Staff and Resource Constraints",
            subpoints: [
              "40% of clinics report staff shortages, leading to delays in evaluations, while 45% of physicians rely on outdated assessment tools."
            ]
          },
          {
            description: "Limited Specialist Referral Networks",
            subpoints: [
              "Only 30% of primary care physicians have immediate access to specialists for neuromuscular disorders."
            ]
          }
        ],
      
        patient: [
          {
            description: "Delayed Symptom Reporting",
            subpoints: [
              "Over 40% of patients or caregivers delay seeking medical advice due to misinterpretation of symptoms."
            ]
          },
          {
            description: "Financial and Logistical Barriers",
            subpoints: [
              "50% of patients report financial challenges, while 30% face logistical hurdles accessing primary care."
            ]
          },
          {
            description: "Awareness and Literacy Gaps",
            subpoints: [
              "60% of patients or caregivers are unaware of SMA-specific symptoms, and 35% struggle with understanding medical diagnoses."
            ]
          }
        ]
      }      
      ,
      findings: [
        {
          description: "Stable SMA Types 3 and 4 Population",
          subpoints: [
            "Prevalence remains consistent, underscoring the ongoing need for dedicated care and resources."
          ]
        },
        {
          description: "Unequal Access to Specialized Care",
          subpoints: [
            "Pediatric patients receive better specialized care than adults, highlighting disparities that affect outcomes."
          ]
        },
        {
          description: "Delays in Diagnosis",
          subpoints: [
            "Barriers like symptom recognition delays and weak assessment systems lead to late interventions."
          ]
        },
        {
          description: "Geographic and Infrastructure Challenges",
          subpoints: [
            "Issues with location, transport, and care facilities hinder timely evaluation and treatment."
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
            description: "Limited Access to Advanced Diagnostics",
            subpoints: [
              "45% of healthcare centers lack genetic testing facilities.",
              "Only 35% of rural areas have access to advanced SMN1/SMN2 copy diagnostics."
            ]
          },
          {
            description: "Resource and Cost Challenges",
            subpoints: [
              "25% of tertiary care centers lack sufficient resources for rare disorder diagnostics.",
              "High costs (~40% of families struggle to afford genetic tests)."
            ]
          },
          {
            description: "Long Wait Times for Referrals",
            subpoints: [
              "33% of patients experience delays exceeding four weeks for specialized appointments."
            ]
          }
        ],
        system: [
          {
            description: "Fragmented Diagnostic Infrastructure",
            subpoints: [
              "35% of referrals are delayed due to bureaucratic inefficiencies.",
              "40% of diagnostic centers face challenges in accessing prior medical records."
            ]
          },
          {
            description: "Insufficient Specialist Networks",
            subpoints: [
              "Only 30% of regions have adequate neuromuscular specialists.",
              "Overreliance on overloaded tertiary centers delays diagnostics for 25% of cases."
            ]
          },
          {
            description: "Inconsistent Insurance Support",
            subpoints: [
              "50% of insurance plans exclude or limit coverage for genetic testing."
            ]
          }
        ],
        patient: [
          {
            description: "Economic and Awareness Barriers",
            subpoints: [
              "60% of families struggle to afford diagnostics.",
              "45% of patients/caregivers lack understanding of genetic testing's importance."
            ]
          },
          {
            description: "Cultural and Psychological Hesitations",
            subpoints: [
              "30% of families fear stigma from genetic diagnoses.",
              "25% of patients express anxiety about invasive or unfamiliar tests."
            ]
          },
          {
            description: "Symptom Misinterpretation",
            subpoints: [
              "50% of patients believe initial symptoms do not warrant advanced testing."
            ]
          }
        ]
      }
      ,

      findings: [
        {
          description: "Urban-Rural Diagnostic Disparities",
          subpoints: [
            "Only 35% of rural areas have access to advanced testing, leading to significant delays for non-urban patients."
          ]
        },
        {
          description: "Economic Barriers to Testing",
          subpoints: [
            "Genetic testing remains unaffordable for ~40% of families, highlighting the need for cost-effective solutions or better insurance coverage."
          ]
        },
        {
          description: "Prolonged Diagnostic Timelines",
          subpoints: [
            "30% of labs experience delays in generating genetic testing results, extending the diagnostic process."
          ]
        },
        {
          description: "Delayed Diagnoses in Milder SMA Cases",
          subpoints: [
            "The average diagnosis age for SMA Types 3 and 4 remains high at 8.1 years, especially in the absence of newborn screening."
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
            description: "Limited Accessibility to SMA-Approved Therapies",
            subpoints: [
              "40% of rural populations lack access to SMA-specialized treatment centers.",
              "35% of rehabilitation facilities report staffing shortages, impacting therapy delivery."
            ]
          },
          {
            description: "Delays in Therapy Approval and Supply",
            subpoints: [
              "30% of families experience therapy approval delays exceeding three months.",
              "20% of patients report delays in procuring SMA medications due to supply chain issues."
            ]
          },
          {
            description: "High Financial Burden on Families",
            subpoints: [
              "50% of families struggle with the high costs of initiating SMA-approved therapies."
            ]
          }
        ],
        system: [
          {
            description: "Insurance and Regulatory Barriers",
            subpoints: [
              "50% of applications for gene therapies like Zolgensma are denied initially.",
              "15% of new SMA therapies face delays in regional licensing processes."
            ]
          },
          {
            description: "Overburdened Healthcare Infrastructure",
            subpoints: [
              "35% of SMA-specialized centers face staffing shortages, delaying patient care."
            ]
          },
          {
            description: "Limited Access to Clinical Trials",
            subpoints: [
              "Only 20% of eligible patients are enrolled in ongoing clinical trials."
            ]
          }
        ],
        patient: [
          {
            description: "Challenges in Therapy Adherence",
            subpoints: [
              "25% of patients struggle to maintain consistent therapy schedules.",
              "30% of families face mobility or transportation issues affecting regular treatment."
            ]
          },
          {
            description: "Knowledge and Trust Barriers",
            subpoints: [
              "40% of patients or caregivers lack awareness about approved SMA therapies.",
              "20% of families hesitate to adopt novel treatments due to trust concerns."
            ]
          },
          {
            description: "Fear of Treatment Side Effects",
            subpoints: [
              "30% of caregivers express concerns about potential adverse effects of SMA therapies."
            ]
          }
        ]
      }
      ,
      findings: [
        {
          description: "Higher Untreated Rates Among Adults",
          subpoints: [
            "Adults have the highest proportion of untreated individuals, driven by diagnostic delays or personal choice."
          ]
        },
        {
          description: "Safety and Efficacy Considerations",
          subpoints: [
            "Teens prioritize safety equally with efficacy (36%), whereas adults place slightly less emphasis on safety (26%)."
          ]
        },
        {
          description: "Barriers to Medical Equipment Access",
          subpoints: [
            "50% of adults faced insurance denials for durable medical equipment, underscoring significant access challenges."
          ]
        },
        {
          description: "Higher Treatment Frequency in Children",
          subpoints: [
            "Children are more likely to receive multiple therapies (28%) compared to teens and adults."
          ]
        }
      ]
      
      
      
    }
  ];
  
  export default journeyData;
  