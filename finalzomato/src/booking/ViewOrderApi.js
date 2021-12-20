/*
import React,{Component} from 'react';
import ViewDisplay from './ViewOrderDisplay';
import axios from 'axios';

const url = "https://zomatojulapi.herokuapp.com/viewOrder";
const url1 = "https://zomatojulapi.herokuapp.com/updateOrder"

class ViewOrder extends Component {
    constructor(props){
        super(props)

        this.state={
            orders:''
        }
    }
    render(){
        if(!sessionStorage.getItem('userData')){
            return(
                <div>
                    <h1>Login first to see booking</h1>
                </div>
            )
        }
        return(
            <div className="container">
                <ViewDisplay orderData={this.state.orders}/>
            </div>
        )
    }

    // get orders 
    componentDidMount(){
        if(this.props.location){
            var qparams = this.props.location.search;
            if(qparams){
                var data = {
                    "status":"Delivered",
                    "date":qparams.split('&')[2].split('=')[1],
                    "bank_status":qparams.split('&')[0].split('=')[1],
                    "bank":qparams.split('&')[3].split('=')[1]
                }
                var id = qparams.split('&')[1].split('=')[1].split('_')[1];
                fetch(`${url1}/${id}`,
                    {
                        method:'PUT',
                        headers:{
                            'Accept':'application/json',
                            'Content-Type':'application/json'
                        },
                        body:JSON.stringify(data)
                    })
            }
        }
        axios.get(`${url}?email=${sessionStorage.getItem('userData').split(',')[1]}`).then((res) => {this.setState({orders:res.data})})
    }
}

export default ViewOrder;
*/

import React,{Component} from 'react';
import ViewDisplay from './ViewOrderDisplay';
import axios from 'axios';
import Header from '../Header'


const url="https://zomatojulapi.herokuapp.com/viewOrder"


class ViewOrder extends Component {
    constructor(props){
        super(props)

        this.state ={
            orders:''
        }
    }
    render() {
        if(!sessionStorage.getItem('userData')) {
            return(
                <div>
                    <Header/>
                    <h1>
                        Login first to see the Order
                    </h1>
                </div>
            )
        }
        return (
            <div>
                <div className="container">
                    <ViewDisplay orderData={this.state.orders}/>
                </div>
            </div>
        )
    }

    //get orders
    componentDidMount(){
        axios.get(`${url}?email=${sessionStorage.getItem('userData').split(',')[1]}`).then((res) => {this.setState({orders:res.data})})
    }
}

export default ViewOrder;
