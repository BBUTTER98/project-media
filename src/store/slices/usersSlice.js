import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUsers";
import { addUser } from "../thunks/addUser";
import { removeUser } from "../thunks/removeUser";
export const usersSlice = createSlice({
    name:'users',
    initialState: {
        data:[],
        isLoading:false,
        isError:null,
    },
    reducers:{},
    extraReducers(builder){
        builder.addCase(fetchUsers.pending, (state,action)=>{
            state.isLoading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state,action)=>{
            state.isLoading = false
            state.data = action.payload
        })
        builder.addCase(fetchUsers.rejected, (state,action)=>{
            state.isLoading = false
            state.isError = action.error
        })
        builder.addCase(addUser.pending, (state,action)=>{
            state.isLoading = true
        })
        builder.addCase(addUser.fulfilled, (state,action)=>{
            state.isLoading = false
        })
        builder.addCase(addUser.rejected, (state,action)=>{
            state.isLoading = false
            state.isError = action.error
        })
        builder.addCase(removeUser.pending, (state,action)=>{
            state.isLoading = true
        })
        builder.addCase(removeUser.fulfilled, (state,action)=>{
            state.data = state.data.filter(user=>user.id!==action.meta.arg)
            state.isLoading = false
        })
        builder.addCase(removeUser.rejected, (state,action)=>{
            state.isLoading = false
            state.isError = action.error
        })
    }
})
export const usersReducer = usersSlice.reducer;