
type Props = {
    titlePost: string;
    contentPost: string;
  }
export const PostArea = ({titlePost, contentPost}:Props) => {
  
  return (
    <div className="w-full h-auto py-10">
      <h2 className="text-center text-xl text-gray-400 mb-3 w-full">
        {titlePost.charAt(1).toUpperCase().concat(titlePost.substring(2, titlePost.length -1))}</h2>
      <div className="w-full h-auto text-gray-400 text-sm"
      >{contentPost}</div>
    </div>
  )
}