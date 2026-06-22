import { useState } from 'react'
import ClassCompo from './assets/1. Component/ClassCompo'
import FunCompo from './assets/1. Component/FunCompo'
import Main from './assets/3. Prop/Main'
import State from './assets/4. UseState/State'
import NameState from './assets/4. UseState/NameState'
import UseEffect from './assets/5. UseEffect/UseEffect'
import A from './assets/6. Context/Drilling/A'
import ChildA from './assets/6. Context/usecontext/ChildA'
import ChildB from './assets/6. Context/usecontext/ChildB'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <ClassCompo/>
    <FunCompo />
    <Main />
    <State />
    <NameState /> */}

    <ClassCompo/>
    <FunCompo />
    <Main/>
    <State/>
    <NameState/>
    <UseEffect/>
    <A/>
    <ChildA/>
    <ChildB/>

    </>
  )
}

export default App
