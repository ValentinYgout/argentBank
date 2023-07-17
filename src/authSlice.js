import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    isAuthenticated: false,
    isLoading: false,
    profileName:null
  },
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
      state.token = action.payload;
      state.isAuthenticated = true;
      state.isLoading = false;
    },
    loginFailure: (state) => {
      state.isLoading = false;
    },
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
    },
    modifyProfileName: (state, action) => {
      state.profileName = action.payload;
    }
  },
});

export const { loginStart, loginSuccess, loginFailure, logout,modifyProfileName } = authSlice.actions;

// Export the reducer directly
export default authSlice.reducer;

// Export a prepare function for non-serializable values
// export const prepareAction = (action) => {
//   return {
//     payload: action.payload,
//   };
// };

// Usage example:
// dispatch(prepareAction(loginSuccess(someNonSerializableValue)));
