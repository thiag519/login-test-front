import axios from "axios";

export const deletePost = async (postId: number) => {
  try {
    let result = window.confirm("Post sera deletado! você tem certeza disso?");
    if(result) {
      const res = await axios.delete(`/api/proxy/private/post/${postId}`);
      window.location.reload();
    }
    //console.log(res.status);
    
  } catch (err) {
    console.log("Erro ao deletar post", err);
    alert("Você não pode deletar esse post.");
  }
};