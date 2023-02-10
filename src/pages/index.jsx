import { Inter } from '@next/font/google'
import { useReducer } from 'react';

function reducer(state, action) {
   state({
    age: 27
   })
}

function MyComponent() {
  const [state, dispatch] = useReducer(reducer, {  age: 42, name: 'Junior' });

  console.log(state)
}



const inter = Inter({ subsets: ['latin'] })

export default function Home() {




  return (
    <div className={`flex h-screen justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white`}>
            <h1>App</h1>
            {MyComponent()}
    </div>
  )
}
