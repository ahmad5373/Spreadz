import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { createUser, SignIn } from '../../apiUtils/UserApi';
import { toast } from 'react-toastify';
import { useAuth } from './AuthContext';
import { useTranslation } from 'react-i18next';

const Register = () => {
    const { t } = useTranslation();
    const [name, setName] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { login } = useAuth();


    const handleRegister = async (e) => {
        setLoading(true)
        e.preventDefault();
        try {

            const registerUserPayload = {name: name, phone:phoneNo, gender:gender, email:email, password:password }
            const { data } = await createUser(registerUserPayload)
            console.log("data... =>", data);
            const accessToken = data?.data?.access_token;
            console.log('gg',accessToken ? accessToken : '');
            await login(accessToken,data?.data)
            toast.success(data?.message || "user Regiseter Successfully.")
            navigate('/');
        } catch (error) {
            console.log('error', error?.response?.data?.message);
            toast.error(error?.response.data?.message || "something went wrong please try again.")
        } finally {
            setLoading(false)
        }
    };

    return (
        <div className='flex justify-center items-center h-screen w-full bg-gray-100'>
            <form onSubmit={handleRegister}>
                <div className="md:w-[1130px] space-y-10 w-full flex flex-col justify-center items-center bg-white rounded-2xl px-12 py-10">

                    <div className="lg:w-[498px] w-full flex flex-col items-center gap-3 lg:pb-8 p-2">
                        <h3 className="text-3xl base-font-heading">{t("Register_Title")}</h3>
                        <p className="text-sm base-font text-gray-800 mt-2">{t("Register_Subtitle")}</p>
                    </div>
                    <div className='w-full flex flex-col space-y-4'>
                        <div className='flex flex-col space-y-2'>
                            <label htmlFor="text" className="base-font text-base text-gray-450">{t("Label_FullName")}</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="outline-none focus:ring-1 base-font text-base placeholder:base-font rounded-xl focus:ring-orange-150 focus:border-orange-250 w-full pl-7 py-5 bg-gray-100"
                                placeholder={t("Placeholder_FullName")}
                                required
                            />
                        </div>
                        <div className='flex flex-col space-y-2'>
              <label htmlFor="gender" className="base-font text-base text-gray-450">{t("Label_Gender")}</label>
              <div className="flex items-center space-x-4">
                {["Male", "Female", "Other"].map((g) => (
                  <label key={g} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="gender"
                      value={g}
                      checked={gender === g}
                      onChange={(e) => setGender(e.target.value)}
                      className="focus:ring-orange-150 focus:ring-1 text-orange-150 rounded-full"
                    />
                    <span className="base-font text-gray-700">{t(`Gender_${g}`)}</span>
                  </label>
                ))}
              </div>
            </div>
                        {/* <div className='flex flex-col space-y-2'>
                            <label htmlFor="gender" className="base-font text-base text-gray-450">Gender</label>
                            <div className="flex items-center space-x-4">
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="Male"
                                        checked={gender === "Male"}
                                        onChange={(e) => setGender(e.target.value)}
                                        className="focus:ring-orange-150 focus:ring-1 text-orange-150 rounded-full"
                                    />
                                    <span className="base-font text-gray-700">Male</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="Female"
                                        checked={gender === "Female"}
                                        onChange={(e) => setGender(e.target.value)}
                                        className="focus:ring-orange-150 focus:ring-1 text-orange-150 rounded-full"
                                    />
                                    <span className="base-font text-gray-700">Female</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="Other"
                                        checked={gender === "Other"}
                                        onChange={(e) => setGender(e.target.value)}
                                        className="focus:ring-orange-150 focus:ring-1 text-orange-150 rounded-full"
                                    />
                                    <span className="base-font text-gray-700">Other</span>
                                </label>
                            </div>
                        </div> */}
                        <div className='flex flex-col space-y-2'>
                            <label htmlFor="number" className="base-font text-base text-gray-450">{t("Label_Phone")}</label>
                            <input
                                type="number"
                                name="phone"
                                id="phone"
                                value={phoneNo}
                                onChange={(e) => setPhoneNo(e.target.value)}
                                className="outline-none focus:ring-1 base-font text-base placeholder:base-font rounded-xl focus:ring-orange-150 focus:border-orange-250 w-full pl-7 py-5 bg-gray-100"
                                placeholder={t("Placeholder_Phone")}
                                required
                            />
                        </div>
                        <div className='flex flex-col space-y-2'>
                            <label htmlFor="email" className="base-font text-base text-gray-450">{t("Label_Email")}</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="outline-none focus:ring-1 base-font text-base placeholder:base-font rounded-xl focus:ring-orange-150 focus:border-orange-250 w-full pl-7 py-5 bg-gray-100"
                                placeholder={t("Placeholder_Email")}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="base-font text-base text-gray-450">{t("Label_Password")}</label>
                            <div className='r'>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder={t("Placeholder_Password")}
                                    className="outline-none focus:ring-1 base-font text-base placeholder:base-font rounded-xl focus:ring-orange-150 focus:border-orange-250 w-full pl-7 py-5 bg-gray-100"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className='md:w-96 w-full flex flex-col space-y-4'>
                        <div className='flex space-x-3'>
                            <p className='base-font text-lg text-gray-600'>{t("Register_AlreadyHaveAccount")}</p>
                            <Link to={'/login'} className='base-font-heading text-lg text-orange-150'>{t("Register_Login")}</Link>
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
                               {t("Button_Register")}
                            </button>
                        )}
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;