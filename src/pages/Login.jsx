import { Form, Formik } from 'formik';
import { useCallback, useState } from 'react'
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import CustomInput from '../components/CustomInput';
import { useDispatch } from 'react-redux';
import { useCreateUpdateEndPointMutation } from '../services/crudEndPointApi';
import toast from 'react-hot-toast';

const Login = () => {
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false);
    const [createUpdateEndPoint, { isLoading }] = useCreateUpdateEndPointMutation();

    const loginSchema = Yup.object({
        email: Yup.string().email("Invalid Email Format").required("Email-Id is Required"),
        password: Yup.string().min(6, "Password Must Be At Least 6 Characters").required("Password is Required"),
    });
    
    const handleClickShowPassword = useCallback(
        () => setShowPassword((show) => !show), [showPassword]
    );

    const handleLogin = async (values) => {
      const url = "admin/admin_login";
      const body = {
        email: values.email,
        password: values.password,
      };

    //   return console.log('body: ', body);
      try {
        const res = await createUpdateEndPoint({ url, data: body }).unwrap();
        console.log('res: ', res);
        if (res.status) {
          localStorage.setItem(CONSTANTS.tokenLocalStorage, res?.token);
          dispatch(signin(res?.data));
          toast.success(res.message);
        }
      } catch (error) {
        toast.error(error);
      }
    };

    return (
        <div className='md:mt-28'>
            <div className="md:h-[84vh] h-screen flex justify-center items-center" style={{
                background: "linear-gradient(96.68deg, #3C0A6D 1.9%, #3C0A6D 25.44%, #9D4EDD 141.01%)",
            }}>
                <div className="w-[90%] sm:w-[70%] md:w-[55%] lg:w-[35%] max-w-[640px] rounded-xl bg-white shadow-md 
                    p-8 md:mt-0 mt-20"
                >
                    <div className="justify-center flex items-center">
                        <img loading="lazy" src="/assets/logo.svg" alt="Logo" className="md:h-[50px] h-11" />
                    </div>

                    <h1 className="text-center text-2xl! inter_semibold text-black mt-5!">
                        Login to Account
                    </h1>

                    <p className="text-center text-lg! inter_medium mt-1!">
                        Please enter your email and password to continue
                    </p>

                    <Formik initialValues={{ email: "", password: "" }}
                        onSubmit={handleLogin} validationSchema={loginSchema}
                    >
                        {(props) => (
                            <Form className="mt-5" onSubmit={props.handleSubmit}>
                                <div className="mt-3">
                                    <CustomInput required label="Email-Id" name="email" placeholder="Enter Your Email-Id"
                                        autoComplete="email"
                                    />
                                </div>

                                <div className="mt-3">
                                    <CustomInput required name="password" label="Password" autoComplete="password"
                                        placeholder="Enter Your Password" type={showPassword ? "text" : "password"}
                                        rightElement={
                                            <button type="button" onClick={handleClickShowPassword} className="p-1.5"
                                                title={showPassword ? "Hide Password" : "Show Password"}
                                            >
                                                {showPassword ? (
                                                    <MdVisibility className="w-5 h-5 text-[#4A5A6B]" />
                                                ) : (
                                                    <MdVisibilityOff className="w-5 h-5 text-[#4A5A6B]" />
                                                )}
                                            </button>
                                        }
                                    />
                                </div>


                                <button type="submit" className={`my-4! w-full inline-flex bg-[#3C0A6D] items-center
                                    inter_medium justify-center rounded-md! px-4 py-2.5 text-white!`}
                                >
                                    Sign In
                                </button>

                                <div className="flex justify-center items-center gap-1">
                                    Don't Have An Account?
                                    <Link to="/sign-up" className="text-base! inter_medium text-[#3C0A6D]!">
                                        Sign Up
                                    </Link>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default Login