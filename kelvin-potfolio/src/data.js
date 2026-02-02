// src/data.js

export const personalInfo = {
  name: "Kelvin",
  surname: "Kariuki",
  role: "IT Student & Developer",
  bio: "BSc. IT undergraduate at the University of Embu. I build secure, scalable applications using Python, Java, and Modern Web Tech. Currently focused on Mobile Security, Data Visualization, and End-to-End Encryption.",
  email: "your.email@example.com", // Update this if you have a real email
  
  // YOUR REAL SOCIAL LINKS
  github: "https://github.com/NIVLEKI",
  linkedin: "https://linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=kelvin-kariuki-9644a5333",
  whatsapp: "https://wa.me/254717328354?text=Hello%2C%20This%20is%20Kelvin%20Kariuki",
  instagram: "https://instagram.com/Niv.l3k",
  discord: "https://discord.com/users/1333756609125679144"
};

export const skills = [
  { name: "Python", icon: "fab fa-python", level: "90%" },
  { name: "Django", icon: "fas fa-layer-group", level: "85%" }, 
  { name: "JavaScript", icon: "fab fa-js", level: "80%" },
  { name: "Flutter/Dart", icon: "fab fa-google", level: "75%" },
  { name: "Cybersecurity", icon: "fas fa-shield-alt", level: "70%" },
  { name: "Java", icon: "fab fa-java", level: "80%" },
  { name: "Data Viz", icon: "fas fa-chart-line", level: "75%" },
  { name: "MySQL/SQL", icon: "fas fa-database", level: "80%" },
];

export const projects = [
  {
    title: "Secure Mobile Vault (NivlockX)", // Renamed from Secure Mobile Vault
    desc: "A secure file storage and sharing application implementing Hybrid End-to-End Encryption (E2EE) using RSA/AES protocols for maximum data privacy.",
    icon: "fas fa-user-secret", 
    tech: ["Flutter", "Dart", "AES/RSA", "Android Studio"],
    github: "https://github.com/NIVLEKI", 
    demo: "", 
    apk: "/NivlockX.apk" // <--- The APK Download Link
  },
  {
    title: "WaterSafe Platform",
    desc: "A community-driven water quality monitoring system. Crowdsources real-time data on pH, turbidity, and chlorine levels with interactive Chart.js visualizations.",
    icon: "fas fa-hand-holding-water", 
    tech: ["Django", "Python", "Chart.js", "Bootstrap 5"],
    github: "https://github.com/NIVLEKI",
    demo: "#" 
  },
  {
    title: "Patient Management Sys.",
    desc: "A comprehensive digital health record system. Features patient tracking, appointment scheduling, and medical history management with a secure Python backend.",
    icon: "fas fa-hospital-user",
    tech: ["JavaScript", "Python", "CSS"],
    github: "https://github.com/NIVLEKI",
    demo: "" 
  },
  {
    title: "TenantFlex Housing",
    desc: "A comprehensive housing management app for landlords and tenants featuring automated payment tracking and M-Pesa integration.",
    icon: "fas fa-building",
    tech: ["Java", "Firebase", "MySQL", "M-Pesa API"],
    github: "https://github.com/NIVLEKI",
    demo: "" 
  },
];