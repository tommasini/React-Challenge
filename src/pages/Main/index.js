import React, { useContext } from "react";
import Context from "../../contexts/Context";

import Container from "../../components/Container";
import NewTaskInput from "../../components/NewTaskInput";
import Table from "../../components/Table";
import Footer from "../../components/Footer";

const Main = () => {
  const toDos = useContext(Context);
  console.log(toDos);
    return (
      <>
        <Container>
          <NewTaskInput>
            <input type="text" placeholder="Write new task here..." ></input>
            <input type="submit" id="createButton" value="Create"></input>
          </NewTaskInput>

          <Table>
          <tbody>
            <tr>
              <th colSpan="3"><button>Tasks</button></th>
            
            </tr>
            <tr>
              <td>selectBox</td>
              <td> description </td>
              <td className="lastTD">Edit/Delete</td>
            </tr>
           
            </tbody>
          </Table>

          <Footer>
            <h3>Hide Completeded</h3>
         
          </Footer>

         
        </Container>
      </>
    );
  
}

export default Main;



