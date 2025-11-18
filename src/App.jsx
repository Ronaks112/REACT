import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import A from './components/A'
import {ErrorBoundary} from 'react-error-boundary'
import B from './components/B'
import C from './components/C'



function ErrorFallBack({error}){
  return<>
  <p>Something went wrong :{error.message}</p>
  
  </>

}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    {/* <ErrorBoundary FallbackComponent={ErrorFallBack}>
    <A/>
    </ErrorBoundary> */}


    {/* <ErrorBoundary fallbackRender={({error,resetErrorBoundary})=>{
      return (
        <>
        <h1>Something went wrong .{error.messages}</h1>
      <button onClick={()=>resetErrorBoundary()}>Reset</button>
        </>
      )


    }}>
    <A/>
    </ErrorBoundary> */}


    {/* <ErrorBoundary fallback={<h1>Something went wrong</h1>}>
    <A/>
    </ErrorBoundary> */}


    {/* <B/> */}

    <C/>




    

    

    
      
    </>
  )
}

export default App
