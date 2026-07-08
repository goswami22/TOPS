# Vidora AI — Frontend Foundation (Module 1)

## Stack
React 19 · Vite · Tailwind CSS · React Router DOM · Framer Motion · Lucide React · Axios

## Setup
\`\`\`bash
npm install
npm run dev
\`\`\`

## Absolute Imports (aliases)
| Alias         | Path                |
|---------------|----------------------|
| @             | src/                 |
| @assets       | src/assets           |
| @components   | src/components       |
| @constants    | src/constants        |
| @context      | src/context          |
| @hooks        | src/hooks            |
| @pages        | src/pages            |
| @routes       | src/routes           |
| @services     | src/services          |
| @utils        | src/utils            |

## Structure
\`\`\`
src/
├── assets/
├── components/
│   ├── common/       # ErrorBoundary, shared UI primitives
│   └── layout/        # PublicLayout, DashboardLayout
├── constants/          # config.js, routes.js
├── context/            # ThemeContext
├── hooks/              # useLocalStorage, useMediaQuery
├── pages/
│   └── errors/         # NotFound, ServerError
├── routes/             # AppRoutes, ProtectedRoute
├── services/           # axiosInstance
├── utils/              # cn.js, storage.js
├── App.jsx
├── main.jsx
└── index.css
\`\`\`

Module 1 covers foundation only — no feature/UI pages. Feature pages register inside `AppRoutes.jsx` in later modules.
