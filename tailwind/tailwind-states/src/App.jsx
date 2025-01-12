import React from 'react'

export default function App() {
  return (
    <div className='flex items-center gap-10 min-h-screen flex-col bg-slate-400'>
      {/* First, last, odd, and even */}
      <div className='w-80 text-2xl h-max'>
        <div className='first:text-green-500 odd:bg-white even:bg-black even:text-white '>div1</div>
        <div className='odd:bg-white even:bg-black even:text-white'>div2</div>
        <div className='odd:bg-white even:bg-black even:text-white'>div3</div>
        <div className='odd:bg-white even:bg-black even:text-white'>div4</div>
        <div className='last:text-red-600 odd:bg-white even:bg-black even:text-white'>div5</div>
      </div>
      {/* Form states */}
      <form action="">
        <label htmlFor="email1">Email</label>
        <input type="email" 
        name='email' 
        id='email1' 
        className='
        border-lime-700 border-2 rounded-md mx-5 w-52 h-11
        focus:ring-8 focus:ring-lime-400 text-black
        invalid:border-red-700 invalid:text-red-800 invalid:focus:ring-red-500'
        />
      </form>
      {/* Styling based on parent state , Differentiating nested groups */}
      <div 
      className='
      group w-72 h-52 rounded-lg group/item
      flex flex-col justify-center items-center bg-slate-400 gap-6
      hover:bg-black border-2 border-black'>
          <button 
          className='
          bg-black text-white py-4 px-10 rounded-xl h-14 
          group-hover/item:text-red-600 group-hover/item:bg-yellow-300 '>
            button
          </button>
          <p className='
          text-xl group-hover:text-white'>
          test p tag</p>
        </div>
        {/* Styling based on sibling state */}
        <form action="">
          <label htmlFor="email2">
            <h2>Email</h2>
            <input type="email" name='email' id='email2' className='
            peer border-2 border-black rounded-lg invalid:border-red-700 
            focus:ring-2 focus:ring-green-500 invalid:focus:ring-red-700' 
            />
            <p className='invisible peer-invalid:visible text-red-800'>invalid email address</p>
          </label>
        </form>
        {/* Differentiating peers */}
        <div className='flex flex-col w-56 items-center h-auto p-10 gap-3 bg-slate-400 rounded-lg border-2 border-black'> 
          <p className='text-2xl w-32'>choose one</p>
          <div className='w-40 bg-black h-1'></div>
          <div className='flex gap-4 flex-wrap w-48'>
            <input type="radio" id='draft' name='status' className='peer/draft' checked />
            <label htmlFor="draft" className='peer-checked/draft:text-green-300'>Draft</label>

            <input type="radio" id='published' name='status' className='peer/published' />
            <label htmlFor="published" className='peer-checked/published:text-green-300'>published</label>

            <p className='hidden peer-checked/draft:block'>drafts are only visible to administrators.</p>
            <p className='hidden peer-checked/published:block'>your post will be publicly visible on site</p>
          </div>
          {/* Arbitrary peers */}
          <form action="">
            <label htmlFor="email3">Email:</label>
            <input type="email" id='email3' name='email' className='is-dirty peer' />
            <p className='peer-[.is-dirty]:peer-required:block hidden'>sss</p>
          </form>
        </div>
        {/* Styling direct children */}
        <div className='
        w-52 h-52 gap-2 border-2 border-black rounded-lg bg-slate-400 flex
        flex-col items-center
        '>
          <p className='text-2xl'>Categories</p>
          <ul className='
          flex gap-2 flex-wrap w-40 *:border-2 *:border-blue-800 *:bg-blue-600 *:rounded-2xl
          *:p-2 *:text-sky-400
          '>
            <li>Sales</li>
            <li>Marketing</li>
            <li>SEO</li>
            <li>Analytics</li>
            <li>Design</li>
          </ul>
        </div>
        {/* Styling based on descendants */}
        <label htmlFor="" className='has-[:checked]:bg-emerald-300 has-[:checked]:ring-emerald-500'>
          <p>testing p tag</p>
          <input type="radio" className='checked:border-2 checked:border-red-600' />
        </label>
        {/* Styling based on the descendants of a group */}
        <div className='h-auto flex flex-col *:border-2 *:border-black *:flex *:flex-col
        *:bg-slate-400 justify-items-center gap-2 bg-slate-500 border-2 border-black rounded-lg
        p-5 *:w-52 text-xl'>
          <div className='group'>
            <p>p tag</p>
            <a href="#" className='text-blue-500'>a tag</a>
            <h1 className='hidden group-has-[a]:block text-green-400'>will appear in groups that have a tag</h1>
          </div>
          <div className='group'>
            <p>p tag</p>
            <h1 className='hidden group-has-[a]:block text-green-400'>will appear in groups that have a tag</h1>
          </div>
        </div>
        <div className='w-52 h-auto border-2 border-black rounded-lg bg-slate-400'>
          <p className='text-2xl'></p>
          <form className=' flex flex-wrap *:border-2 *:border-black gap-2 p-2 *:bg-white
          *:w-52 *:flex *:gap-5 *:text-xl *:items-center *:justify-items-center *:h-10'>
            <label>
              <input type="checkbox" name='todo[1]' className='peer'/>
              task N1
              <button className='text-red-400 ml-10 peer-checked:hidden block'>x</button>
            </label>
            <label>
              <input type="checkbox" name='todo[2]' className='peer'/>
              task N2
              <button className='text-red-400 ml-10 peer-checked:hidden block'>x</button>
            </label>
            <label>
              <input type="checkbox" name='todo[3]' className='peer'/>
              task N3
              <button className='text-red-400 ml-10 peer-checked:hidden block'>x</button>
            </label>
          </form>
        </div>
        {/* Before and after , Placeholder text */}
        <div className='flex flex-col items-center w-56 h-52 bg-slate-400 border-2 border-black rounded-lg'>
          <form className='w-52'>
            <label className='text-2xl'>
              <p className='after:content-["*"] after:ml-1 after:text-red-500'>Email</p>
              <input type="email" id='email4' name='email4' className='w-52 placeholder:text-xl placeholder:text-blue-500' placeholder='your email' />
            </label>
          </form>
          <p className='text-2xl'>
            when you look
            <span className='before:block before:absolute before:inset-0 before:skew-y-3 before:bg-green-500 relative inline-block'>
              <span className='relative text-white'> annoyed </span>
            </span>
            all the time people think you are busy
          </p>
        </div>
        {/* File input buttons , List markers , Highlighted text*/}
        <div className='*:border-b-2 *:border-black *:w-44 gap-2 w-56 h-56 bg-slate-400 border-2 border-black rounded-lg flex flex-col items-center justify-center'>
          <input type="file" className='block w-40 
          file:bg-blue-300 file:h-10 file:text-blue-900 file:flex file:rounded-xl 
          hover:file:bg-blue-400 file:border-solid'/>
          <ul role='list' className='marker:text-blue-600 list-disc p-0'>
            <li>list item 1</li>
            <li>list item 2</li>
            <li>list item 3</li>
          </ul>
          <p className='selection:text-green-600 selection:bg-yellow-500'>
            p tag for highlighted text test
          </p>
        </div>
        {/* First-line and first-letter , Dialog backdrops */}
        <div className='h-56 w-56 bg-slate-400 border-2 border-black rounded-lg flex flex-col items-center justify-center'>
          <p className='
          first-line:uppercase first-line:tracking-widest
          first-letter:text-7xl first-letter:font-bold first-letter:text-white first-letter:mr-3 first-letter:float-left  
          '>
          Well, let me tell you something, funny boy. Y'know that little stamp, the one
          that says "New York Public Library"? Well that may not mean anything to you,
          but that means a lot to me. One whole hell of a lot.
          </p>
          <dialog className='backdrop:bg-gray-50'>
            <form action="dialog"></form>
          </dialog>
        </div>
        {/* Responsive breakpoints */}
        <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>

        </div>
        {/* Prefers color scheme */}
        <div className='bg-white dark:bg-slate-700 rounded-xl border-2 border-black w-52 h-52'>

        </div>
        {/* Prefers reduced motion */}
        <div className='w-36 h-16 border-2 border-black rounded-lg '>
          <svg className='motion-reduce:hidden animate-spin' viewBox="0 0 24 24">text</svg>
          Processing...
        </div>
        <button class="motion-safe:hover:-translate-x-0.5 motion-safe:transition border-2 border-black">sadd</button>

    </div>
  )
}