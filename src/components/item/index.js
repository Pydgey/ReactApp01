import React from "react";

const Item = (props) => {
    return (
        <a href="#" className="list-group-item list-group-item-action list-group-item-dark">
            {props.texto}
        </a>
    )
}

export default Item;