import { create } from 'zustand'

type Store = {
  count: number
  inc: () => void
  dec: () => void
}

export const useStore = create<Store>()((set) => ({
  count: 1,
  inc: () => set((state) => ({ 
    count: state.count + 1
 })),
 dec: () => set((state) =>({
   count: state.count - 1
  })),
}))

export default function App() {
  const { count , inc , dec } = useStore() 
  return (
    <div>
      <p>{count}</p>
      <button onClick={inc} className='bg-green-300'>increase</button>
      <button onClick={dec} className='bg-red-300'>decrease</button>
    </div>
  )
}