export type UserByIdInfoType = {
  success: boolean,
  user : {
    name: string,
		createdAt: Date,
		posts: [ 
      {
        title: string,
        content: string,
        reactUp: number,
        reactDown: number
      }
    ]
  }
}