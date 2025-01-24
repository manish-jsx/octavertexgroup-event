import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[rgb(15,24,41)] flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-white">404 - Page Not Found</h1>
        <p className="text-[rgb(199,210,254)]/70">
          The page you're looking for doesn't exist.
        </p>
        <Link 
          href="/"
          className="inline-block px-6 py-3 bg-[rgb(121,205,255)] text-white rounded-lg hover:bg-[rgb(121,205,255)]/90 transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}
