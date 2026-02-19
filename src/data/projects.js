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
    id: 6,
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
        slug: "ai-chatbot",
        title: "AI Chatbot",
        description:
            "Intelligent chatbot application with natural language processing, multi-language support, and context-aware responses.",
        tagline:
            "AI-powered chatbot with NLP and multi-language support.",
        image: "/images/project2.png",
        category: "AI",
        featured: false,
        techStack: ["Python", "FastAPI", "React", "OpenAI"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/your-repo",
        role: "AI Developer",
        duration: "2 Months",
        longDescription:
            "An intelligent chatbot leveraging NLP for context-aware conversations. Supports multiple languages and integrates with various APIs for comprehensive responses.",
        solutionApproach: {
            frontend: "React chat interface with real-time message streaming and markdown rendering.",
            backend: "FastAPI with async processing for low-latency responses. Integration with OpenAI API for intelligent conversation.",
            apiFlow: "Streaming API for real-time token-by-token response delivery. Context window management for conversation history.",
            authentication: "API key-based auth with usage tracking and rate limiting per user.",
        },
        features: [
            {
                icon: "🤖",
                title: "Smart Responses",
                description: "Context-aware AI responses with conversation memory.",
            },
            {
                icon: "🌐",
                title: "Multi-language",
                description: "Supports conversations in 10+ languages with auto-detection.",
            },
            {
                icon: "📝",
                title: "Rich Formatting",
                description: "Markdown rendering with code syntax highlighting.",
            },
        ],
        technicalDetails: {
            database: "PostgreSQL for conversation history. Redis for session state and caching.",
            apiEndpoints: "10+ endpoints for chat, history, settings, and usage analytics.",
            security: "API key rotation, input sanitization, and content filtering.",
            performance: "Streaming responses for instant feedback. Connection pooling and async processing.",
            challenges: "Managing conversation context within token limits while maintaining coherent multi-turn conversations.",
        },
    },
    {
        id: 7,
        slug: "blog-platform",
        title: "Blog Platform",
        description:
            "Modern blogging platform with rich text editor, SEO optimization, and content scheduling.",
        tagline:
            "Feature-rich blogging platform with SEO tools and scheduling.",
        image: "/images/project3.png",
        category: "Frontend",
        featured: false,
        techStack: ["React", "Next.js", "MDX", "Tailwind"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/your-repo",
        role: "Frontend Developer",
        duration: "1.5 Months",
        longDescription:
            "A modern blogging platform with a rich text editor, automatic SEO optimization, and content scheduling. Built with Next.js for server-side rendering and optimal performance.",
        solutionApproach: {
            frontend: "Next.js with MDX support for rich content. Tailwind CSS for responsive, modern styling.",
            backend: "Next.js API routes with serverless functions. MDX processing pipeline for content transformation.",
            apiFlow: "ISR for blog pages with on-demand revalidation. API routes for content management and scheduling.",
            authentication: "NextAuth.js with multi-provider support. Admin panel with content approval workflow.",
        },
        features: [
            {
                icon: "✏️",
                title: "Rich Editor",
                description: "WYSIWYG editor with code blocks, images, and embedded media.",
            },
            {
                icon: "🔍",
                title: "SEO Optimized",
                description: "Automatic meta tags, sitemaps, and structured data for search engines.",
            },
            {
                icon: "📅",
                title: "Scheduling",
                description: "Schedule posts for future publication with timezone support.",
            },
        ],
        technicalDetails: {
            database: "PostgreSQL with full-text search for content discovery.",
            apiEndpoints: "12+ endpoints for posts, categories, comments, and media management.",
            security: "Content sanitization, CSRF protection, and spam filtering for comments.",
            performance: "ISR with stale-while-revalidate. Image optimization with next/image. Edge caching.",
            challenges: "Implementing a flexible MDX pipeline that supports custom components while maintaining fast build and render times.",
        },
    },
    {
        id: 8,
        slug: "weather-dashboard",
        title: "Weather Dashboard",
        description:
            "Real-time weather application with interactive maps, forecasts, and severe weather alerts.",
        tagline:
            "Beautiful weather app with forecasts, maps, and alerts.",
        image: "/images/edutech.png",
        category: "Frontend",
        featured: false,
        techStack: ["React", "OpenWeather API", "Mapbox", "Chart.js"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/your-repo",
        role: "Frontend Developer",
        duration: "1 Month",
        longDescription:
            "A stunning weather dashboard that provides real-time weather data, 7-day forecasts, and interactive weather maps with severe weather alerts.",
        solutionApproach: {
            frontend: "React with Chart.js for temperature and precipitation visualizations. Mapbox for weather overlay maps.",
            backend: "Serverless functions for API proxy and data aggregation from multiple weather services.",
            apiFlow: "Proxy API to OpenWeather for current conditions, forecasts, and alerts. Caching layer for rate limit management.",
            authentication: "API key management for weather service access. User preferences stored locally.",
        },
        features: [
            {
                icon: "🌡️",
                title: "Live Weather",
                description: "Current conditions with temperature, humidity, wind, and UV index.",
            },
            {
                icon: "📈",
                title: "Forecasts",
                description: "Hourly and 7-day forecasts with interactive temperature charts.",
            },
            {
                icon: "⚠️",
                title: "Severe Alerts",
                description: "Push notifications for severe weather warnings in your area.",
            },
        ],
        technicalDetails: {
            database: "LocalStorage for user preferences and recent searches. Service worker for offline access.",
            apiEndpoints: "5+ proxy endpoints for weather data, geocoding, and alerts.",
            security: "Server-side API key management to prevent exposure. Rate limiting per user.",
            performance: "Service worker caching for offline functionality. Optimized re-renders with React.memo.",
            challenges: "Aggregating data from multiple weather APIs into a unified format while handling rate limits and ensuring data freshness.",
        },
    },
];

export default projects;
