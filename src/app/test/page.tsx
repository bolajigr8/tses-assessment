'use client'

import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { selectUser, selectIsAuthenticated } from '@/store/slices/userSlice'

export default function UserExample() {
  const user = useAppSelector(selectUser)
  const isAuthenticated = useAppSelector(selectIsAuthenticated)

  const handleLogin = () => {}

  const handleLogout = () => {}

  console.log('user', user)

  return (
    <div className='p-4 border rounded'>
      <h2 className='text-xl font-bold mb-4'>User State Example</h2>

      {isAuthenticated ? (
        <div>
          <p>
            <strong>Status:</strong> Authenticated
          </p>
          <p>
            <strong>ID:</strong> {user.id}
          </p>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <button
            onClick={handleLogout}
            className='mt-2 px-4 py-2 bg-red-500 text-white rounded'
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <p>
            <strong>Status:</strong> Not authenticated
          </p>
          <button
            onClick={handleLogin}
            className='mt-2 px-4 py-2 bg-blue-500 text-white rounded'
          >
            Login (Demo)
          </button>
        </div>
      )}
    </div>
  )
}
