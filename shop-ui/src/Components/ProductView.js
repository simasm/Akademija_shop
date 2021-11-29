import React, {Component} from 'react'
import Card from './Card'
import axios from 'axios'
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";

export default class ProductView extends Component{

    constructor(props) {
        super(props);
        this.state = {
            product : null,
            uurl : null,
            path : null
        }

    }

    componentDidMount() {
        const load = async () => {
            const response = await axios.get("https://itpro2017.herokuapp.com/api/products");
            const products = response.data;
           // console.log("product size " + products.length);
            
            this.setState({product : products[0]});
         
        }
        const { url, ppath } = useRouteMatch();
        this.setState({uurl : url, path : ppath});
        console.log("prod view did mount");
        setTimeout(load,3000);
    }

    render() {
       
            if(this.state.product !== null) {
                return (
                <div className = "row"> 
                    <div className = "col-6">
                    <Card key = {this.state.product.id} 
                        title = {this.state.product.title} 
                        price = {this.state.product.price} 
                        quantity = {this.state.product.quantity}
                        desc = {this.state.product.description} />  
                    </div>
                </div> 
                );
            }
            else return (<div>didn't load</div>);
         
    }


}