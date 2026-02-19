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
        slug: "shopflow-ecommerce",
        title: "ShopFlow E-Commerce",
        description:
            "Modern e-commerce platform with Stripe payments, dynamic product catalog, and real-time order tracking.",
        tagline:
            "Full-featured e-commerce platform with payment processing and inventory management.",
        image: "/images/project2.png",
        category: "Full Stack",
        featured: true,
        techStack: ["React", "Django", "Stripe", "PostgreSQL", "Tailwind"],
        highlights: [
            "Stripe payment gateway with subscription support",
            "Dynamic product catalog with advanced search and filtering",
            "Order management system with real-time status tracking",
            "Admin dashboard with sales analytics and inventory alerts",
        ],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/your-repo",
        role: "Full Stack Developer",
        duration: "2.5 Months",
        longDescription:
            "A modern e-commerce solution built for small businesses. Features a sleek product catalog, secure payment processing via Stripe, and a comprehensive admin panel for managing orders and inventory.",
        problemStatement: {
            problem:
                "Small businesses needed an affordable, customizable e-commerce solution that doesn't charge high transaction fees.",
            targetAudience:
                "Small to medium retail businesses wanting to establish an online presence.",
            marketGap:
                "Platforms like Shopify charge monthly fees plus transaction costs. No affordable self-hosted alternative with modern UX.",
        },
        solutionApproach: {
            frontend:
                "React with Tailwind CSS for a modern, responsive shopping experience. Optimistic UI updates for seamless user interactions.",
            backend:
                "Django REST Framework with Stripe integration. Celery for background order processing and email notifications.",
            apiFlow:
                "RESTful API for product management, cart operations, and order processing. Webhook handlers for Stripe payment events.",
            authentication:
                "JWT auth with social login support. Customer accounts with order history and saved addresses.",
        },
        features: [
            {
                icon: "💳",
                title: "Secure Payments",
                description: "Stripe integration with support for cards, wallets, and subscriptions.",
            },
            {
                icon: "🔍",
                title: "Smart Search",
                description: "Full-text search with filters for category, price range, and ratings.",
            },
            {
                icon: "📦",
                title: "Order Tracking",
                description: "Real-time order status updates with email notifications.",
            },
            {
                icon: "📊",
                title: "Sales Analytics",
                description: "Admin dashboard with revenue charts, top products, and customer insights.",
            },
        ],
        technicalDetails: {
            database: "PostgreSQL with full-text search capabilities and optimized product queries.",
            apiEndpoints: "20+ endpoints for products, cart, orders, payments, and user management.",
            security: "PCI-compliant payment handling via Stripe. CSRF protection and rate limiting.",
            performance: "Image optimization, CDN integration, and database query caching.",
            challenges:
                "Implementing real-time inventory management with concurrent order handling. Used database-level locking and Celery task queues.",
        },
    },
    {
        id: 3,
        slug: "connecthub-social",
        title: "ConnectHub Social",
        description:
            "Social networking application with real-time messaging, user profiles, and content sharing.",
        tagline:
            "Real-time social platform with messaging, profiles, and content sharing.",
        image: "/images/project3.png",
        category: "Full Stack",
        featured: false,
        techStack: ["React", "Django", "WebSocket", "PostgreSQL"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/your-repo",
        role: "Full Stack Developer",
        duration: "2.5 Months",
        longDescription:
            "A private social networking platform designed for team communication. Features real-time messaging, content sharing, and customizable user profiles.",
        problemStatement: {
            problem:
                "Communities needed a private social platform for team communication that didn't rely on third-party services with privacy concerns.",
            targetAudience:
                "Teams, organizations, and communities wanting a self-hosted social communication platform.",
            marketGap:
                "Existing platforms like Slack and Discord are subscription-based and store data on external servers. No lightweight, self-hosted alternative existed.",
        },
        solutionApproach: {
            frontend:
                "React SPA with real-time WebSocket integration for instant messaging. Optimistic UI updates for seamless user experience.",
            backend:
                "Django Channels for WebSocket support. Django REST Framework for standard CRUD operations. Celery for background notification processing.",
            apiFlow:
                "Hybrid REST + WebSocket architecture. REST for CRUD operations, WebSockets for real-time messaging and presence indicators.",
            authentication:
                "JWT-based authentication with session management. OAuth2 support for third-party login providers.",
        },
        features: [
            {
                icon: "💬",
                title: "Real-time Chat",
                description: "Instant messaging with typing indicators and read receipts.",
            },
            {
                icon: "👤",
                title: "User Profiles",
                description: "Customizable profiles with avatar uploads and activity feeds.",
            },
            {
                icon: "📸",
                title: "Content Sharing",
                description: "Share posts, images, and links with your network.",
            },
            {
                icon: "🔔",
                title: "Notifications",
                description: "Real-time push notifications for messages and interactions.",
            },
        ],
        technicalDetails: {
            database: "PostgreSQL with optimized queries for social graph traversal and feed generation.",
            apiEndpoints: "25+ endpoints covering messaging, profiles, posts, and notifications.",
            security: "End-to-end encryption for messages. Content moderation and spam filtering.",
            performance: "Efficient WebSocket connection management with connection pooling. Paginated feeds with infinite scroll.",
            challenges:
                "Scaling real-time messaging with multiple concurrent connections. Implemented Redis-backed channel layers with horizontal scaling support.",
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
