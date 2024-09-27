import React from 'react';
import {useForm} from 'react-hook-form';

const Form = () => {
  
  console.log(useForm());
  //register : 값을 전달해주는 함수
  //formState : form 의 현재 상태값 받는 함수
  //errors : form에서 생기는 errors를 갖는 함수 
  //isSubmitted : 한번이라도 클릭했다면 true 함수
  //isSubmitting : 값이 제출중일 떄 버튼을 비활성화시키는 함수, 
  // ex) <button disabled = {isSubmitting}>전송</button> 
  // 비구조화 할당


  const {register, handleSubmit, getValues, formState: {isSubmitting, isSubmitted, errors}} = useForm({mode : "onChange"});
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;


  return (
    <form onSubmit={handleSubmit(async(data) => {


      //데이터 가져와서 콘솔에 출력하기
      //REST API
      //CRUD(Read), get 요청

      //fetch("경로", 옵션)
      await fetch("http://localhost:4000/user", {
        method : 'POST',
        headers : {
          'Content-Type' : "application/json"
        },
        body : JSON.stringify ({
          id : 2, 
          email : data.email,
          password : data.password
        })

      })

      .then((response) => response.json())
      .then(console.log)
      .catch(console.error)

    })}>

    

        {/* 😎 */}
        <label htmlFor="email">
          <p>이메일</p>
          <input type="text" id='email' placeholder='아이디를 입력하세요.' 
          {...register("email", {
            required : true,
            pattern : {
              value : emailRegex,
            }
          })}
          />

          {console.log("에러", errors)}
          {errors && errors?.email?.type === "required" && (
            <p>이메일을 입력하세요</p>
          )}
          {errors && errors?.email?.type === "pattern" && (
            <p>이메일 양식에 맞게 입력하세요</p>
          )}
        </label>

        {/* 비밀번호 로직 만들기*/}

          <label htmlFor="password">
            <p>비밀번호</p>
            <input type="text" id='password' placeholder='비밀번호를 입력하세요.' 
            {...register("password", {
              required : true,
              pattern : {
                value : passwordRegex,
              }
            })}/>


            {console.log("에러", errors)}
            {errors && errors?.password?.type === "required" && (
              <p>비밀번호를 입력하세요</p>
            )}
            {errors && errors?.password?.type === "pattern" && (
              <p>비밀번호를 조건에 맞게 입력하세요</p>
            )}

          </label>

          <label htmlFor="passwordConfirm">
            <p>비밀번호 확인</p>
            <input type="text" id='passwordConfirm' placeholder='비밀번호를 입력하세요.' 
            {...register("passwordConfirm", {
              required : true,
              validate : {
                matchPassword : (passwordConfirm) => {
                  const { password } = getValues();
                  console.log(password, passwordConfirm, password === passwordConfirm);
                  return password === passwordConfirm;
                }
              }
            })}/>


            {console.log("에러", errors)}
            {errors && errors?.passwordConfirm && (
              <p>비밀번호가 일치하지 않습니다!</p>
            )}
           

          </label>

          {/* 체크박스 */}

          <label>
            <p>취미</p>
            
            <label>
              <span>축구</span><input name="hobby" type='checkbox' value="축구" {...register("hobbies")}/>
              </label>
            <label>
              <span>야구<input name="hobby" type='checkbox' value="야구" {...register("hobbies")}/>
              </span>
            </label>
            <label>
              <span>농구<input name="hobby" type='checkbox' value="농구" {...register("hobbies")}/>
              </span>
              </label>
            <label>
              <span>배구<input name="hobby" type='checkbox' value="배구" {...register("hobbies")}/>
              </span>
              </label>
          </label>


        <button disabled={isSubmitted}>회원가입</button>
    </form>
  );
};

export default Form;