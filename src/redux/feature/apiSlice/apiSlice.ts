import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    tagTypes: ['TestiChange'],
    endpoints: (builder) => ({
        getAllTestimonials: builder.query({
            query: () => '/api/v1/testimonial', 
            providesTags: () => ['TestiChange']
        }),
        createTestimonial: builder.mutation({
            query: ( data  ) => ({
              url: `/api/v1/testimonial`,
              method: 'POST',
              body: data,
            }),
            invalidatesTags: ['TestiChange'] 
          }),
    })
})


export const { useGetAllTestimonialsQuery, useCreateTestimonialMutation} = api;