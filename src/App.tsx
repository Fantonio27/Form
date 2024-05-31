import '@fontsource/geist-sans/300.css';
import ControlledInput from './components/Controlled/input';
import UnControlledInput from './components/UnControlled/input';
import Memo from './components/Memo';
import UseMemo from './components/useMemo';
import UsingCallback from './components/Callback';
import UseRef from './components/useRef/ref';
import UseReducer from './components/useReducer/reducer';

import React from 'react';

const components = {
  controlled : ControlledInput,
  uncontrolled: UnControlledInput,
  memo: Memo,
  usememo: UseMemo,
  callback: UsingCallback,
  reducer: UseReducer,
  ref: UseRef
}


function App() {

  const params = window.location.href;
  const lastURL = params.substring(params.lastIndexOf("/") + 1) || "controlled";
  

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
      </nav>
      {React.createElement(components[lastURL as keyof typeof components])}
    </>
  );
}

export default App;

{/* <li key={index} onClick={()=> setItem(component)}>{component}</li> */}