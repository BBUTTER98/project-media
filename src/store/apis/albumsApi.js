import { faker } from "@faker-js/faker";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const albumsApi = createApi({
	reducerPath: "albums",
	baseQuery: fetchBaseQuery({
		baseUrl: "http://localhost:3005",
	}),
	endpoints(builder) {
		return {
			fetchAlbums: builder.query({
				providesTags: ['Album'],
				query: (user) => {
					return {
						url: "/albums",
						params: {
							userId: user.id,
						},
						method: "GET",
					};
				},
			}),
			addAlbum: builder.mutation({
				invalidatesTags: ['Album'],
				query: (user) => {
					return {
						url: "/albums",
						body: {
							title:faker.commerce.productName(),
							userId:user.id
						},
						method: "POST",
					};
				},
			}),
			dropAlbum: builder.mutation({
				invalidatesTags: ['Album'],
				query: (albumId) => {
					return {
						url: `/albums/${albumId}`,
						method: "DELETE",
					};
				},
			})
		};
	},
});
export const {useFetchAlbumsQuery, useAddAlbumMutation, useDropAlbumMutation} = albumsApi;
