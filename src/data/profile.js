// ============================================================
//  EDIT THIS FILE to change what appears on your site.
//  Put your photo and resume inside the /public folder.
// ============================================================

// Turns "profile.svg" into the right path on GitHub Pages too.
export const asset = (file) => import.meta.env.BASE_URL + file;

export const profile = {
  name: "Pryansu Gupta",
  role: "Software Engineer",
  tagline: "I build simple, reliable software and write about what I learn.",
  photo: asset("profile.png"), // replace public/profile.svg, or change this filename

  about: [
    "I do write code sometimes for fun and most of the times to earn a living. Knowing about everything that affect my life in any way is my curiosity. Living a ranch life is my dream.",
    "Scroll down to know where did I spent my life till now."
  ],

  contact: {
    email: "pryanshug88@gmail.com",
    phone: "+91-8795667730",
    location: "Basti, India",
    links: [
      { label: "GitHub", url: "https://github.com/pgit80" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/pgit80" },
      { label: "Medium", url: "https://medium.com/@pryanshug88" },
    ],
  },
};

export const experience = [
  {
    role: "Advance App Engineering Associate",
    company: ">",
    period: "...",
    points: [
      "Java Full Stack- Spring Boot, Microservices, Devops and other ecosystem tools.",
      
    ],
  },
  {
    role: "Member of Teaching Staff",
    company: "W3grads.com",
    period: "Sep 2025 – Apr 2026",
    points: ["Provided training to BCA and B.Tech students while deployed in GLA University Mathura.",
      "Took 60+ hours class on Programming fundamentals in Java, C/C++",
      "Gave 20+ hours class on Computer fundamentals, command line, Linux Terminal for CS major newcomers.",
    ],
  },
  {
    role: "IT Intern- WBL Program",
    company: "Electronics Regional Testing Laboratory, North (Under MEITy)",
    period: "Feb 2025 – Aug 2025",
    points: ["Interned in Govt. of India work based learning program during my final sem of graduation.",
      "My Learning and work there was primiraly focused on software secutiry and usability guidelines.",
      "Learned and used guidelines like GIGW, OWASP, CVN.",
      "Also provided Network, OS, Software and Hardware support to ensure seamless day to day activity using office computers."
    ],
  },
  
];

export const education = [
  {
    degree: "B.Tech in Computer Science",
    school: "Dr. APJ Abdul Kalam Technical University, Lucknow",
    period: "2021 – 2025",
    details: "CGPA: 8.0 / 10",
  },
  {
    degree: "Class XII",
    school: "Kisan Inter College, Parashurampur, Basti, 272130",
    period: "2018 – 2020",
    details: "Percentage: 78.6% (393/500)",
  },
  {
    degree: "Class X",
    school: "PGIC, Maskanwa, Gonda, 271305",
    period: "2016 – 2018",
    details: "Percentage: 88% (528/600)",
  },
];

// Links to files on Google Drive. In Drive: right click the file →
// Share → "Anyone with the link can view" → Copy link.
export const documents = [
  {
    label: "Degree marksheets",
    note: "Semester 1 to 8",
    url: "https://drive.google.com/file/d/1JWPJEp-iilIqeac2B82EDz5vLOaoHIv5/view?usp=sharing",
  },
  {
    label: "Degree Certificate",
    note: "Final Degree Certificate",
    url: "https://drive.google.com/file/d/1IEbvocVOFXTfOauwu2NoOT-Jg7R-ngyW/view?usp=sharing",
  },
  {
    label: "WBL Internship Certificate",
    url: "https://drive.google.com/file/d/1cowAUF-l4vk3xqWwMXhGAJSIUPKHolBy/view?usp=sharing",
  }
];

export const resume = {
  // Put your PDF at public/resume.pdf, or paste a Google Drive link here.
  url: asset("Pryanshu_resume.pdf"),
  // Show the PDF inside the page. Set to false to show only the buttons.
  embed: true,
};
