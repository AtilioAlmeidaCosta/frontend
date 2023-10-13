import React, { useEffect, useState } from "react";
import List from "./components/List";
import axios from "axios";
import { baseURL } from "./utils/constant";
const App = ()=>{
  const [input,setInput] = useState("");
  const [task,setTask] = useState([]);
  const [updateUI,setUpdateUI] = useState(false);
  const [updateId,setUpdateId]= useState(null);
  useEffect(()=>{
    axios.get(`${baseURL}get`)
    .then((res)=>{
      
      setTask(res.data);
    })
  },[updateUI]);
  
  const addTask = ()=>{
    axios.post(`${baseURL}save`,{task:input}).then((res)=>{
      
      setInput("");
      setUpdateUI((prevState)=>!prevState);
    });
  }
  const updateMode = (id,text)=>{
    setInput(text);
    setUpdateId(id);
  }
  const updateTask =()=>{
    axios.put(`${baseURL}update/${updateId}`,{task:input}).then((res)=>{
    
    setUpdateUI((prevState)=>!prevState);
    setUpdateId(null);
    setInput("");
    });
    
  }

  return <main>
    <h1 className="tittle">Operações de Crud</h1>
    <div className="input_holder">
    <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
    <button type="submit" onClick={updateId ? updateTask: addTask}>{updateId?"Atualizar Tarefa" :"Adicionar Tarefa"}</button>
    </div>
    <ul>
      {task.map(task => (
      <List key={task._id}
            id={task._id}
            task={task.task}
            setUpdateUI={setUpdateUI}
            updateMode={updateMode}
      />
      ))}
      
    </ul>
  </main>
}
export default App;