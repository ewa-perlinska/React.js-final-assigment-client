import axios from "axios";

const baseUrl = "http://localhost:4000";

export const RISK_FETCHED = "RISK_FETCHED";

export function risk(riskNumber) {
  return {
    type: RISK_FETCHED,
    payload: riskNumber
  };
}

export function loadRisk() {
  return async function(dispatch) {
    try {
      const response = await axios.get(`${baseUrl}/risk`);
      const { data } = response;

      const action = risk(data);
      dispatch(action);
    } catch (error) {
      throw error;
    }
  };
}
