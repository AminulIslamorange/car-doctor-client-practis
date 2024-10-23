import person from '../../../../assets/images/about_us/person.jpg'
import perts from '../../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img
                        src={person}
                        className="w-3/4  rounded-lg shadow-2xl" />
                    <img
                        src={perts}
                        className="w-1/2  rounded-lg shadow-2xl absolute right-5 border-8 border-white top-1/2" /></div>
                <div className='lg: w-1/2 p-4'>
                <h3 className='text-3xl text-[#ca2e0e] font-bold'>About Us</h3>
                    <h1 className="text-5xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
                    <p className="py-6">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. 
                    </p>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                    <button className="btn btn-warning mt-4">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;