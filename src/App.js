import React from "react";
import "./App.css";
import AssetsAPI from "./assets";
import AddItem from "./AddItem";
import ListItem from "./ListItem";
import _ from "lodash";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.removeNode = this.removeNode.bind(this);
    this.countUpdate = this.countUpdate.bind(this);
    this.pushListItem = this.pushListItem.bind(this);

    this.state = {
      data: [],
      article: 0,
      document: 0,
      video: 0
    };
  }

  countUpdate() {
    var articleCount = _.filter(this.state.data, function(o) {
      if (o.type == "Article") return o;
    }).length;
    //console.log("Artile", this.state.article, articleCount);
    this.state.article = articleCount;
    var documentCount = _.filter(this.state.data, function(o) {
      if (o.type == "Document") return o;
    }).length;
    this.state.document = documentCount;
    var videoCount = _.filter(this.state.data, function(o) {
      if (o.type == "Video") return o;
    }).length;
    this.state.video = videoCount;
  }

  pushListItem(i) {
    var tempArray = this.state.data;
    console.log("item called", i);
    const index = _.findIndex(this.state.data, function(item) {
      return item.id == i.id;
    });
    if (index != -1) {
      return false;
    }
    tempArray.push(i);
    this.countUpdate();
    this.setState({ data: this.state.data });
    //this.state.data.push(item);
    //console.log("Artile", this.state.article, articleCount);
  }
  removeNode(id) {
    //console.log(this.state.data, id);
    const index = _.findIndex(this.state.data, function(item) {
      return item.id == id;
    });
    this.countUpdate();
    //console.log(index);
    var itemArr = this.state.data;
    itemArr.splice(index, 1);
    this.setState({ data: itemArr });
    this.countUpdate();
  }
  render() {
    return (
      <div className="wrapper">
        <div className="asset-summary">
          <div className="container">
            <div className="row">
              <div className="col-6 asset-summary-left">
                <span>{this.state.data.length} Assets</span>
              </div>
              <div className="col-6 asset-summary-right">
                {this.state.article}x<span className="info">Articles</span>
                {this.state.document}x<span className="info">Documents</span>
                {this.state.video}x<span className="info">Video</span>
              </div>
            </div>
          </div>
        </div>
        <div className="container asset-builder">
          <div className="row">
            <div className="col-4">
              <ul className="asset-picker">
                {AssetsAPI.all().map(a => (
                  <AddItem key={a.key} data={a} pushItem={this.pushListItem} />
                ))}
              </ul>
            </div>
            <div className="col-8">
              <h2>Learning Assets Preview</h2>
              <ul className="asset-preview">
                {this.state.data.map(item => (
                  <ListItem
                    key={item.id}
                    data={item}
                    deleteItem={this.removeNode}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
