import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full h-[700px] mt-12">
            <div id="slide1" className="carousel-item relative w-full " >
                <img
                    src={img1}
                    className="w-full rounded-xl" />
                <div className="absolute h-full left-0 top-0 items-center  text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]  p-20 rounded-xl">
                    <div>
                        <h3 className='text-6xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</h3>
                        <p className='mt-6'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className='mt-6'>
                            <button className='btn btn-warning mr-6'>Discover More</button>
                            <button className='btn btn-outline btn-warning'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute  right-12 bottom-20 flex -translate-y-1/2 transform justify-end">
                    <a href="#slide6" className="btn btn-circle mr-4 bg-slate-500">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-orange-500">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full " >
                <img
                    src={img2}
                    className="w-full rounded-xl" />
                <div className="absolute h-full left-0 top-0 items-center  text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]  p-20 rounded-xl">
                    <div>
                        <h3 className='text-6xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</h3>
                        <p className='mt-6'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className='mt-6'>
                            <button className='btn btn-warning mr-6'>Discover More</button>
                            <button className='btn btn-outline btn-warning'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute  right-12 bottom-20 flex -translate-y-1/2 transform justify-end">
                    <a href="#slide1" className="btn btn-circle mr-4 bg-slate-500">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-orange-500">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full " >
                <img
                    src={img3}
                    className="w-full rounded-xl" />
                <div className="absolute h-full left-0 top-0 items-center  text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]  p-20 rounded-xl">
                    <div>
                        <h3 className='text-6xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</h3>
                        <p className='mt-6'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className='mt-6'>
                            <button className='btn btn-warning mr-6'>Discover More</button>
                            <button className='btn btn-outline btn-warning'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute  right-12 bottom-20 flex -translate-y-1/2 transform justify-end">
                    <a href="#slide2" className="btn btn-circle mr-4 bg-slate-500">❮</a>
                    <a href="#slide4" className="btn btn-circle bg-orange-500">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full " >
                <img
                    src={img4}
                    className="w-full rounded-xl" />
                <div className="absolute h-full left-0 top-0 items-center  text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]  p-20 rounded-xl">
                    <div>
                        <h3 className='text-6xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</h3>
                        <p className='mt-6'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className='mt-6'>
                            <button className='btn btn-warning mr-6'>Discover More</button>
                            <button className='btn btn-outline btn-warning'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute  right-12 bottom-20 flex -translate-y-1/2 transform justify-end">
                    <a href="#slide3" className="btn btn-circle mr-4 bg-slate-500">❮</a>
                    <a href="#slide5" className="btn btn-circle bg-orange-500">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full " >
                <img
                    src={img5}
                    className="w-full rounded-xl" />
                <div className="absolute h-full left-0 top-0 items-center  text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]  p-20 rounded-xl">
                    <div>
                        <h3 className='text-6xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</h3>
                        <p className='mt-6'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className='mt-6'>
                            <button className='btn btn-warning mr-6'>Discover More</button>
                            <button className='btn btn-outline btn-warning'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute  right-12 bottom-20 flex -translate-y-1/2 transform justify-end">
                    <a href="#slide4" className="btn btn-circle mr-4 bg-slate-500">❮</a>
                    <a href="#slide6" className="btn btn-circle bg-orange-500">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full " >
                <img
                    src={img6}
                    className="w-full rounded-xl" />
                <div className="absolute h-full left-0 top-0 items-center  text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]  p-20 rounded-xl">
                    <div>
                        <h3 className='text-6xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</h3>
                        <p className='mt-6'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className='mt-6'>
                            <button className='btn btn-warning mr-6'>Discover More</button>
                            <button className='btn btn-outline btn-warning'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute  right-12 bottom-20 flex -translate-y-1/2 transform justify-end">
                    <a href="#slide5" className="btn btn-circle mr-4 bg-slate-500">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-orange-500">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;