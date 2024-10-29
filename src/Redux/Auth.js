import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signupData: null,
  loading: false,
  Pwtoken: localStorage.getItem("Pwtoken") ? JSON.parse(localStorage.getItem("Pwtoken")) : null, 
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setSignupData(state, action) {
      state.signupData = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setPwtoken(state, action) {  
      state.Pwtoken = action.payload; 
    },
  },
});

export const { setSignupData, setLoading, setPwtoken } = authSlice.actions; 

export default authSlice.reducer;
