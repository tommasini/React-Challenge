import React, { createContext, useState, useEffect } from "react";
import api from "../services/api";

export const Context = createContext();

const ContextProvider = (props) => {
  const [toDos, setToDos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get(`/task`);
      console.log(response.data);
      setToDos(response.data);
    };

    fetchData();
  }, []);

 
  const addToDo = (description) => {
  
    const newToDo = {
      description: description
    }

    const fetchData = async () => {
     const response = await api.put(`/task`, newToDo);
      
      setToDos(...toDos, response.data);
    };

    fetchData();
    
  };

  const editToDo = (id, state, description) => {
    const newToDo = {
      state: state,
      description: description
    }
    const fetchData = async () => {
      const response = await api.patch(`/task/` + id, newToDo);
      console.log(response);
    };
    fetchData();

  }

  const removeToDo = (id) => {
    setToDos(toDos.filter((toDo) => toDo.id !== id));
    const fetchData = async () => {
      const response = await api.delete(`/task/` + id);
      console.log(response);
    };
    fetchData();
  };

  const hideCompleted = () => {
    setToDos(toDos.filter(x => x.state === false));
  }

  const showAll = () => {
    const fetchData = async () => {
      const response = await api.get(`/task`);
      setToDos(response.data);
    };
    fetchData();
  }

 

  return (
    <Context.Provider value={{ toDos, addToDo, removeToDo, hideCompleted, showAll, editToDo }}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
