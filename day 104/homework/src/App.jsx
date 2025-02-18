import React from 'react'

export default function App() {
  const listItems = [
    {li: "Directed by: Jon Favreau"},
    {li:"Screenplay by: Mark Fergus, Hawk Ostby, Art Marcum and Matt Holloway"},
    {li: "Based on: Iron Man by Stan Lee, Larry Lieber, Don Heck and Jack Kirby"}
  ]
  return (
    <div className='flex w-full h-dvh bg-slate-600 justify-center'>
      <div className='flex w-11/12 h-11/12 gap-[25%] p-5 mt-8 flex-row justify-items-center bg-slate-800 rounded-2xl'>
        <div className='flex'>
          <img src="https://upload.wikimedia.org/wikipedia/en/0/02/Iron_Man_%282008_film%29_poster.jpg" className='w-60 h-fit rounded-xl'/>
          <div className=' border-slate-900 w-60 rounded-xl'>
            <ul className='text-white flex flex-col gap-4 items-center p-2'>
              {listItems.map((item , index) => (
                <li className='border-b-2 border-slate-700 w-11/12'>{item.li}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className='w-5/12 flex flex-col items-center'>
          <p className='text-xl text-cyan-500'><b className='text-yellow-500'>Iron</b> <b className='text-red-800'>Man</b> 2008</p>
          <p className='text-[18px] text-white'>
            Iron Man is a 2008 American superhero film based on the Marvel Comics character of the same name. Produced by Marvel Studios 
            and distributed by Paramount Pictures,[a] it is the first film in the Marvel Cinematic Universe (MCU). Directed by Jon Favreau 
            from a screenplay by the writing teams of Mark Fergus and Hawk Ostby, and Art Marcum and Matt Holloway, the film stars Robert 
            Downey Jr. as Tony Stark / Iron Man alongside Terrence Howard, Jeff Bridges, Gwyneth Paltrow, Leslie Bibb, and Shaun Toub. 
            In the film, following his escape from captivity by a terrorist group, world-famous industrialist and master engineer Stark 
            builds a mechanized suit of armor and becomes the superhero Iron Man.A film featuring Iron Man was in development at Universal 
            Pictures, 20th Century Fox, and New Line Cinema at various times since 1990 before Marvel Studios reacquired the rights in 2005. 
            Marvel put the project in production as its first self-financed film, with Paramount Pictures distributing. Favreau signed on as 
            director in April 2006 and faced opposition from Marvel when trying to cast Downey in the title role; the actor was signed in September. 
            Filming took place from March to June 2007, primarily in California to differentiate the film from numerous other superhero stories that 
            are set in New York City. During filming, the actors were free to create their own dialogue because pre-production was focused on the story 
            and action. Rubber and metal versions of the armor, created by Stan Winston's company, were mixed with computer-generated imagery to create 
            the title character.Iron Man premiered in Sydney on April 14, 2008, and was released in the United States on May 2, as the first film in 
            Phase One of the MCU. It grossed over $585 million, becoming the eighth-highest grossing film of 2008, and received praise from critics, 
            especially for Downey's performance as well as Favreau's direction, the visual effects, action sequences, and writing. The American Film 
            Institute selected it as one of the ten best films of 2008. It received two nominations at the 81st Academy Awards for Best Sound Editing 
            and Best Visual Effects. In 2022, the Library of Congress selected the film for preservation in the United States National Film Registry 
            for being "culturally, historically, or aesthetically significant". Two sequels have been released: Iron Man 2 (2010) and Iron Man 3 (2013).
          </p>
        </div>
      </div>
    </div>
  )
}
