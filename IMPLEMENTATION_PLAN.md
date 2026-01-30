# PrepPilot.AI // Implementation Roadmap

This document outlines the frontend engineering plan and API integration strategy for the PrepPilot.AI platform.

## 🏗️ Phase 1: Frontend Architecture & UI Development

The objective is to build a high-fidelity "Architect HUD" for the internal platform, maintaining the Solar Orange / Slate-950 / White aesthetic.

### 1.1 Dashboard: Command Central

- **Purpose**: High-level overview of user progress.
- **Key Modules**:
  - **Session Quick-Start**: A prominent "Begin Initialisation" module.
  - **Analytics Snapshot**: 3-4 glassmorphic cards showing avg score, total sessions, and top skills.
  - **Recent Attempts**: A minimalist terminal-style list of the last 5 sessions.
  - **Status HUD**: Real-time system status and user "Architect Level" (Experience based).

### 1.2 Interview Engine: Neural Uplink

- **Purpose**: The core interactive interview experience.
- **Key Modules**:
  - **Parameter Config**: Pre-session setup (Role, Topic, Difficulty selection).
  - **Question Terminal**: A clean, focused area for the AI question.
  - **Input Console**: Text area with a "Voice Mode" toggle (future-proof).
  - **Hint System**: A "Request Hint" button with a typing effect animation.
  - **Real-Time Feedback**: Evaluation display after each answer submission.
  - **Session HUD**: Progress bar, timer, and current score ticker.

### 1.3 Profile & Identity: Architect Persona

- **Purpose**: Managing user career data.
- **Key Modules**:
  - **Personal Bio**: Basic info (Name, Email).
  - **Career Matrix**: Multi-select inputs for Skills, Experience level, and Target Roles.
  - **Security Module**: Password reset and secure logout.

### 1.4 Archive: Session History

- **Purpose**: Reviewing past performance.
- **Key Modules**:
  - **Session List**: Filterable table of all past interviews.
  - **Deep-Dive View**: Detailed page for a single session showing all question-answer pairs and specific feedback.

### 1.5 Analytics Hub: Performance Matrix

- **Purpose**: Data-driven career insights.
- **Key Modules**:
  - **Skill Radar Chart**: Visual breakdown of technical strengths.
  - **Weakness Ticker**: List of topics requiring improvement based on AI scores.
  - **Progress Line Chart**: Score improvement over time.

---

## 🔗 Phase 2: API Integration Strategy

Once the UI is stable, we will implement the data layer.

### 2.1 Secure Client (Axios)

- Create a central `apiClient.js` with base URL `http://localhost:5000/api`.
- Implement Request Interceptor to automatically attach `Authorization: Bearer <token>` to private requests.
- Implement Response Interceptor for handling 401 Unauthorized errors (auto-logout).

### 2.2 Global State Management

- **Auth Context**: Persisting user session and JWT in localStorage/Store.
- **Interview Store**: Managing transient state during an active session (sessionId, attempts array).

### 2.3 Feature-Specific API Hooks

Mapping the documented endpoints to frontend functions:

#### Auth (`/auth`)

- `useRegister()` -> POST `/auth/register`
- `useLogin()` -> POST `/auth/login`
- `useAuthMe()` -> GET `/auth/me`

#### User Profile (`/users`)

- `useProfile()` -> GET `/users/me`
- `useUpdateProfile()` -> PUT `/users/me`

#### Interview Logic (`/questions` & `/answers`)

- `useGenerateQuestion()` -> POST `/questions/generate`
- `useFetchHint()` -> POST `/questions/hint`
- `useEvaluateAnswer()` -> POST `/answers/evaluate`

#### Session Management (`/sessions`)

- `useStartSession()` -> POST `/sessions/start`
- `useEndSession()` -> PATCH `/sessions/:id/end`
- `useSessionHistory()` -> GET `/sessions`

#### Data Analytics (`/analytics`)

- `useSkillsAnalytics()` -> GET `/analytics/skills`
- `useWeaknessAnalytics()` -> GET `/analytics/weaknesses`
- `useSummary()` -> GET `/analytics/summary`

---

## 🛠️ Tech Stack Refinement

- **Frontend**: React (Vite)
- **Styling**: Tailwind CSS
- **Icons**: Lucide-React
- **State**: React Context API / Zustand
- **API**: Axios
- **Animations**: Framer Motion (for HUD transitions)

---

## 🚀 Execution Order

1.  **Skeleton Setup**: Create empty folders for Dashboard, Interview, Profile, History, and Analytics.
2.  **Shared Layout**: Create a `DashboardLayout` with a sidebar and top HUD bar.
3.  **UI Build-Out**: One by one, implement the UI for each page using mocked data.
4.  **Integration Phase**: Start with Auth, then Profile, then Session logic.
5.  **Analytics Finish**: Implement the data-heavy analytics views last.
