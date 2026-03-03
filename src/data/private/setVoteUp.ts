import axios from "axios";

export const setVoteUp = async (postId: number, userId: number|null): Promise<void> => {
  try {
    if(userId === null) {
      alert("Faça login para votar!");
      return;
    }
    const res = await axios.patch(`/api/proxy/private/post/voteUp/${postId}`);
    //console.log(res.status);
    //window.location.reload();

  } catch (err: any) {
    alert("Você já votou nesse post!");
  }
};