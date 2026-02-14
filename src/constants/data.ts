import {
  Stat,
  Course,
  Category,
  NavLink,
  Applicant,
  LessonSection,
  QuizQuestion,
  CourseDetail,
} from './types'

export const STATS: Stat[] = [
  {
    id: 'total-courses',
    label: 'Total courses',
    value: 123,
    icon: 'book-open',
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
  {
    id: 'total-enrollments',
    label: 'Total Enrollments',
    value: 111,
    icon: 'graduate-cap',
    bgColor: 'bg-cyan-50',
    iconColor: 'text-cyan-600',
  },
  {
    id: 'avg-completion',
    label: 'Avg Completion',
    value: '99%',
    trend: '+2% vs last month',
    icon: 'list-up',
    bgColor: 'bg-orange-50',
    iconColor: 'text-orange-600',
  },
]

export const COURSES: Course[] = [
  {
    id: 1,
    title: 'Effective Workplace Communication',
    description:
      'Upon completion of this module, participants will: Implement practical communication techniques, a...',
    category: 'Soft Skill',
    image: '/one.png',
    categoryColor: 'bg-[#E8E8E8] text-[#636363]',
  },
  {
    id: 2,
    title: 'Mastering Interpersonal Skills',
    description:
      'Upon completion of this module, participants will: Implement practical communication techniques, a...',
    category: 'Compliance & Policy',
    image: '/two.jpg',
    categoryColor: 'bg-[#E8E8E8] text-[#636363]',
  },
  {
    id: 3,
    title: 'Strengthening Team Cohesion',
    description:
      'Upon completion of this module, participants will: Implement practical communication techniques, a...',
    category: 'Soft Skill',
    image: '/three.jpg',
    categoryColor: 'bg-[#E8E8E8] text-[#636363]',
  },
  {
    id: 4,
    title: 'Enhancing Team Dialogue',
    description:
      'Upon completion of this module, participants will: Implement practical communication techniques, a...',
    category: 'Digital Skills',
    image: '/four.jpg',
    categoryColor: 'bg-[#E8E8E8] text-[#636363]',
  },
  {
    id: 5,
    title: 'Optimizing Group Dynamics',
    description:
      'Upon completion of this module, participants will: Implement practical communication techniques, a...',
    category: 'Business & Strategy',
    image: '/five.jpg',
    categoryColor: 'bg-[#E8E8E8] text-[#636363]',
  },
  {
    id: 6,
    title: 'Cultivating Open Communication',
    description:
      'Upon completion of this module, participants will: Implement practical communication techniques, a...',
    category: 'Onboarding',
    image: '/six.jpg',
    categoryColor: 'bg-[#E8E8E8] text-[#636363]',
  },
]

export const CATEGORIES: Category[] = [
  { value: 'all', label: 'All Categories' },
  { value: 'soft-skill', label: 'Soft Skill' },
  { value: 'compliance', label: 'Compliance & Policy' },
  { value: 'digital-skills', label: 'Digital Skills' },
  { value: 'business', label: 'Business & Strategy' },
  { value: 'onboarding', label: 'Onboarding' },
]

export const ITEMS_PER_PAGE = [10, 20, 30, 40, 50]

export const NAV_LINKS: NavLink[] = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/courses', label: 'Courses', active: true },
  { href: '/analytics', label: 'Analytics' },
  { href: '/users', label: 'Users' },
  { href: '/settings', label: 'Settings' },
]

export const APPLICANTS: Applicant[] = [
  {
    id: 1,
    name: 'Mithya Nelson',
    avatar: '/avatars/1.jpg',
    city: 'New York',
    email: 'mithya.nelson@email.com',
  },
  {
    id: 2,
    name: 'Mano Gonzalez',
    avatar: '/avatars/2.jpg',
    city: 'Toronto',
    email: 'mano.gonzalez@email.com',
  },
  {
    id: 3,
    name: 'Monika Patel',
    avatar: '/avatars/3.jpg',
    city: 'Paris',
    email: 'monika.patel@email.com',
  },
  {
    id: 4,
    name: 'Dinesh Kumar',
    avatar: '/avatars/4.jpg',
    city: 'Tokyo',
    email: 'dinesh.kumar@email.com',
  },
  {
    id: 5,
    name: 'Karelba Subramanian',
    avatar: '/avatars/5.jpg',
    city: 'London',
    email: 'karelba.subramanian@email.com',
  },
  {
    id: 6,
    name: 'Monika Patel',
    avatar: '/avatars/6.jpg',
    city: 'Paris',
    email: 'jagadish.vangipurapu@email.com',
  },
  {
    id: 7,
    name: 'Jagadish Nangarath',
    avatar: '/avatars/7.jpg',
    city: 'Berlin',
    email: 'jagadish.nangarath@email.com',
  },
  {
    id: 8,
    name: 'Monika Patel',
    avatar: '/avatars/8.jpg',
    city: 'Paris',
    email: 'monika.patel@email.com',
  },
  {
    id: 9,
    name: 'Mithya Nelson',
    avatar: '/avatars/9.jpg',
    city: 'New York',
    email: 'mithya.nelson@email.com',
  },
  {
    id: 10,
    name: 'Jagadish Nangarath',
    avatar: '/avatars/10.jpg',
    city: 'Tokyo',
    email: 'dinesh.kumar@email.com',
  },
]

