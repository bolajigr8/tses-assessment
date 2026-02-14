'use client'
import { Applicant } from '@/constants/types'
import { MoreVertical } from 'lucide-react'
import { SafeImage } from '../ui/safe-image'
import { PiChatCenteredTextThin } from 'react-icons/pi'

export function ApplicantTable({ applicants }: { applicants: Applicant[] }) {
  return (
    <div className='bg-white rounded-lg border border-gray-200 overflow-hidden'>
      <table className='w-full'>
        <thead>
          <tr className='border-b border-gray-200 bg-gray-50'>
            <th className='text-left py-3 px-6 text-sm font-bold text-gray-600'>
              Name
            </th>
            <th className='text-left py-3 px-6 text-sm font-bold text-gray-600'>
              City
            </th>
            <th className='text-left py-3 px-6 text-sm font-bold text-gray-600'>
              Email Address
            </th>
            <th className='text-right py-3 px-6 text-sm font-bold text-gray-600'>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {applicants.map((applicant, index) => (
            <tr
              key={applicant.id}
              className={
                index !== applicants.length - 1
                  ? 'border-b border-gray-100'
                  : ''
              }
            >
              <td className='py-4 px-6'>
                <div className='flex items-center gap-3'>
                  <div className='h-8 w-8 rounded-full bg-linear-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white text-sm font-medium overflow-hidden'>
                    {applicant.avatar ? (
                      <SafeImage
                        src={applicant.avatar}
                        alt={applicant.name}
                        width={32}
                        height={32}
                        className='object-cover'
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                        }}
                      />
                    ) : (
                      applicant.name.charAt(0)
                    )}
                  </div>
                  <span className='text-sm font-medium text-gray-900'>
                    {applicant.name}
                  </span>
                </div>
              </td>
              <td className='py-4 px-6 text-sm text-gray-600'>
                {applicant.city}
              </td>
              <td className='py-4 px-6 text-sm text-gray-600'>
                {applicant.email}
              </td>
              <td className='py-4 px-6 text-right'>
                <button className='p-1 hover:bg-gray-100 rounded transition-colors'>
                  <PiChatCenteredTextThin className='h-8 w-8 text-gray-400' />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
