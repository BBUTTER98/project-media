import { faker } from "@faker-js/faker";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const photosApi = createApi({
	reducerPath: "photos",
	baseQuery: fetchBaseQuery({
		baseUrl: "http://localhost:3005",
	}),
	endpoints(builder) {
		return {
			fetchPhotos: builder.query({
				providesTags: ['Photo'],
				query: (albumId) => {
					return {
						url: "/photos",
						params: {
							albumId: albumId,
						},
						method: "GET",
					};
				},
			}),
			addPhoto: builder.mutation({
				invalidatesTags: ['Photo'],
				query: (albumId) => {
					return {
						url: "/photos",
						body: {
							url:faker.image.abstract(150, 150, true),
							albumId:albumId
						},
						method: "POST",
					};
				},
			}),
			dropPhoto: builder.mutation({
				invalidatesTags: ['Photo'],
				query: (photoId) => {
					return {
						url: `/photos/${photoId}`,
						method: "DELETE",
					};
				},
			})
		};
	},
});
export const {useFetchPhotosQuery, useAddPhotoMutation, useDropPhotoMutation} = photosApi;
