export interface Stat {
  id: string
  label: string
  value: string | number
  trend?: string
  icon: string
  bgColor: string
  iconColor: string
}

export interface Course {
  id: number
  title: string
  description: string
  category: string
  image: string
  categoryColor: string
}

export interface Category {
  value: string
  label: string
}

export interface NavLink {
  href: string
  label: string
  active?: boolean
}

export interface Applicant {
  id: number
  name: string
  avatar: string
  city: string
  email: string
}

export interface Lesson {
  id: string
  title: string
  completed: boolean
  type?: 'video' | 'text' | 'quiz'
}

export interface LessonSection {
  id: string
  title: string
  lessons: Lesson[]
  expanded: boolean
}

export interface QuizQuestion {
  id: string
  question: string
  type: 'multiple-choice' | 'text'
  options?: string[]
  points: number
  selectedAnswer?: string
}

export interface CourseDetail extends Course {
  totalApplicants: number
  activeLearners: number
  applicants: Applicant[]
  sections: LessonSection[]
  currentLesson?: string
}
