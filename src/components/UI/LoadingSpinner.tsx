export const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-transparent border-t-cyan-400 border-r-violet-500 rounded-full animate-spin"></div>
        <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-b-cyan-400 border-l-violet-500 rounded-full animate-spin animate-reverse"></div>
      </div>
      <span className="ml-4 text-sm text-gray-400 roboto-mono">Initializing...</span>
    </div>
  )
}