import React from 'react';
import {BsTrash} from "react-icons/bs";
import {BiEditAlt} from "react-icons/bi";
import axios from "axios";
import { baseURL } from "../utils/constant";

const List = ({id,task, setUpdateUI, updateMode}) =>{
    const removeTask= ()=>{
        axios.delete(`${baseURL}delete/${id}`).then((res)=>{
         setUpdateUI((prevState)=>!prevState);   
        });
    }      
    return <tr>
        <td>{task}</td>
        <td><BiEditAlt className="icon" onClick={()=>updateMode(id,task)}/></td>
        <td> <BsTrash className="icon" onClick={removeTask} /> </td>
    </tr>
};

export default List;