export const projectsData = [
  {
    id: "tracefinder",
    title: "TraceFinder",
    tagline: "AI-Powered Scanner Identification System",

    github: "https://github.com/YOUR_USERNAME/tracefinder",

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
];