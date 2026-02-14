import { Play } from 'lucide-react'

export function VideoPlayer() {
  return (
    <div className="relative w-full aspect-video bg-[url('/learn.png')] bg-cover bg-center rounded-lg overflow-hidden">
      <div className='absolute inset-0 flex items-center justify-center'>
        <button className='h-16 w-16 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg'>
          <Play className='h-6 w-6 text-gray-900 ml-1' fill='currentColor' />
        </button>
      </div>

      <div className='absolute top-8 left-8 opacity-20'>
        <div className='w-24 h-24 border-2 border-white rounded-lg' />
      </div>
      <div className='absolute bottom-8 right-8 opacity-20'>
        <div className='w-32 h-32 border-2 border-white rounded-lg' />
      </div>
    </div>
  )
}
