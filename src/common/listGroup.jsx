import React from "react";

const ListGroup = ({ items, textProperty, valueProperty, onItemSelect, selectedItem }) => {
    return <ul className="list-group">
        {items.map((item) => <li key={item[valueProperty]}
            onClick={() => { onItemSelect(item) }}
            style={{ cursor: "pointer" }}
            className={item === selectedItem ? "list-group-item active" : "list-group-item"}>
            {item[textProperty]}
        </li>)}

    </ul>
}

export default ListGroup;