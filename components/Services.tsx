const Services = () => {
  return (
    <section className='py-12 bg-gray-100' id='services'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center mb-8'>What We Offer</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='service-card p-4 bg-white shadow-md rounded'>
            <h3 className='text-xl font-semibold mb-2'>Paid Assignments</h3>
            <p>Competitive rates and exciting opportunities.</p>
          </div>
          <div className='service-card p-4 bg-white shadow-md rounded'>
            <h3 className='text-xl font-semibold mb-2'>Professional Photo Shoots</h3>
            <p>Work with top photographers to build your portfolio.</p>
          </div>
          <div className='service-card p-4 bg-white shadow-md rounded'>
            <h3 className='text-xl font-semibold mb-2'>Networking Opportunities</h3>
            <p>Connect with industry professionals and peers.</p>
          </div>
          <div className='service-card p-4 bg-white shadow-md rounded'>
            <h3 className='text-xl font-semibold mb-2'>Showcase Your Unique Style</h3>
            <p>Display your personal style and stand out.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
