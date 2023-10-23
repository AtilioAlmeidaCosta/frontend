import React, { useEffect, useState } from "react";
import List from "./components/List";
import axios from "axios";
import { baseURL } from "./utils/constant";
import {BiLogoLinkedin, BiLogoGithub} from "react-icons/bi";
import {FaYoutubeSquare} from "react-icons/fa";

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
  const redirectVideo=(tipo)=>{
    if(tipo ==="Original")
    window.open('https://youtu.be/xElA9mGi-I0?si=aisdx0fLtEJWOeMc', "_blank", "noreferrer");
    else
    window.open('https://youtu.be/xElA9mGi-I0?si=aisdx0fLtEJWOeMc', "_blank", "noreferrer");
  }
  const redirectLinkedin=(nome)=>{
    switch (nome){
      case 'Atilio':
        window.open('https://www.linkedin.com/in/atilio-almeida-costa/', "_blank", "noreferrer");
        break;
      case 'João':
        window.open('https://www.linkedin.com/in/', "_blank", "noreferrer");
        break;
      case 'Julia':
        window.open('https://www.linkedin.com/in/', "_blank", "noreferrer");
        break;
      case 'Leandro':
        window.open('https://www.linkedin.com/in/', "_blank", "noreferrer");
        break;
      case 'Pedro':
        window.open('https://www.linkedin.com/in/', "_blank", "noreferrer");
        break;
      default:
        window.open('https://www.linkedin.com/in/', "_blank", "noreferrer");
    }
  }
  const redirectGithub=(nome)=>{
    switch (nome){
      case 'Atilio':
        window.open('https://github.com/AtilioAlmeidaCosta', "_blank", "noreferrer");  
        break;
      case 'João':
        window.open('https://github.com/', "_blank", "noreferrer");    
        break;
      case 'Julia':
        window.open('https://github.com/', "_blank", "noreferrer");    
        break;
      case 'Leandro':
        window.open('https://github.com/', "_blank", "noreferrer");    
        break;
      case 'Pedro':
        window.open('https://github.com/', "_blank", "noreferrer");    
        break;
      case 'Frontend':
        window.open('https://github.com/', "_blank", "noreferrer");    
        break;
      case 'Backend':
        window.open('https://github.com/', "_blank", "noreferrer");    
        break
      default:
        window.open('https://github.com/', "_blank", "noreferrer");    
    }
  }
    return <main>
    <section className="crud">
    <h1 className="title">Operações de Crud</h1>
    <div className="input_holder">
    <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
    <button type="submit" onClick={updateId ? updateTask: addTask}>{updateId?"Atualizar Tarefa" :"Adicionar Tarefa"}</button>
    </div>
    
  <table border={2} className="darkTable">
        <thead>
            <tr>
                <th>Tarefa</th>
                <th>Editar</th>
                <th>Deletar</th>
            </tr>
        </thead>
        <tbody>
            {task.map(task => (
            <List key={task._id}
            id={task._id}
            task={task.task}
            setUpdateUI={setUpdateUI}
            updateMode={updateMode}
            />
            ))}
      </tbody>
    </table>
    </section>
    <section className="content">
      <div className="guide">
      <h2 className="title">Passo a Passo</h2>
      <ul>
        <li>Vídeo de referênia original:
        <FaYoutubeSquare className="video-icon" onClick={()=>redirectVideo('Original')}/>
        </li>
        <li>Vídeo explicativo do nosso projeto:
        <FaYoutubeSquare className="video-icon" onClick={()=>redirectVideo('Nosso')}/>
        </li>
        <li>Repositórios
          <ul>
            <li>Frontend: <BiLogoGithub className="profile-icon"  onClick={()=>redirectGithub('Frontend')}></BiLogoGithub></li>
            <li>Backend:<BiLogoGithub className="profile-icon"  onClick={()=>redirectGithub('Backend')}></BiLogoGithub></li>
          </ul>
        </li>
      </ul>
      </div>
    
    <div className="profiles">
      <h2 className="title">Autores</h2>
      <div className="autores">
      <div className="autor">
        <h3>Atilio</h3>
      <BiLogoLinkedin className="profile-icon"  onClick={()=>redirectLinkedin('Atilio')}></BiLogoLinkedin>
      <BiLogoGithub className="profile-icon"  onClick={()=>redirectGithub('Atilio')}></BiLogoGithub>
      </div>
      <div className="autor">
        <h3>João</h3>
      <BiLogoLinkedin className="profile-icon"  onClick={()=>redirectLinkedin('Atilio')}></BiLogoLinkedin>
      <BiLogoGithub className="profile-icon"  onClick={()=>redirectGithub('Atilio')}></BiLogoGithub>
      </div>
      <div className="autor">
        <h3>Julia</h3>
      <BiLogoLinkedin className="profile-icon"  onClick={()=>redirectLinkedin('Atilio')}></BiLogoLinkedin>
      <BiLogoGithub className="profile-icon"  onClick={()=>redirectGithub('Atilio')}></BiLogoGithub>
      </div>
      <div className="autor">
        <h3>Leandro</h3>
      <BiLogoLinkedin className="profile-icon"  onClick={()=>redirectLinkedin('Atilio')}></BiLogoLinkedin>
      <BiLogoGithub className="profile-icon"  onClick={()=>redirectGithub('Atilio')}></BiLogoGithub>
      </div>
      <div className="autor">
        <h3>Pedro</h3>
      <BiLogoLinkedin className="profile-icon"  onClick={()=>redirectLinkedin('Atilio')}></BiLogoLinkedin>
      <BiLogoGithub className="profile-icon"  onClick={()=>redirectGithub('Atilio')}></BiLogoGithub>
      </div>
      </div>
    </div>
    </section>
  </main>
}
export default App;