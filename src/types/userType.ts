import { PostType } from "./postType";

export type UserType = {
  id: number;
  name:string;
  email?:string;
  password?:string;
  token?:string;
  createAt:Date;
  count:number;
  posts:PostType[];
}