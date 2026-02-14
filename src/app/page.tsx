import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function HomePage() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 via-white to-blue-50'>
      <div className='text-center px-4'>
        {/* Logo/Brand */}
        <div className='mb-8'>
          <h1 className='text-5xl font-bold text-gray-900 mb-3'>Solusdesks</h1>
          <p className='text-lg text-gray-600'>Course Management Platform</p>
        </div>

        {/* CTA Button */}
        <Link
          href='/teacher'
          className='inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105'
        >
          Go to Dashboard
          <ArrowRight className='w-5 h-5' />
        </Link>
      </div>
    </div>
  )
}
