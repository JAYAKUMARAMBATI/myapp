import React, {Component}from 'react'
import './style/style.css'

export default class App extends Component {
  render(){
      return(
          <div>
            <ul>
            <li style={{float:"right",color:"white"}}><h2><i>PIZZA POINT</i></h2></li>

                <li><a class="active" href="#home">Home</a></li>
                <li><a href="#news">News</a></li>
                  <li><a href="#contact">Contact</a></li>
                   <li><a href="#about">About</a></li>
            </ul>
          </div>
      )
  }
}