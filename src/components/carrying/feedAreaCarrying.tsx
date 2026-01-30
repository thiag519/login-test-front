export const FeedAreaCarrying = () => {
  return (
    <div
      className="w-full lg:w-4/5 h-[93vh] mt-16 flex items-start justify-center
        bottom-0"
    >
      <div
        className=" w-0 left-0 mx-3 min-h-160 my-5 rounded-e-md hidden md:flex md:w-1/4 
        lg:w-1/5 h-4/5 items-center justify-center bg-gray-900/50 text-gray-400 animate-pulse animation-delay-50 "
      >
      </div>
      <div
        className=" w-full left-0 mx-3 min-h-160 my-5 rounded-e-md flex md:w-1/3 
        lg:w-1/4 h-4/5 items-center justify-center bg-gray-900/50 text-gray-400 animate-pulse animation-delay-50"
      >
      </div>
      <div
        className=" w-0 left-0 mx-3 min-h-160 my-5 rounded-e-md hidden md:flex md:w-1/4 
        lg:w-1/5 h-4/5 items-center justify-center bg-gray-900/50 text-gray-400 animate-pulse animation-delay-50"
      >
      </div>
    </div>
  );
}