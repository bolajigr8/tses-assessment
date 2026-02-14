import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// types for  API responses
interface Course {
  id: number
  title: string
  description: string
  instructor: string
  duration: string
}

interface UserProfile {
  id: number
  name: string
  email: string
  bio: string
  avatar: string
}

//  JSONPlaceholder as a dummy API
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.com',
  }),
  tagTypes: ['Course', 'Profile'],
  endpoints: (builder) => ({
    // Example endpoint: getCourses
    getCourses: builder.query<Course[], void>({
      query: () => '/posts',
      transformResponse: (response: any[]): Course[] => {
        return response.slice(0, 10).map((post) => ({
          id: post.id,
          title: post.title,
          description: post.body,
          instructor: `Instructor ${post.userId}`,
          duration: `${Math.floor(Math.random() * 10) + 1} weeks`,
        }))
      },
      providesTags: ['Course'],
    }),

    // Example endpoint: getProfile
    getProfile: builder.query<UserProfile, number>({
      query: (userId) => `/users/${userId}`,
      transformResponse: (response: any): UserProfile => {
        return {
          id: response.id,
          name: response.name,
          email: response.email,
          bio: `${response.company?.catchPhrase || 'Professional developer'}`,
          avatar: `https://i.pravatar.cc/150?u=${response.id}`,
        }
      },
      providesTags: ['Profile'],
    }),
  }),
})

// Export hooks for usage in components
export const { useGetCoursesQuery, useGetProfileQuery } = apiSlice
