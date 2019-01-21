import React from "react";

class ListItem extends React.Component {
  render() {
    const data = this.props.data;
    console.log("listItem data", data);
    return (
      <li className="asset type-video">
        {<div onClick={() => this.props.pushItem(data)}>{data.name}</div>}
        <h2>{data.name}</h2>
        <p>
          <span className="info">{data.duration}</span>
          <span className="info">{data.type}</span>
        </p>
      </li>
    );
  }
}

export default ListItem;
