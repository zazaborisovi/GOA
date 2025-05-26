import React from 'react'
import bgimg from "../assets/029c6c28145dc0e858d7dce88f7ef5a76fa23652.jpg"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card"
import { Switch } from "@/components/ui/switch"
import { Facebook } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Login() {
    return (
        <div style={{ backgroundImage: `url(${bgimg})` }} className='relative  bg-cover h-screen bg-center flex items-start justify-center bg-blue-100'>
            <div className="absolute inset-0 bg-blue-400/80 " />

                <Header />
                
                <Card className='flex justify-center items-center absolute top-50 h-[614px] w-[453px]'>
                    <CardHeader className='w-[255px]'>
                        <CardTitle>Sign In With</CardTitle>
                        <CardDescription className='mt-4 flex gap-5 flex-col items-center'>
                            <div className='flex gap-5'>
                                <div className='border h-[75px] w-[75px] flex items-center justify-center rounded-sm'>
                                    <Facebook className='size-8 bg-black rounded-4xl text-white p-1 m-1'/>
                                </div>
                                <div className='border h-[75px] w-[75px] flex items-center justify-center rounded-sm'>
                                    <Facebook className='size-8 bg-black rounded-4xl text-white p-1 m-1'/>
                                </div>
                                <div className='border h-[75px] w-[75px] flex items-center justify-center rounded-sm'>
                                    <Facebook className='size-8 bg-black rounded-4xl text-white p-1 m-1'/>
                                </div>
                            </div>
                            <h2 className='text-xl'>or</h2>
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                            <form action="" className='flex flex-col gap-5 *:text-xl'>
                                <div className='h-[75px] w-[350px]'>
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className='border h-11 p-4 w-full rounded-lg text-lg' id='name' name='name' placeholder='Your Full Name Here' />
                                </div>
                                <div className='h-[75px] w-[350px]'>
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className='border h-11 p-4 w-full rounded-lg text-lg' id='password' name='password' placeholder='Your Password Here' />
                                </div>
                                <div className='flex items-center gap-5'><Switch className='' /><h1 className='text-sm'>Remember Me</h1></div>
                                <button className='bg-gray-700 w-full h-[45px] self-center rounded-[8px] text-white'>Sign In</button>
                            </form>
                    </CardContent>
                    <CardFooter>
                        <p>dont have account? <a href="#">Sign Up</a></p>
                    </CardFooter>
                </Card>
                <Footer/>
        </div>
  )
}
