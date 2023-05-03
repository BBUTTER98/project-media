import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice";
import { fetchUsers } from "./thunks/fetchUsers";
import { addUser } from "./thunks/addUser";
import { removeUser } from "./thunks/removeUser";
import { albumsApi, useAddAlbumMutation, useFetchAlbumsQuery, useDropAlbumMutation } from "./apis/albumsApi";
import { photosApi, useAddPhotoMutation, useFetchPhotosQuery, useDropPhotoMutation } from "./apis/photosApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
export const store = configureStore({
    reducer:{
        users:usersReducer,
        [albumsApi.reducerPath]:albumsApi.reducer,
        [photosApi.reducerPath]:photosApi.reducer,
    },
    middleware: (getDefaultMiddleware)=>{
        return getDefaultMiddleware().concat(albumsApi.middleware).concat(photosApi.middleware)
    }
})
setupListeners(store.dispatch);
export {fetchUsers};
export {addUser};
export {removeUser};
export {useFetchAlbumsQuery};
export {useAddAlbumMutation};
export {useDropAlbumMutation};
export {photosApi, useAddPhotoMutation, useFetchPhotosQuery, useDropPhotoMutation}
