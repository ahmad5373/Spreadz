import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { SignIn } from '../../apiUtils/UserApi';
import { toast } from 'react-toastify';
import { useAuth } from './AuthContext';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
  const { login } = useAuth();


    const handleLogin = async (e) => {
        setLoading(true)
        e.preventDefault();
       try {
        const loginPayload = { email: email, password: password }
        const { data } = await SignIn(loginPayload)
        console.log("data =>", data);
        // const accessToken = data?.data?.access_token;
        await login(data?.user)
        toast.success(data?.message || "user LoggedIn Successfully.")
        navigate('/');
       } catch (error) {
        console.log('error',error?.response?.data?.message);
        toast.error(error?.response.data?.message || "something went wrong please try again.")
       }finally{
        setLoading(false)
       }
    };

    return (
        <div className='flex justify-center items-center h-screen w-full bg-gray-100'>
            <form onSubmit={handleLogin}>
                <div className="md:w-[772px] space-y-20 w-full flex flex-col justify-center items-center bg-white rounded-2xl px-12 py-16">

                    <div className="lg:w-[498px] w-full flex flex-col items-center gap-3 lg:pb-11 p-2">
                        <h3 className="text-3xl base-font-heading">Sign In</h3>
                        <p className="text-sm base-font text-gray-800 mt-2">Enter your credentials to Log In</p>
                    </div>
                    <div className='w-full flex flex-col space-y-4'>
                        <div className='flex flex-col space-y-2'>
                            <label htmlFor="email" className="base-font text-base text-gray-450">E-mail Address</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="outline-none focus:ring-1 base-font text-base placeholder:base-font rounded-xl focus:ring-orange-150 focus:border-orange-250 w-full pl-7 py-5 bg-gray-100"
                                placeholder="Enter your e-mail"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="base-font text-base text-gray-450">Password</label>
                            <div className='r'>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter password"
                                    className="outline-none focus:ring-1 base-font text-base placeholder:base-font rounded-xl focus:ring-orange-150 focus:border-orange-250 w-full pl-7 py-5 bg-gray-100"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className='md:w-96 w-full flex flex-col space-y-4'>
                        <div className='flex space-x-3'>
                            <p className='base-font text-lg text-gray-600'>Don’t have an account?</p>
                            <Link to={'/register'} className='base-font-heading text-lg text-orange-150'>Create One</Link>
                        </div>
                        {loading ? (
                            <button className="md:w-80 w-full bg-orange-150 px-5 rounded-lg">
                                <ClipLoader loading={loading} height={12} width={5} radius={5} margin={2} aria-label="Loading Spinner" color='white' />
                            </button>
                        ) : (
                            <button
                                type='submit'
                                className="md:w-80 w-full py-3 flex items-center justify-center text-white bg-orange-150 base-font-heading text-xl rounded-xl"
                            >
                                Log In
                            </button>
                        )}
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;