import React, { Component } from "react";
 
import 'bootstrap/dist/css/bootstrap.min.css';
class LikeCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            like: 1,
            hate: 1,
            likeBtn: "Like "  ,
            hateBtn: "Hate " ,
            resetBtn: "Reset"
        }
    }
    pressLike = () => {
        this.setState({
            like: this.state.like + 1,
            likeBtn: "Like " + this.state.like 
        });
    };
    pressHate = () => {
        this.setState({
            hate: this.state.hate + 1,
            hateBtn: "Hate " + this.state.hate
        });
    };
    pressReset = () => {
        this.setState({
            like: 1,
            hate: 1,
            likeBtn: "Like " ,
            hateBtn: "Hate " 
        });
    };
    render() {
        return (
          <div className="card" style={{ width: 30 + "em"}}>
            <img
              src=""
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title"> Like Card </h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the
                bulk of the card's content. Some quick example text to build on the 
                card title and make up the bulk of the card's content. Some quick
                example text to build on the card title and make up the bulk of the 
                card's content.
              </p>
                 
                    <button
                        className= "btn btn-success m-2" 
                        onClick={this.pressLike}
                    >
                        {this.state.likeBtn}
                    </button>
                    <button
                        className= "btn btn-danger m-2" 
                        onClick={this.pressHate}
                    >
                        {this.state.hateBtn}
                    </button>
                    <button
                        className= "btn btn-info m-2" 
                        onClick={this.pressReset}
                    >
                        {this.state.resetBtn}
                    </button>
                
            </div>
          </div>
        );
    }
}
export default LikeCard;