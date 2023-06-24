import emoji from "react-easy-emoji";

export const greetings = {
  name: "Ryan Liam",
  title: "Hi, I'm Ryan Liam",
  description:
    "I am an aspiring data scientist who is proficient in data visualization, cleaning, transformation, and machine learning techniques. I am seeking opportunities to enhance my skills and gain real-world experience.",
  resumeLink:
    "https://docs.google.com/document/d/1_4RIfbyt4FFHW_bNplnoINQr01neTu7XDeeUlT_2O_k/edit?usp=sharing",
};

export const openSource = {
  githubUserName: "R-otato",
};

export const contact = {};

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/ryan-liam-1a37bb203",
  github: "https://github.com/R-otato",
  instagram: "https://www.instagram.com/r._.liam/",
};

export const skillsSection = {
  title: "What I do",
  subTitle:
    "Passionate Data Science Student Exploring New Techniques And Technologies",
  data: [
    {
      title: "Data Exploration and Wrangling",
      lottieAnimationFile: "/lottie/skills/29419-data-visualization.json", // Path of Lottie Animation JSON File
      skills: [
        "⚡ Creating Interactive Data Visualizations with Jupyter Notebook, Power BI, Tableau and SAP Analytics Cloud",
        "⚡ Creating vizualizations in Jupyter Notebook using libraries such as Matplotlib, Seaborn and Plotly",
        "⚡ Automating Data Preparation and Workflow with Alteryx.",

        "⚡ Writing complex SQL queries for data exploration and analysis",
      ],
      softwareSkills: [
        {
          skillName: "Jupyter Notebook",
          fontAwesomeClassname: "logos:jupyter",
        },

        {
          skillName: "Matplotlib",
          fontAwesomeClassname: "logos:matplotlib",
        },

        {
          skillName: "Seaborn",
          fontAwesomeClassname: "logos:seaborn",
        },

        {
          skillName: "Plotly",
          fontAwesomeClassname: "devicon:plotly-wordmark",
        },

        {
          skillName: "Power BI",
          fontAwesomeClassname: "logos:microsoft-power-bi",
        },

        {
          skillName: "Tableau",
          fontAwesomeClassname: "logos:tableau-icon",
        },

        {
          skillName: "SAP Analytics Cloud",
          fontAwesomeClassname: "logos:sap",
        },

        {
          skillName: "Alteryx",
          fontAwesomeClassname: "mdi:alpha-a-box-outline",
        },

        {
          skillName: "SQL",
          fontAwesomeClassname: "carbon:sql",
        },
      ],
    },
    {
      title: "Machine-Learning",
      lottieAnimationFile:
        "/lottie/skills/143472-mapping-for-machine-learning.json", // Path of Lottie Animation JSON File
      skills: [
        "⚡ Building supervised learning models in scikit-learn and PySpark",
        "⚡ Building unsupervised learning models in scikit-learn",
        "⚡ Performing Feature selection and engineering techniques",

        "⚡ Performing Model tuning and hyperparameter optimization",

        "⚡ Understanding Evaluation metrics for machine learning models",
      ],
      softwareSkills: [
        {
          skillName: "scikit-learn",
          fontAwesomeClassname: "simple-icons:scikit-learn",
        },
        {
          skillName: "PySpark",
          fontAwesomeClassname: "cib:apache-spark",
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "devicon:python",
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
      skills: [
        "⚡ Experience of working on multiple cloud platforms",

        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "logos:aws",
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "logos:microsoft-azure",
        },
        {
          skillName: "Snowflake",
          fontAwesomeClassname: "tabler:brand-snowflake",
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "logos:postgresql",
        },
        {
          skillName: "Github",
          fontAwesomeClassname: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "logos:docker-icon",
        },
        {
          skillName: "GCP",
          fontAwesomeClassname: "skill-icons:gcp-light",
        },
        {
          skillName: "Airbyte",
          fontAwesomeClassname: "simple-icons:airbyte",
        },
      ],
    },
  ],
};

export const SkillBars = [
  {
    Stack: "Machine Learning",
    progressPercentage: "90",
  },
  {
    Stack: "Data Wrangling",
    progressPercentage: "90",
  },
  {
    Stack: "Data Visualization",
    progressPercentage: "80",
  },
  {
    Stack: "Cloud Computing",
    progressPercentage: "60",
  },
  {
    Stack: "Deep Learning",
    progressPercentage: "10",
  },
];

export const educationInfo = [
  {
    schoolName: "Ngee Ann Polytechnic",
    subHeader: "Diploma in Data Science",
    duration: "April 2021 - Present",
    desc: "Participating in the Snowflake x NP Industry Currency Project.",
    grade: "GPA: 3.90",
    descBullets: [
      "Offer a user-friendly customer analytics platform called Tasty Insights for the food truck business Tasty Bytes",
      "Create a streamlit application that provides key insights on Tasty Bytes Customers to improve retention and drive growth for Tasty Bytes Marketing and Sales Team",
      "Create an unsupervised learning model to perform customer segmentation",
      "Create a supervised learning model to predict whether a member will churn or not",
    ],
  },
];

// export const experience = [
//   {
//     role: 'Frontend Developer',
//     company: 'Duseca Software',
//     companylogo: '/img/icons/common/dusecaSoftware.jpg',
//     date: 'Apr 2022 – Jun 2022',
//     desc: 'I worked as frontend web developer to design web based admin dashboards for mulitple apps using Django, Bootstrap, jQuery, Chart.js and some other libraries.',
//   },
//   {
//     role: 'API Engineer',
//     company: 'Duseca Software',
//     companylogo: '/img/icons/common/dusecaSoftware.jpg',
//     date: 'Jan 2022 – Mar 2022',
//     desc: 'I worked as API Engineer on a Kale App. Kale is a community platform for the creation of social reviews based on verified transactions. I built Fully Optimized and High Performance RESTful APIs using Django, DjangoRESTFramework, PostgresSQL, JWT Authentication, AWS, Integrated Plaid APIs for Fetching Bank Transactions, Integrated Sentry for monitoring Django Server and deployed the API on Heroku Server.',
//     // descBullets: [
//     // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
//     // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//     // ],
//   },
//   {
//     role: 'Full Stack Developer',
//     company: 'Bleed-AI',
//     companylogo: '/img/icons/common/bleedAI.jpg',
//     date: 'Sept 2021 - Oct 2021',
//     desc: 'Worked as django web developer to create a website in which I integrated computer vision AI model (built by the team of BleedAI) to process YouTube URLs and show Real Time processing on Website using Django Channels WebSockets , threading for running multiple instances of AI Model, jQuery for UI rendering and deployed it on Heroku server.',
//   },
//   {
//     role: 'Backend Developer',
//     company: 'Wapidu',
//     companylogo: '/img/icons/common/wapidu.jpg',
//     date: 'Sept 2021',
//     desc: 'Worked as a Django Developer to integrate Stripe payment gateway in wapidu.com and Created REST APIs using Django REST Framework to integrate Django Stripe backend to Vue.js Frontend and Deployed it on Azure based Docker container registry.',
//   },
// ];

export const projects = [
  {
    name: "Formula One Predictor",
    desc: [
      "This project is aimed towards predicting the top half F1 GP winners based on information before the race.",
      "Tools used: Jupyter",
    ],
    github: "https://github.com/R-otato/Formula-one-prediction",
  },
  {
    name: "Singapore HDB Resale Price Predictor",
    desc: "This project aims to create a machine-learning model for predicting the resale prices of HDB flats using their properties from the data given. Tools used: Jupyter + PySpark",
    github: "https://github.com/R-otato/PySpark-HDB-resale-prediction",
  },
  {
    name: "Dataplex",
    desc: "The project is aimed to create a Data as a Service platform to get raw data, store it in a secure and accessible database and sell transformed data as insightful findings. Tools used: Airbyte + Azure + PowerBI",
    github:
      "https://github.com/R-otato/Dataplex/blob/main/RyanLiam_Dashboards.pdf",
  },
  {
    name: "SG Bus Timing Tracker",
    desc: "The project is aimed to make use of a front-end and an analytics automation platform, Alteryx, to provide commuters with real-time information on when a bus will arrive at their selected bus stop. Tools used: Alteryx Designer + AdobeXD",
    github:
      "https://github.com/R-otato/SG-Bus-Timing-Tracker/blob/main/Documentation_Reflection.pdf",
  },
  {
    name: "Tasty Insights Streamlit Application  (Ongoing- Github link coming soon)",
    desc: "The objective of this project is to enhance customer retention and drive growth for the food truck business Tasty Bytes by integrating machine learning model predictions and key insights about their customer into a streamlit application. Tools used: Jupyter + Snowflake + Streamlit",
  },
];

// export const feedbacks = [
//   {
//     name: 'John Smith',
//     feedback:
//       'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
//   },
//   {
//     name: 'John Smith',
//     feedback:
//       'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
//   },
// ];

// See object prototype on SEO.jsx page
export const seoData = {
  title: "Ryan Liam",
  description: "A passionate Data Science Student.",
  image: "https://avatars.githubusercontent.com/u/94153321?v=4",
};
