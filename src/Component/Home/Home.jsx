import React from 'react';

const Home = () => {
    return (
        <div>
            <div className="carousel w-[1510px] h-[740px] text-center">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/r0FXQTH/pexels-lukas-574073.jpg" className="w-full opacity-40" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <div>
<h4 className='text-3xl font-bold text-white'>Introduction to C Programming</h4>
<p className='mx-32 font-bold'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
</div>
      <a href="#slide2" className="btn btn-circle">❯</a>


    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/JCQG31L/pexels-kevin-ku-577585.jpg" className="w-full opacity-40" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <div>
<h4 className='text-3xl font-bold text-white'>Introduction to C++ for DSA</h4>
<p className='mx-32 font-bold'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout..</p>
</div>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/pdBJLjY/pexels-christina-morillo-1181244.jpg" className="w-full opacity-40" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <div>
<h4 className='text-3xl font-bold text-white'>Basic Data Structures</h4>
<p className='mx-32 font-bold'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout..</p>
</div>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/dmsMWFw/pexels-sora-shimazaki-5926382.jpg" className="w-full opacity-40" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <div>
<h4 className='text-3xl font-bold text-white'>Introduction to OOP Python</h4>
<p className='mx-32 font-bold'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
</div>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Home;