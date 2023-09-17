import React from 'react'

export default function Dashboard() {
  return (
    <div>
      <div className="grid grid-cols-5 gap-4">
        <div class="col-span-1 bg-slate-400">L</div>
        <div class="col-span-3 bg-slate-600">
        <div className="px-4">
      <div
        className="
          flex
          justify-center
          items-center
          bg-white
          mx-auto
          max-w-4xl
          rounded-lg
          my-8
          p-16
          antialiased
      bg-gradient-to-r
      from-pink-300
      via-purple-300
      to-indigo-400
        "
      >
        <h1 className="text-2xl font-medium">Advertise</h1>
      </div>
      </div>
        </div>
        <div class="col-span-1 bg-slate-700">R</div>
      </div>
      
      <div className="px-4">
      <div
        className="
          flex
          justify-center
          items-center
          bg-white
          mx-auto
          max-w-4xl
          rounded-lg
          my-8
          p-16
          antialiased
      bg-gradient-to-r
      from-pink-300
      via-purple-300
      to-indigo-400
        "
      >
        <h1 className="text-2xl font-medium">Dashboard component</h1>
      </div>
      </div>
    </div>
  )
}
