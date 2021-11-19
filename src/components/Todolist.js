import React from "react";

export default function Todolist(props) {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Date</th>
            <th>Description</th>
          </tr>
          {props.todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo[1]}</td>
              <td>{todo[0]}</td>
              <td>
                <input
                  type="button"
                  value="Delete"
                  onClick={() => props.deleteItem(index)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
