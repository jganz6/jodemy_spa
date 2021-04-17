import React from "react";

function ListNewClass({ data, register, token }) {
  return (
    <tr>
      <td>{data.class_name}</td>
      <td>{data.category}</td>
      <td>{data.description}</td>
      <td>{data.level}</td>
      <td>{data.pricing === "0" ? data.pricing + "$" : "Free"}</td>
      <td
        onClick={() =>
          register(
            `http://localhost:8000/class/register?id_class=${data.id_class}`,
            token
          )
        }
      >
        <div className="new-class-register">Register</div>
      </td>
      <td>&#x22EE;</td>
    </tr>
  );
}

export default ListNewClass;
