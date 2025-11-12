import { Form, Formik } from 'formik';
import { useCallback, useState } from 'react'
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import CustomInput from '../components/CustomInput';

const SignUp = () => {
    // const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    // const [createUpdateEndPoint, { isLoading }] = useCreateUpdateEndPointMutation();

    const loginSchema = Yup.object({
        name: Yup.string().required("Name is Required"),
        email: Yup.string().email("Invalid Email Format").required("Email-Id is Required"),
        password: Yup.string().min(6, "Password Must Be At Least 6 Characters").required("Password is Required"),
        confirm_password: Yup.string().oneOf([Yup.ref("password"), null], "Password Must Match")
            .required("Confirm Password is Required"),
    });

    const handleClickShowPassword = useCallback(
        () => setShowPassword((show) => !show), [showPassword]
    );

    const handleClickShowConfirmPassword = useCallback(
        () => setShowConfirmPassword((show) => !show), [showConfirmPassword]
    );

    const handleLogin = (values) => {
        console.log('Form Data:', values);
    };

    // const handleLogin = async (values) => {
    //   const url = "admin/admin_login";
    //   const body = {
    //     username: values.email,
    //     password: values.password,
    //   };

    //   try {
    //     const res = await createUpdateEndPoint({ url, data: body }).unwrap();
    //     if (res.status) {
    //       localStorage.setItem(CONSTANTS.tokenLocalStorage, res?.token);
    //       dispatch(signin(res?.data));
    //       toast.success(res.message);
    //       // optional: redirect to dashboard after successful login
    //       // navigate("/admin/dashboard", { replace: true });
    //     }
    //   } catch (error) {
    //     // ensure readable error
    //     const msg = typeof error === "string" ? error : (error?.data?.message || "Login failed");
    //     toast.error(msg);
    //   }
    // };

    // const handleLogin = async (values) => {
    //   const url = "admin/admin_login";
    //   const body = {
    //     username: values.email,
    //     password: values.password,
    //   };

    //   try {
    //     const res = await createUpdateEndPoint({ url, data: body }).unwrap();
    //     if (res.status) {
    //       localStorage.setItem(CONSTANTS.tokenLocalStorage, res?.token);
    //       dispatch(signin(res?.data));
    //       toast.success(res.message);
    //     }
    //   } catch (error) {
    //     toast.error(error);
    //   }
    // };

    return (
        <div className='md:mt-28'>
            <div className="py-10 flex justify-center items-center" style={{
                background: "linear-gradient(96.68deg, #3C0A6D 1.9%, #3C0A6D 25.44%, #9D4EDD 141.01%)",
            }}>
                <div className="w-[90%] sm:w-[70%] md:w-[55%] lg:w-[35%] max-w-[640px] rounded-xl bg-white shadow-md 
                    p-8 md:mt-0 mt-20"
                >
                    <div className="justify-center flex items-center">
                        <img loading="lazy" src="/assets/logo.svg" alt="Logo" className="md:h-[50px] h-11" />
                    </div>

                    <h1 className="text-center text-2xl! inter_semibold text-black mt-5!">
                        Create Account
                    </h1>

                    <p className="text-center text-lg! inter_medium mt-1!">
                        Please enter your details to sign up
                    </p>

                    <Formik initialValues={{ name: '', email: "", password: "", confirm_password: "" }}
                        onSubmit={handleLogin} validationSchema={loginSchema}
                    >
                        {(props) => (
                            <Form className="mt-5" onSubmit={props.handleSubmit}>
                                <div className="mt-3">
                                    <CustomInput required label="Name" name="name" placeholder="Enter Your Name"
                                        autoComplete="name"
                                    />
                                </div>

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

                                <div className="mt-3">
                                    <CustomInput required name="confirm_password" label="Confirm Password"
                                        autoComplete="confirm_password" placeholder="Enter Your Confirm Password"
                                        type={showConfirmPassword ? "text" : "password"}
                                        rightElement={
                                            <button type="button" onClick={handleClickShowConfirmPassword} className="p-1.5"
                                                title={showConfirmPassword ? "Hide Password" : "Show Password"}
                                            >
                                                {showConfirmPassword ? (
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
                                    Sign Up
                                </button>

                                <div className="flex justify-center items-center gap-1">
                                    Already Have An Account?
                                    <Link to="/login" className="text-base! inter_medium text-[#3C0A6D]!">
                                        Sign In
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

export default SignUp