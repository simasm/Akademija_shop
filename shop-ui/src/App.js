import React, { Component } from "react";
import './App.css';
import Card from './Components/Card'
import Bar from './Components/Bar'
import Items from './items'
 

const stock = new Items();

class App extends Component{

  


  render() {return (
    <React.Fragment>

      
      <div className="container">
       <Bar />
        
       
       
       <div className="container">
       <p>Current stock 
            <span> Total: {stock.items
                                .map( itm => ( itm.price * itm.quantity))
                                .reduce( (sum, total) => {return sum + total}, 0)};
            </span>
          </p>
          <div className="row"> 
            
            {stock.items.map( itm => ( 
            
              <Card key = {itm.id} title = {itm.title} 
              price = {itm.price} quantity = {itm.quantity} imgUrl = {itm.imageUrl}/>
            
            ))}
          </div>
        </div>

        <div className="container">
          <p>Items costing less than 10  
            <span> Total: {stock.items.filter(itm => itm.price < 10)
                                .map( itm => ( itm.price * itm.quantity))
                                .reduce( (sum, total) => {return sum + total}, 0)};
            </span>
          </p>
          <div className="row"> 
            {stock.items.filter(itm => itm.price < 10)
                        .map( itm => (   
              <Card key = {itm.id} title = {itm.title} 
              price = {itm.price} quantity = {itm.quantity} imgUrl = {itm.imageUrl}/>
          
            ))}
          </div>
        </div>  
      
       

      </div>
    </React.Fragment>
    );
    } 
  }
export default App;
