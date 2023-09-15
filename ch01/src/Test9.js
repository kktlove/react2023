import React, { useState } from 'react'
const Test9 = () => {
  const [ message, setMessage ] = useState('');
  const onClickEnter = () => setMessage("안녕하세요~! 환영합니다.");
  const onClickLeave = () => setMessage("잘가~! 다시는 보지 말자~!");  
  const [ color, setColor ] = useState('black');
  return (
    <div className='App'>
        <button onClick={onClickEnter}>입실</button>
        <button onClick={onClickLeave}>퇴실</button>
        <hr />
        <h1 style={{ color }}>{message}</h1>
        <hr />
        <button onClick={() => setColor('gold')}>금</button>
        <button onClick={() => setColor('gray')}>은</button>
        <button onClick={() => setColor('brown')}>동</button>
    </div>
  )
}
export default Test9