import React from "react";

const users = [
  {
    name: "Msk Dhrubo",
    age: 27,
    number: [{ home: "50646477" }, { office: "520664460" }],
  },
  {
    name: "Arifa Anjum Ava",
    age: 25,
    number: [{ home: "369467947477" }, { office: "5206644363660" }],
  },
  {
    name: "Msk Dhoni",
    age: 8,
    number: [{ home: "557997477" }, { office: "6407057" }],
  },
];

function App() {
  return (
    <div className="App">
      {users.map((user, index) => {
        return (
          <article key={index}>
            <p>Fullname : {user.name}</p>
            <p>Age : {user.age}</p>
            {user.number.map((phone, index) => {
              return (
                <div key={index}>
                  {phone.home && <p>Home: {phone.home}</p>}
                  {phone.office && <p>Office: {phone.office}</p>}
                </div>
              );
            })}
          </article>
        );
      })}
    </div>
  );
}

export default App;
