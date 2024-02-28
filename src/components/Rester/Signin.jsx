import { Box, Button, FormControl, FormErrorMessage, Input } from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { siginAction } from '../../Redux/Auth/Action'
import {  getUserProfileAction } from '../../Redux/User/Action'

const LoginValSchema = Yup.object().shape(

    {
        email: Yup.string().email("Invalid email address format").required("Email is required"),
        password: Yup.string().required("Password is required")

    }
)

const Signin = () => {

    const dispatch=useDispatch();

    const nav = useNavigate();
    const jwt =localStorage.getItem("token");
    const user=useSelector(store=>store.user);
    // eslint-disable-next-line no-unused-vars
    const auth=useSelector(store=>store.auth);

 
    useEffect(()=>{

        if(jwt){
            dispatch(getUserProfileAction(jwt));
        }

    },[jwt,dispatch])

    useEffect(()=>{
        if(user.reqUser && user.reqUser.username){
            nav(`/`)
        

        }
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[jwt,user.reqUser,nav])




    const gotosignup = () => {
        nav("/signup")
    }

    const initialValues = {
        email: "",
        password: ""
    };

    const handlesubmit = (values,actions) => {
        console.log("submitted clicked", values)
        dispatch(siginAction(values))
        actions.setSubmitting(false);
        
    }

    return (
        <div className='flex flex-col  items-center w-full  bg-white-300'>
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

                                <Button className='w-full' mt={4} colorScheme="blue" type="submit" isLoading={formikprops.isSubmitting}>Log in</Button>

                            </Form>
                        )
                    }




                </Formik>


            </Box>



            <p className='border border-solid w-full p-8 m-8 mx-auto text-center'>
                Don't have an account?
                <span onClick={gotosignup} className='cursor-pointer text-blue-500 '>Sign up</span>
            </p>

        </div>
    )
}

export default Signin
