import one from "./../assets/images/me-1.svg";
import two from "./../assets/images/me-2.svg";
import three from "./../assets/images/me-3.svg";
import four from "./../assets/images/me-4.svg";
import five from "./../assets/images/me-5.svg";
import six from "./../assets/images/me-6.svg";
import seven from "./../assets/images/me-7.svg";
import eight from "./../assets/images/me-8.svg";
import nine from "./../assets/images/me-9.svg";
import ten from "./../assets/images/me-10.svg";


// Project Images
import moon from "./../assets/images/moon.svg";
import sh from "./../assets/images/quote.svg";
import virus from "./../assets/images/virus.svg";
import news from "./../assets/images/news.svg";
import we from "./../assets/images/we.svg";
import items from "./../assets/images/items.svg";



const aboutData = {
  title: "Hey, I'm ",
  myName: "Aditya!",
  description: [
    "I am Mechanical Engineering Student at Indian Institute of Technology, Delhi.",
    "I am passionate about Front-end, Back-end and Competitive programming. I participated in many programming competitions like Google KickStart, Google CodeJam, etc.",
  ]
};

const myImages = [one, two, three, four, five, six, seven, eight, nine, ten];

const mySkills = [
  {
    skillName: "HTML-5",
    class: "devicon-html5-plain"
  },
  {
    skillName: "CSS3",
    class: "devicon-css3-plain"
  },
  {
    skillName: "JS",
    class: "devicon-javascript-plain"
  },
  {
    skillName: "REACT JS",
    class: "devicon-react-original"
  },
  {
    skillName: "C++",
    class: "devicon-cplusplus-line"
  },
  {
    skillName: "PYTHON",
    class: "devicon-python-plain"
  },
  {
    skillName: "BOOTSTRAP",
    class: "devicon-bootstrap-plain"
  },
  {
    skillName: "NODE JS",
    class: "devicon-nodejs-plain"
  },
  {
    skillName: "FIREBASE",
    class: "fa fa-fire"
  },
  {
    skillName: "JAVA",
    class: "devicon-java-plain"
  },
  {
    skillName: "TYPESCRIPT",
    class: "devicon-typescript-plain"
  },
  {
    skillName: "GITHUB",
    class: "devicon-github-plain"
  }
];

const projectsCards = [
  {
    title: "Planets",
    subtitle: "A flutter app to visualise planets.",
    image: moon,
    footerLink: [
      { name: "Github", url: "https://github.com/inductor69/Planets" },
    ],
    language: "Flutter",
    langColor: "blue",
    stars: 1,
    forks: 0
  },
  {
    title: "Corona Virus Tracker",
    subtitle: "A beautiful flutter app to track the number of Corona Virus cases across the world.",
    image: virus,
    footerLink: [
      { name: "Github", url: "https://github.com/inductor69/Corona-Tracker" },
    ],
    language: "Flutter",
    langColor: "blue",
    stars: 1,
    forks: 0
  },
  {
    title: "Quotes App",
    subtitle: "An interesting app to motivate you by the collection of inspiring thoughts!",
    image: sh,
    footerLink: [
      { name: "Github", url: "https://github.com/inductor69/Quotes_App" },
    ],
    language: "Flutter",
    langColor: "blue",
    stars: 1,
    forks: 0
  },
  {
    title: "News App",
    subtitle: "A beautiful app developed in flutter framework to fetch latest news using NEWS API.",
    image: news,
    footerLink: [
      { name: "Github", url: "https://github.com/inductor69/News-App" },
    ],
    language: "Flutter",
    langColor: "blue",
    stars: 1,
    forks: 0
  },
  {
    title: "Weather App",
    subtitle: "An attractive weather app built in React JS",
    image: we,
    footerLink: [
      { name: "Web App", url: "https://weatheric.netlify.app/" },
    ],
    language: "JavaScript",
    langColor: "yellow",
    stars: 1,
    forks: 0
  },
  {
    title: "Jotted",
    subtitle: "A beautiful UI based To-do list and more app",
    image: items,
    footerLink: [
      { name: "Github", url: "https://github.com/inductor69/Jot-it-Down" },
    ],
    language: "Java",
    langColor: "yellow",
    stars: 1,
    forks: 0
  },
  
];

const socialMedia = {
  facebook: "https://www.facebook.com/profile.php?id=100004027149043",
  github: "https://github.com/inductor69",
  linkedin: "https://www.linkedin.com/in/aditya-kumar-b99b1519b/",
  gmail: "adityakiitdelhi@gmail.com",
  codeforces: "https://codeforces.com/profile/SalicylicAcid",
};

export { aboutData, myImages, mySkills, projectsCards, socialMedia };