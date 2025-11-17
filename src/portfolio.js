/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; 

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section
const illustration = {
  animated: true
};

const greeting = {
  username: "Thanmay Krishna",
  title: "Hi all, I'm Thanmay",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 experienced in building Web & Mobile applications using JavaScript / Django / PHP / React / Node.js / React Native and more."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1HcASARXp-v5gwHnSM778LKcaw9fwc4k7/view?usp=sharing",
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/krishna387",
  linkedin: "https://www.linkedin.com/in/krishnakilambi/",
  gmail: "krishnakilambikrishna@gmail.com",
  display: true
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO LOVES TO EXPLORE",
  skills: [
    emoji(
      "⚡ Develop highly interactive front-end / user interfaces for web & mobile apps"
    ),
    emoji("⚡ Progressive Web Applications (PWA) using modern JS frameworks"),
    emoji("⚡ Experience integrating third-party services like Firebase / AWS")
  ],

  softwareSkills: [
    { skillName: "html-5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "css3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "reactjs", fontAwesomeClassname: "fab fa-react" },
    { skillName: "nodejs", fontAwesomeClassname: "fab fa-node" },
    { skillName: "mongo-db", fontAwesomeClassname: "fas fa-database" },
    { skillName: "npm", fontAwesomeClassname: "fab fa-npm" },
    { skillName: "sql-database", fontAwesomeClassname: "fas fa-database" },
    { skillName: "aws", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "python", fontAwesomeClassname: "fab fa-python" }
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "JAIN University",
      logo: require("./assets/images/image.png"),
      subHeader: "COMPUTER SCIENCE AND ENGINEERING",
      duration: "August 2022 - April 2026",
      desc: "Participated in research on AI-based stock market prediction and published 1 paper.",
      descBullets: [
        "XGBoost for trend detection",
        "CNN-BiLSTM for capturing sequential market patterns"
      ]
    },
    {
      schoolName: "Sir C R Reddy Public School",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Higher Secondary Education",
      duration: "September 2020 - April 2022",
      desc: "Secured 72.4% in Andhra Pradesh Board Exams.",
      descBullets: ["Focused on core science & mathematics subjects"]
    }
  ]
};

// Skill Proficiency
const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Frontend/Design", progressPercentage: "90%" },
    { Stack: "Backend", progressPercentage: "70%" },
    { Stack: "Programming", progressPercentage: "60%" }
  ],
  displayCodersrank: false
};

// Work Experience
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Engineer Intern",
      company: "AxiomIO",
      companylogo: require("./assets/images/Axiomio.jpeg"),
      date: "October 2025 – Present"
    }
  ]
};

// Open Source Section
const openSource = {
  showGithubProfile: "true",
  display: true
};

// ⭐ NEW PROJECTS SECTION → Added as requested
const bigProjects = {
  title: "My Projects",
  subtitle: "Here are some of the major projects I have worked on.",
  projects: [
    {
      projectName: "Parking Lot Management System",
      projectDesc:
        "A smart parking management solution that automates slot allocation, vehicle tracking, and real-time dashboard monitoring.",
      image: require("./assets/images/parking_logo.png"),
      footerLink: [
        { name: "GitHub Repo", url: "https://github.com/" } // Add your link
      ]
    },
    {
      projectName: "College Event Management System",
      projectDesc:
        "A complete platform for colleges to manage events, registrations, announcements, and student participation seamlessly.",
      image: require("./assets/images/college_event_logo.png"),
      footerLink: [
        { name: "GitHub Repo", url: "https://github.com/" } // Add your link
      ]
    }
  ],
  display: true
};

// Blogs Section
const blogSection = {
  title: "Blogs",
  subtitle: "Sharing my knowledge through blogs & tutorials.",
  displayMediumBlogs: "true",
  blogs: [],
  display: true
};

// Talks Section
const talkSection = {
  title: "TALKS",
  subtitle: emoji("I love sharing knowledge and learning from others."),
  talks: [],
  display: true
};

// Podcast Section
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I love discussing technology & innovation.",
  podcast: [],
  display: true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

// Contact Section
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Feel free to contact me for collaborations or opportunities.",
  number: "+91-9182909488",
  email_address: "krishnakilambikrishna@gmail.com"
};

// Twitter Section
const twitterDetails = {
  userName: "twitter",
  display: true
};

const isHireable = false;

// EXPORT ALL
export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
