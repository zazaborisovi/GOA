import React from 'react'

export default function App() {
  return (
    <>
      <button className='bg-black focus:ring-2 text-white px-8 mx-10 my-10'>
        click me
      </button>
      <div className='p-2 bg-slate-400 rounded-sm w-64 mx-auto'>
        <div className='w-56 h-44 bg-slate-300 mx-auto border-2 border-black first first:mt-40'></div>
        <div className='w-56 h-44 bg-slate-300 mx-auto border-2 border-black'></div>
        <div className='w-56 h-44 bg-slate-300 mx-auto border-2 border-black'></div>

      </div>
      <form action="">
        <label htmlFor='e1' className='block'>email</label>
        <input type="email" 
        name='email' 
        id='e1'
        className='
        border border-emerald-600 p-4 ml-4 rounded-lg focus:outline-none 
        focus:ring-2 focus:ring-offset-emerald-300 text-emerald-600
        invalid:border-red-800 invalid:text-red-500 invalid:focus:ring-2-red-400'
         />
      </form>
      <button className='mx-auto p-5 bg-black text-white rounded-lg hover:ring-8 hover:ring-emerald-400 hover:text-emerald-600'>button 1</button>
      <button className='mx-auto p-5 bg-black text-white rounded-lg hover:ring-8 active:ring-emerald-400 active:text-emerald-600'>button2</button>

      <div className='group bg-black p-10 transition-all delay-100' >
        <button className='p-4 bg-orange-300 group-hover:text-white font-bold rounded-sm transition-all delay-100'>hover it</button><p className='text-orange-300 group-hover:text-white transition-all delay-100'>test paragraph</p> 

        <div>
          <p className='text-black bg-orange-300 rounbded-sm group-hover:text-white transition-all delay-100'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic molestiae error distinctio quia, quibusdam nisi laboriosam saepe voluptas a quos animi illum eius officia. Consectetur id illum architecto suscipit doloribus?</p>
        </div>
      </div>
    </>
  )
}
