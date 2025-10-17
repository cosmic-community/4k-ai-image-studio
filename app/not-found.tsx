import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center max-w-md mx-auto px-4">
        <h2 className="text-6xl font-bold mb-4">404</h2>
        <p className="text-xl text-slate-400 mb-6">Page not found</p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-primary hover:bg-primary-dark rounded-lg font-medium transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}