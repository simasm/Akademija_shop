import React, {Component} from 'react'
import axios from 'axios'

import Card from './Card'

//cartcounter username contexts
export default class ProductContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products_array : null
        }
    }

    componentDidMount() {
        const load = async () => {
            const response = await axios.get("https://itpro2017.herokuapp.com/api/products");
            const products = response.data;
           // console.log("product size " + products.length);
            
            this.setState({products_array : products});
            console.log("length " + this.state.products_array.length);
        }

        console.log("app did mount");
        setTimeout(load,3000);
    }

    render() {
        
            
            if (this.state.products_array === null)
                return ( <div>neuzkrove</div> );
            else
                return ( 
                    <div className = "row"> 
                        {this.state.products_array.map(prod => 
                        <Card key = {prod.id} 
                              title = {prod.title} 
                              price = {prod.price} 
                              quantity = {prod.quantity}
                              desc = {prod.description} /> )}
                        </div> 
                    
                     //product map);
                );
        
    }

    //css className ir t.t.

}