"use client"
import { useEffect, useRef } from "react"

export default function ButtonUp() {
    const btnUp = useRef()

    useEffect(() =>{        
        window.addEventListener("scroll",() =>{
            window.scrollY > 600 ? btnUp.current?.classList.remove('opacity-0') : btnUp.current?.classList.add('opacity-0')                  
        })
    },[])

    const handleUp = ()=>{
        window.scrollTo(
            {
                top:0,
                behavior:"smooth"
            }
        )
        
    }
    
  return (
    <button className='transition:opacity  duration-700 rounded-md animate-bounce text-black p-2 bg-primary   fixed opacity-0   right-0 m-4 bottom-0' ref={btnUp} onClick={handleUp}>
        <svg className="w-2 h-2   text-gray-800 sm:w-5 sm:h-5 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 12">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5m8 6L5 7l-4 4"/>
  </svg>
    </button>
    )
}
