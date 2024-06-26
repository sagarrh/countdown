'use client'

import { useCountdown } from "@/src/hooks/Countdownhook"
import { time } from "console";
import { useEffect, useState } from "react";


export const Countdown = () => {
    const{date:until, timezone,description,style} =useCountdown();
    const[fractionaltime,setFractionaltime]=useState<number>(daysuntilfractional(until,timezone))
    const[traditonaltime,setTraditionaltime]=useState<string>()

    useEffect(()=>{
        const updateFractional=setInterval(()=>{
            setFractionaltime(daysuntilfractional(until,timezone))
        },100)

        const updateTraditional=setInterval(()=>{
           const {days,hours,minutes,seconds}=daysuntiltraditional(until,timezone)
           setTraditionaltime(`${days}d ${hours.toString().pad}`)
        })
    })









    
}

function daysuntiltraditional(until:Date,timezone:string){
    const timedifference =until.getTime()-gettimezoneoffset(until,timezone)-new Date().getTime();
    const days = Math.abs(Math.floor(timedifference/(1000*60*60*24)));
    const hours= Math.abs(Math.floor((timedifference % (1000 * 60 * 60 * 24))/(1000*60*60)));
    const minutes=Math.abs(Math.floor((timedifference%(1000*60*60))/(1000*60)))
    const seconds = Math.abs(Math.floor((timedifference % (1000 * 60)) / 1000))
    return{
        days,
        hours,
        minutes,
        seconds
    }
}

function gettimezoneoffset(until:Date,timezone:string){
    const usertimezoneoffset= new Date().getTimezoneOffset()*60*1000
    const targetdate= new Date(until.toLocaleString('en-US',{timeZone:timezone}))
    return targetdate.getTime()-usertimezoneoffset-until.getTime();
}

function daysuntilfractional(until:Date,timezone:string){
    const difference = until.getTime()-gettimezoneoffset(until,timezone)-new Date().getTime()
    const daysfrac=difference/(1000*60*24*60);
    return Math.abs(Math.round(daysfrac*1e6)/1e6)
}






