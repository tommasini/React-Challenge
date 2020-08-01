import styled from "styled-components";

const Table = styled.table`
  width: 100%;

  margin-right: auto;
  padding-top: 50px;
  
  th {
    padding-bottom:10px;
    border-bottom: solid 3px;
    button {
      margin-right: 1150px;
      
      border: none;
      background-color: #E3E3E3;

      font-size:22px;
      font-weight: bold;
    }
  }
 
  td {
    padding: 10px;

    margin-bottom: 5px;
    

    border-bottom: solid 2px;
    input:first-of-type {
      
      border:none;
      border-left: 1px solid;
      border-bottom: 1px solid;
      margin-right: 5px;
      
      ::placeholder {
        padding-left: 4px;
        color: black;   
        font-weight: bold;
        background-color: #E3E3E3;
       
      }

     
    }


     .editButton {
        border: default ;
        :hover{
          cursor: pointer;
        }
      }

      .editInput{
        width: 500px;
      }
  }

  .lastTD {
    align-content:right;
  }

`;

export default Table;