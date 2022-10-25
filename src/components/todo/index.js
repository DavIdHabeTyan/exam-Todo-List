import React, {useState} from 'react';
import deleteIcon from "./../../assets/delete.svg"


const Todo = (props) => {
   const {title, id, deleteTodo, todo, setTodos, todos} = props;
   function handleClick(e) {
      if (e.target.style.textDecoration) {
         e.target.style.removeProperty('text-decoration');
      } else {
         e.target.style.setProperty('text-decoration', 'line-through');
      }
   }
   function handleIsChecked(newTodo) {
      setTodos(todos.map(elem => {
         if (elem.id === newTodo.id) {
            return newTodo
         }
         return elem
      }))
      console.log("mtnuma")
   }
   return (
      <div>
         <div className={"todo"}>
            <input type="checkbox" checked={todo.isComplete}
                   onChange={(e) => handleIsChecked({...todo, isComplete: e.target.checked})
                   }/>

            <p onClick={handleClick}
               className={"todo_Completed"}>{title}</p>
            <img
               className={"icon"}
               src={deleteIcon}
               alt=""
               onClick={() => deleteTodo(id)}
            />
         </div>
      </div>
   );
};

export default Todo;