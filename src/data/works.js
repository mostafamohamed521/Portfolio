export const WORKS = [
  {
    id: "sarab",
    name: "Sarab",
    category: "Full-Stack",
    role: "Full-Stack Developer (Solo)",
    tag: "Food & Restaurant Platform",
    color: "2E7D32",
    images: [],
    liveUrl: "https://sarabfood.pythonanywhere.com/",
    repoUrl: "https://github.com/mostafamohamed521/Sarab.git",
    summary: "A complete Django e-commerce and restaurant management platform - ordering, reservations, and a role-restricted admin dashboard, built solo.",
    overview:
      "Sarab is a full Django restaurant platform: online food ordering, table reservations, a " +
      "customer account system, reviews and a wishlist, Stripe payments, and a REST API - all " +
      "backed by a custom Django Admin dashboard. Built end to end on my own, from schema to " +
      "deployment.",
    problem:
      "A restaurant needs one system that covers the full customer journey - browsing, ordering, " +
      "paying, reserving a table, and tracking an order - while giving staff a dashboard that " +
      "only shows them what their role should see, not the entire admin surface.",
    highlights: [
      "Full customer journey: live menu search, real-time cart, multi-step checkout with coupon codes, cash/Stripe/PayPal payment, live order tracking, and table reservations with confirmation codes",
      "Role-restricted Django Admin - only role=admin accounts (or superusers) reach the dashboard, with a live overview page and bulk order/reservation actions",
      "A versioned, rate-limited REST API (/api/v1/) where order pricing is always computed server-side from live menu prices, never trusted from the client",
      "Went through a full security and code-quality audit (a documented OWASP Top 10 pass), covered by 124 automated tests",
    ],
    stack: ["Django", "Django REST Framework", "Stripe", "PostgreSQL"],
    stats: [
      { value: "124", label: "Automated tests" },
      { value: "50", label: "Routes/pages" },
      { value: "1", label: "Solo-built" },
    ],
  },
  {
    id: "cinematch",
    name: "CineMatch",
    category: "Frontend",
    role: "Frontend Developer",
    tag: "AI Movie Recommendations",
    color: "E8A24C",
    images: [
      "/works/cinematch/cover.jpg",
      "/works/cinematch/welcome.png",
      "/works/cinematch/welcome-back.jpeg",
      "/works/cinematch/login.jpeg",
      "/works/cinematch/register.jpeg",
      "/works/cinematch/home.jpeg",
      "/works/cinematch/reveal.png",
      "/works/cinematch/recommend.jpeg",
      "/works/cinematch/movie-details.jpeg",
      "/works/cinematch/details.jpeg",
      "/works/cinematch/my-list.jpeg",
      "/works/cinematch/history.jpeg",
      "/works/cinematch/search-result.jpeg",
    ],
    liveUrl: "",
    repoUrl: "https://github.com/mostafamohamed521/Cinematch.git",
    summary: "A Netflix-inspired movie discovery app - built the entire React frontend for an AI, content-similarity recommendation engine.",
    overview:
      "CineMatch recommends movies based on content similarity, wrapped in a Netflix-style, " +
      "cinematic interface. Working with two teammates, I built the entire frontend: every " +
      "screen, the animation layer, and the account flows that connect to the recommendation " +
      "engine underneath.",
    problem:
      "With millions of titles available on modern streaming platforms, the interface itself " +
      "needs to make AI-driven recommendations feel fast, personal, and easy to act on - not " +
      "just accurate in the background.",
    highlights: [
      "Built the full UI: hero banner, Discover/Trending/Top Rated/New Releases sections, instant search with autocomplete, and an AI match-percentage display on recommended titles",
      "Personalization screens: Favorites, Watch Later, and Watch History (\"My List\")",
      "Secure account flows - registration, login, password recovery - fully responsive across desktop, tablet, and mobile",
      "Smooth, cinematic transitions and animations built with Framer Motion",
    ],
    stack: ["React", "JavaScript", "Framer Motion"],
    stats: [
      { value: "8+", label: "Core screens" },
      { value: "2", label: "Teammates" },
      { value: "AI", label: "Recommendation engine" },
    ],
  },
  {
    id: "sentinelx",
    name: "SentinelX",
    category: "Frontend",
    role: "Frontend Developer & SDK Author",
    tag: "AI Agent Security Platform",
    color: "6C7CFF",
    images: [
      "/works/sentinel/sentinel-cover.jpeg",
      "/works/sentinel/home.jpeg",
      "/works/sentinel/dashboard.jpg",
      "/works/sentinel/agents.jpg",
      "/works/sentinel/alerts.jpg",
      "/works/sentinel/alert-details.jpg",
      "/works/sentinel/observation-details.jpg",
      "/works/sentinel/login.jpeg",
      "/works/sentinel/register.jpeg",
      "/works/sentinel/step2-register.jpeg",
    ],
    liveUrl: "",
    repoUrl: "https://github.com/mostafamohamed521/sentinelx.git",
    summary: "An AI security platform that monitors autonomous AI agents at runtime - I built the React dashboard and the official Python SDK.",
    overview:
      "SentinelX monitors, analyzes, and protects AI Agents while they run - collecting runtime " +
      "events, scoring risk, and raising real-time alerts, without needing to touch the agent's " +
      "own business logic. Working with a team, I owned two pieces: the React monitoring " +
      "dashboard, and the ASES SDK that agents actually integrate to report their behavior.",
    problem:
      "AI agent frameworks run in production with no built-in way to report their own runtime " +
      "behavior for external security analysis - teams needed a lightweight SDK that agents " +
      "could adopt, plus a dashboard that turns the resulting stream of events into readable, " +
      "actionable alerts.",
    highlights: [
      "Built the official ASES SDK: runtime event collection, an observation builder, validation/serialization, and background delivery, with support for generic Python agents and CrewAI",
      "Built the React + TypeScript monitoring dashboard: agent monitoring, analytics, alert management, and authentication screens",
      "Full pipeline: AI agent -> ASES SDK -> observation pipeline -> REST API -> ML risk/threat scoring -> dashboard",
      "JWT-based authentication with role-based access on the platform side",
    ],
    stack: ["React", "TypeScript", "Python (SDK)"],
    stats: [
      { value: "2", label: "Frameworks supported" },
      { value: "SDK", label: "Built from scratch" },
      { value: "JWT", label: "Auth model" },
    ],
  },
  {
    id: "gymx",
    name: "GymX",
    category: "Full-Stack",
    role: "Full-Stack Developer (Solo)",
    tag: "Gym Management Ecosystem",
    color: "1F8A70",
    images: [],
    liveUrl: "",
    repoUrl: "https://github.com/mostafamohamed521/GYMX.git",
    summary: "A full digital operating system for a fitness business - 22 apps, 5 roles, and an AI insights layer, built sprint by sprint.",
    overview:
      "GymX grew, sprint by sprint, from a simple gym system into a complete platform: member " +
      "check-ins, payroll, point of sale, multi-branch operations, a public marketing site, and " +
      "an AI-powered insights engine - 22 Django apps built and tested one role at a time.",
    problem:
      "A real gym needs one system that five very different roles can all use safely - a " +
      "receptionist shouldn't see payroll, a coach shouldn't see finance - without the sidebar " +
      "being the only thing standing between them and a page they shouldn't reach.",
    highlights: [
      "5-role access control (Super Admin, Manager, Receptionist, Coach, Member), enforced by reusable role-group decorators on every sensitive view, not just hidden in the UI",
      "Full business operations: HR/payroll, inventory, a POS system with discounts and gift cards, multi-branch transfers, and a CRM with loyalty and referral programs",
      "Finance module with a double-entry-style chart of accounts, journal entries, and a general ledger",
      "AI features genuinely computed from real data - churn prediction from attendance/expiry patterns, revenue forecasting from historical trends, and a nutrition advisor using the real Mifflin-St Jeor formula",
    ],
    stack: ["Django", "PostgreSQL"],
    stats: [
      { value: "22", label: "Django apps" },
      { value: "5", label: "User roles" },
      { value: "370", label: "Templates" },
    ],
  },
  {
    id: "eflyer",
    name: "Eflyer",
    category: "Full-Stack",
    role: "Full-Stack Developer (Solo)",
    tag: "E-commerce Storefront",
    color: "2F6FED",
    images: [],
    liveUrl: "",
    repoUrl: "https://github.com/mostafamohamed521/Eflyer.git",
    summary: "A full e-commerce storefront (35 pages) backed by a complete JSON REST API, with a documented security-hardening and bug-fixing pass.",
    overview:
      "Eflyer serves an entire storefront - 35 frontend pages - as Django templates, with a " +
      "complete REST API underneath for accounts, catalog, cart, orders, coupons, wishlist, and " +
      "blog content. The customer flow (browse -> cart -> checkout -> track) is fully wired to " +
      "real, live data rather than static mockups.",
    problem:
      "An online store needs the storefront and the API to be genuinely in sync - server-computed " +
      "pricing the client can't fake, real stock control that prevents overselling, and " +
      "production settings that don't quietly break on real hosting.",
    highlights: [
      "JWT auth, scoped rate limiting on sensitive endpoints, file-upload validation, and a documented CSP/security-headers pass",
      "Found and fixed real race conditions during a self-audit: a registration bug that could leak a 500 error, a stock-overselling bug, and a coupon-usage race - all fixed with database-level locking and covered by regression tests",
      "A deploy-readiness pass caught a missing-migrations issue, a docker-compose config silently ignoring production settings, and an SSL-redirect loop that would break on real hosting platforms",
      "52 automated tests covering every major customer flow end to end",
    ],
    stack: ["Django", "Django REST Framework", "PostgreSQL", "JWT"],
    stats: [
      { value: "35", label: "Frontend pages" },
      { value: "52", label: "Automated tests" },
      { value: "4", label: "Real bugs found & fixed" },
    ],
  },
  {
    id: "qrforge",
    name: "QR Forge",
    category: "Full-Stack",
    role: "Full-Stack Developer (Solo)",
    tag: "QR Code Generator",
    color: "E67E22",
    images: [],
    liveUrl: "",
    repoUrl: "https://github.com/mostafamohamed521/qr_generator.git",
    summary: "A professional QR code generator supporting 8 QR types, custom styling, and a saved history - Django backend, vanilla JS frontend.",
    overview:
      "QR Forge generates 8 different types of QR codes - URL, text, contact, WiFi, SMS, email, " +
      "phone, and location - with full control over color, size, and module style, plus a " +
      "history of your last 40 generated codes.",
    problem:
      "Most free QR generators only handle a plain URL and offer no history or styling - QR " +
      "Forge needed to cover every common QR type behind one consistent form-driven interface.",
    highlights: [
      "8 QR types (URL, text, contact/vCard, WiFi, SMS, email, phone, location) with custom colors, adjustable size, and square/rounded module styles",
      "40-item history with thumbnails, click-to-re-preview, save-as-PNG, copy-to-clipboard, and native share",
      "A Django Admin panel for managing every generated record",
      "44 automated tests covering the generation logic and API endpoints",
    ],
    stack: ["Django", "JavaScript"],
    stats: [
      { value: "8", label: "QR types supported" },
      { value: "44", label: "Automated tests" },
      { value: "40", label: "Item history" },
    ],
  },
  {
    id: "arven",
    name: "Arven",
    category: "Full-Stack",
    role: "Full-Stack Developer (Solo, in progress)",
    tag: "Bilingual Learning Platform",
    color: "B5468C",
    images: [],
    liveUrl: "",
    repoUrl: "",
    summary: "A bilingual (Arabic/English) educational platform with courses, learning paths, and an Egyptian Baccalaureate track - currently in active development.",
    overview:
      "Arven is a course and learning-path platform built as a Django REST API paired with a " +
      "React SPA, designed bilingually from the ground up (Arabic/English, with live RTL/LTR " +
      "switching). Phase 1 - foundation, authentication, and course discovery - is complete; " +
      "the project is still being actively built.",
    problem:
      "A bilingual learning platform needs its design system, not just its text, to genuinely " +
      "support right-to-left layouts - and needs a course lifecycle (draft -> review -> approved " +
      "-> published) that keeps unpublished content invisible to the public.",
    highlights: [
      "Custom 5-role user model (Student, Instructor, Admin, Super Admin, Support Agent) with JWT auth",
      "A full course workflow (Draft -> Submitted -> Review -> Approved -> Published) with a public discovery API that never leaks unpublished content",
      "React 19 + TypeScript frontend on Vite with a custom design system in Tailwind v4, fully bilingual with live RTL/LTR switching",
      "Currently building out the learning domain: lesson progress tracking, quizzes, and assignments",
    ],
    stack: ["Django REST Framework", "React", "TypeScript"],
    stats: [
      { value: "5", label: "User roles" },
      { value: "2", label: "Languages (AR/EN)" },
      { value: "Phase 1", label: "Current status" },
    ],
  },
];

export const WORK_FILTERS = ["All", "Full-Stack", "Frontend"];
