import axios from "axios";

async function apiCall(url, consecuencia) {
  try {
    const { data } = await axios.post(url);
    consecuencia(data.response);
  } catch (error) {
    console.log(error);
  }
}

export default apiCall;
