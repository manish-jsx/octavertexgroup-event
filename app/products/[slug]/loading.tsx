export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto animate-pulse">
        <div className="h-8 w-64 bg-[rgb(121,205,255)]/20 rounded mb-8"></div>
        <div className="space-y-4">
          <div className="h-4 w-full bg-[rgb(121,205,255)]/20 rounded"></div>
          <div className="h-4 w-3/4 bg-[rgb(121,205,255)]/20 rounded"></div>
        </div>
      </div>
    </div>
  )
}
