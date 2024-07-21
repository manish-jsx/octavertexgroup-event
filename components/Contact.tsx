const Contact = () => {
  return (
    <section className='py-12 bg-gray-100' id='contact'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center mb-8'>Get in Touch</h2>
        <form className='max-w-lg mx-auto space-y-4'>
          <input type='text' placeholder='Name' className='w-full p-3 border border-gray-300 rounded' />
          <input type='email' placeholder='Email' className='w-full p-3 border border-gray-300 rounded' />
          <textarea placeholder='Message' className='w-full p-3 border border-gray-300 rounded'></textarea>
          <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full'>Send</button>
        </form>
        <div className='text-center mt-8'>
          <p>Location: Bhubaneswar</p>
          <p>admin@octavertexgroup.com</p>
          <div className='social-media mt-4'>
            <a href='https://facebook.com' className='mx-2'>Facebook</a>
            <a href='https://instagram.com' className='mx-2'>Instagram</a>
            <a href='https://twitter.com' className='mx-2'>Twitter</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
