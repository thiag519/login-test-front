import axios from "axios";

export const createUser = async () => {
  
  try {
    const response = await axios.post(`http://localhost:3001/public/feed`);
      //console.log(response);
 
    return response.data;
  } catch (err) {
    console.log("Falha ao carregar  "+err)
    return null;
  }
}