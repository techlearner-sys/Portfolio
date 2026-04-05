import { motion } from "framer-motion";
import { Github, Linkedin, Phone, Mail } from "lucide-react";

export default function App() {
  return (
    <div className="app">

      {/* Hero */}
      <section className="hero">

        {/* Profile Image */}
        <motion.img
        src="/Profile.jpeg"
        alt="profile"
        className="profile-img"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      />

      <motion.h1 
    initial={{ opacity: 0, y: 50 }} 
    animate={{ opacity: 1, y: 0 }}
  >
    Hi, I'm <span className="highlight">Chaitanya Kalra</span>
  </motion.h1>

  <motion.p 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    className="subtitle"
  >
    Full Stack Developer | IoT Enthusiast
  </motion.p>

  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.3 }}
    className="description"
  >
    Passionate about building scalable web applications and exploring the world of IoT. I love turning ideas into reality through code and am always eager to learn new technologies.
  </motion.p>

  {/* CV Button */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5 }}
    className="hero-buttons"
  >
    <a href="/SpecCV.docx" download className="btn">
      Download CV
    </a>
  </motion.div>

</section>

      {/* Projects + Certifications (2 Columns) */}
      <section className="section">
        <div className="two-col">

          {/* Projects */}
          <div>
            <h2>Projects</h2>

            <div className="project-card">
              <h3>PollMaster</h3>
              <ul>
                <li>It is a real-time online polling system that allows users to create polls, vote securely, and view live results instantly.</li>
                <li>Designed and implemented a responsive frontend using React (Vite) and a robust backend using Spring Boot REST APIs, ensuring seamless communication between client and server.</li>
                <li>Integrated user authentication, WebSocket-based live updates for instant result display, and database management (PostgreSQL) for efficient storage and retrieval of poll data.</li>
              </ul>
              <a href="https://github.com/techlearner-sys/Polling-website-">GitHub →</a>
            </div>

            <div className="project-card">
              <h3>ConsultPro</h3>
              <ul>
                <li>Developed ConsultPro, a consultancy management web platform enabling professionals in finance, technology, and other domains to manage client consultations, scheduling, and service delivery.</li>
                <li>Implemented features for appointment booking, consultant management, and workflow tracking to streamline professional consulting operations.</li>
                <li>Built a system to manage consultant availability, service delivery, and payment tracking through an intuitive dashboard.</li>
              </ul>
              <a href="https://github.com/techlearner-sys/ConsultPro-">GitHub →</a>
            </div>

            <div className="project-card">
              <h3>Smart Pest Detection</h3>
              <ul>
                <li>Developed an IoT-based smart pest detection system using ESP32-CAM and Flask for automated crop monitoring.</li>
                <li>Implemented image-based pest detection to trigger a relay-controlled pesticide spraying mechanism.</li>
                <li>Reduced manual effort and optimized pesticide usage with a low-cost, efficient solution for farmers.</li>
              </ul>
              <a href="https://github.com/techlearner-sys/ESP32-Cam-project">GitHub →</a>
            </div>

          </div>

      {/* Skills */}
      <section className="section">
        <h2>Skills</h2>
        <div className="skills-grid">
          {[
            { name: "C", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
            { name: "C++", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
            { name: "Java", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
            { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            { name: "SQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
            { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Spring Boot", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" }
            { name: "Arduino", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" },
            { name: "ESP32", img: "https://wiki.52pi.com/images/5/53/Esp32.png" },
            { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" }
          ].map(skill => (
            <div key={skill.name} className="skill-card">
              <img src={skill.img} alt={skill.name} />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
        <section className="section">
          <h2>Education</h2>

          <div className="edu-container">

            <div className="edu-card">
          <img src="https://upload.wikimedia.org/wikipedia/en/3/3a/Lovely_Professional_University_logo.png" alt="Lovely Professional University logo featuring stylized letters LPU in blue and gold colors" />
          <div>
            <h3>Lovely Professional University</h3>
            <p>B.Tech Computer Science Engineering (2023 – 2027)</p>
          </div>
            </div>

            <div className="edu-card">
          <img src="https://upload.wikimedia.org/wikipedia/en/e/eb/DAV_CMC_Logo.svg" alt="DAV Centenary Public School emblem with maroon and gold colors representing the institution" />
          <div>
            <h3> DAV Centenary Public School</h3>
            <p> Class 12: 75.2% (2022 – 2023)</p>
            <p> Class 10: 87% (2020 – 2021)</p>
          </div>
            </div>

          </div>
        </section>

        {/* Certifications */}
          <div>
            <h2>Certifications</h2>

            <div className="project-card">
              <ul>
                <li>
                  DSA using Java – CipherSchools
                  <br />
                  <a href="https://www.cipherschools.com/certificate/preview?id=687f2fe87efd6d50907046b4">View Certificate</a>
                </li>
                <li>
                  Foundations of VR – IIT Madras
                  <br />
                  <a href="https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS87S115130000610431680">View Certificate</a>
                </li>
                <li>
                  Responsive Web Design – FreeCodeCamp
                  <br />
                  <a href="https://freecodecamp.org/certification/Chaitanya_Kalra/responsive-web-design">View Certificate</a>
                </li>
                <li>
                  Generative AI Apps – Udemy
                  <br />
                  <a href="https://www.udemy.com/certificate/UC-7d734b2c-3859-4450-9a74-6ccced844aad/">View Certificate</a>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* Contact */}
      <section className="section contact">
        <h2>Contact</h2>
        <p>chaitanyakalratech360@gmail.com</p>
        <p>+91 9781498910</p>

        <div className="icons">
          <a href="https://github.com/techlearner-sys"><Github /></a>
          <a href="https://www.linkedin.com/in/chaitanya-kalra-022b62291/"><Linkedin /></a>
          <a href="tel:+919781498910"><Phone /></a>
          <a href="mailto:chaitanyakalratech360@gmail.com"><Mail /></a>
        </div>
      </section>

    </div>
  );
}
