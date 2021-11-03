import { createStore } from "@reduxjs/toolkit";
import userSlice from '../features/userSlice'

const store = createStore({
    reducers: {
        user: userSlice
    }
})




export default store