import axios from "axios";

export const setVoteDown = async () => {
  
  try {
    const response = await axios.get(`http://localhost:3001/public/feed`);
      //console.log(response);
 
    return response.data;
  } catch (err) {
    console.log("Falha ao carregar  "+err)
    return null;
  }
}