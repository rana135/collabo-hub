import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const collabapi = createApi({
    reducerPath: 'collabapi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    tagTypes: ['collabdataHandleChange'],
    endpoints: (builder) => ({ 

          createCollab: builder.mutation({
            query: ( data  ) => ({
              url: `/api/v1/collabdata`,
              method: 'POST',
              body: data,
            }),
            invalidatesTags: ['collabdataHandleChange'] 
          }),

        getAllCollab: builder.query({
            query: () => '/book/getall',
            providesTags: () => ['collabdataHandleChange']
        }),
        deleteCollab: builder.mutation({
          query: (id) => ({
            url: `/book/${id}`,
            method: 'DELETE',
          }),
        })
    })
})


export const {useCreateCollabMutation, useGetAllCollabQuery, useDeleteCollabMutation} = collabapi;