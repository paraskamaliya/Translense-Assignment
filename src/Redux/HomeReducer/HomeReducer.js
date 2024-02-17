import { createSlice } from "@reduxjs/toolkit"

const initialState = JSON.parse(localStorage.getItem("data")) || {
    businessName: "",
    country: "",
    state: "",
    city: "",
    address: "",
    openingTime: "",
    closingTime: "",
    email: "",
    mobileNumber: "",
    image: ""
}

const HomeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        update: (state, action) => {
            const { field, value } = action.payload;
            localStorage.setItem("data", JSON.stringify({ ...state, [field]: value }))
            return { ...state, [field]: value }
        },
    }
})
export const { update } = HomeSlice.actions;

export default HomeSlice.reducer;