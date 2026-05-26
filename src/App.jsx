import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.scss'

import { Bs123 } from "react-icons/bs";
// import reactImage from "./assets/react.svg";

import Book from "./components/Book";
import MyComponent from './MyComponent'

function App() {
  const name='chch'
  let post="맛집"
  const[message, setMessage] = useState('초기값이다')
  const[isToggleOn, setisToggleOn] = useState(true)

  function handleClick(){
    setisToggleOn((isToggleOn) => !isToggleOn);
  }
  // const handleClick(){
  //   setisToggleOn((isToggleOn) => !isToggleOn);
  // }
  const[username, setUsername] =useState("")
  const onChangeUsername = (e)=>{setUsername(e.target.value)}
  
  const {mm, setMm} = useState()
  const onChangeMm = (e)=>{setMm(e.target.value)}

  const onClickBtn=() => {
    console.log(username + mm)
  }
  
  return (
    <>
      
      <h1 className='aaa' style={{fontSize:'38px'}, {color:'red'}}>안녕하세요 dd</h1>
      <Bs123 />
      <ul>
        <li><a href="">react</a></li>
        <li><a href="">react</a></li>
        <li><a href="">react</a></li>
      </ul>

      {/* <reactImage /> */}
      <img src="/img/hero.png" alt="" />

      <h2>{name}, hi</h2>
      {
        name=='chchj' ? (<h2>치치반가워</h2>):(<h2>너 누구야</h2>)
      }
      {
        name=='chch' ? (<h2>치치반가워</h2>):null
      }
      {
        name=='chch' && (<h2>치치반가워</h2>)
      }

      <Book name='처음만나는 ㄹ액트' numOfpage={500}></Book>
      <Book name='처음'numOfpage={300}></Book>
      <Book name=' ㄹ액트'numOfpage={400}></Book>

      <h3>{post}</h3>
      <MyComponent name='마마'></MyComponent>
      <MyComponent a='파파'></MyComponent>

      <h5>{message}</h5>
      <button onClick={()=>setMessage('어서오십셔')}>입장</button>
      <button>퇴장ㅇㅇ</button>

      <button onClick={handleClick}>
        {isToggleOn ? "켜짐" : "꺼짐"}
      </button>

      <input type="text" placeholder='사용자명' value={username} onChange={onChangeUsername}/>
      <input type="text" placeholder='아무거나' value={mm} onChange={onChangeMm}/>

      <button onClick={onClickBtn}>확인</button>
    </>
  )
}

export default App
