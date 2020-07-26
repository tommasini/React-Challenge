import styled from 'styled-components';

const NewTaskInput = styled.form`
display: inline-block;
  
  margin-top: 50px;
  margin-left: 200px;
  

  input{
    
    height: 50px;
    width: 650px;

    background-color: #E3E3E3;
    border: solid 4px;

    font-size: 16px;
   
    padding-left:10px;
  }

  #createButton{
    width: 100px;
    margin-left: 20px;

    font-size: 18px;
    font-weight: bold;
    

    cursor: pointer;

    padding-right: 10px;
  }

`;

export default NewTaskInput;