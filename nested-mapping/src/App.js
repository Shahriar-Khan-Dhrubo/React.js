import React from "react";

const users = [
  {
    name: "Msk Dhrubo",
    age: 27,
    number: [
      {home : "50646477"},
      {office : "520664460"}
    ]
  },
  {
    name: "Msk Dhrubo",
    age: 27,
    number: [
      {home : "50646477"},
      {office : "520664460"}
    ]
  },
  {
    name: "Msk Dhrubo",
    age: 27,
    number: [
      {home : "50646477"},
      {office : "520664460"}
    ]
  },
];

function App() {
  return (
    <div className="App">
      {users.map((user,index) => {
        return <article key={index}>
          <h3>{user.name}</h3>
          <p>{user.age}</p>
          {
            user.number.map((phone,index)=>{
              return <div key={index}>
                <p>Home : {phone.home}</p>
                <p>Office : {phone.office}</p>
              </div>
            })
          }
        </article>
      })}
    </div>
  );
}

export default App;
