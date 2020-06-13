import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Parent from './Parent';
function Counter(props) {
  const [songList, setSongList] = useState([]);
  const [count, setCount] = useState(0)
  const _c = useRef();
  _c.current = count;
  // function handleShow() {
  //   setTimeout(() => {
  //     console.log(count);
  //   }, 3000);
  // }
  useEffect(() => {
    setTimeout(() => {
      console.log(_c.current);
    }, 3000);
  }, [])
  function handleAdd() {
    setCount(count + 1);
  }

  useEffect(() => {
    fetch('http://neteasecloudmusicapi.zhaoboy.com/search?keywords=%E6%B5%B7%E9%98%94%E5%A4%A9%E7%A9%BA')
    .then(res => res.json())
    .then((res) => {
      setSongList(res.result.songs)
      props.onSuccess();
    })
  },[props.onSuccess])
  // console.log('render')
  return (
    <div>
      count: { count }
      <button onClick={handleAdd}> + </button>
       <button /*onClick={handleShow}*/>show count</button> 
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Parent />
    </div>
  );
}

export { 
  Counter
}
export default App;
