import React from 'react';
import Component02 from './Component02';
import Component03 from './Component03';
// import Component01 from './Component01';

const Container = () => {
  
  // const name = "문세연";
  // const age = "20";
  // const printName = (name) => {
  //   console.log(name)
  // }


  //휴대폰 번호, 주소, style props로 받아서
  //p 태그로 출력하기
  //width: 100px, height: 100px, border: solid 1px black, font-size : 15px
  const phone = "000";
  const address = "구리시";
  const style = {
    width : "100px"
  };




  return (
    <div>
      {/* <Component01 name={name} age={age} printName={printName} /> */}
      {/* <Component02>
        <p style={{color: "blue", fontSize: "20px"}}>안녕하세요. Props 연습입니다.</p>
      </Component02> */}
      <Component03 phone={phone} address={address} >
        <p style={{width: "100px", height: "100px", border: "solid 1px black", fontSize: "15px"}}></p>
      </Component03>
    </div>
  );
};

export default Container;