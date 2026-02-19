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
        slug: "taskboard-pro",
        title: "TaskBoard Pro",
        description:
            "Kanban-style project management tool with drag-and-drop, team collaboration, and sprint planning.",
        tagline:
            "Kanban project management with drag-and-drop and team collaboration.",
        image: "/images/edutech.png",
        category: "Frontend",
        featured: false,
        techStack: ["React", "TypeScript", "DnD Kit", "Zustand"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/your-repo",
        role: "Frontend Developer",
        duration: "1.5 Months",
        longDescription:
            "A modern Kanban-style project management tool with intuitive drag-and-drop interfaces, team collaboration features, and sprint planning capabilities.",
        solutionApproach: {
            frontend: "React with TypeScript for type-safe development. DnD Kit for smooth drag-and-drop interactions.",
            backend: "RESTful API with Node.js and Express. Real-time updates via Socket.io.",
            apiFlow: "REST endpoints for board management. WebSocket for real-time collaboration sync.",
            authentication: "JWT-based auth with team invitation system and role management.",
        },
        features: [
            {
                icon: "📋",
                title: "Kanban Boards",
                description: "Drag-and-drop task cards across customizable columns.",
            },
            {
                icon: "👥",
                title: "Team Collaboration",
                description: "Invite team members, assign tasks, and track progress together.",
            },
            {
                icon: "🏃",
                title: "Sprint Planning",
                description: "Create sprints, set goals, and monitor velocity.",
            },
        ],
        technicalDetails: {
            database: "PostgreSQL with JSONB for flexible task metadata storage.",
            apiEndpoints: "15+ endpoints for boards, columns, tasks, and team management.",
            security: "Row-level security for multi-tenant data isolation. Input validation with Zod.",
            performance: "Optimistic updates for instant UI feedback. Virtual scrolling for large boards.",
            challenges: "Implementing smooth drag-and-drop with complex reordering logic across columns while maintaining data consistency.",
        },
    },
    {
        id: 5,
        slug: "propertyvista",
        title: "PropertyVista",
        description:
            "Real estate listing platform with map integration, advanced filters, and virtual tour capabilities.",
        tagline:
            "Real estate platform with interactive maps and virtual property tours.",
        image: "/images/project1.png",
        category: "Full Stack",
        featured: false,
        techStack: ["React", "Django", "Mapbox", "PostgreSQL"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/your-repo",
        role: "Full Stack Developer",
        duration: "3 Months",
        longDescription:
            "A comprehensive real estate platform with interactive map-based property browsing, advanced search filters, and virtual tour capabilities.",
        solutionApproach: {
            frontend: "React SPA with Mapbox GL for interactive map-based browsing. Responsive gallery with virtual tour viewer.",
            backend: "Django REST Framework with geospatial queries. PostGIS for location-based property search.",
            apiFlow: "REST API with geospatial filtering. Image upload pipeline with automatic optimization.",
            authentication: "JWT auth with agent and buyer roles. Property inquiry and scheduling system.",
        },
        features: [
            {
                icon: "🗺️",
                title: "Interactive Maps",
                description: "Browse properties on an interactive map with clustering and filters.",
            },
            {
                icon: "🏠",
                title: "Virtual Tours",
                description: "360-degree virtual property tours with hotspot navigation.",
            },
            {
                icon: "🔍",
                title: "Advanced Search",
                description: "Filter by location, price, bedrooms, amenities, and more.",
            },
        ],
        technicalDetails: {
            database: "PostgreSQL with PostGIS extension for geospatial queries and indexing.",
            apiEndpoints: "18+ endpoints for properties, agents, inquiries, and favorites.",
            security: "Rate limiting, input sanitization, and secure file upload handling.",
            performance: "Map tile caching, lazy-loaded images, and database spatial indexing for fast geo-queries.",
            challenges: "Implementing efficient geospatial search with complex polygon-based area filtering while maintaining sub-second response times.",
        },
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
