import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const removeUser = createAsyncThunk('users/remove', async (userId)=>{
    const path = `http://localhost:3005/users/${userId}`;
    const response = await axios.delete(path);
    return response.data;
})