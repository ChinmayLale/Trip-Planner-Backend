import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import axios from 'axios'

//Retrive the user info and token from the localStorage if available


const userFromStorage =  null ;
//localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) :


//Check for an existing guestId in the local Storage or generate a new one

const initialGuestId = localStorage.getItem("guestId") || `guest_${new Date().getTime()}`;
localStorage.setItem("guestId", initialGuestId);


//Setup inital state
const initialState = {  
    user: userFromStorage,
    guestId : initialGuestId,
    loading : false,
    error: null,
}


//Async Thunk for user login
export const loginUser = createAsyncThunk("auth/loginUser", async (userData, {rejectWithValue}) =>{

    try {
        
        const response = await axios.post(`https://trip-planner-docker.onrender.com/api/v1/user/login`, userData);
        console.log({response});
        localStorage.setItem("userInfo", JSON.stringify(response.data.user))
        localStorage.setItem('userToken', response.data.token);
        
        return response.data.data.user;// return the user object from the response

    } catch (error) {
       return rejectWithValue(error.response.data.message);
        
    }

})


//Async Thunk for user register
export const registerUser = createAsyncThunk("auth/registerUser", async (userData, {rejectWithValue}) =>{

    try {

        const response = await axios.post(`https://trip-planner-docker.onrender.com/api/v1/user/register`, userData);

        localStorage.setItem("userInfo", JSON.stringify(response.data.user))
        localStorage.setItem("userToken", JSON.stringify(response.data.token));
        

        return response.data.data.user;// return the user object from the response

    } catch (error) {
       return rejectWithValue(error.response.data.data.message);
        
    }

})


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers : {
        logout : (state) => {
            state.user = null;
            state.guestId = `guest_${new Date().getTime()}`; 
            
            //Reset the guest ID on logout
            localStorage.removeItem("userInfo");
            localStorage.removeItem("userToken");
            localStorage.setItem("guestId", state.guestId); //Set new guestId in localStorage


        },

        generateNewGuestId : (state) => {
            state.guestId = `guest_${new Date().getTime()}`;
            localStorage.setItem("guestId", state.guestId)
        }
    },

    extraReducers : (builder) => {
        builder
        .addCase(loginUser.pending, (state) =>{
            state.loading = true;
            state.error = null;
        })
        .addCase(loginUser.fulfilled, (state, action) =>{
            state.loading = false;
            state.user = action.payload;
        })
        .addCase(loginUser.rejected, (state,) =>{
            state.loading = false;
        
        })
        .addCase(registerUser.pending, (state) =>{
            state.loading = true;
            state.error = null;
        })
        .addCase(registerUser.fulfilled, (state, action) =>{
            state.loading = false;
            state.user = action.payload;
        })
        .addCase(registerUser.rejected, (state) =>{
            state.loading = false;
            
        })
    }

})



export const {logout, generateNewGuestId} =authSlice.actions;

export default authSlice.reducer