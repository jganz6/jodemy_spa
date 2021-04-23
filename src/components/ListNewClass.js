import { React, useState } from "react";
import PopsPromptMessage from "./PopsPromptMessage";
function ListNewClass({ data, register, token }) {
  const [show, setShow] = useState(false);
  return (
    <tr>
      <td>
        {data.class_name}{" "}
        {show ? (
          <PopsPromptMessage
            message={"Are you sure to register?"}
            actionAccept={() =>
              register(
                `${process.env.REACT_APP_DOMAINAPI}:${process.env.REACT_APP_PORTAPI}/class/register?id_class=${data.id_class}`,
                token
              )
            }
            show={show}
            setShow={setShow}
          />
        ) : null}
      </td>
      <td>{data.category}</td>
      <td>{data.description}</td>
      <td>{data.level}</td>
      <td>{data.pricing === 0 ? "Free" : data.pricing + "$"}</td>
      <td onClick={() => setShow(true)}>
        <div className="new-class-register">Register</div>
      </td>
      <td>&#x22EE;</td>
    </tr>
  );
}

export default ListNewClass;
