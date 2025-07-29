import { create } from 'zustand'

type Store = {
  count: number
  inc: () => void
}

export const useStore = create<Store>()((set) => ({
  count: 1,
  inc: () => set((state) => ({ 
    count: state.count + 1
 })),
}))

export default function zustandButton() {
  const { count , inc } = useStore() 
  return (
    <div>
      <p>{count}</p>
      <button onClick={inc}>increase</button>
    </div>
  )
}