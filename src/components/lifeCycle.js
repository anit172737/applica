import React, { Component } from 'react';
import '../sass/lifeCycle.scss';
import Show from './show';

class LifeCycle extends Component {
    //Mounting
    constructor(props) {
        super(props);
      this.state = { favColor: 'navy blue', show:true };
        // this.handleClick = this.handleClick.bind(this);
        // console.log("Constructor!");
      }

    // static getDerivedStateFromProps(props) {
    //     return {favColor : props.fav}
    // }

    // componentDidMount(){
    //     setTimeout(()=>{
    //         this.setState({favColor:'red'})
    //     },2000)
    // }

    handleClick=()=>{
        this.setState({favColor:'black'})
    }

    handleDelete=()=>{
        this.setState({show:false})
    }
    //Updating

    // shouldComponentUpdate(){
    //     return false;
    // }

    // getSnapshotBeforeUpdate(prevProps, prevState){
    //     document.getElementById("div1").innerHTML =
    //     "Before the update, the favorite color was " + prevState.favColor;
    // }

    // componentDidUpdate() {
    //     document.getElementById("div2").innerHTML =
    //     "The updated favorite color is " + this.state.favColor;
    //   }

    render() {
        let header;
        if(this.state.show){
            header = <Show/>
        }
        return (
            <div className='lifeCycle'>
                {/* {header} */}
                <h1>My favourite color is {this.state.favColor}</h1>
                <div id ='div1'></div>
                <div id ='div2'></div>
                <button className='lifeCycle__btn' onClick={this.handleClick}>Change Color</button>
                <br/>
                {/* <button className='lifeCycle__btn' onClick={this.handleDelete}>Delete</button> */}
            </div>
        );
    }
}

export default LifeCycle;