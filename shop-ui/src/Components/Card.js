import React, { Component } from "react";
import { Link } from "react-router-dom";
 
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key : this.props.key,
      id : this.props.id,
      cardTitle : this.props.title,
      cardPrice : this.props.price,
      cardQuantity : this.props.quantity,
      imageUrl : this.props.imgUrl,
      cardDesc : this.props.desc,
      buttonTitle : "Details",
      viewMode : false
    };
  }

  cardClick = () => {
      if (this.state.viewMode) {
        this.setState({buttonTitle : "Add to cart", viewMode : false});
       
      }
      else {
        this.setState({buttonTitle : "Details", viewMode : true});
        
        
      }
  }
  
  render() {
    return (
      <div className="card m-4" style={{ width: 18 + "rem" }}>
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
            <span> {this.state.cardDesc} </span>
            
          </p>
          <div className="btn btn-secondary"
               onClick = {this.cardClick} >  
              
              <Link to={`/${this.state.id}`}>{this.state.buttonTitle} </Link>       
          </div>
           
        </div>
      </div>
    );
  }
}
export default Card;