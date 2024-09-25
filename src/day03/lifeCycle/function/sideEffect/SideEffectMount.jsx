import React, { Component } from 'react';


// https://jsonplaceholder.typicode.com/users
// fetch로 요청 후 Side-Effect를 해결 후
// 화면에 user의 name만 li태그로 출력하기

class SideEffectMount extends Component {

  state = {
    users : [],
  }


componentDidMount = () => {
  const getDatas = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const datas = await response.json()
    console.log("리랜더링")
    return datas;
  };
  
  getDatas().then((datas) => this.setState({users : datas}));
};

render() {
  const { users } = this.state;
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
}



export default SideEffectMount;