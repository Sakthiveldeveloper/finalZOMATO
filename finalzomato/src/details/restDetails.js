/*
import React,{Component} from 'react';

import axios from 'axios';
import './details.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MenuDisplay from './menuDisplay'

const url = "https://api-reactaish.herokuapp.com/details"
const menu = "https://api-reactaish.herokuapp.com/menu"


class Details extends Component {
    constructor(){
        super()

        this.state={
            details:'',
            menuList:'',
            userItem:''
        }
    }

    addToCart = (data) => {
        console.log("data in card",data)
        this.setState({userItem:data})

    }

    proceed = () => {
        sessionStorage.setItem('menu', this.state.userItem);
        this.props.history.push(`/placeOrder/${this.state.details.restaurant_name}`)
    }

    render(){
        // console.log(">>>>details state",this.state.userItem)
        //let details = this.state.details
        let {details} = this.state
        return(
            <>
              
                <br/>
                <div className="container">
                    <div className="panel panel-danger">
                        <div className="panel-heading">
                        {this.state.details.restaurant_name}
                        </div>
                        <div className="panel-body">
                            <img src={details.restaurant_thumb} alt={details.restaurant_name} className="sliderImage"/>
                             <hr/>
                            <h2>{details.restaurant_name}</h2>
                            <h2><span>
                                    <i class="fa fa-star-o star" style={{"color":"green"}}></i>&nbsp;
                                    <i class="fa fa-star-o star" style={{"color":"green"}}></i>&nbsp;
                                    <i class="fa fa-star-o star" style={{"color":"green"}}></i>&nbsp;
                                    <i class="fa fa-star-o star" style={{"color":"gray"}}></i>&nbsp;
                                    <i class="fa fa-star-o star" style={{"color":"gray"}}></i>&nbsp;
                                    </span>
                                    
                            </h2>
                            <Tabs>
                                <TabList>
                                    <Tab>Details</Tab>
                                    <Tab>Menu</Tab>
                                </TabList>

                                <TabPanel>
                                    <p>{details.restaurant_name} is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        
                                </TabPanel>
                               <TabPanel>
                                   <h2>Menu</h2>
                                <MenuDisplay menudata={this.state.menuList}restId={this.props.match.params.restId}
                                finalOrder={(data)=>{this.addToCart (data)}}/>
                                </TabPanel>
                            </Tabs>
                            <button className="btn btn-success" onClick={this.proceed}>Proceed</button>
                        </div>
                    </div>
                </div>
            </>
            
        )
    }

    //api 
    async componentDidMount(){
        let restId = this.props.match.params.restId;
        let response = await axios.get(`${url}/${restId}`);
        let menudata = await axios.get(`${menu}/${restId}`);
        console.log(response.data)
        console.log(menudata.data)
        this.setState({details:response.data[0],menuList:menudata.data})
    }
}

export default Details;
*/

import React,{Component} from "react";
import axios from 'axios';
import "./details.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Header from '../Header';
import MenuDisplay from './menuDisplay'


//const url ="https://zomatoajulypi.herokuapp.com/details"
const url="https://zomatojulapi.herokuapp.com/details"
const menu = "https://zomatojulapi.herokuapp.com/menu"

class Details extends Component {
    constructor (){
        super()

        this.state={
            details:'',
            menuList:'',
            userItem:''
        }
    }
    addToCart = (data) => {
        this.setState({userItem:data})
        //console.log("data in cart",data)
       
    }

