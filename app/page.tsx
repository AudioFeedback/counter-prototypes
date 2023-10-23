'use client'

import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {increment, reset} from "@/app/Slices";
import {RootState} from "@/app/store";
import Link from 'next/link';
export default function Home() {
  const counter = useSelector((state: RootState) => state.Counter)
  const dispatch = useDispatch()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl">Hello World</h1>
      <div className="text-center">
        <h2>Your count is:</h2>
        <h2 className="text-7xl">{counter}</h2>
      </div>
      <div className="flex flex-col gap-4">
        <button onClick={() => dispatch(increment())} className="border-white border-4 w-64 h-12">Increment</button>
        <button onClick={() => dispatch(reset())} className="border-white border-4 w-64 h-12">Reset</button>
        <Link href="/test" className="border-white border-4 w-64 h-12 flex place-items-center justify-center"><h1>Next Page</h1></Link>
      </div>
    </main>
    )
}
