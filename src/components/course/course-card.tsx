import Link from 'next/link'
import { Course } from '@/constants/types'
import { cn } from '@/lib/utils'
import { SafeImage } from '@/components/ui/safe-image'

export function CourseCard({ course }: { course: Course }) {
  return (
    <Link href={`/teacher/courses/${course.id}`}>
      <div className='bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer'>
        <div className='relative h-40 w-full bg-linear-to-br from-blue-50 to-purple-50'>
          <SafeImage
            src={course.image}
            alt={course.title}
            fill
            className='object-cover'
          />
        </div>
        <div className='p-5'>
          <h3 className='font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary transition-colors'>
            {course.title}
          </h3>
          <p className='text-sm text-gray-600 mb-4 line-clamp-2'>
            {course.description}
          </p>
          <span
            className={cn(
              'inline-block px-3 py-1 rounded-full text-xs font-medium',
              course.categoryColor,
            )}
          >
            {course.category}
          </span>
        </div>
      </div>
    </Link>
  )
}
