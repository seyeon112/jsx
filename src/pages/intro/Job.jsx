import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';

const Job = () => {

  // 쿼리스트링 값을 가져오는 훅 함수 useSearchParams();
  // const [ searchParams ] = useSearchParams();

  // const title = searchParams.get("title");

//하위 뎁스의 폴더 useParams()
 const { title } = useParams();


 const state = useSelector((route) => route);
 console.log(route)

 //redux 초기값에 적용시켜서 사용자의 맞는 데이터를 화면에 뿌리기
 

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>기술</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{title}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Job;