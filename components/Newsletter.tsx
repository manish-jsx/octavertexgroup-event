const Newsletter = () => {
  return (
    <section className='py-12 bg-gray-100'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center mb-8'>Stay Updated</h2>
        <form className='max-w-lg mx-auto space-y-4'>
          <input type='email' placeholder='Email address' className='w-full p-3 border border-gray-300 rounded' />
          <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full'>Subscribe</button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