    proceed = () => {
        sessionStorage.setItem('menu',this.state.userItem);
        this.props.history.push(`/placeorder/${this.state.details.restaurant_name}`)

    }
    render() {
        //console.log(">>>>>details state",this.state.userItem)
        //let details = this.state.details
        let {details} = this.state

        return (
            <div className="container-fluid" id="container1">  
                <div className="container" id="container">
                    <div className="panel panel-info">
                        <div className="panel-heading">
                            <h3>
                                welcome to <b>{this.state.details.restaurant_name}</b> Restaurant
                            </h3>
                        </div>
                        <div className="panel-body">
                            <img src={details.restaurant_thumb} className="sliderImage"/>
                            <button className="btn btn-primary galButton" data-toggle="modal" data-target="#myModal">Click to see Image Gallery</button>
                            <div id="myModal" class="modal fade" role="dialog">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                                            <h4 class="modal-title">Modal Header</h4>
                                        </div>
                                        <div class="modal-body">
                                        <div id="myCarousel" class="carousel slide" data-ride="carousel">
                                            <ol class="carousel-indicators">
                                                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                                                <li data-target="#myCarousel" data-slide-to="1"></li>
                                                <li data-target="#myCarousel" data-slide-to="2"></li>
                                            </ol>

                                            <div class="carousel-inner">
                                                <div class="item active">
                                                <img src={details.restaurant_thumb} alt="Briyani"/>
                                                </div>

                                                <div class="item">
                                                <img src={details.restaurant_thumb} alt="Dinner"/>
                                                </div>

                                                <div class="item">
                                                <img src={details.restaurant_thumb} alt="Chai"/>
                                                </div>
                                            </div>

                                            <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                                                <span class="glyphicon glyphicon-chevron-left"></span>
                                                <span class="sr-only">Previous</span>
                                            </a>
                                            <a class="right carousel-control" href="#myCarousel" data-slide="next">
                                                <span class="glyphicon glyphicon-chevron-right"></span>
                                                <span class="sr-only">Next</span>
                                            </a>
                                            </div>

                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div className="panel1">
                                <h3>
                                    This is yours  Favourite <b>{details.restaurant_name}</b> Restaurant
                                </h3>
                                <h3>
                                    {details.restaurant_name} service Rating is <b>{details.average_rating}</b>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star"></span>
                                </h3>
                                <h3>{details.restaurant_name} service Feedback is <b>{details.rating_text}</b></h3>
                            </div>
                            
                            <Tabs>
                                <TabList>
                                    <Tab>About</Tab>
                                    <Tab>Contact</Tab>
                                    <Tab>Menu</Tab>
                                    <Tab>feedBack</Tab>
                                    <Tab>Social Links</Tab>
                                </TabList>

                                <TabPanel id="TabPanel">
                                    <p id="para">
                                    <b>{details.restaurant_name}</b> All of our menu items are inspired by North India cuisine and have been created by our head chef,  <b>{details.restaurant_name}</b>, after studying authentic Northindain,South India, Chinese Traditional, Fast food, Street Food cuisine in <b>{details.restaurant_name}</b>. Not only do we have fresh flown-in seafood from the northeast, but we also have a variety of handcrafted cocktails, wine, and beer to choose from.<br/>
                                    Come dine with us & experience an authentic  <b>{details.restaurant_name}</b> restaurant, establishment where refreshments or meals may be procured by the public. The public dining room that ultimately came to be known as the restaurant originated in France, and the French have continued to make major contributions to the restaurant’s development.
                                    <img src={details.restaurant_thumb} id="detailsimageres"/><br/>
                                    <b>{details.restaurant_name}</b> is located in <b>{details.address}</b><br/><br/>
                                    At <b>{details.restaurant_name}</b>, we’re serving up more than . In fact, <b>{details.restaurant_name}</b> Famous (recipe) is one of our unexpected specialties. Reminiscent of butcher shops back in the day, each slow-smoked, sizzling prime chop measures seven-fingers high. Our signature recipe, that we have perfected for more than four decades, is rubbed with a secret blend of seasonings, cured and roasted on a rotisserie with pecan wood for up to six hours before it’s topped with <b>{details.restaurant_name}</b> signature herb-garlic butter, then carved tableside.<br/>
                                    <b>{details.restaurant_name}</b> is a Contemporary Creole restaurant creating unique dishes with a focus on local ingredients and inspired by classical training. Located in a <b>{details.address}</b> in  <b>{details.restaurant_name}</b> Central Business District, the main dining room caters to the most unique dining experience. The interior is rich with original architectural details, gleaming hardwood floors, soaring columns, mahogany paneling and antique mirrors.<br/>
                                    
                                    </p>
                                </TabPanel>
                                <TabPanel>
                                    <h4>{details.address}is Located ours  {details.restaurant_name} &nbsp; if you any hungry place take order from our store , Happyly Ready to server 24*7</h4>
                                </TabPanel>
                                <TabPanel>
                                    <MenuDisplay menudata={this.state.menuList}
                                    restId={this.props.match.params.restId}
                                    finalOrder={(data) => {this.addToCart(data)}}></MenuDisplay>
                                    
                                </TabPanel>
                            </Tabs>
                            <button className="btn btn-success" onClick={this.proceed}> proceed</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    // api callings

    async componentDidMount(){
        let restId = this.props.match.params.restId;
        let response = await axios.get(`${url}/${restId}`);
        let menudata = await axios.get(`${menu}/${restId}`);
        console.log(response.data);
        console.log(menudata.data);
        this.setState({details:response.data[0],menuList:menudata.data})
    }
}

export default Details;