// 컴포넌트를 만들어서
// 이름과 나이, 만나이 를 화면 출력하기!

export default function Jsx03 () {

  const name = "문세연";
  const age = "24";
  const realage = "23";

  return (
    <React.Fragment>
    <h1>이름 : {name}</h1>
    <h2>나이 : {age}</h2>
    <h3>만나이 : {realage}</h3>
    </React.Fragment>
  )
}