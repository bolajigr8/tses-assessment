# Course Management System -- Assessment

## Features

### 1. Teacher Dashboard Layout

- Responsive sidebar navigation with collapsible menu
- Top header with user profile (mock user: Madison Greg - Moderator/Instructor)
- Mobile-responsive design with hamburger menu
- Persistent layout across teacher routes

### 2. Course Management (`/teacher/courses`)

- Paginated course grid with search functionality
- Category-based filtering
- Course statistics (enrollments, completion rates)
- Responsive card layout

### 3. Course Detail Page (`/teacher/courses/[id]`)

- Applicant management table
- View total applicants and active learners
- Browse through student details
- Quick navigation to learning interface

### 4. Interactive Learning Interface (`/teacher/courses/[id]/learn`)

- Video player for lesson content
- Collapsible lesson sidebar with progress tracking
- Mark lessons as complete
- Quiz/Assessment view with multiple choice and text questions
- Content tabs (Course Content / Reviews & Feedback)
- Auto-navigation to next lesson after completion

### 5. State Management (Redux Toolkit) -- Dummy Users

- Centralized state management using Redux Toolkit
- **User Slice**: Manages user authentication state
  - User data structure: `id`, `name`, `email`, `isAuthenticated`
  - Actions: `setUser`, `clearUser`
  - Selectors: `selectUser`, `selectIsAuthenticated`
- Typed Redux hooks (`useAppDispatch`, `useAppSelector`)
- Provider setup compatible with Next.js App Router
- TypeScript-first implementation with full type safety

### 6. RTK Query Setup -- Dummy Api Calls

- API integration using RTK Query for efficient data fetching
- **Configured Endpoints**:
  - `getCourses` - Fetch list of courses
  - `getProfile` - Fetch user profile data

- Mock data integration using JSONPlaceholder API

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **Data Fetching**: RTK Query
- **UI Components**: Custom components + Shadcn Components
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ installed
- pnpm

### Installation

1. Install dependencies:

```bash
pnpm install
```

2. Run the development server:

```bash
pnpm run dev
```

3. Open [http://localhost:3000] in your browser

### Build for Production

```bash
pnpm run build
pnpm start
```

## Project Structure

```
src/
├── app/
│   ├── teacher/                    # Teacher-specific routes
│   │   ├── courses/
│   │   │   ├── [id]/
│   │   │   │   ┣━ learn/
│   │   │   │   ┃  └── page.tsx    # Learning interface
│   │   │   │   └── page.tsx       # Course detail page
│   │   │   └── page.tsx           # Courses dashboard
│   │   ├── dashboard/
│   │   │   └── page.tsx           # Main dashboard
│   │   ├── layout.tsx             # Teacher layout wrapper
│   │   └── page.tsx               # Teacher home (redirects to dashboard)
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx                 # Root layout
│   ├── not-found.tsx
│   └── page.tsx                   # App home (redirects to teacher)
├── components/
│   ├── course/                    # Course-specific components
│   │   ├── applicant-table.tsx
│   │   ├── course-card.tsx
│   │   ├── header.tsx
│   │   ├── lesson-content.tsx
│   │   ├── lesson-sidebar.tsx
│   │   ├── pagination.tsx
│   │   ├── quiz-view.tsx
│   │   ├── search-bar.tsx
│   │   ├── stat-card.tsx
│   │   └── video-player.tsx
│   ├── Dashboard/                 # Layout components
│   │   ├── app-header.tsx         # Top header with user info
│   │   ├── app-sidebar.tsx        # Sidebar navigation
│   │   ├── dashboard-layout.tsx   # Main layout wrapper
│   │   └── mobile-menu.tsx        # Mobile hamburger menu
│   └── ui/                        # Reusable UI components
│       ├── button.tsx
│       ├── input.tsx
│       ├── safe-image.tsx
│       ├── separator.tsx
│       ├── sheet.tsx
│       ├── sidebar.tsx
│       ├── skeleton.tsx
│       └── tooltip.tsx
├── constants/                     # Data and configuration
│   ├── courses.ts                 # Course data
│   ├── data.ts                    # Mock data
│   ├── nav-items.ts               # Sidebar navigation items
│   ├── types.ts                   # TypeScript type definitions
│   └── user.ts                    # User configuration
├── hooks/
│   └── use-mobile.ts              # Mobile detection hook
├── lib/
│   └── utils.ts                   # Utility functions (cn, etc.)
└── store/                         # Redux Toolkit setup
    ├── index.ts                   # Store configuration
    ├── hooks.ts                   # Typed Redux hooks
    ├── StoreProvider.tsx          # Redux Provider component
    ├── api/
    │   └── apiSlice.ts           # RTK Query API configuration
    └── slices/
        └── userSlice.ts          # User state slice
```

## Route Structure

### Application Flow

```
/teacher (root)
  └─> redirects to /teacher/dashboard

/teacher
  ├── /dashboard              # Main dashboard
  ├── /courses                # Course listing
  │   └── /[id]              # Course details
  │       └── /learn         # Learning interface
  └── page.tsx (redirects to /dashboard)
```

## Data Management

### Mock Data Location

All mock data is stored in the `constants/` directory:

- **courses.ts**: Course catalog data
- **data.ts**: Lessons, sections, and content
- **nav-items.ts**: Sidebar navigation configuration
- **user.ts**: User profiles
- **types.ts**: TypeScript interfaces and types

### Navigation Items

Modify `constants/nav-items.ts` to add/remove sidebar links:

```typescript
{
  label: 'New Section',
  icon: IconName,
  href: '/teacher/new-section',
}
```

## Component Highlights

### Safe Image Component

Graceful fallback handling for missing images:

```typescript
<SafeImage
  src="/path/to/image.jpg"
  alt="Description"
  fallback="/placeholder.jpg"
/>
```

### Mobile Detection Hook

```typescript
const isMobile = useMobile()
```

### Current Limitations

- Uses mock data (no real backend)
- Mock user system (no authentication)
- Progress not persisted (resets on refresh)
- Video player is UI-only (no actual playback)
- No real-time updates
- RTK Query uses JSONPlaceholder for demonstration

**Built with using Next.js, TypeScript, Tailwind CSS, and Redux Toolkit**
