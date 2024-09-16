import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate and highly motivated tech enthusiast with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React and Angular, as well as back-end technologies like Node.js, MySQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a highly motivated and detail-oriented IT professional with a strong foundation in Java, MySQL, and the MERN stack, complemented by a keen interest in finance. With proven experience in developing full-stack applications, I am passionate about leveraging technology to create innovative and scalable solutions. I am eager to bring my technical expertise into a dynamic environment where I can contribute to impactful projects while continuously growing my skills.`;


export const PROJECTS = [
  {
    title: "Social Networking Website",
    image: project1,
    description:
      "A fully functional Social Networking website with features like User Authentication, Photo posting, And Iteractive User engagement.",
    technologies: [ "React", "Node.js","Redux Toolkit","Material UI", "MongoDB"],
  },
  {
    title: "Movie Recomendation System",
    image: project2,
    description:
      " Deeveloped a Movie Recommendation System leveraging machine learning algorithms to suggest movies based on user preferences and viewing history implemented data processing, feature extraction and model training for accurate recommendation",
    technologies: ["Python", "Flask", "Scikit-Learn"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: [ "React", "TailwindCSS"],
  },
  {
    title: "Dashboard for CRCS (AICTE Hackathon)",
    image: project4,
    description:
      "Developed a user-friendly Power BI dashboard for the Central Registrar for Cooperative Societies during AICTE Hackathon, implemented robust visualization, filters,drill-down capabilities and responsive design, resulting in a user friendly interface.",
    technologies: ["PowerBI", "DAX", "Data Visualization", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "Andheri West, Mumbai, India ",
  phoneNo: "+91 7982206084 ",
  email: "sanketprabhu46@gmail.com",
};
