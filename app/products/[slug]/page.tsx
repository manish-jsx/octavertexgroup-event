
import { notFound } from 'next/navigation'
import { products } from '@/config/products'

export async function generateStaticParams() {
  return products.flatMap(category => 
    category.items.map(item => ({
      slug: item.href.split('/').pop()
    }))
  )
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.flatMap(category => category.items)
    .find(item => item.href.split('/').pop() === params.slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <product.icon className="w-8 h-8 text-[rgb(121,205,255)]" />
          <h1 className="text-3xl font-bold text-white">{product.title}</h1>
        </div>
        <p className="text-[rgb(199,210,254)]/70 text-lg mb-8">
          {product.description}
        </p>
        {/* Add more product content here */}
      </div>
    </div>
  )
}