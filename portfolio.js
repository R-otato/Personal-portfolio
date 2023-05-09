import emoji from 'react-easy-emoji';

export const greetings = {
  name: 'Leong Kai Joon',
  title: "Hi all, I'm Kai Joon",
  description:
    "I'm a passionate Full Stack web developer having some experience of web applications with Javascript, HTML, CSS, and some Blockchain development on Ethereum (Solidity) and mobile applications with React Native",
  resumeLink: '',
};

export const openSource = {
  githubUserName: 'darwin098',
};

export const contact = {};

export const socialLinks = {
  github: 'https://github.com/darwin098',
  linkedin: 'https://www.linkedin.com/in/kai-joon-leong-baa646148/',
};

export const skillsSection = {
  title: 'What I do',
  subTitle:
    'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK AND UPCOMING TECHNOLOGIES',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive Full stack web applications with vanilla JavaScript'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          fontAwesomeClassname: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          fontAwesomeClassname: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassname: 'logos:javascript',
        },
        {
          skillName: 'NPM',
          fontAwesomeClassname: 'logos:npm-icon',
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
        emoji('⚡ Building servers with SQL (PostgreSQL, MySQL, MicrosoftSQL)'),
      ],
      softwareSkills: [
        {
          skillName: 'AWS',
          fontAwesomeClassname: 'logos:aws',
        },
        {
          skillName: 'Heroku',
          fontAwesomeClassname: 'logos:heroku-icon',
        },
        {
          skillName: 'PostgreSQL',
          fontAwesomeClassname: 'logos:postgresql',
        },
      ],
    },
    {
      title: 'Blockchain',
      lottieAnimationFile: '/lottie/skills/ethereum.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Experience in developing simple Smart Contract using Solidity & Ethereum'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'Ethereum',
          fontAwesomeClassname: 'logos:ethereum',
        },
        {
          skillName: 'Solidity',
          fontAwesomeClassname: 'logos:solidity',
        },
        {
          skillName: 'Metamask',
          fontAwesomeClassname: 'logos:metamask-icon',
        },
        {
          skillName: 'Ganache',
          fontAwesomeClassname: 'logos:ganache-icon',
        },
      ],
    },
  ],
};

export const SkillBars = [
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '75', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '80',
  },
  {
    Stack: 'Programming',
    progressPercentage: '70',
  },
];

export const educationInfo = [
  {
    schoolName: 'Singapore Polytechnic',
    subHeader: 'Pursuing Diploma in Information Technology',
    duration: 'June 2021 - Present Date',
    desc: '',
    descBullets: ['Expected to finish education by June 2024'],
  },
];

export const experience = [
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
];

export const projects = [
  {
    name: 'Water Vapor (School Group Project)',
    desc: 'With Water Vapor, you can easily find games that are on the steam store for a great price!',
    link: 'https://ades-team-5.netlify.app/',
    text: 'Demo',
  },
  {
    name: 'Asteroid Destroyer (School Group Project)',
    desc: 'An augmented reality game made using Unity3D',
    link: 'https://drive.google.com/file/d/150NG31p5Ue8472zM-3ih8G53t47hV2zp/view?usp=sharing',
    text: 'Video',
  },
];

export const feedbacks = [
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
];
