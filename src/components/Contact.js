
import React from 'react'

const Contact = () => {
    const mapContainerStyle = {
        maxWidth: '100%',
        listStyle: 'none',
        transition: 'none',
        overflow: 'hidden',
        width: '100%',
        height: '300px',
        borderRadius: '5px',
      };
    
      const canvasStyle = {
        height: '100%',
        width: '100%',
        maxWidth: '100%'
      };
    
      const iframeStyle = {
        height: '100%',
        width: '100%',
        border: '0',
        // filter: 'invert(80%)',
      };
  return (
    <section className='mt-10'>
            <p className='text-lg -mb-2 text-gray-500'>Find us here</p>
        <h2 className='text-3xl font-black ' >Contact</h2>

        <div className='mt-5 text-center justify-center items-center'>
            <h3 className='text-xl font-bold mb-2'>Join us daily</h3>
            <p className='text-lg text-gray-100'>Monday - Friday <br />14:00-00:00</p>
            <p className='text-lg text-gray-100'>Saturday - Sunday <br />14:00-02:00</p>
            <br />
            <p className='text-md text-gray-100 italic'>Reservations: <a href='tel:+35797866197'>+357 97-866-197</a> </p>

        </div>
            <div style={mapContainerStyle} className='mt-5'>
      <div id="canvas-for-googlemap" style={canvasStyle} className='grayscale-[90%]'>
        <iframe
          style={iframeStyle}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1640.498634988494!2d33.05164596783069!3d34.68001837187145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14e733f5adc5b183%3A0x72b87420d5a6cc5f!2s3035%20lounge%20%26%20bar!5e0!3m2!1sen!2sge!4v1707551117053!5m2!1sen!2sge"
          allowFullScreen
        ></iframe>
      </div>
      <a
        className="google-maps-html"
        href="https://www.bootstrapskins.com/themes"
        id="get-map-data"
      >
  
      </a>
    </div>
    </section>
  )
}

export default Contact