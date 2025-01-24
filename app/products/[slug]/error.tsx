'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div className="min-h-screen bg-[rgb(15,24,41)] flex items-center justify-center">
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold text-white">Something went wrong!</h2>
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-[rgb(121,205,255)] text-white rounded-lg hover:bg-[rgb(121,205,255)]/90 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  )
}
