'use client'

import { useCountdown } from "@/src/hooks/Countdownhook"
import { time } from "console";
import { useEffect, useState } from "react";
import Draggable from "react-draggable";


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
           setTraditionaltime(`${days}d ${hours.toString().padStart(2,'0')}h ${minutes.toString().padStart(2,'0')}m ${seconds.toString().padStart(2,'0')}s`);
        },100)
        return ()=>{
            clearInterval(updateFractional);
            clearInterval(updateTraditional);
        }
    },[until,timezone])


    return(
        <Draggable bounds="parent">
      <div className="text-center p-2 md:p-8 w-fit hover:border-1 hover:rounded-lg hover:cursor-move">
        <div className="text-5xl md:text-8xl text-white font-bold font-apple2mono">
          {style === "fractional" && (
            <>
              <span suppressHydrationWarning>
                {fractionaltime.toString().split(".")[0]}
              </span>
              <span
                className="text-2xl md:text-4xl text-neutral-200 text-opacity-75 font-normal -ml-2 md:-ml-4"
                suppressHydrationWarning
              >
                .
                {fractionaltime.toString().split(".")[1].padEnd(6, "0") ||
                  "000000"}
              </span>
            </>
          )}

          {style === "traditional" && (
            <div className="flex gap-2 items-baseline">
              <span className="text-4xl md:text-6xl mr-4" suppressHydrationWarning>
                {traditonaltime?.split(" ")[0]}
              </span>
              <span
                className="text-2xl md:text-4xl -ml-3 md:-ml-4 text-neutral-200 text-opacity-75"
                suppressHydrationWarning
              >
                {traditonaltime?.split(" ")[1]}
              </span>
              <span
                className="text-2xl md:text-4xl -ml-3 md:-ml-0 text-neutral-200 text-opacity-75"
                suppressHydrationWarning
              >
                {traditonaltime?.split(" ")[2]}
              </span>
              <span
                className="text-2xl md:text-4xl -ml-3 md:-ml-0 text-neutral-200 text-opacity-75"
                suppressHydrationWarning
              >
                {traditonaltime?.split(" ")[3]}
              </span>
            </div>
          )}
        </div>

        {description && (
          <span className="text-md md:text-2xl text-neutral-400 text-opacity-75 font-apple2mono">
            {style === "fractional" && "days"} {until < new Date() ? "since" : "till"} {description}
          </span>
        )}
      </div>
    </Draggable>
    )









    
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






