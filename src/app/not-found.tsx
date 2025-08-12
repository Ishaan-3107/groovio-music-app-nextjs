export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-black dark:bg-black dark:text-white">
      <h1 className="text-2xl md:text-4xl font-bold">Oops! Page Not Found</h1>
      <p className="mt-4">The page you’re looking for doesn’t exist.</p>
    </div>
  );
}
