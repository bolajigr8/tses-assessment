import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'

export function SearchBar() {
  return (
    <div className='relative flex-1 max-w-md'>
      <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400' />
      <Input
        type='text'
        placeholder='Search Course'
        className='pl-10 h-10 bg-white rounded-2xl border-gray-200'
      />
    </div>
  )
}
