import React from 'react'
//배열의 매핑
const Test1 = () => {
  const names = ['서광','이은영','한선','이소윤','오태훈'];
  const nameList = names.map((data) => <li>{data}</li>);
  return (
    <div className='App'>
        <ul>{nameList}</ul>
    </div>
  )
}

export default Test1