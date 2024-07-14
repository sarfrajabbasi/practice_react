import React, { useEffect, useState } from 'react'

const HookMouse = () => {
    const [x,setX] = useState(0);
    const [y,setY] = useState(0);

    const logMousePosition = (e)=>{
        console.log('mouse event');
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
            // Event listener add karna

        console.log('useEffect called');
        window.addEventListener('mousemove',logMousePosition)
        // console.log('Event listener added');


        // cleanup function

        return ()=>{
            window.removeEventListener('mousemove',logMousePosition)
            console.log('Event listener removed');

        }
        // Empty array ensure karta hai ki ye effect sirf ek baar run ho (mount aur unmount pe)

    },[])
  return (
    <div>
        X - {x}
        Y - {y}
    </div>
  )
}

export default HookMouse