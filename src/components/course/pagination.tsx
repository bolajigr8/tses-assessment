import { Button } from '@/components/ui/button'

export function Pagination() {
  const pages = [1, 2, 3, 4, 5]
  const currentPage = 1

  return (
    <div className='flex items-center justify-center gap-4'>
      <Button
        variant='ghost'
        size='sm'
        className='h-8 px-3 text-sm font-medium text-gray-600 hover:text-gray-900'
      >
        Prev
      </Button>

      {pages.map((page) => (
        <Button
          key={page}
          variant='ghost'
          size='icon'
          className={`h-8 w-8 rounded-full border-2 text-sm font-medium ${
            page === currentPage
              ? 'border-blue-500 bg-blue-500 text-white hover:bg-blue-600'
              : 'border-blue-500 bg-white text-blue-500 hover:bg-gray-50'
          }`}
        >
          {page.toString().padStart(2, '0')}
        </Button>
      ))}

      <span className='px-1 text-gray-400'>...</span>

      <Button
        variant='ghost'
        size='icon'
        className='h-8 w-8 rounded-full border-2 border-blue-500 bg-white text-sm font-medium text-blue-500 hover:bg-gray-50'
      >
        24
      </Button>

      <Button
        variant='ghost'
        size='sm'
        className='h-8 px-3 text-sm font-medium text-gray-600 hover:text-gray-900'
      >
        Next
      </Button>
    </div>
  )
}
