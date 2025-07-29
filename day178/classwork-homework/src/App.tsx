import { Switch } from './components/ui/switch'
import { Separator } from "@/components/ui/separator"
import pfp1 from "./assets/pfp1.jpg"

export default function App() {
  const accountArr = [
    {"li": "Email me when someone follows me"},
    {"li": "Email me when someone asnwers my post"},
    {"li": "Email me when someone mentions me"}
  ]
  const applicationArr = [
    {"li": "New launches and projects"},
    {"li": "Monthly product updates"},
    {"li": "Subscribe to newsletters"}
  ]
  const informationArr = [
    {"li": "Full Name: Alec M. Thompson"},
    {"li": "Mobile: (44) 123 1234 123"},
    {"li": "Email: alechtompson@mail.com"},
    {"li": "location: United States"},
  ]
  const convArr = [
    {"name":"Esthera Jackson" , "message": "Hi! I need more informations..."},
    {"name":"Esthera Jackson" , "message": "Awesome work, can you change..."},
    {"name":"Esthera Jackson" , "message": "Have a great afternoon..."},
    {"name":"esthera Jackson" , "message": "About files I can..."}
  ]
  return (
    <div className='flex h-screen w-screen items-center justify-center gap-10 *:h-[335px] *:w-[500px] *:border-1 *:border-black *:rounded-xl *:p-5'>
      <div className='flex flex-col items-start justify-start *:flex *:items-start *:flex-col *:w-full'>
        <h1 className='text-2xl'>Platform Settings</h1>
        <div className='flex gap-2 *:flex *:flex-col *:gap-2'>
          <h2 className='text-lg opacity-50 pt-2'>Account</h2>
          <ul className='*:flex *:gap-3 *:items-center'>
            {
              accountArr.map((item , index) =>(
                <li key={index}><Switch /> {item.li}</li>
              ))
            }
          </ul>
        </div>
        <div className='flex gap-2 *:flex *:flex-col *:gap-2'>
          <h2 className='text-lg opacity-50 pt-2'>Application</h2>
          <ul className='*:flex *:gap-3 *:items-center'>
            {
              applicationArr.map((item , index) =>(
                <li key={index}><Switch /> {item.li}</li>
              ))
            }
          </ul>
        </div>
      </div>
      <div className='flex items-start flex-col gap-3 justify-start'>
        <h1 className='text-2xl'>Profile Information</h1>
        <p className='flex w-100'>
          Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no.
          If two equally difficult paths, choose the one more painful in the short
          term (pain avoidance is creating an illusion of equality).
        </p>
        <Separator />
        <ul className='flex gap-1 flex-col'>
          {
            informationArr.map((item, index) =>(
              <li key={index}>{item.li}</li>
            ))
          }
          <li>Social Media: </li>
        </ul>
      </div>
      <div>
        <h1>Conversations</h1>
        <ul>
          {
            convArr.map((item , index) =>(
              <div className='h-[20%]'>
                <img src={pfp1} className='w-[20px]' />
              </div>
            ))
          }
        </ul>
      </div>
    </div>
  )
}
