import React, { useEffect, useState } from "react";

function Listfun() {
  const [data,setData] = useState([])

  
useEffect(()=>{
    fetch("https://reqres.in/api/users").then((result)=>{
        result.json().then((resp)=>{
            setData(resp.data)
        })
    })
},[])
console.warn(data)
return(
    <div>
        <table border="1"> 
            <tr>
                <td>Name</td>
                <td>Last Name</td>
                <td>email</td>
                <td>avatar</td>
            </tr>
            {
                data.map((data)=> 
                <tr>
                <td>{data.first_name}</td>
                <td>{data.last_name}</td>
                <td>{data.email}</td>
                <td>{data.avatar}</td>
                </tr>
                )
            }
        </table>
    </div>
);

        }
   
        export default Listfun;