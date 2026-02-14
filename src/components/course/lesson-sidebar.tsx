'use client'

import { LessonSection } from '@/constants/types'
import { ChevronDown, ChevronUp, CheckCircle2, Circle } from 'lucide-react'
import { cn } from '@/lib/utils'

interface LessonSidebarProps {
  sections: LessonSection[]
  currentLesson: string
  onLessonClick: (lessonId: string) => void
  onSectionToggle: (sectionId: string) => void
}

export function LessonSidebar({
  sections,
  currentLesson,
  onLessonClick,
  onSectionToggle,
}: LessonSidebarProps) {
  const totalLessons = sections.reduce(
    (acc, section) => acc + section.lessons.length,
    0,
  )
  const completedLessons = sections.reduce(
    (acc, section) => acc + section.lessons.filter((l) => l.completed).length,
    0,
  )

  return (
    <div className='w-80 mt-22 rounded-2xl bg-white border border-gray-200 h-screen overflow-y-auto sticky top-0'>
      {/* Header */}
      <div className='px-6 py-4 border-b border-gray-200'>
        <p className='text-sm text-gray-500'>
          Lessons ({completedLessons}/{totalLessons})
        </p>
      </div>

      {/* Sections */}
      <div>
        {sections.map((section) => (
          <div key={section.id} className='border-b border-gray-100'>
            {/* Section Header */}
            <button
              onClick={() => onSectionToggle(section.id)}
              className='w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors text-left group'
            >
              <span className='text-sm font-semibold text-gray-900'>
                {section.title}
              </span>
              {section.expanded ? (
                <ChevronUp className='h-5 w-5 text-gray-400 group-hover:text-gray-600' />
              ) : (
                <ChevronDown className='h-5 w-5 text-gray-400 group-hover:text-gray-600' />
              )}
            </button>

            {/* Lessons */}
            {section.expanded && (
              <div className='bg-gray-50/50'>
                {section.lessons.map((lesson) => {
                  const isActive = currentLesson === lesson.id

                  return (
                    <button
                      key={lesson.id}
                      onClick={() => onLessonClick(lesson.id)}
                      className={cn(
                        'w-full px-6 py-3 flex items-center justify-between transition-colors text-left group',
                        isActive
                          ? 'bg-blue-50 hover:bg-blue-50'
                          : 'hover:bg-gray-50',
                      )}
                    >
                      <span
                        className={cn(
                          'text-sm leading-snug',
                          isActive
                            ? 'text-blue-600 font-medium'
                            : lesson.completed
                              ? 'text-gray-700'
                              : 'text-gray-600',
                        )}
                      >
                        {lesson.title}
                      </span>
                      {lesson.completed ? (
                        <CheckCircle2 className='h-5 w-5 text-blue-600 shrink-0' />
                      ) : (
                        <Circle className='h-5 w-5 text-gray-300 group-hover:text-gray-400 shrink-0' />
                      )}
                    </button>
                  )
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
