import React, { createContext, useState, useEffect } from "react";
import api from "../services/api";

export const Context = createContext();

const ContextProvider = (props) => {
  const [toDos, setToDos] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get(`/task`);

      setToDos(response.data);
    };

    fetchData();
  }, []);

  const addToDo = (description) => {
    setToDos(...toDos, description);
  };

  const removeToDo = (id) => {
    setToDos(toDos.filter((toDo) => toDo.id !== id));
  };

  return (
    <Context.Provider value={{ toDos, addToDo, removeToDo }}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;