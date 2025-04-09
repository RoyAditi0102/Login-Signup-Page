### 📄 Task Progress Document: Login & Signup with GraphQL

**GraphQL Endpoint:** [https://api-qa.seamasterai.com/graphql](https://api-qa.seamasterai.com/graphql)\
**Deadline:** April 8–9, 2025

---

#### ✅ Phase Overview

| Phase | Description                                    | Status         | Time Taken                     | Challenges                                |
| ----- | ---------------------------------------------- | -------------- | ------------------------------ | ----------------------------------------- |
| 1     | Project setup + Apollo Client + Routing        | ✅ Completed    | 8:44 PM – 09:16 PM IST           | Module export errors (Login, Signup, App) |
| 2     | Login page + mutation + success/error handling | ✅ Completed    | 9:50 PM – 10:45 PM IST           | GraphQL error handling, field validations |
| 3     | Signup page + mutation with default values     | ✅ Completed    | 12:16 PM – 2:40 PM IST (Apr 9)  | Mutation errors, default field config     |
| 4     | UI enhancements + validation + feedback        | ✅ Completed    | 2:40 PM – 4:00 PM IST           | Tailwind config issues, fallback to CSS   |
| 5     | Testing + cleanup + submission prep            | ✅ Completed    | 4:00 PM – 5:45 PM IST           | UI polish, routing buttons, styling tweak |

---

#### 📘 Detailed Logs Per Phase

---

### 🌱 Phase 1: Basic Setup & Routing

- **Steps:**
  - Initialize React + TypeScript project using Vite
  - Install Apollo Client, GraphQL, and React Router
  - Configure Apollo Client
  - Create basic route structure (`/login`, `/signup`)
  - Create `Login.tsx` and `Signup.tsx` with default exports
  - Ensure `App.tsx` has a default export and routes
- **Start Time:** April 8, 2025 – 8:44 PM IST
- **End Time:** April 8, 2025 – 9:16 PM IST
- **Total Time Taken:** 32 minutes
- **Challenges Faced:**
  - Missing default exports in `Login.tsx`, `Signup.tsx`, and `App.tsx`
  - ESLint warnings about unused `React` import and export issues
- **Notes:**
  - Setup now working without errors
  - All routing files are ready for Phase 2

---

### 🔐 Phase 2: Implement Login Page

- **Steps:**
  - Create login form (email/username + password)
  - Write and integrate login mutation
  - Handle loading, success, and error states
  - Store token if applicable
- **Start Time:** April 8, 2025 – 9:50 PM IST
- **End Time:** April 8, 2025 – 10:45 PM IST
- **Total Time Taken:** 55 minutes
- **Challenges Faced:**
  - GraphQL validation issues
  - Data and field mismatch with backend response
- **Notes:**
  - Login working successfully with token received

---

### 📜 Phase 3: Implement Signup Page

- **Steps:**
  - Create signup form
  - Write and integrate signup mutation
  - Include default values: `role: sailor`, `confirmed: true`
  - Handle response and validation
- **Start Time:** April 9, 2025 – 12:16 PM IST
- **End Time:** April 9, 2025 – 2:40 PM IST
- **Total Time Taken:** 2 hours 24 minutes
- **Challenges Faced:**
  - Mutation error with `data` field
  - Backend required wrapping inside `input`
- **Notes:**
  - Successfully registers user and shows alert
  - Used enhanced error handling and minimal styling

---

### 🎨 Phase 4: UI Enhancements & Validation

- **Steps:**
  - Input validations (required fields, email format)
  - Show loading spinner or disable buttons while submitting
  - Add success/error message display (toast/snackbar or alert)
  - Initially attempted TailwindCSS, but fallback to basic CSS
  - Used lavender+soft pink gradient and translucent box design
- **Start Time:** April 9, 2025 – 2:40 PM IST
- **End Time:** April 9, 2025 – 4:00 PM IST
- **Total Time Taken:** 1 hour 20 minutes
- **Challenges Faced:**
  - Tailwind setup errors, terminal issues with `npx`
  - Switched to basic CSS with gradients and transparency
- **Notes:**
  - Created a visually clean, soft UI with centered layout
  - Fixed styling alignment and responsive layout

---

### 🤔 Phase 5: Testing & Cleanup

- **Steps:**
  - Final UI tweaks and consistent CSS across pages
  - Added landing page with buttons redirecting to login/signup
  - Tested navigation, validation, and mutation behavior
  - Pushed to GitHub
- **Start Time:** April 9, 2025 – 4:00 PM IST
- **End Time:** April 9, 2025 – 5:45 PM IST
- **Total Time Taken:** 1 hour 45 minutes
- **Challenges Faced:**
  - None significant, mostly UI cleanup and final polishing
- **Notes:**
  - Final version complete and visually consistent
  - Toasts, transitions, and background styling added

