import React, { useEffect, useState } from "react";

function Listingfn() {
  const [data, setData] = useState([])

//   useEffect(() => {
//     fetch("https://reqres.in/api/users").then((result) => {
//       result.json().then((resp) => {
//         setData(resp);
//       });
//     });
//   }[],);
//   console.warn(data);
  
  
  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <table>
        <tr>
          <td>Id</td>
          <td>Name</td>
        </tr>

     
          {data.map(item=> (                                                                                                                                                                                                                 
            <tr key={item.id}>z
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
            </tr>
          ))}


{/* { <ul>
      {data.map((item) => (
        <li key={item.id}>{item.first_name}</li>
      ))}
    </ul>} */}
    
      </table>
    </div>
  );
}
export default Listingfn;
