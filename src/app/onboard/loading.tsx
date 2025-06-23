export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center min-h-[50vh] text-gray-600 text-sm gap-4">
      <div className="w-6 h-6 border-4 border-blue-600 border-t-transparent animate-spin rounded-full"></div>
      <p>Loading artist onboarding...</p>
    </div>
  );
}
