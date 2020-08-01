import React, { createContext, useState, useEffect } from "react";
import api from "../services/api";

export const Context = createContext();

const ContextProvider = (props) => {
  const [toDos, setToDos] = useState([]);

const [toDosAToZ, setAsc] = useState([]);

const [toDosZToA, setDesc] = useState([])

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
      description: description,
    };

    const fetchData = async () => {
      const response = await api.put(`/task`, newToDo);

      setToDos(...toDos, response.data);
    };

    fetchData();
  };

  const editToDo = (id, state, description) => {
    const newToDo = {
      state: state,
      description: description,
    };
    const fetchData = async () => {
      const response = await api.patch(`/task/` + id, newToDo);
      console.log(response);
    };
    fetchData();
  };

  const removeToDo = (id) => {
    setToDos(toDos.filter((toDo) => toDo.id !== id));
    const fetchData = async () => {
      const response = await api.delete(`/task/` + id);
      console.log(response);
    };
    fetchData();
  };

  const hideCompleted = () => {
    setToDos(toDos.filter((x) => x.state === false));
  };

  const showAll = () => {
    const fetchData = async () => {
      const response = await api.get(`/task`);
      setToDos(response.data);
    };
    fetchData();
  };

  const orderAToZ = () => {

    const sorted = toDos.sort((a, b) => {
      const descripA = a.description.toUpperCase();
      const descripB = b.description.toUpperCase();
      if (descripA < descripB) {
        return -1;
      }
      if (descripA > descripB) {
        return 1;
      }

      return 0;
    });

    console.log(sorted);


      setAsc(sorted);
 
    console.log(toDosAToZ);
  }

  const orderZToA = () => {

    const sorted = toDos.sort((a, b) => {
      const descripA = a.description.toUpperCase();
      const descripB = b.description.toUpperCase();
      if (descripA < descripB) {
        return 1;
      }
      if (descripA > descripB) {
        return -1;
      }

      return 0;
    });

    console.log(sorted);


    setDesc(sorted);
 
    console.log(toDosAToZ);
  }

  const dateOrder = () =>{
    const fetchData = async () => {
      const response = await api.get(`/task`);
      console.log(response.data);
      setToDos(response.data);
    };

    fetchData();
  }

  return (
    <Context.Provider
      value={{
        toDos,
        addToDo,
        removeToDo,
        hideCompleted,
        showAll,
        editToDo,
        orderAToZ,
        toDosAToZ,
        orderZToA,
        toDosZToA,
        dateOrder,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
