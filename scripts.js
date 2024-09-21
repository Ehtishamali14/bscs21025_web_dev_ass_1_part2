

const profileData = {
    name: "Ehtisham Ali",
    profilePicture: "pro_img.jpg",
    aboutMe: `Welcome to my professional profile. My name is Ehtisham Ali, and I am a passionate Web Developer 
              with a strong background in Website Development. My journey in the tech world goes beyond just 
              web development—I have a keen interest in Machine Learning and its applications in solving 
              real-world problems. In this space, you can explore my diverse skill set, browse through my 
              projects, and see some of my notable achievements.`,
    skills: {
        hardSkills: [
            { name: "Web Development", level: "85%" },
            { name: "App Development", level: "75%" },
            { name: "Machine Learning", level: "70%" },
            { name: "Database Management", level: "80%" },
            { name: "API Integration", level: "65%" }
        ],
        softSkills: [
            { name: "Teamwork", level: "90%" },
            { name: "Leadership", level: "85%" },
            { name: "Problem Solving", level: "80%" },
            { name: "Communication", level: "75%" },
            { name: "Time Management", level: "80%" }
        ]
    },
    projects: [
        { title: "E-commerce Website Development", date: "July 2024", description: "Developed a comprehensive e-commerce platform featuring product listings, shopping cart functionality, and secure payment processing." },
        { title: "Machine Learning Sales Forecasting System", date: "March 2024", description: "Created a machine learning model to predict future sales trends based on historical data, enhancing decision-making for inventory management." },
        { title: "Mobile App for Fitness Tracking", date: "January 2024", description: "Designed and implemented a mobile app for tracking fitness activities, including step counting, workout logging, and progress analytics." },
        { title: "Real-time Chat Application", date: "November 2023", description: "Built a real-time chat application with features such as direct messaging, group chats, and multimedia sharing using WebSocket technology." },
        { title: "Automated Data Analysis Tool", date: "September 2023", description: "Developed a tool to automate data analysis processes, including data cleaning, visualization, and report generation, improving workflow efficiency." }
    ],
    education: [
        { degree: "Bachelor of Science in Computer Science", institution: "ITU", graduationYear: 2025 },
        { degree: "Advanced Machine Learning, Web Development Bootcamp", institution: "Short Courses", year: 2023 }
    ],
    awards: [
        { name: "AWS Certified Solutions Architect", year: 2023 },
        { name: "Best Developer Award - Hackathon 2022", year: 2022 }
    ]
};

// Populating the header
document.getElementById("header-section").innerHTML = `
    <h1>${profileData.name} - Professional Profile</h1>
    <img src="${profileData.profilePicture}" alt="Profile Picture" class="profile-pic">
`;

// Populating the navigation dynamically
const navItems = ["About", "Skills", "Projects", "Education", "Certifications"];
const navSection = document.getElementById("nav-section");

let navHTML = "<ul>";
navItems.forEach(item => {
    const lowerCaseItem = item.toLowerCase();
    navHTML += `<li><a href="#${lowerCaseItem}">${item}</a></li>`;
});
navHTML += `
    </ul>
    <div class="language-select">
        <button onclick="translatePage('en')">English</button>
        <button onclick="translatePage('fr')">Français</button>
        <button onclick="translatePage('ar')">العربية</button>
        <button onclick="translatePage('ur')">اردو</button>
    </div>
`;
navSection.innerHTML = navHTML;

// Populating the About section
document.getElementById("about-description").innerText = profileData.aboutMe;

// Populating the Skills section dynamically
const skillsSection = document.getElementById("skills-section");

let hardSkillsHTML = "<h3>Hard Skills</h3><ul>";
profileData.skills.hardSkills.forEach(skill => {
    hardSkillsHTML += `
        <li>
            <div class="skill-bar">
                <span>${skill.name}</span>
                <div class="progress">
                    <div class="progress-bar" style="width: ${skill.level};"></div>
                </div>
            </div>
        </li>
    `;
});
hardSkillsHTML += "</ul>";

let softSkillsHTML = "<h3>Soft Skills</h3><ul>";
profileData.skills.softSkills.forEach(skill => {
    softSkillsHTML += `
        <li>
            <div class="skill-bar">
                <span>${skill.name}</span>
                <div class="progress">
                    <div class="progress-bar" style="width: ${skill.level};"></div>
                </div>
            </div>
        </li>
    `;
});
softSkillsHTML += "</ul>";

skillsSection.innerHTML = hardSkillsHTML + softSkillsHTML;

// Populating the Projects section dynamically
const projectsList = document.getElementById("projects-list");
profileData.projects.forEach(project => {
    projectsList.innerHTML += `
        <li>
            <strong>${project.title}</strong> 
            <span>Date: ${project.date}</span>
            <p>Description: ${project.description}</p>
        </li>
    `;
});

// Populating the Education section dynamically
const educationList = document.getElementById("education-list");
profileData.education.forEach(edu => {
    educationList.innerHTML += `
        <li>
            <strong>${edu.degree}</strong>
            <span>Institution: ${edu.institution}, Year: ${edu.graduationYear || edu.year}</span>
        </li>
    `;
});

// Populating the Certifications & Awards section dynamically
const awardsList = document.getElementById("awards-list");
profileData.awards.forEach(award => {
    awardsList.innerHTML += `
        <li>
            <strong>${award.name}</strong> <span>(${award.year})</span>
        </li>
    `;
});
