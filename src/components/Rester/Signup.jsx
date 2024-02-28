import React, { useEffect } from 'react'
import { Box, Button, FormControl, FormErrorMessage, Input, useToast } from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'

import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { signupAction } from '../../Redux/Auth/Action'

const LoginValSchema = Yup.object().shape(

    {
        email: Yup.string().email("Invalid email address format").required("Email is required"),
        password: Yup.string().required("Password is required"),
        username: Yup.string().required("username is required").min(4, "min length must be 4"),
        name: Yup.string().required("name is required").min(4, "min length must be 4")

    }
)
const Signup = () => {

    const dispatch = useDispatch();

    const  auth  = useSelector(store => store.auth);
    const toast = useToast();
    const nav = useNavigate();

    const gotosigin = () => {
        nav("/signin")
    }

    const initialValues = {
        email: "",
        password: "",
        name: "",
        username: "",
    };

    const handlesubmit = (values, formikProps) => {
        console.log("signup submitted clicked", values)
        dispatch(signupAction(values));
        formikProps.setSubmitting(false);

    }

    useEffect(() => {
        if (auth.signup?.username) {
            gotosigin()
            toast({
                title: "User Registered with username : " + auth.signup.username,
                status: "success",
                duration: 5000, // Toast will be visible for 5 seconds
                isClosable: true,
            });
        }


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [auth.signup])


    return (
        <div className='flex flex-col justify-center  items-center w-full  bg-white-300'>
            <Box m={4} p={8} display={'flex'} flexDirection={"column"} alignItems={'center'} className='border w-full' >

                <img src="https://i.imgur.com/zqpwkLQ.png" className='' alt="Instagram" />

                <Formik
                    initialValues={initialValues}
                    validationSchema={LoginValSchema}
                    onSubmit={handlesubmit}
                >
                    {
                        (formikprops) => (
                            <Form className='w-full'>

                                <Field name="email" >
                                    {
                                        ({ field, form }) => (

                                            <FormControl mt={4} isInvalid={form.errors.email && form.touched.email}>

                                                <Input

                                                    {...field}
                                                    id='email'
                                                    placeholder='email'

                                                ></Input>
                                                <FormErrorMessage>{form.errors.email}</FormErrorMessage>

                                            </FormControl>
                                        )
                                    }
                                </Field>

                                <Field name="name">
                                    {
                                        ({ field, form }) => (
                                            <FormControl mt={4} isInvalid={form.errors.name && form.touched.name}>

                                                <Input

                                                    type='text'

                                                    {...field}
                                                    id='name'
                                                    placeholder='name'

                                                ></Input>
                                                <FormErrorMessage>{form.errors.name}</FormErrorMessage>

                                            </FormControl>
                                        )
                                    }
                                </Field>

                                <Field name="username">
                                    {
                                        ({ field, form }) => (
                                            <FormControl mt={4} isInvalid={form.errors.username && form.touched.username}>

                                                <Input

                                                    type='text'

                                                    {...field}
                                                    id='username'
                                                    placeholder='username'

                                                ></Input>
                                                <FormErrorMessage>{form.errors.username}</FormErrorMessage>

                                            </FormControl>
                                        )
                                    }
                                </Field>

                                <Field name="password">
                                    {
                                        ({ field, form }) => (
                                            <FormControl mt={4} isInvalid={form.errors.password && form.touched.password}>

                                                <Input

                                                    type='password'

                                                    {...field}
                                                    id='password'
                                                    placeholder='password'

                                                ></Input>
                                                <FormErrorMessage>{form.errors.password}</FormErrorMessage>

                                            </FormControl>
                                        )
                                    }
                                </Field>



                                <Button className='w-full' mt={4} colorScheme="blue" type="submit" isLoading={formikprops.isSubmitting}>Sign up</Button>

                            </Form>
                        )
                    }




                </Formik>


            </Box>



            <p className='border border-solid w-full p-8 m-3 mx-auto text-center'>
                Already have an account?
                <span onClick={gotosigin} className='cursor-pointer text-blue-500 '>Log in</span>
            </p>

        </div>
    )
}

export default Signup
