import axios from "axios";

export const getUserName = async (userId: number|null) => {
  try {
    const res = await axios.get(`/api/proxy/private/user/${userId}`);
    return res.data.user.name;
    //console.log("Posts do usuário carregados", res.data.success);
  } catch (error) {
    console.log("Erro ao buscar posts do usuário", error);
  }
};