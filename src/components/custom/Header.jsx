import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { useNavigation } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import axios from 'axios';
import { ThemeToggle } from './ThemeToggle';
function Header() {

  const user = JSON.parse(localStorage.getItem('user') || "null");

  const [openDailog, setOpenDailog] = useState(false);

  useEffect(() => {
    console.log(user)
  }, [])

  const login = useGoogleLogin({
    onSuccess: (codeResp) => GetUserProfile(codeResp),
    onError: (error) => console.log(error)
  })

  const GetUserProfile = async (tokenInfo) => {
    try {
      const resp = await axios.get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo?.access_token}`,
            Accept: 'application/json',
          },
        }
      );

      localStorage.setItem('user', JSON.stringify(resp.data));
      setOpenDailog(false);
      window.location.reload();
    } catch (err) {
      console.error("Google profile fetch failed", err);
    }
  };


  return (
    <div className='p-3 shadow-sm flex justify-between items-center px-5 sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b dark:border-neutral-800 transition-colors duration-300'>
      <a href='/'>
        <div className='flex items-center gap-2 group cursor-pointer'>
          <div className='bg-gradient-to-br from-emerald-500 to-amber-500 p-2 rounded-xl shadow-lg group-hover:rotate-6 transition-transform duration-300'>
            <span className='text-white font-bold text-xl'>Ai</span>
          </div>
          <div className='flex flex-col'>
            <span className='font-bold text-xl tracking-tight text-neutral-900 dark:text-white transition-colors duration-300'>
              Trip<span className='text-emerald-600 dark:text-emerald-400'>Planner</span>
            </span>
            <span className='text-[10px] uppercase tracking-[0.2em] font-medium text-neutral-500 dark:text-neutral-400 -mt-1'>
              Your AI Travel Companion
            </span>
          </div>
        </div>
      </a>
      <div>
        {user ?
          <div className='flex items-center gap-3'>
            <a href='/create-trip'>
              <Button variant="outline"
                className="rounded-full border-neutral-300 dark:border-neutral-700 bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-900 dark:text-neutral-100 transition-colors">+ Create Trip</Button>
            </a>
            <a href='/my-trips'>
              <Button variant="outline"
                className="rounded-full border-neutral-300 dark:border-neutral-700 bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-900 dark:text-neutral-100 transition-colors">My Trips</Button>
            </a>
            <ThemeToggle />
            <Popover>
              <PopoverTrigger>
                <img src={user?.picture} className='h-[35px] w-[35px] rounded-full ring-2 ring-neutral-200 dark:ring-neutral-800' />
              </PopoverTrigger>
              <PopoverContent className="bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800">
                <h2 className='cursor-pointer text-neutral-900 dark:text-neutral-100' onClick={() => {
                  googleLogout();
                  localStorage.clear();
                  window.location.reload();
                }}>Logout</h2>
              </PopoverContent>
            </Popover>
          </div>
          :
          <div className='flex items-center gap-4'>
            <ThemeToggle />
            <Button className="bg-gradient-to-r from-emerald-600 to-amber-500 hover:from-emerald-700 hover:to-amber-600 text-white border-none rounded-full px-6" onClick={() => setOpenDailog(true)}>Sign In</Button>
          </div>
        }
      </div>
      <Dialog open={openDailog}>

        <DialogContent>
          <DialogHeader>

            <DialogDescription>
              <div className='flex flex-col items-center justify-center py-6'>
                <div className='bg-gradient-to-br from-emerald-500 to-amber-500 p-4 rounded-2xl shadow-xl mb-4'>
                  <span className='text-white font-bold text-3xl'>Ai</span>
                </div>
                <h2 className='font-bold text-2xl text-neutral-900 dark:text-white'>Trip Planner</h2>
              </div>
              <p>Sign in to the App with Google authentication securely</p>

              <Button

                onClick={login}
                className="w-full mt-5 flex gap-4 items-center">

                <FcGoogle className='h-7 w-7' />
                Sign In With Google

              </Button>

            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Header