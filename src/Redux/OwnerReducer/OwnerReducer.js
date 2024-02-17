import { createSlice } from "@reduxjs/toolkit"

const initialState = JSON.parse(localStorage.getItem("OwnerData")) || {
    fullName: "",
    state: "",
    image: "",
    city: "",
    country: "",
    address: "",
    email: "",
    mobileNumber: ""
}

const OwnerSlice = createSlice({
    name: "owner",
    initialState,
    reducers: {
        updateForm: (state, action) => {
            const { field, value } = action.payload;
            localStorage.setItem("OwnerData", JSON.stringify({ ...state, [field]: value }))
            return { ...state, [field]: value }
        },
    }
})
export const { updateForm } = OwnerSlice.actions;

export default OwnerSlice.reducer;