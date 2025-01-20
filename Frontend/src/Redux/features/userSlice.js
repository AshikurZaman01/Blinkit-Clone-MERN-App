import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    _id: "",
    name: "",
    email: "",
    avatar: "",
    mobile: "",
    verify_email: "",
    lastLoginDate: "",
    status: "",
    addressDetails: [],
    shoppingCart: [],
    orderHistory: [],
    role: ""
}

const userSlice = createSlice({
    name: "User",
    initialState,

    reducers: {

        setUserDetails: (state, action) => {
            Object.assign(state, action.payload); 
        },
    }
})

export const { setUserDetails } = userSlice.actions;

export default userSlice.reducer;