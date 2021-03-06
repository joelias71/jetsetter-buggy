import React, { Component } from "react";
import "./styles/Item.css";

class Item extends Component {
  render() {
    const { item, onCheckOff, onRemove } = this.props;
    return (
      <article className="Item">
        <label htmlFor={item.id}>
          <input
            type="checkbox"
            checked={item.packed}
            onChange={onCheckOff}
            id={item.id}
          />
          {item.value}
        </label>
        <button className="Item-remove" onClick={onRemove}>
          Remover
        </button>
      </article>
    );
  }
}

export default Item;
