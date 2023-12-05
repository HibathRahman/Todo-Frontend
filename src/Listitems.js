import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const Listitems = ({ items, handleCheck, handleDelete }) => {
  return (
    <div>
      {items.map((ele) => {
        return (
          <li className="item " key={ele._id}>
            <input
              type="checkbox"
              checked={ele.checked}
              onChange={() => handleCheck(ele._id ,ele.checked )}
            />

            <label
              onDoubleClick={() => handleCheck(ele._id)}
              style={ele.checked ? { textDecoration: "line-through" } : null}
            >
              {ele.item}
            </label>

            <FaTrashAlt
              role="button"
              tabIndex="0"
              onClick={() => handleDelete(ele._id)}
            />
          </li>
        );
      })}
    </div>
  );
};

export default Listitems;
