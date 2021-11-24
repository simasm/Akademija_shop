import React, { Component } from "react";
 
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key : this.props.key,
      cardTitle : this.props.title,
      cardPrice : this.props.price,
      cardQuantity : this.props.quantity,
      imageUrl : this.props.imgUrl
    };
  }
  
  render() {
    return (
      <div className="card" style={{ width: 18 + "rem" }}>
        <img
          src={this.state.imageUrl}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{this.state.cardTitle}</h5>
          <p className="card-text">
            <span>Price {this.state.cardPrice} </span>
            <span>Quantity {this.state.cardQuantity} </span>
          </p>
           
        </div>
      </div>
    );
  }
}
export default Card;