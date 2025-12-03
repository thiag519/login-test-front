
type Props = {
    titlePost: string;
    contentPost: string;
  }
export const PostArea = ({titlePost, contentPost}:Props) => {
  
  return (
    <div className="w-full h-auto py-10">
      <h2 className="text-center text-xl mb-3 w-full">{titlePost}</h2>
      <div className="w-full h-auto"
      >{contentPost}</div>
    </div>
  )
}