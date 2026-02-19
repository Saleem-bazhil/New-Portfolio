const projects = [
  {
  id: 1,
  slug: "bazhil-civil-resolve",
  title: "Bazhil Civil Resolve",
  description:
    "Production-ready citizen-to-officer issue resolution platform with mobile app, admin dashboard, and SLA-based workflow management.",
  tagline:
    "End-to-end civic issue tracking system with mobile + admin ecosystem.",
  image: "/images/civil-resolve.png",
  category: "Full Stack",
  featured: true,
  techStack: [
    "React Native",
    "Next.js",
    "NestJS",
    "PostgreSQL",
    "JWT",
    "Linux VPS",
    "Nginx",
    "aaPanel"
  ],
  highlights: [
    "Mobile app published on Google Play Console",
    "Role-Based Access Control (Citizen, Officer, Admin)",
    "SLA-driven issue lifecycle management",
    "NestJS modular backend architecture",
    "Deployed on Linux Cloud VPS using aaPanel"
  ],
  liveUrl:
    "https://play.google.com/store/apps/details?id=com.bazhil.civilresolve",
  githubUrl: "https://github.com/Saleem-bazhil/Civil_Resolve_backend",
  repositories: {
    mobile:
      "https://github.com/Saleem-bazhil/Civil_Resolve_frontend",
    backend:
      "https://github.com/Saleem-bazhil/Civil_Resolve_backend",
    admin:
      "https://github.com/Saleem-bazhil/Civil_Resolve_admin"
  },
  role: "Full Stack Developer",
  duration: "3 Months",
  type: "Production Application",

  longDescription:
    "Bazhil Civil Resolve is a production-grade civic issue resolution platform that connects citizens with government officers through a structured digital workflow. The system includes a React Native mobile app for citizens and officers, a Next.js admin dashboard for monitoring and control, and a NestJS backend deployed on a Linux cloud VPS.",

  problemStatement: {
    problem:
      "Citizens lacked a transparent and structured platform to report and track public grievances effectively.",
    targetAudience:
      "Citizens, municipal officers, and administrative departments.",
    marketGap:
      "Existing systems lacked mobile accessibility, real-time tracking, and structured SLA-based resolution workflows.",
  },

  solutionApproach: {
    frontend:
      "Developed a React Native mobile application for citizens and officers with optimized UI for issue creation, tracking, and status updates. Built an admin dashboard using Next.js for monitoring issues, users, and system analytics.",

    backend:
      "Designed a modular NestJS backend with clean architecture principles. Implemented role-based authentication, issue lifecycle services, and RESTful APIs for mobile and admin clients.",

    apiFlow:
      "Mobile/Admin Client → REST API (NestJS) → PostgreSQL Database → SLA Processing & Status Updates → Response back to client.",

    authentication:
      "JWT-based authentication with Role-Based Access Control (RBAC) middleware. Separate access layers for Citizen, Officer, and Admin roles.",
  },

  features: [
    {
      icon: "📱",
      title: "Mobile Application",
      description:
        "React Native app published on Google Play Store for real-world usage.",
    },
    {
      icon: "🔐",
      title: "Role-Based Access Control",
      description:
        "Secure multi-role authentication system with middleware-based authorization.",
    },
    {
      icon: "⏱️",
      title: "SLA Workflow Engine",
      description:
        "Structured issue lifecycle with status tracking and escalation logic.",
    },
    {
      icon: "📊",
      title: "Admin Dashboard",
      description:
        "Next.js admin panel for monitoring complaints, users, and system activity.",
    },
    {
      icon: "☁️",
      title: "Cloud Deployment",
      description:
        "Backend deployed on Linux Cloud VPS using aaPanel with Nginx and SSL configuration.",
    }
  ],

  technicalDetails: {
    database:
      "PostgreSQL relational database with normalized schema for users, roles, issues, and status tracking.",

    apiEndpoints:
      "25+ RESTful endpoints covering authentication, issue CRUD, role management, SLA updates, and admin analytics.",

    security:
      "JWT authentication, password hashing, role middleware guards, input validation, and rate limiting.",

    performance:
      "Optimized database indexing, Nginx reverse proxy configuration, and production-grade VPS setup for stable uptime.",

    deployment:
      "Linux Cloud VPS configured via aaPanel, Nginx reverse proxy, SSL certificates, and environment-based configuration.",

    challenges:
      "Designing a scalable multi-role workflow while ensuring strict access control and maintaining clean separation between mobile and admin clients.",
  }
},
   {
  id: 2,
  slug: "fullstack-ecommerce-react-django",
  title: "Full Stack E-Commerce Platform",
  description:
    "Production-ready e-commerce platform with Razorpay integration, admin dashboard, and secure REST API architecture.",
  tagline:
    "Complete online store with secure payments and full admin control.",
  image: "/images/ecommerce.png",
  category: "Full Stack",
  featured: true,
  techStack: [
    "React",
    "Django",
    "Django REST Framework",
    "PostgreSQL",
    "Razorpay",
    "JWT",
    "Tailwind CSS",
    "vercel",
    "Linux VPS"
  ],
  highlights: [
    "Live production deployment on custom domain",
    "Razorpay payment gateway integration with backend verification",
    "JWT-based authentication with protected routes",
    "Admin dashboard for product and order management",
    "RESTful API architecture with 20+ endpoints"
  ],
  liveUrl: "https://ecommerce.bazhilgroups.in",
  githubUrl: "https://github.com/Saleem-bazhil/Ecommerce_backend",
  repositories: {
    frontend: "https://github.com/Saleem-bazhil/Ecommerce_frontend",
    backend: "https://github.com/Saleem-bazhil/Ecommerce_backend"
  },
  role: "Full Stack Developer",
  duration: "3 Months",
  type: "Production Application",

  longDescription:
    "A fully functional e-commerce platform built using React and Django REST Framework. The system includes product management, shopping cart functionality, Razorpay payment integration, order lifecycle management, and an admin dashboard. Designed with clean REST architecture and deployed on a production domain.",

  problemStatement: {
    problem:
      "Small businesses need a customizable and scalable e-commerce solution without relying on third-party platforms charging recurring commissions.",
    targetAudience:
      "Startups and small businesses looking for full control over their online store.",
    marketGap:
      "Existing SaaS platforms restrict backend customization and charge transaction fees. A custom-built system ensures flexibility and ownership.",
  },

  solutionApproach: {
    frontend:
      "Developed a responsive React single-page application with reusable components for product listings, cart management, checkout, and authentication flows.",
    backend:
      "Designed a modular Django REST Framework backend handling authentication, product CRUD, order processing, and Razorpay payment verification.",
    apiFlow:
      "React Client → DRF API → Razorpay Order Creation → Payment Verification → PostgreSQL Order Storage → Response to Client.",
    authentication:
      "JWT-based authentication with access and refresh tokens. Protected admin routes using permission classes and middleware.",
  },

  features: [
    {
      icon: "💳",
      title: "Secure Razorpay Payments",
      description:
        "Integrated Razorpay (Test Mode) with server-side signature verification for secure transaction handling.",
    },
    {
      icon: "🛒",
      title: "Dynamic Shopping Cart",
      description:
        "Cart system with quantity updates, price calculations, and checkout workflow.",
    },
    {
      icon: "📦",
      title: "Order Management",
      description:
        "Complete order lifecycle tracking with PostgreSQL storage.",
    },
    {
      icon: "🛠",
      title: "Admin Dashboard",
      description:
        "Admin panel for managing products, users, inventory, and orders.",
    },
    {
      icon: "🚀",
      title: "Production Deployment",
      description:
        "Hosted on Linux VPS with custom domain configuration and production-ready setup.",
    }
  ],

  technicalDetails: {
    database:
      "PostgreSQL relational schema with normalized tables for users, products, carts, and orders.",
    apiEndpoints:
      "20+ RESTful endpoints covering authentication, product management, cart operations, Razorpay order creation, and payment verification.",
    security:
      "JWT authentication, Razorpay signature validation, input validation, permission-based access control.",
    performance:
      "Optimized database queries, paginated APIs, and efficient React rendering to reduce unnecessary re-renders.",
    challenges:
      "Implemented secure server-side Razorpay signature verification to ensure payments are validated before marking orders successful.",
  }
},
 {
    id: 3,
    slug: "skiez-pdf-books",
    title: "Skiez PDF Books Platform",
    description:
        "Digital PDF selling platform with real Razorpay payment integration and secure file access system.",
    tagline:
        "Secure PDF e-commerce platform with real Razorpay payments and protected downloads.",
    image: "/images/pdfguide.png", 
    category: "Full Stack",
    featured: true,
    techStack: ["React", "Node.js", "Express", "MongoDB", "Razorpay", "JWT" ,"Admin js"],
    highlights: [
        "Real Razorpay live payment integration",
        "Secure server-side payment signature verification",
        "Protected PDF View after successful purchase",
        "Admin dashboard for product & order management",
        "Production deployment with SSL and domain configuration",
    ],
    liveUrl: "https://www.skiezpdfbooks.in",
    githubUrl: "https://github.com/Saleem-bazhil/Course_new_version_frontend",
    role: "Full Stack Developer",
    duration: "2 Months",
    longDescription:
        "Skiez PDF Books is a secure digital e-commerce platform built for selling premium PDF resources online. The system includes real Razorpay payment integration with backend signature verification, protected file access, and a complete admin panel for managing products and orders. Designed for production deployment with performance optimization and secure digital delivery.",

    problemStatement: {
        problem:
            "Content creators needed a secure way to sell digital PDF products without exposing files publicly.",
        targetAudience:
            "Students, digital content creators, and users purchasing educational PDF resources.",
        marketGap:
            "Many digital platforms expose downloadable files directly without secure payment verification and access control.",
    },

    solutionApproach: {
        frontend:
            "React-based responsive UI with secure checkout flow and protected download access after purchase confirmation.",
        backend:
            "Node.js + Express backend handling order creation, Razorpay integration, and server-side signature verification.",
        apiFlow:
            "Client → Create Order API → Razorpay Checkout → Payment Success → Backend Signature Verification → Store Purchase → Enable Secure View.",
        authentication:
            "JWT-based authentication with protected routes and purchase validation before file download access.",
    },

    features: [
        {
            icon: "💳",
            title: "Real Razorpay Integration",
            description:
                "Live Razorpay payment gateway with secure order creation and signature verification.",
        },
        {
            icon: "🔐",
            title: "Secure File Access",
            description:
                "PDF downloads are protected and accessible only after successful payment verification.",
        },
        {
            icon: "📊",
            title: "Admin Panel",
            description:
                "Admin dashboard to manage products, users, and payment records.",
        },
        {
            icon: "⚡",
            title: "Optimized Performance",
            description:
                "Efficient API design, pagination, and secure middleware-based access control.",
        },
    ],

    technicalDetails: {
        database:
            "MongoDB relational database with normalized schema for users, products, orders, and payment records.",
        apiEndpoints:
            "20+ RESTful endpoints covering authentication, product CRUD, order creation, payment verification, and download access.",
        security:
            "Server-side Razorpay signature validation, JWT authentication, password hashing, input validation, and protected file routes.",
        performance:
            "Optimized queries, secure middleware architecture, and production deployment with SSL configuration.",
        challenges:
            "Implementing secure digital file delivery while preventing unauthorized access and ensuring proper Razorpay signature validation.",
    },
},
 {
    id: 4,
    slug: "bazhil-auto-crud",
    title: "bazhil-auto-crud (NPM Library)",
    description:
        "Open-source NPM package that automatically generates CRUD APIs for Mongoose models in Express applications.",
    tagline:
        "Eliminate repetitive CRUD boilerplate with dynamic API generation.",
    image: "/images/npm.png",
    category: "Backend",
    featured: true,
    techStack: ["Node.js", "Express.js", "MongoDB", "Mongoose", "NPM"],
    liveUrl: "https://www.npmjs.com/package/bazhil-auto-crud",
    githubUrl: "https://github.com/Saleem-bazhil/auto-crud",
    role: "Backend Developer",
    duration: "1 Month",

    highlights: [
        "Published and maintained NPM package",
        "Dynamic CRUD route generation for any Mongoose model",
        "Plug-and-play Express middleware architecture",
        "Open-source with structured documentation"
    ],

    longDescription:
        "bazhil-auto-crud is a reusable backend utility library built to eliminate repetitive CRUD boilerplate in Express.js applications. It dynamically binds RESTful endpoints to provided Mongoose models, significantly reducing development time while maintaining flexibility and clean architecture.",

    problemStatement: {
        problem:
            "Developers repeatedly write similar CRUD logic for every database model, increasing code duplication and slowing backend development.",
        targetAudience:
            "Node.js and Express developers building REST APIs with MongoDB.",
        marketGap:
            "Most scaffolding tools are either too heavy or tightly coupled to specific frameworks. A lightweight middleware-based solution was needed."
    },

    solutionApproach: {
        frontend:
            "Backend-focused package designed for API layer integration.",
        backend:
            "Created a dynamic Express middleware that auto-generates CRUD routes for registered Mongoose models.",
        apiFlow:
            "Mongoose Model → bazhil-auto-crud Middleware → Auto-generated REST Endpoints → MongoDB Database.",
        authentication:
            "Designed to integrate seamlessly with JWT authentication and custom middleware chains."
    },

    features: [
        {
            icon: "⚡",
            title: "Automatic CRUD APIs",
            description:
                "Generates Create, Read, Update, and Delete routes dynamically for any Mongoose model."
        },
        {
            icon: "🧩",
            title: "Plug & Play",
            description:
                "Integrates easily into existing Express applications with minimal configuration."
        },
        {
            icon: "📦",
            title: "Reusable Architecture",
            description:
                "Clean modular structure designed for scalability and maintainability."
        },
        {
            icon: "🔐",
            title: "Middleware Compatible",
            description:
                "Supports authentication, validation, and custom middleware layering."
        }
    ],

    technicalDetails: {
        database:
            "MongoDB with dynamic Mongoose schema binding.",
        apiEndpoints:
            "Auto-generates RESTful routes (GET, POST, PUT, DELETE) for registered models.",
        security:
            "Works with JWT authentication, request validation, and rate limiting middleware.",
        performance:
            "Lightweight implementation with minimal runtime overhead.",
        challenges:
            "Designing a dynamic route generator while preserving flexibility, scalability, and clean separation of concerns."
    }
},
{
    id: 5,
    slug: "edutech-ai-platform",
    title: "EduTech AI Learning Platform",
    description:
        "AI-powered EdTech platform integrating Grok API with FastAPI backend for intelligent learning assistance.",
    tagline:
        "Smart AI-powered education platform with Grok integration and secure FastAPI backend.",
    image: "/images/edutechai.png",
    category: "AI",
    featured: true,
    techStack: [
        "React",
        "FastAPI",
        "Python",
        "Grok API",
        "JWT",
        "PostgreSQL",
        "Linux VPS",
        "Nginx"
    ],
    highlights: [
        "Grok API integration for AI-powered responses",
        "FastAPI backend with async processing",
        "Secure JWT authentication system",
        "Production deployment on Linux VPS",
        "Structured AI prompt handling system"
    ],
    liveUrl: "https://edutech.bazhilgroups.in",
    githubUrl: "https://github.com/Saleem-bazhil/Edutech_Backend",
    role: "Full Stack AI Developer",
    duration: "2 Months",

    longDescription:
        "EduTech is an AI-powered education platform built to provide intelligent academic assistance using Grok API integration. The system leverages FastAPI for high-performance backend processing and React for a responsive frontend interface. Designed as a scalable SaaS architecture, the platform enables secure AI-driven interactions for students and learners.",

    problemStatement: {
        problem:
            "Students lack affordable and intelligent AI-powered academic support platforms tailored to structured learning.",
        targetAudience:
            "School and college students seeking AI-based academic assistance and concept clarification.",
        marketGap:
            "Most AI tools are generic chat systems without structured academic workflow or secure backend architecture."
    },

    solutionApproach: {
        frontend:
            "React-based dynamic UI optimized for interactive AI conversations and seamless user experience.",
        backend:
            "FastAPI backend with asynchronous request handling for Grok API calls, structured service layers, and modular architecture.",
        apiFlow:
            "Client → FastAPI → Grok API → Processed AI Response → Structured JSON Output → Frontend Display.",
        authentication:
            "JWT-based secure authentication with token validation middleware and protected AI endpoints."
    },

    features: [
        {
            icon: "🤖",
            title: "Grok AI Integration",
            description:
                "Integrated Grok API for intelligent academic assistance and AI-generated explanations."
        },
        {
            icon: "⚡",
            title: "High-Performance Backend",
            description:
                "FastAPI asynchronous processing for low-latency AI response handling."
        },
        {
            icon: "🔐",
            title: "Secure Authentication",
            description:
                "JWT-based authentication with protected routes and secure API communication."
        },
        {
            icon: "🌐",
            title: "Cloud Deployment",
            description:
                "Deployed on Linux VPS with Nginx reverse proxy and SSL configuration."
        }
    ],

    technicalDetails: {
        database:
            "PostgreSQL relational database for user data and interaction logs.",
        apiEndpoints:
            "15+ RESTful endpoints covering authentication, AI queries, user management, and analytics.",
        security:
            "JWT authentication, environment-based API key protection, input validation, and rate limiting.",
        performance:
            "Async FastAPI architecture with optimized API response handling and structured JSON formatting.",
        challenges:
            "Securely managing Grok API keys and handling AI response latency while maintaining scalable backend architecture."
    }
},
{
    id: 6,
    slug: "ai-smart-image-gallery",
    title: "AI-Powered Smart Image Gallery",
    description:
        "Full-stack image gallery application integrated with AI-based face detection using OpenCV Haar Cascade model.",
    tagline:
        "Secure image gallery with automatic AI face detection.",
    image: "/images/ai-gallery.png",
    category: "AI & Web Development",
    featured: false,
    techStack: [
        "React",
        "Django",
        "Django REST Framework",
        "PostgreSQL",
        "JWT",
        "Python",
        "OpenCV",
        "Haar Cascade"
    ],
    liveUrl: "https://gallery.bazhilgroups.in",
    githubUrl: "https://github.com/Saleem-bazhil/Gallery_backend",
    role: "Full Stack & AI Developer",
    duration: "3 Months",
    longDescription:
        "An advanced full-stack image gallery system integrated with AI-powered face detection. Users can upload images securely, and the system automatically detects faces using OpenCV's Haar Cascade model. Detected faces are highlighted and stored as metadata for future filtering and analysis.",
    solutionApproach: {
        frontend:
            "React-based responsive gallery interface with image upload preview and dynamic face bounding box rendering.",
        backend:
            "Django REST APIs handling authentication, image uploads, and AI processing pipeline integration.",
        apiFlow:
            "Image uploaded → Backend processes image using OpenCV → Detects faces → Stores metadata in PostgreSQL → Returns processed image with face coordinates.",
        authentication:
            "JWT-based authentication with role-based access control for users and admin.",
    },
    features: [
        {
            icon: "🖼",
            title: "Secure Image Upload",
            description:
                "Users can securely upload and manage images with JWT-protected routes.",
        },
        {
            icon: "🤖",
            title: "AI Face Detection",
            description:
                "Automatically detects human faces using Haar Cascade classifier.",
        },
        {
            icon: "📦",
            title: "Face Metadata Storage",
            description:
                "Stores detected face count and coordinates in database for analysis.",
        },
        {
            icon: "📱",
            title: "Responsive UI",
            description:
                "Modern grid layout with real-time upload preview and AI detection feedback.",
        },
    ],
    technicalDetails: {
        database:
            "PostgreSQL for user data, image metadata, and detected face coordinates.",
        apiEndpoints:
            "RESTful APIs for authentication, image upload, gallery listing, and AI detection results.",
        security:
            "JWT authentication, protected APIs, input validation, and secure media storage.",
        performance:
            "Optimized image preprocessing (grayscale conversion) for faster detection. Efficient API response handling.",
        challenges:
            "Managing large image processing without blocking API response and improving detection accuracy under low-light conditions.",
    },
},
{
    id: 7,
    slug: "digital-ads-sales-detection",
    title: "Digital Ads Sales Prediction System",
    description:
        "Machine learning-based sales prediction system analyzing digital advertisement performance using data-driven insights.",
    tagline:
        "AI-powered sales prediction using machine learning.",
    image: "/images/sales-detection.png",
    category: "AI & Machine Learning",
    featured: false,
    techStack: [
        "Python",
        "Streamlit",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "Matplotlib"
    ],
    liveUrl: "https://digital-ads-sales.streamlit.app",
    githubUrl: "https://github.com/Saleem-bazhil/Sales_Detection",
    role: "Machine Learning Developer",
    duration: "1 Month",
    longDescription:
        "A machine learning-based application that predicts sales performance based on digital advertisement data. The system analyzes ad spend across different platforms and provides data-driven insights using regression models.",
    solutionApproach: {
        frontend:
            "Streamlit-based interactive dashboard with real-time prediction input fields and visualizations.",
        backend:
            "Machine learning regression model built using Scikit-learn for sales prediction.",
        apiFlow:
            "User inputs advertisement spend → Model processes data → Predicts expected sales output → Displays results with visual analytics.",
        authentication:
            "Standalone ML web app deployed on Streamlit without authentication.",
    },
    features: [
        {
            icon: "📊",
            title: "Sales Prediction",
            description:
                "Predicts sales based on digital advertisement spending.",
        },
        {
            icon: "📈",
            title: "Data Visualization",
            description:
                "Interactive charts for ad performance analysis.",
        },
        {
            icon: "⚡",
            title: "Real-Time Results",
            description:
                "Instant prediction output with dynamic input controls.",
        },
    ],
    technicalDetails: {
        database:
            "Dataset processed using Pandas DataFrames (no external database required).",
        apiEndpoints:
            "No REST API – deployed as an interactive Streamlit web application.",
        security:
            "Runs as a standalone ML dashboard application.",
        performance:
            "Lightweight regression model optimized for fast real-time predictions.",
        challenges:
            "Selecting appropriate regression model and tuning parameters for accurate sales prediction.",
    },
},
  {
    id: 8,
    slug: "web-development-learning-platform",
    title: "Web Development Learning Platform",
    description:
        "Full-stack e-learning platform that organizes programming tutorials into structured courses with authentication and protected access.",
    tagline:
        "Structured online learning platform for web development courses.",
    image: "/images/web-course-platform.png",
    category: "Full Stack Web Development",
    featured: false,
    techStack: [
        "Python",
        "Django",
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap"
    ],
    liveUrl: "https://web-development-course-pdxz.onrender.com",
    githubUrl: "https://github.com/Saleem-bazhil/Web-Development-Course",
    role: "Full Stack Developer",
    duration: "2 Months",
    longDescription:
        "A full-stack web application designed to organize and deliver structured programming tutorials. The platform includes user authentication, categorized course modules, embedded video lessons, and protected routes to enhance learning experience.",
    solutionApproach: {
        frontend:
            "Responsive UI built using HTML, CSS, Bootstrap, and JavaScript for structured course navigation.",
        backend:
            "Django-based backend handling authentication, routing, and content management.",
        apiFlow:
            "User login → Access protected dashboard → Browse categorized courses → View structured video lessons.",
        authentication:
            "User registration and login system with protected routes and session management.",
    },
    features: [
        {
            icon: "🔐",
            title: "Authentication System",
            description:
                "Secure login and signup functionality with protected access.",
        },
        {
            icon: "🎓",
            title: "Course Organization",
            description:
                "Categorized programming courses (HTML, CSS, JS, React, Python).",
        },
        {
            icon: "📺",
            title: "Embedded Video Lessons",
            description:
                "Structured video content organized in learning sequence.",
        },
        {
            icon: "📱",
            title: "Responsive Design",
            description:
                "Modern UI layout optimized for desktop and mobile devices.",
        },
    ],
    technicalDetails: {
        database:
            "SQLite (or configured DB) for managing users and course data.",
        apiEndpoints:
            "Django views handling authentication, course routing, and protected content.",
        security:
            "Session-based authentication and route protection.",
        performance:
            "Lightweight server-side rendering with optimized static asset handling.",
        challenges:
            "Designing structured course flow and managing protected content navigation.",
    },
},
{
    id: 9,
    slug: "ai-human-text-detector",
    title: "AI vs Human Text Detector",
    description:
        "Natural Language Processing-based application that detects whether a given text is AI-generated or written by a human.",
    tagline:
        "NLP-powered text classification to detect AI-generated content.",
    image: "/images/ai-human-detector.png",
    category: "AI & Natural Language Processing",
    featured: false,
    techStack: [
        "Python",
        "Streamlit",
        "Scikit-learn",
        "NLP",
        "Pandas"
    ],
    liveUrl: "https://ai-human-text-detector.streamlit.app",
    githubUrl: "https://github.com/Saleem-bazhil/AI-vs-Human-Text-Detector",
    role: "AI / NLP Developer",
    duration: "1 Month",
    longDescription:
        "An NLP-based machine learning application that analyzes text input and predicts whether it was generated by an AI model or written by a human. The system uses feature extraction techniques and classification algorithms to determine text origin.",
    solutionApproach: {
        frontend:
            "Streamlit interactive interface allowing users to paste text and receive instant classification results.",
        backend:
            "Machine learning pipeline built using TF-IDF vectorization and classification model.",
        apiFlow:
            "User inputs text → Text preprocessing → Feature extraction (TF-IDF) → Model prediction → AI or Human classification output.",
        authentication:
            "Standalone ML web app deployed publicly via Streamlit.",
    },
    features: [
        {
            icon: "🧠",
            title: "Text Classification",
            description:
                "Classifies text as AI-generated or human-written.",
        },
        {
            icon: "⚡",
            title: "Instant Prediction",
            description:
                "Real-time prediction with confidence score.",
        },
        {
            icon: "🔍",
            title: "NLP Processing",
            description:
                "Preprocessing and vectorization using TF-IDF techniques.",
        },
    ],
    technicalDetails: {
        database:
            "Dataset processed using Pandas for model training.",
        apiEndpoints:
            "No REST API – deployed as interactive ML dashboard.",
        security:
            "Runs locally on Streamlit server without external storage.",
        performance:
            "Lightweight classification model optimized for fast inference.",
        challenges:
            "Improving model accuracy and handling ambiguous text samples.",
    },
},
{
  id: 10,
  slug: "digit-recognition-system",
  title: "Handwritten Digit Recognition System",
  description:
    "Machine learning-based image classification system that recognizes handwritten digits using the MNIST dataset.",
  tagline:
    "AI-powered handwritten digit recognition using supervised learning.",
  image: "/images/digit-recognition.png",
  category: "AI & Machine Learning",
  featured: false,
  techStack: [
    "Python",
    "Streamlit",
    "Scikit-learn",
    "NumPy",
    "Pandas",
    "MNIST Dataset"
  ],
  highlights: [
    "Trained on MNIST handwritten digit dataset",
    "Interactive digit drawing input",
    "Real-time classification with optimized inference",
    "Streamlit-based public deployment",
    "End-to-end ML pipeline implementation"
  ],
  liveUrl: "https://digit-recognitions.streamlit.app",
  githubUrl: "https://github.com/Saleem-bazhil/Degit-Recogination",
  role: "Machine Learning Developer",
  duration: "1 Month",
  type: "Machine Learning Application",

  longDescription:
    "A supervised machine learning application designed to recognize handwritten digits (0–9). The system is trained on the MNIST dataset and processes user-drawn input images through preprocessing, feature extraction, and classification to deliver accurate predictions in real time.",

  problemStatement: {
    problem:
      "Accurately recognizing handwritten digits is a fundamental challenge in computer vision and pattern recognition systems.",
    targetAudience:
      "Students, ML learners, and researchers exploring supervised image classification techniques.",
    marketGap:
      "Understanding foundational digit recognition is essential before building advanced AI systems such as OCR and automated document processing."
  },

  solutionApproach: {
    frontend:
      "Built an interactive Streamlit UI allowing users to draw or upload handwritten digits directly in the browser.",
    backend:
      "Implemented a supervised classification model trained on the MNIST dataset using Scikit-learn.",
    apiFlow:
      "User draws/uploads digit → Image resized & normalized → Flattened into feature vector → Model prediction → Digit displayed instantly.",
    authentication:
      "Standalone ML web application deployed publicly via Streamlit without authentication layer."
  },

  features: [
    {
      icon: "✍️",
      title: "Interactive Drawing Interface",
      description:
        "Users can draw handwritten digits directly inside the web application."
    },
    {
      icon: "🧠",
      title: "Supervised Learning Model",
      description:
        "Classification model trained on MNIST dataset to predict digits from 0–9."
    },
    {
      icon: "⚡",
      title: "Real-Time Inference",
      description:
        "Optimized lightweight model ensures fast and responsive predictions."
    }
  ],

  technicalDetails: {
    database:
      "MNIST dataset used for training and evaluation of the classification model.",
    apiEndpoints:
      "No REST API – deployed as a Streamlit-based interactive ML application.",
    security:
      "Client-side input handling with controlled preprocessing to maintain stable inference.",
    performance:
      "Optimized feature extraction and lightweight model selection for low-latency predictions.",
    challenges:
      "Handling noisy or poorly drawn digits and improving prediction accuracy through normalization and preprocessing techniques."
  }
},
{
  id: 11,
  slug: "student-performance-analysis-dashboard",
  title: "Student Performance Analysis Dashboard",
  description:
    "Interactive data analytics dashboard for analyzing student performance using real-time CSV uploads and visual insights.",
  tagline:
    "Data-driven student performance analysis with interactive visualizations.",
  image: "/images/student-analysis.png",
  category: "Data Analytics & Machine Learning",
  featured: false,
  techStack: [
    "Python",
    "Streamlit",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn"
  ],
  highlights: [
    "Interactive CSV file upload system",
    "Dynamic KPI metric generation",
    "Real-time statistical analysis",
    "Visual performance insights with charts",
    "Deployed as public Streamlit dashboard"
  ],
  liveUrl: "https://student-analysis-p.streamlit.app",
  githubUrl: "https://github.com/Saleem-bazhil/Student-Analysis",
  role: "Data Analyst & Machine Learning Developer",
  duration: "1 Month",
  type: "Data Analytics Dashboard",

  longDescription:
    "The Student Performance Analysis Dashboard is an interactive data analytics web application built using Streamlit. It allows users to upload student datasets in CSV format and instantly generate performance metrics, statistical summaries, and visual insights. The system analyzes student marks, class distribution, and academic trends to identify strengths and improvement areas through structured data visualization.",

  problemStatement: {
    problem:
      "Educational institutions often struggle to quickly interpret student performance data and identify patterns for improvement.",
    targetAudience:
      "Teachers, academic administrators, and data analysts in education domain.",
    marketGap:
      "Many academic datasets are stored in raw CSV formats without interactive visualization tools for quick insight extraction."
  },

  solutionApproach: {
    frontend:
      "Developed an interactive Streamlit interface that allows drag-and-drop CSV uploads and dynamically updates visualizations based on user input.",
    backend:
      "Implemented data preprocessing and statistical computation using Pandas and NumPy for performance analysis.",
    apiFlow:
      "User uploads CSV → Data validation & preprocessing → Metric computation → Visualization generation → Insight display.",
    authentication:
      "Standalone Streamlit analytics dashboard deployed publicly without authentication layer."
  },

  features: [
    {
      icon: "📂",
      title: "CSV Data Upload",
      description:
        "Drag-and-drop interface for uploading student datasets in CSV format."
    },
    {
      icon: "📊",
      title: "Dynamic KPI Metrics",
      description:
        "Automatically calculates total students, average percentage, number of classes, and dataset columns."
    },
    {
      icon: "📈",
      title: "Interactive Visualizations",
      description:
        "Generates charts and statistical insights to identify academic performance trends."
    },
    {
      icon: "⚡",
      title: "Real-Time Processing",
      description:
        "Instant dataset processing and visualization rendering without page reload."
    }
  ],

  technicalDetails: {
    database:
      "No external database – operates directly on uploaded CSV files using Pandas DataFrames.",
    apiEndpoints:
      "No REST API – implemented as an interactive analytics dashboard using Streamlit.",
    security:
      "File validation handling for CSV uploads with controlled memory usage.",
    performance:
      "Optimized DataFrame operations for fast metric calculation and real-time chart updates.",
    challenges:
      "Handling different CSV structures dynamically and ensuring accurate statistical calculations across varied datasets."
  }
}
];

export default projects;
