import React, { useContext, useState } from "react";
import { Context } from "../../contexts/Context";
import api from "../../services/api";

import Container from "../../components/Container";
import NewTaskInput from "../../components/NewTaskInput";
import Table from "../../components/Table";
import Footer from "../../components/Footer";

const Main = () => {
  const {
    toDos,
    removeToDo,
    addToDo,
    hideCompleted,
    showAll,
    editToDo,
    orderAToZ,
    toDosAToZ,
    orderZToA,
    toDosZToA,
    dateOrder
  } = useContext(Context);

  const [value, setValue] = useState("");

  const [editValue, setEditValue] = useState("");

  const [sortType, setSortType] = useState("date");

  const handleSubmit = () => {
    addToDo(value);
  };

  const toggleCompleted = (e, id, description) => {
    console.log(e.target.checked);
    console.log(id);
    const fetchData = async () => {
      const response = await api.patch(`/task/` + id, {
        state: e.target.checked,
        description: description,
      });
      console.log(response);
    };
    fetchData();
  };

  const handleChange = (e) => {
    console.log(e.target.checked);
    if (e.target.checked === true) {
      hideCompleted();
    } else {
      showAll();
    }
  };

  const toogleEdit = (id, state) => {
    console.log(id, state);
    editToDo(id, state, editValue);
  };

  let toDosRender;
  /*const tableRender = (data, sort) => {
    if (data && sortType === sort) {
      toDosRender = data.map((toDo) => {
        return (
          <tr key={toDo.id}>
            <td>
              <input
                type="checkbox"
                readOnly={toDo.state === true ? true : false}
                onChange={(e) => {
                  toggleCompleted(e, toDo.id, toDo.description);
                }}
                defaultChecked={toDo.state === true ? true : false}
              />
              <label>Completed</label>
            </td>
  
            <td>
              <form onSubmit={() => toogleEdit(toDo.id, toDo.state)}>
                <input
                  type="text"
                  placeholder={toDo.description}
                  onChange={(e) => setEditValue(e.target.value)}
                />
                <input type="submit" value="Edit" />
              </form>
            </td>
            <td>
              <button onClick={() => removeToDo(toDo.id)}>Delete</button>
            </td>
          </tr>
        );
      });
    }
  }*/

 // tableRender(toDos, "date");
  
  if (toDos && sortType === "date") {
    toDosRender = toDos.map((toDo) => {
      return (
        <tr key={toDo.id}>
          <td>
            <input
              type="checkbox"
              disabled={toDo.state === true ? true : false}
              onChange={(e) => {
                toggleCompleted(e, toDo.id, toDo.description);
              }}
              defaultChecked={toDo.state === true ? true : false}
            />
            <label>Completed</label>
          </td>

          <td>
            <form onSubmit={() => toogleEdit(toDo.id, toDo.state)}>
              <input
                type="text"
                placeholder={toDo.description}
                onChange={(e) => setEditValue(e.target.value)}
              />
              <input type="submit" value="Edit" />
            </form>
          </td>
          <td>
            <button onClick={() => removeToDo(toDo.id)}>Delete</button>
          </td>
        </tr>
      );
    });
  } else if (toDosAToZ && sortType === "asc") {
    toDosRender = toDosAToZ.map((toDo) => {
      return (
        <tr key={toDo.id}>
          <td>
            <input
              type="checkbox"
              disabled={toDo.state === true ? true : false}
              onChange={(e) => {
                toggleCompleted(e, toDo.id, toDo.description);
              }}
              defaultChecked={toDo.state === true ? true : false}
            />
            <label>Completed</label>
          </td>

          <td>
            <form onSubmit={() => toogleEdit(toDo.id, toDo.state)}>
              <input
                type="text"
                placeholder={toDo.description}
                onChange={(e) => setEditValue(e.target.value)}
              />
              <input type="submit" value="Edit" />
            </form>
          </td>
          <td>
            <button onClick={() => removeToDo(toDo.id)}>Delete</button>
          </td>
        </tr>
      );
    });
  }else if(toDosZToA && sortType === "desc") {
    toDosRender = toDosZToA.map((toDo) => {
      return (
        <tr key={toDo.id}>
          <td>
            <input
              type="checkbox"
              disabled={toDo.state === true ? true : false}
              onChange={(e) => {
                toggleCompleted(e, toDo.id, toDo.description);
              }}
              defaultChecked={toDo.state === true ? true : false}
            />
            <label>Completed</label>
          </td>

          <td>
            <form onSubmit={() => toogleEdit(toDo.id, toDo.state)}>
              <input
                type="text"
                placeholder={toDo.description}
                onChange={(e) => setEditValue(e.target.value)}
              />
              <input type="submit" value="Edit" />
            </form>
          </td>
          <td>
            <button onClick={() => removeToDo(toDo.id)}>Delete</button>
          </td>
        </tr>
      );
    });
  }

  const handleClick = () => {
    

    switch (sortType) {
      case "date":
        orderAToZ();
        setSortType("asc");
        break;
      case "asc":
        orderZToA();
        setSortType("desc");
        break;
      case "desc":
        dateOrder();
        setSortType("date");
        break;
      default:
        setSortType("date");
    }
  };

  return (
    <>
      <Container>
        <NewTaskInput onSubmit={handleSubmit}>
          <input
            onChange={(e) => setValue(e.target.value)}
            value={value}
            type="text"
            placeholder="Write new task here..."
          ></input>
          <input type="submit" id="createButton" value="Create"></input>
        </NewTaskInput>

        <Table>
          <tbody>
            <tr>
              <th colSpan="3">
                <button onClick={handleClick}>Tasks</button>
              </th>
            </tr>
            {toDosRender}
          </tbody>
        </Table>

        <Footer>
          <input type="checkbox" onChange={handleChange} />
          <label>Hide Completed</label>
        </Footer>
      </Container>
    </>
  );
};

export default Main;
