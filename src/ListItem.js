import React from "react";

class ListItem extends React.Component {
  //   removeMe(id) {
  //     this.props.deleteItem(id);
  //   }
  render() {
    const data = this.props.data;
    console.log("listItem data", data);
    return (
      <li className="asset type-article">
        <h2>{data.name}</h2>
        <p>
          <span className="info">{data.duration}</span>
          <span className="info">{data.type}</span>
        </p>
        <button
          className="remove-asset"
          onClick={() => this.props.deleteItem(data.id)}
        >
          x
        </button>
      </li>
    );
  }
}

export default ListItem;
