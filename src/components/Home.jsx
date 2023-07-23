import React, { Component } from 'react'
import Card from './Card';

export default class Home extends Component {
    constructor(){
        super()
        this.state={
            cards:[
                {title:"Alaina",desc:"Full Stack Devloper"},
                {title:"Alaina Aladwi",desc:"Software Eng"},
                
            ]
        }
    }
  render() {
    return (
        <>
        <div className='container'>
            <div className='row'>
                {this.state.cards.map((card)=> <Card title={card.title} desc={card.desc} /> )}
            </div>
        </div>
    </>
    )
  }
}
