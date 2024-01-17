
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
            <p className='text-lg text-gray-100'>Monday - Friday: from 14:00-00:00</p>
            <p className='text-lg text-gray-100'>Saturday - Sunday: from 14:00-02:00</p>
            <br />
            <p className='text-md text-gray-100 italic'>Reservations: <a href='tel:+35797866197'>+357 97-866-197</a> </p>

        </div>
            <div style={mapContainerStyle} className='mt-5'>
      <div id="canvas-for-googlemap" style={canvasStyle} className='grayscale-[90%]'>
        <iframe
          style={iframeStyle}
          src="https://www.google.com/maps/embed/v1/place?q=Akt%C3%A9on,+B1+249,+Limassol+3035,+Cyprus&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
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