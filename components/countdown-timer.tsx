"use client"

import { useState, useEffect } from "react"

interface CountdownTimerProps {
  targetDate: string
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        })
      }
    }

    const timer = setInterval(calculateTimeLeft, 1000)
    calculateTimeLeft()

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="flex justify-center gap-4">
      <div className="bg-[#2a1a55] p-4 rounded-lg text-center min-w-[90px] border border-yellow-500/30 shadow-lg">
        <div className="text-4xl font-bold text-yellow-400">{timeLeft.days}</div>
        <div className="text-xs uppercase text-gray-300">Days</div>
      </div>
      <div className="bg-[#2a1a55] p-4 rounded-lg text-center min-w-[90px] border border-yellow-500/30 shadow-lg">
        <div className="text-4xl font-bold text-yellow-400">{timeLeft.hours}</div>
        <div className="text-xs uppercase text-gray-300">Hours</div>
      </div>
      <div className="bg-[#2a1a55] p-4 rounded-lg text-center min-w-[90px] border border-yellow-500/30 shadow-lg">
        <div className="text-4xl font-bold text-yellow-400">{timeLeft.minutes}</div>
        <div className="text-xs uppercase text-gray-300">Minutes</div>
      </div>
      <div className="bg-[#2a1a55] p-4 rounded-lg text-center min-w-[90px] border border-yellow-500/30 shadow-lg">
        <div className="text-4xl font-bold text-yellow-400">{timeLeft.seconds}</div>
        <div className="text-xs uppercase text-gray-300">Seconds</div>
      </div>
    </div>
  )
}

