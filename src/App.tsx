import '@fontsource/geist-sans/300.css';
import ControlledInput from './components/Controlled/input';
import UnControlledInput from './components/UnControlled/input';
import Memo from './components/Memo';
import UseMemo from './components/useMemo';
import UsingCallback from './components/Callback';
import UseRef from './components/useRef/ref';
import UseReducer from './components/useReducer/reducer';
import RefUncontrolled from '@/components/UnControlledRef/input'
import React, { useState } from 'react';
import { ThemeContext } from './lib/context.ts'
import ServerComponent from './components/serverSideRendering/serverComponent.tsx';
import Testing from "@/components/testingComponent/component.tsx"

const components = {
  controlled : ControlledInput,
  uncontrolled: UnControlledInput,
  memo: Memo,
  usememo: UseMemo,
  callback: UsingCallback,
  reducer: UseReducer,
  ref: UseRef,
  refUncontrolled: RefUncontrolled,
  serverComponent : ServerComponent,
  testing: Testing
}


function App() {

  const params = window.location.href;
  const lastURL = params.substring(params.lastIndexOf("/") + 1) || "controlled";
  const [theme, setTheme] = useState(true)
  return (
    <>
      <nav>    
        <ul className='flex gap-10 cursor-pointer [&_li:hover]:text-sky-500 mb-10'>
          {
            Object.keys(components).map((component, index) => {
              return <a key={index}href={component}><li>{component}</li></a>
            })
          }
        </ul>
        <input type='checkbox' onChange={()=> setTheme(prev=> !prev)}></input>Dark Mode
      </nav>
      <ThemeContext.Provider value={theme}>
        {React.createElement(components[lastURL as keyof typeof components])}
      </ThemeContext.Provider>
    </>
  );
}

export default App;