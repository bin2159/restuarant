import React, { useState, useCallback, useMemo } from 'react';

import './App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';

function App() {
  const [listTitle, setListTitle] = useState('My List');
  const [order,setOrder] = useState(false)

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
    setOrder(false)
  }, []);
  const changeTitleDescending=useCallback(()=>{
    setListTitle('Change to descending order')
    setOrder(true)
  },[])

  return (
    <div className='app'>
      <DemoList title={listTitle} items={useMemo(()=>[5, 3, 1, 10, 9],[])}  order={order}/>
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={changeTitleDescending}>Change to descending</Button>
    </div>
  );
}

export default App;
