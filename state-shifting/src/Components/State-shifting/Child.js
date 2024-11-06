import React, { useEffect } from 'react';

export default function Child(props) {
  const {data,onChildData} = props;
  const data2 = "i am child data";
  onChildData(data2);
  // useEffect(() => {
  //   onChildData(data2);
  // }, [onChildData, data2]);
  return (
    <div>
      <p>i am child component</p>
      {data}
    </div>
  )
}
