export const journeyData = [

  {

    number: 1,

    title: "Initial Assessment",



   

    description: "Critical period where primary care physicians play a key role in initial detection and assessment.",



  actions: [

    {

      name: "Early Signs of Weakness or Delayed Motor Milestones",

      content: "Hypotonia, Difficulty holding up the Head, or Delayed Sitting/Walking milestones"

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

      content: "Decision to involve a Pediatric Neurologist, Geneticist, or SMA care expert based on clinical findings."

    }

  ]

  ,

    metrics:[

      { value: "88%", label: "High Specialist Utilization" },

      { value: "5.8 specialists", label: "Average Number of Specialists" },

      { value: "52.7%", label: "Genetic or Neurological Screening Recommendation Rate by PCP" },

      { value: "1 in 15,000", label: "Incidence rate of SMA " }

    ]

    ,

    barriers: {

      physician: [

        {

          subpoints: [

            "52% of patients or caregivers report delays in recognizing initial symptoms, impacting timely diagnosis.",

            "15% of healthcare facilities are inadequately equipped to handle physically disabled patients.",

            "35% of cases report geographic limitations, while 40% face transportation-related issues for timely evaluations."

          ]

        }

      ],

     

      system: [

        {

          subpoints: [

            "25% of clinics lack Genetic testing facilities, and 50% of Providers express uncertainty about standardized SMA screening protocols.",

            "40% of clinics report staff shortages, leading to delays in evaluations, while 45% of physicians rely on outdated assessment tools."

          ]

        }

      ],

     

      patient: [

        {

          subpoints: [

            "Over 40% of patients or caregivers delay seeking medical advice due to misinterpretation of symptoms.",

            "50% of patients report financial challenges, while 30% face logistical hurdles accessing primary care."

          ]

        }

      ]

    }      

    ,

    findings : [

      {

        description: "Early Recognition",

        subpoints: [

          "Improve early symptom recognition (currently 52% delayed) via public awareness."

        ]

      },

      {

        description: "Primary Care Access",

        subpoints: [

          "Expand primary care access, addressing rural limitations (35% affected)."

        ]

      },

      {

        description: "Efficient Referrals",

        subpoints: [

          "Reduce the average 5.8 specialists seen per Pediatric patient."

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

      { value: "95%", label: "Genetic Testing Rate" },

      { value: "50%", label: "Diagnosis Delay Rate (Type 4)" },

      { value: "30–50%", label: "Misdiagnosis Rate (Initial)" },

      { value: "8.1 years", label: "Average Age Not Identified by Screening" }

    ],

   

    barriers: {

      physician: [

        {

          subpoints: [

            "45% of healthcare centers lack genetic testing facilities.",

            "Only 35% of rural areas have access to advanced SMN1/SMN2 copy diagnostics.",

            "33% of patients experience delays exceeding four weeks for specialized appointments."

          ]

        }

      ],

     

      system: [

        {

          subpoints: [

            "35% of referrals are delayed due to bureaucratic inefficiencies.",

            "40% of diagnostic centers face challenges in accessing prior medical records.",

            "Over reliance on overloaded tertiary centers delays diagnostics for 25% of cases.",

            "50% of insurance plans exclude or limit coverage for genetic testing."

          ]

        }

      ],

     

      patient: [

        {

          subpoints: [

            "60% of families struggle to afford diagnostics.",

            "45% of patients/caregivers lack understanding of genetic testing's importance.",

            "50% of patients believe initial symptoms do not warrant advanced testing."

          ]

        }

      ]

    }      

   

    ,



    findings :[

      {

        description: "Genetic Testing Access",

        subpoints: [

          "Increase genetic testing access (currently 45% lack facilities)."

        ]

      },

      {

        description: "Reduce Testing Delays",

        subpoints: [

          "Shorten diagnostic delays (Type 4 SMA at 50% delayed)."

        ]

      },

      {

        description: "Affordability",

        subpoints: [

          "Address financial barriers (60% of families face economic challenges)."

        ]

      }

    ]

   

         



   

  },

  {

    number: 3,

    title: "Treatment Initiation and Monitoring Outcomes",

    description: "Long-term treatment, monitoring, and management of Alzheimer's disease and other Dementias.",

    actions: [

      {

        name: "Treatment Initiation",

        content: "Gene therapy, SMN-enhancing drugs, and supportive care interventions."

      },

      {

        name: "Sustaining Motor Function and Quality of Life",

        content: "Implementing ongoing therapies and monitoring to preserve motor function and enhance daily living."

      },

      {

        name: "Overcoming Barriers",

        content: "Tackling financial, logistical, and systemic challenges to ensure access to SMA care."
      },
      {
        name: "Post-Treatment Outcomes",
        content: "Assessing improvements in motor abilities, quality of life, and treatment effectiveness over time"
      }
    ]
    ,
    metrics: [
      { value: "98%", label: "Treatment Utilization Rate (Overall)" },
      { value: "21.7 Days", label: "Treatment Initiation Time (Average)" },
      { value: "55%", label: "Insurance Denial Rate" },
      { value: "75%", label: "Successful Appeal Rate After Denial" },
      { value: "79%", label: "Proportion of Individuals Receiving Telemedicine" },
      {value:"0.75 per 100",label:"Mortality Rate"},
      {value:"60%-70% ",label:"FDA-Approved Treatment Rate"}
    ],
    barriers: {
      physician: [
        {
          subpoints: [
            "40% of rural populations lack access to SMA-specialized treatment centers.",
            "35% of rehabilitation facilities report staffing shortages, impacting therapy delivery.",
            "30% of families experience therapy approval delays exceeding three months.",
            "50% of families struggle with the high costs of initiating SMA-approved therapies."
          ]
        }
      ],
      system: [
        {
          subpoints: [
            "50% of applications for gene therapies like Zolgensma are denied initially.",
            "15% of new SMA therapies face delays in regional licensing processes.",
            "35% of SMA-specialized centers face staffing shortages, delaying patient care."
          ]
        }
      ],
      patient: [
        {
          subpoints: [
            "25% of patients struggle to maintain consistent therapy schedules.",
            "13% of families face mobility or transportation issues affecting regular treatment.",
            "40% of patients or caregivers lack awareness about approved SMA therapies.",
            "20% of families hesitate to adopt novel treatments due to trust concerns."
          ]
        }
      ]
    }      
    ,
     findings : [
      {
        description: "Faster Therapy Access",
        subpoints: [
          "Reduce therapy approval delays (30% exceed three months)."
        ]
      },

      {
        description: "Insurance Coverage",
        subpoints: [
          "Improve insurance coverage (55% denial rate)."
        ]
      },
      {
        description: "Patient Education",

        subpoints: [

          "Increase patient awareness of treatment options (currently 40% unaware)."
        ]
      },
       {
        description: "Unmet Treatment Needs",

        subpoints: [

          "97% of the patients hoped new therapies will address Gaining Muscle strength",
          "90% of the patients hoped new therapies will address Achieving new Motor function",
          "88% of the patients hoped new therapies will address Stabilizing Motor function",
          "85% of the patients hoped new therapies will address Reduction of Fatigue",
          "79% of the patients hoped new therapies will address Improving fine Motor skills"
        ]
      }
    ]
  }
];
export default journeyData;



