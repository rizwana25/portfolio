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
            image: "/projects/safespace1.jpeg",
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
            image: "/projects/safespace2.jpeg",
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
            image: "/projects/safespace3.jpeg",
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
            image: "/projects/safespace4.jpeg",
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
  {
  id: "outlinx",
  type: "outlinx",

  title: "Outlinx",

  tagline: "Portfolio Website for a Graphic Design Business",

  tech: [
    "HTML",
    "Tailwind CSS",
    "JavaScript"
  ],

  overview:
    "Outlinx is a portfolio website developed for a graphic design business to showcase services, creative work, and brand identity through a modern and visually engaging web experience.",

  sections: [
    {
      title: "Landing Page",
      screenshots: [
        {
          image: "/projects/out1.jpeg",
          title: "Landing Page",
        },
      ],
      bullets: [
        "Introduces the brand through a clean and modern interface",
        "Highlights creative services and business identity",
        "Creates a strong first impression for potential clients",
      ],
    },

    {
      title: "Portfolio Showcase",
      screenshots: [
        {
          image: "/projects/out2.jpeg",
          title: "Portfolio Showcase",
        },
      ],
      bullets: [
        "Displays completed design projects in a structured layout",
        "Highlights visual storytelling and creative work",
        "Allows visitors to explore the designer's portfolio",
      ],
    },

    {
      title: "Services Section",
      screenshots: [
        {
          image: "/projects/out3.jpeg",
          title: "Services Section",
        },
      ],
      bullets: [
        "Presents available design services clearly",
        "Organizes offerings for better user understanding",
        "Supports potential client inquiries",
      ],
    },

    {
      title: "About Section",
      screenshots: [
        {
          image: "/projects/out4.jpeg",
          title: "About Section",
        },
      ],
      bullets: [
        "Communicates the brand story and mission",
        "Builds trust through a personal introduction",
        "Strengthens the business identity",
      ],
    },

    {
      title: "Contact Section",
      screenshots: [
        {
          image: "/projects/out5.jpeg",
          title: "Contact Section",
        },
      ],
      bullets: [
        "Provides multiple ways for clients to connect",
        "Encourages inquiries and project discussions",
        "Creates a smooth communication experience",
      ],
    },
  ],
}
];
