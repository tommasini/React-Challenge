import React, { useContext, useState } from "react";
import { Context } from "../../contexts/Context";

import Container from "../../components/Container";
import NewTaskInput from "../../components/NewTaskInput";
import Table from "../../components/Table";
import Footer from "../../components/Footer";

const Main = () => {
  const { toDos, removeToDo, addToDo } = useContext(Context);

  const [value, setValue] = useState("");

  const handleSubmit = () => {
    addToDo(value);
  }

  let toDosRender;
  if (toDos) {
    toDosRender = toDos.map((toDo) => {
      return (
        <tr key={toDo.id}>
          <td>{toDo.state ? "true" : "false"}</td>
          <td>{toDo.description}</td>
          <td>
            <button>Edit</button>/<button onClick={() => removeToDo(toDo.id)}>Delete</button>
          </td>
        </tr>
      );
    });
  }

   

  return (
    <>
      <Container>
        <NewTaskInput onSubmit={handleSubmit}>
          <input onChange={e => setValue(e.target.value)} value={value} type="text" placeholder="Write new task here..."></input>
          <input type="submit" id="createButton" value="Create"></input>
        </NewTaskInput>

        <Table>
          <tbody>
            <tr>
              <th colSpan="3">
                <button>Tasks</button>
              </th>
            </tr>

            {toDosRender}
          </tbody>
        </Table>

        <Footer>
          <h3>Hide Completed</h3>
        </Footer>
      </Container>
    </>
  );
};

export default Main;
