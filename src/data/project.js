export const projectsData = [
  {
    id: "tracefinder",
    title: "TraceFinder",
    tagline: "AI-Powered Scanner Identification System",

    github: "https://github.com/AI-TraceFinder/AI-TraceFinder-Fathimath-Rizwana-.git",

    tech: [
      "Python",
      "OpenCV",
      "TensorFlow",
      "Scikit-Learn",
      "Streamlit",
    ],

    overview:
      "TraceFinder is an AI-powered forensic analysis tool that identifies the source scanner used to create a scanned document. The system analyzes scanner-specific patterns hidden within images and predicts the originating scanner using machine learning techniques.",

    contributions: [
      "Developed an AI-powered scanner identification system",
      "Built image processing and machine learning pipelines",
      "Created a Streamlit-based web interface for real-time predictions",
      "Implemented confidence scoring and result tracking",
    ],

    screenshots: [
      {
        image: "/projects/tracefinder1.jpeg",
        title: "Scanner Analysis Interface",
        description:
          "Users can upload a scanned document and instantly analyze its source scanner.",
      },

      {
        image: "/projects/tracefinder2.jpeg",
        title: "Prediction Results",
        description:
          "Displays the predicted scanner model and confidence score.",
      },

      {
        image: "/projects/tracefinder3.jpeg",
        title: "Analysis History Dashboard",
        description:
          "Stores previous analyses and allows result tracking.",
      },
    ],
  },

  {
    id: "safespace",
    title: "SafeSpace",
    tagline: "Anonymous Campus Safety & Support Platform",

    tech: ["Flutter", "Node.js", "MySQL", "NLP", "Machine Learning"],

    overview:
      "SafeSpace is an anonymous reporting platform designed to improve campus safety by enabling students to report incidents and seek counselling support without revealing their identity. The platform combines secure communication, role-based access, NLP-based report analysis, and campus analytics to help institutions respond to safety concerns more effectively.",

    sections: [
      {
        title: "Student Module",
        screenshots: [
          {
            image: "/cover/safespace.jpeg",
            title: "Student Module",
          },
        ],
        bullets: [
          "Report incidents anonymously",
          "Attach media and supporting evidence",
          "Request counselling and track report status",
        ],
      },
      {
        title: "Administration Portal",
        screenshots: [
          {
            image: "/cover/safespace.jpeg",
            title: "Administration Portal",
          },
        ],
        bullets: [
          "Access reports categorized by NLP-based analysis",
          "Manage incident cases and counselling approvals",
          "Conduct anonymous follow-ups while maintaining confidentiality",
        ],
      },
      {
        title: "Counselling Support",
        screenshots: [
          {
            image: "/cover/safespace.jpeg",
            title: "Counselling Support",
          },
        ],
        bullets: [
          "Access and manage assigned counselling cases",
          "Communicate anonymously with students through secure messaging",
          "Provide confidential support throughout the resolution process",
        ],
      },
      {
        title: "Campus Heatmap Analytics",
        screenshots: [
          {
            image: "/cover/safespace.jpeg",
            title: "Campus Heatmap Analytics",
          },
        ],
        bullets: [
          "Visualize incident-prone locations across the campus",
          "Identify reporting trends and recurring safety concerns",
          "Support informed decision-making through data-driven insights",
        ],
      },
    ],
  },
];
