import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

interface IUsers {
	id: number;
	name: string;
	username: string;
	email: string;
}


export const userApi = createApi({
	reducerPath: 'userApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
	tagTypes: ['User'],
	endpoints: (builder) => ({
		getUsers: builder.query<IUsers, null>({
			query: () => `users`,
			providesTags: result => ['User']
		}),
		createPost: builder.mutation<IUsers, IUsers>({
			query: (newUser) => ({
				url: '/users',
				method: 'POST',
				body: newUser
			}),
			invalidatesTags: ['User']
		})
	}),
})

export const { useGetUsersQuery, useCreatePostMutation } = userApi;
