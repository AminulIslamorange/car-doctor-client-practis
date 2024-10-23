import { useContext, useState } from 'react';
import loginImg from '../../assets/images/login/login.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const {loginUser}=useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        loginUser(email,password)
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>console.error(error))
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row ">
                <div className="w-1/2 mr-64">
                    <img src={loginImg} alt="" />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-3xl text-center font-bold">Login !</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" name='email' required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="relative">
                                <input 
                                    type={showPassword ? "text" : "password"} 
                                    placeholder="password" 
                                    name='password' 
                                    className="input input-bordered w-full" 
                                    required 
                                />
                                <button 
                                    type="button" 
                                    onClick={togglePasswordVisibility} 
                                    className="absolute inset-y-0 right-3 flex items-center">
                                    {showPassword ? '👁️' : '🙈'}
                                </button>
                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className='btn btn-warning' type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='text-center mb-4'>New To Car doctor? <Link to='/signUp'><span className='text-orange-500 '>Sign Up</span></Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;