export const LESSON_SECTIONS: LessonSection[] = [
  {
    id: 'introduction',
    title: 'Introduction',
    expanded: true,
    lessons: [
      {
        id: 'welcome',
        title: 'Welcome Message',
        completed: false,
        type: 'video',
      },
      {
        id: 'note-style',
        title: 'A Note or Style',
        completed: false,
        type: 'text',
      },
      {
        id: 'what-learn',
        title: "What You'll Learn', completed: false, type: 'text",
        completed: false,
      },
      {
        id: 'meet-instructor',
        title: 'Meet Your Instructor',
        completed: false,
        type: 'text',
      },
    ],
  },
  {
    id: 'setup',
    title: 'Setting Up Your Workspace',
    expanded: false,
    lessons: [
      {
        id: 'workspace-setup',
        title: 'Setting Up Your Workspace',
        completed: false,
        type: 'video',
      },
    ],
  },
  {
    id: 'navigating',
    title: 'Navigating the Course',
    expanded: false,
    lessons: [
      {
        id: 'course-nav',
        title: 'Navigating the Course',
        completed: false,
        type: 'text',
      },
    ],
  },
  {
    id: 'resources',
    title: 'Course Resources',
    expanded: false,
    lessons: [
      {
        id: 'resources',
        title: 'Course Resources',
        completed: false,
        type: 'text',
      },
    ],
  },
  {
    id: 'getting-started',
    title: 'Getting Started',
    expanded: false,
    lessons: [
      {
        id: 'getting-started',
        title: 'Getting Started',
        completed: false,
        type: 'text',
      },
    ],
  },
  {
    id: 'assessment',
    title: 'Assessment',
    expanded: false,
    lessons: [{ id: 'quiz', title: 'Quiz', completed: false, type: 'quiz' }],
  },
]

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What is the purpose of React Hooks?',
    type: 'multiple-choice',
    points: 6,
    options: [
      'To use state and other React features in functional components',
      'To create class components',
      'To style React components',
      'To handle routing in React applications',
    ],
  },
  {
    id: 'q2',
    question: 'Which hook is used for side effects in React?',
    type: 'multiple-choice',
    points: 6,
    options: [
      'To use state and other React features in functional components',
      'To create class components',
      'To style React components',
      'To handle routing in React applications',
    ],
  },
  {
    id: 'q3',
    question: 'Explain the Virtual DOM and its benefits',
    type: 'text',
    points: 6,
  },
  {
    id: 'q4',
    question: 'What is the purpose of React Hooks?',
    type: 'multiple-choice',
    points: 6,
    options: [
      'To use state and other React features in functional components',
      'To create class components',
      'To style React components',
      'To handle routing in React applications',
    ],
  },
  {
    id: 'q5',
    question: 'Which hook is used for side effects in React?',
    type: 'multiple-choice',
    points: 6,
    options: [
      'To use state and other React features in functional components',
      'To create class components',
      'To style React components',
      'To handle routing in React applications',
    ],
  },
]

export const COURSE_DETAILS: Record<number, CourseDetail> = {
  1: {
    ...COURSES[0],
    totalApplicants: 1223,
    activeLearners: 13,
    applicants: APPLICANTS,
    sections: LESSON_SECTIONS,
    currentLesson: 'welcome',
  },
  2: {
    ...COURSES[1],
    totalApplicants: 856,
    activeLearners: 24,
    applicants: APPLICANTS,
    sections: LESSON_SECTIONS,
    currentLesson: 'welcome',
  },
  3: {
    ...COURSES[2],
    totalApplicants: 945,
    activeLearners: 18,
    applicants: APPLICANTS,
    sections: LESSON_SECTIONS,
    currentLesson: 'welcome',
  },
  4: {
    ...COURSES[3],
    totalApplicants: 1104,
    activeLearners: 31,
    applicants: APPLICANTS,
    sections: LESSON_SECTIONS,
    currentLesson: 'welcome',
  },
  5: {
    ...COURSES[4],
    totalApplicants: 782,
    activeLearners: 15,
    applicants: APPLICANTS,
    sections: LESSON_SECTIONS,
    currentLesson: 'welcome',
  },
  6: {
    ...COURSES[5],
    totalApplicants: 1567,
    activeLearners: 42,
    applicants: APPLICANTS,
    sections: LESSON_SECTIONS,
    currentLesson: 'welcome',
  },
}
