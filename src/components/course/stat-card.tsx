import { Stat } from '@/constants/types'
import { BookOpen, GraduationCap, ListChecks } from 'lucide-react'
import { cn } from '@/lib/utils'

const iconMap = {
  'book-open': BookOpen,
  'graduate-cap': GraduationCap,
  'list-up': ListChecks,
}

export function StatCard({ stat }: { stat: Stat }) {
  const Icon = iconMap[stat.icon as keyof typeof iconMap] || BookOpen

  console.log('Rendering StatCard with stat:', stat.icon)

  return (
    <div className='bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow relative'>
      <div className='flex items-start gap-4'>
        <div className={cn('p-3 rounded-lg shrink-0', stat.bgColor)}>
          <Icon className={cn('h-6 w-6', stat.iconColor)} />
        </div>
        <div className='flex-1 min-w-0'>
          <p className='text-sm text-gray-600 mb-1'>{stat.label}</p>
          <p className='text-3xl font-semibold text-gray-900'>{stat.value}</p>
        </div>
      </div>

      {stat.trend && (
        <div className='absolute bottom-6 right-6'>
          <p className='text-xs text-green-600 font-medium'>{stat.trend}</p>
        </div>
      )}
    </div>
  )
}
