interface AppProps{
  name:string;
  nickname:string;
  age:number;
  email:string;
}

export default function App() {
  const user : AppProps={
    name: "UserName",
    nickname: "nickname1",
    age: 69,
    email: "test@mail.ru",
  }
  return (
    <div className="flex items-center h-dvh justify-center">
      <h1 className="text-3xl bg-amber-500 text-black text-center p-10 rounded-xl">{user.name}</h1>
    </div>
  )
}
