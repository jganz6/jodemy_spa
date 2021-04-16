import React from "react";

function ListNewClass({ data, register, newClass }) {
  return (
    <tr>
      <td>{data.class_name}</td>
      <td>{data.category}</td>
      <td>{data.description}</td>
      <td>{data.level}</td>
      <td>{data.pricing === "0" ? data.pricing + "$" : "Free"}</td>
      <td onClick={() => register(data.id_class, newClass)}>
        <div className="new-class-register">Register</div>
      </td>
      <td>&#x22EE;</td>
    </tr>
  );
}

export default ListNewClass;
