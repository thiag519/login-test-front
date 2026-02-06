export type PostTypeStory = {
  post: {
    id:number;
    title:string;
    content:string;
    reactUp:number;
    reactDown:number;
    userId:number;
    createdAt: Date;
    author: {
      name:string
    }
  }

  
}