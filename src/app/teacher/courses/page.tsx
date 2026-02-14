'use client'

import { STATS, COURSES } from '@/constants/data'
import { StatCard } from '@/components/course/stat-card'
import { CourseCard } from '@/components/course/course-card'
import { SearchBar } from '@/components/course/search-bar'
import { Pagination } from '@/components/course/pagination'
import { Calendar, ChevronDown } from 'lucide-react'

export default function CoursesPage() {
  return (
    <main className='min-h-screen bg-gray-50'>
      <div className='max-w-7xl mx-auto px-6 py-8'>
        {/* Header */}
        <div className='mb-8'>
          <h1 className='text-2xl font-semibold text-gray-900 mb-2'>
            Course Management
          </h1>
          <p className='text-sm text-gray-600'>
            Create, organize, and assign courses to teams and individuals
          </p>
        </div>

        {/* Stats */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
          {STATS.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </div>

        {/* Search and Filters */}
        <div className='flex flex-col md:flex-row md:justify-between mb-6'>
          <SearchBar />

          <div className='md:flex md:gap-4 '>
            <button className='flex items-center gap-2 px-4 h-10 bg-white border border-gray-200 rounded-2xl hover:bg-gray-50 transition-colors'>
              <Calendar className='h-4 w-4 text-gray-600' />
              <span className='text-sm text-gray-700'>Date</span>
              <ChevronDown className='h-4 w-4 text-gray-400' />
            </button>

            <button className='flex items-center gap-2 px-4 h-10 bg-white border border-gray-200 rounded-2xl hover:bg-gray-50 transition-colors'>
              <span className='text-sm text-gray-700'>Category</span>
              <ChevronDown className='h-4 w-4 text-gray-400' />
            </button>
          </div>
        </div>

        {/* Course Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
          {COURSES.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* Pagination */}
        <div className='flex items-center justify-between my-12 '>
          <div className='flex items-center gap-2'>
            <span className='text-sm text-gray-600'>Show</span>
            <button className='flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-md hover:bg-gray-50 transition-colors'>
              <span className='text-sm text-gray-700'>10</span>
              <ChevronDown className='h-3 w-3 text-gray-400' />
            </button>
            <span className='text-sm text-gray-600'>/page</span>
          </div>

          <Pagination />
        </div>
      </div>
    </main>
  )
}
