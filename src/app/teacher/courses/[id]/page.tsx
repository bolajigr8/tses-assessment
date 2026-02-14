import Link from 'next/link'
import { ChevronLeft, Users, GraduationCap, ChevronDown } from 'lucide-react'
import { COURSE_DETAILS } from '@/constants/data'
import { Button } from '@/components/ui/button'
import { ApplicantTable } from '@/components/course/applicant-table'
import { Pagination } from '@/components/course/pagination'
import { notFound } from 'next/navigation'
import { SafeImage } from '@/components/ui/safe-image'

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const courseId = parseInt(id)
  const course = COURSE_DETAILS[courseId]

  if (!course) {
    notFound()
  }

  return (
    <main className='min-h-screen bg-gray-50'>
      <div className='max-w-7xl mx-auto px-6 py-8'>
        {/* Header */}
        <div className='flex items-center justify-between mb-6'>
          <div className='flex items-center gap-4'>
            <Link
              href='/teacher/courses'
              className='p-2 hover:bg-gray-100 rounded-full transition-colors'
            >
              <ChevronLeft className='h-5 w-5 text-gray-600' />
            </Link>
            <div className='flex gap-4 items-center'>
              <h1 className='text-xl font-semibold text-gray-900'>
                {course.title}
              </h1>
              <span
                className={`px-3 mt-1  rounded-full text-xs font-medium bg-[#E1F5FE] text-gray-800 `}
              >
                {course.category}
              </span>
            </div>
          </div>
          <div className='flex items-center gap-3'>
            <Link href={`/teacher/courses/${course.id}/learn`}>
              <Button className='text-white bg-blue-500'>Start Learning</Button>
            </Link>
          </div>
        </div>

        {/* Banner */}
        <div className='relative h-64 w-full bg-linear-to-br from-blue-50 to-purple-50 rounded-lg overflow-hidden mb-8'>
          <SafeImage
            src={course.image}
            alt={course.title}
            fill
            className='object-cover'
          />
        </div>

        {/* Stats */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
          <div className='bg-white rounded-lg border border-gray-200 p-6'>
            <div className='flex items-center gap-4'>
              <div className='p-3 bg-cyan-50 rounded-lg'>
                <Users className='h-6 w-6 text-cyan-600' />
              </div>
              <div>
                <p className='text-sm text-gray-600 mb-1'>Total Applicants</p>
                <p className='text-3xl font-semibold text-gray-900'>
                  {course.totalApplicants}
                </p>
              </div>
            </div>
          </div>

          <div className='bg-white rounded-lg border border-gray-200 p-6'>
            <div className='flex items-center gap-4'>
              <div className='p-3 bg-blue-50 rounded-lg'>
                <GraduationCap className='h-6 w-6 text-blue-600' />
              </div>
              <div>
                <p className='text-sm text-gray-600 mb-1'>Active Learners</p>
                <p className='text-3xl font-semibold text-gray-900'>
                  {course.activeLearners}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Applicants Table */}
        <ApplicantTable applicants={course.applicants} />

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
