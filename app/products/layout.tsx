export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[rgb(15,24,41)]">
      {children}
    </div>
  )
}
