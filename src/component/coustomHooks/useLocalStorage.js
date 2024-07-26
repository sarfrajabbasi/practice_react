import React,{useState,useEffect} from 'react'

const useLocalStorage = (key,initialValue) => {
      // localStorage se stored value lo

    const storedValue = localStorage.getItem(key);
    const initial =  storedValue ? JSON.parse(storedValue):initialValue;
    console.log(initial);

    const [value,setValue] =  useState(initial)
    useEffect(()=>{
    // Jab bhi value change ho, localStorage mein save karo
    localStorage.setItem(key,JSON.stringify(value));
    },[key,value])
  return [value,setValue]
}

export default useLocalStorage