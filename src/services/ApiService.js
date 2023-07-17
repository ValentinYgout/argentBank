import axios from 'axios';
import { loginStart, loginSuccess, loginFailure,modifyProfileName } from '../authSlice';



const ApiService = {
  login: async (dispatch, email, password) => {
    dispatch(loginStart());
    try {
      const response = await axios.post('http://localhost:3001/api/v1/user/login', {
        email,
        password
      });

      const { data } = response; // Assuming the response contains the user data

      // You can perform any necessary data conversion or formatting here
      // For example, you can extract the token from the response and store it for future requests.
      dispatch(loginSuccess(data.body.token));
      // console.log(data);
      // ApiService.fetchProfile(data.body.token);



      return data; // Return the user data or any relevant information
    } catch (error) {
      dispatch(loginFailure());
      console.error('Error fetching data:', error);
      throw error;
    }
  },

  fetchProfile: async (dispatch,token) => {
    try {
      const response = await axios.post('http://localhost:3001/api/v1/user/profile', {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const { data } = response; // Assuming the response contains the user data

      // You can perform any necessary data conversion or formatting here
      // For example, you can extract the token from the response and store it for future requests.
      console.log(data.body);
      
      dispatch(modifyProfileName(data.body.firstName));
      return data.body; // Return the user data or any relevant information

    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  },


  EditProfile: async (dispatch,firstName, lastName, token) => {
    try {
      const response = await axios.put('http://localhost:3001/api/v1/user/profile',
        {
          firstName: firstName,
          lastName: lastName
        },{
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const { data } = response; // Assuming the response contains the user data

      // You can perform any necessary data conversion or formatting here
      // For example, you can extract the token from the response and store it for future requests.
      console.log(data.body);
      dispatch(modifyProfileName(data.body.firstName))

      return data.body; // Return the user data or any relevant information
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }
};




export default ApiService;
