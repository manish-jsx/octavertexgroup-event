const Works = () => {
  return (
    <section className='py-12' id='works'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center mb-8'>See Our Previous Work</h2>
        <div className='gallery grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          <img src='/example1.jpg' alt='Example Work 1' className='rounded shadow-md' />
          <img src='/example2.jpg' alt='Example Work 2' className='rounded shadow-md' />
        </div>
        <div className='testimonials mt-8'>
          <blockquote className='text-center italic'>"Great experience working with this team!" - Model A</blockquote>
          <blockquote className='text-center italic mt-4'>"A fantastic platform for showcasing talent." - Model B</blockquote>
        </div>
      </div>
    </section>
  );
}

export default Works;
