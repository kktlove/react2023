//구조 할당(props)의 사용
const Test5 = (props) => {
  return (
    <div class="App">
        <h2>저의 이름은 {props.irum} 입니다.</h2>
        <h2>나이는 {props.age}세 입니다.</h2>
        <h2>사는 곳은 {props.addr} 입니다.</h2>
        <hr />
    </div>
  )
}

Test5.defaultProps = {
    irum : '김기태'
}

export default Test5