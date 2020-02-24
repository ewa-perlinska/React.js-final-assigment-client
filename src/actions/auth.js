import axios from "axios";

export const USER_CREATED = "USER_CREATED";

const baseUrl = "http://localhost:4000";

function signUpSuccess() {
  return { type: USER_CREATED };
}

export function signUp(username, email, password) {
  return async function(dispatch, getState) {
    try {
      const response = await axios.post(`${baseUrl}/signup`, {
        username: username,
        email: email,
        password: password
      });
      if (response.status === 201) {
        dispatch(signUpSuccess());
      }
    } catch (error) {
      throw error;
    }
  };
}
