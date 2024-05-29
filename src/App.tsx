import '@fontsource/geist-sans/300.css';
import ControlledInput from './components/Controlled/input';
import UnControlledInput from './components/UnControlled/input';
import Memo from './components/Memo';
import UseMemo from './components/useMemo';
import UsingCallback from './components/Callback';
import React, { useState } from 'react';

const components = {
  controlled : ControlledInput,
  uncontrolled: UnControlledInput,
  memo: Memo,
  usememo: UseMemo,
  callback: UsingCallback
}


function App() {
  const [item, setItem] = useState<string>("controlled");

  return (
    <>
      <nav>
        <ul className='flex gap-10 cursor-pointer [&_li:hover]:text-sky-500 mb-10'>
          {
            Object.keys(components).map((component, index) => {
              return <li key={index} onClick={()=> setItem(component)}>{component}</li>
            })
          }
        </ul>
      </nav>
      {React.createElement(components[item as keyof typeof components])}
    </>
  );
}

export default App;
