import React, { useState} from 'react';
import {BsTrash} from "react-icons/bs";
import {BiEditAlt} from "react-icons/bi";
import axios from "axios";
import { baseURL } from "../utils/constant";
import 'react-data-grid/lib/styles.css';
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS
import ReactDataGrid from 'react-data-grid';

const List = ({task, setUpdateUI, updateMode}) =>{
    const removeTask= (id)=>{
        axios.delete(`${baseURL}delete/${id}`).then((res)=>{
            setUpdateUI((prevState)=>!prevState);   
        });
    }
    let [rows]= useState(()=>{
        let aux=[]
        task.map(task =>(
            aux.push({key:task._id, id: task._id, task: task.task, 
                edita:<BiEditAlt className="icon" onClick={()=>updateMode(task._id,task.task)}/>,
                deleta:<BsTrash className="icon" onClick={removeTask(task._id)} /> })
            )
        )
        return aux;
        }
    )
    const columns = [
        { key: "id" ,name:'ID'},
        { key: "task" ,name:'Tarefa'},
        { key: "edita" ,name:'Editar'},
        { key: "deleta",name:'Deletar'}
      ];
    return <ReactDataGrid rows={rows} columns={columns}/>
};

export default List;