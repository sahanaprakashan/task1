import axios from "axios"
import { useEffect, useState} from "react";
import "./style/style.css"



function App() {
  const [user, setUser] = useState([]);

 

  useEffect(()=>{
    getData()
  },[])
  const getData=()=>{
    axios.get("https://jsonplaceholder.typicode.com/todos").then((response)=>{
      setUser(response.data)
      console.log(setUser)

    })
  }
  return (
    <div className="App">
    <div className="tab">
      
      <table>
        <thead>
          <tr>
            <th>userid</th>
            <th>id</th>
            <th>title</th>
            <th>completed</th>
          </tr>
        </thead>
        {
        user.map((el)=>{
        console.log(el);
         
          return<tbody>
          <tr>
            <td>{el.userId}</td>
            <td>{el.id}</td>
            <td>{el.title}</td>
            <td>{!el.completed?"false":"true"}</td>
          </tr>
        </tbody>
        })

      }
        
      </table>
   
    </div>
    </div>
  );
}

export default App;
