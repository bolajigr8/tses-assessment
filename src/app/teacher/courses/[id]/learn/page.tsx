'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { ChevronLeft } from 'lucide-react'
import { COURSE_DETAILS, QUIZ_QUESTIONS } from '@/constants/data'
import { LessonSidebar } from '@/components/course/lesson-sidebar'
import { VideoPlayer } from '@/components/course/video-player'
import { LessonContent } from '@/components/course/lesson-content'
import { QuizView } from '@/components/course/quiz-view'
import { LessonSection } from '@/constants/types'
import { notFound } from 'next/navigation'

export default function LearnPage() {
  // ← Remove params from props
  const params = useParams() // ← Get params with useParams hook
  const courseId = parseInt(params.id as string) // ← Cast to string
  const course = COURSE_DETAILS[courseId]

  if (!course) {
    notFound()
  }

  const [sections, setSections] = useState<LessonSection[]>(course.sections)
  const [currentLesson, setCurrentLesson] = useState<string>('welcome')
  const [activeTab, setActiveTab] = useState<'content' | 'reviews'>('content')

  const handleSectionToggle = (sectionId: string) => {
    setSections(
      sections.map((section) =>
        section.id === sectionId
          ? { ...section, expanded: !section.expanded }
          : section,
      ),
    )
  }

  const handleLessonClick = (lessonId: string) => {
    setCurrentLesson(lessonId)
  }

  const handleLessonComplete = () => {
    setSections(
      sections.map((section) => ({
        ...section,
        lessons: section.lessons.map((lesson) =>
          lesson.id === currentLesson ? { ...lesson, completed: true } : lesson,
        ),
      })),
    )

    // Find next lesson
    let foundCurrent = false
    for (const section of sections) {
      for (const lesson of section.lessons) {
        if (foundCurrent && !lesson.completed) {
          setCurrentLesson(lesson.id)
          return
        }
        if (lesson.id === currentLesson) {
          foundCurrent = true
        }
      }
    }
  }

  const getCurrentLesson = () => {
    for (const section of sections) {
      const lesson = section.lessons.find((l) => l.id === currentLesson)
      if (lesson) return lesson
    }
    return null
  }

  const currentLessonData = getCurrentLesson()
  const isQuiz = currentLessonData?.type === 'quiz'

  return (
    <div className='flex min-h-screen bg-gray-50'>
      <div className='flex-1 overflow-y-auto'>
        <div className='max-w-5xl mx-auto px-6 py-8'>
          {/* Header */}
          <div className='flex items-center gap-4 mb-6'>
            <Link
              href={`/teacher/courses/${course.id}`}
              className='p-2 hover:bg-gray-100 rounded-full transition-colors'
            >
              <ChevronLeft className='h-5 w-5 text-gray-600' />
            </Link>
            <h1 className='text-xl font-semibold text-gray-900'>
              {course.title}
            </h1>
          </div>

          {/* Video Player */}
          {!isQuiz && (
            <div className='mb-8'>
              <VideoPlayer />
            </div>
          )}

          {/* Tabs */}
          <div className='border-b border-gray-200 mb-6'>
            <div className='flex gap-8'>
              <button
                onClick={() => setActiveTab('content')}
                className={`pb-3 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'content'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Course Content
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`pb-3 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'reviews'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Review/Feedbacks
              </button>
            </div>
          </div>

          {/* Content */}
          {activeTab === 'content' && (
            <div>
              {isQuiz ? (
                <QuizView questions={QUIZ_QUESTIONS} />
              ) : (
                <LessonContent
                  title={currentLessonData?.title || 'Welcome Message'}
                  onComplete={handleLessonComplete}
                />
              )}
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className='bg-white rounded-lg border border-gray-200 p-8 text-center'>
              <p className='text-gray-600'>No reviews yet</p>
            </div>
          )}
        </div>
      </div>

      {/* Sidebar */}
      <LessonSidebar
        sections={sections}
        currentLesson={currentLesson}
        onLessonClick={handleLessonClick}
        onSectionToggle={handleSectionToggle}
      />
    </div>
  )
}
