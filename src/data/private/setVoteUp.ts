import axios from "axios";

export const setVoteUp = async (postId: number): Promise<void> => {
  try {
    const res = await axios.patch(`/api/proxy/private/post/voteUp/${postId}`);
    //console.log(res.status);
    window.location.reload();

  } catch (err) {
    console.log("Erro ao votar", err);
    alert("Você já votou nesse post!");
  }
};