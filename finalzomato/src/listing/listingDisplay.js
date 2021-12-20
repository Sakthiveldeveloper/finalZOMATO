/*
import React from 'react';
import './listing.css';
import {Link} from 'react-router-dom';


const ListingDisplay = (props) => {

    const renderList = ({listData}) => {
        if(listData){
            if(listData.length>0){
            return listData.map((item) => {
                return(
                    <div className="item" key={item._id}>
                            <div className="row">
                                <div className="col-md-5">
                                    <img className="Image" alt={item.restaurant_name} src={item.restaurant_thumb}/>
                                </div>
                                <div className="col-md-7">
                                    <div className="hotel_name">
                                        <Link to={`/details/${item.restaurant_id}`}>{item.restaurant_name}</Link>
                                        <div className="city_name rating1">{item.address}</div>
                                        <div className="city_name rating3">Rs.{item.cost}</div>
                                    <div >
                                            <span className="label label-primary">
                                                {item.mealTypes[0].mealtype_name}
                                            </span> &nbsp;
                                            <span className="label label-success">
                                                {item.mealTypes[1].mealtype_name}
                                            </span>
                                        </div>
                                        <div>
                                            <span className="label label-warning">
                                                {item.cuisines[0].cuisine_name}
                                            </span> &nbsp;
                                            <span className="label label-info">
                                                {item.cuisines[1].cuisine_name}
                                            </span>
                                        </div>
                                         <div>
                                            <i class="fa fa-star-o" style={{"color":"red"}}></i>&nbsp;
                                            <i class="fa fa-star-o" style={{"color":"red"}}></i>&nbsp;
                                            <i class="fa fa-star-o" style={{"color":"red"}}></i>&nbsp;
                                            <i class="fa fa-star-o" style={{"color":"gray"}}></i>&nbsp;
                                            <i class="fa fa-star-o" style={{"color":"gray"}}></i>&nbsp;
                                </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    
                )
            })
            }else{
                return(
                    <div>
                        <h2>No Data For this filter</h2>
                    </div>
                )
            }
        }else{
            return(
                <div>
                    <img src="/images/loading1.gif" alt="loader"/>
                    <h3>loading....</h3>
                </div>
            )
            
        }

    }

    return(
        <div id="content">
                {renderList(props)}
        </div>
    )
}

export default ListingDisplay;
*/
import React from 'react';
import './listing.css';
import {Link} from 'react-router-dom'
import Header from '../Header';

const ListingDisplay = (props) => {

    const renderList = ({listData}) => {

        if(listData){
                if(listData.length>0){
            return listData.map((item) => {
                return(
                    <div >
                        <div className="item" key={item._id}>
                            
                            <div className="row">
                                <div className="col-md-5 col-sm-5 col-xs-5">
                                    <img className="Image" src={item.restaurant_thumb}/>
                                </div>
                                <div className="col-md-7 col-sm-7 col-xs-7">
                                    <div className="hotel_name">
                                        <Link to={`/details/${item.restaurant_id}`}>{item.restaurant_name}</Link>
                                        <div className="city_name">{item.address}</div>
                                        <div className="city_name rating">{item.rating_text}</div>
                                        <div className="city_name cost">Rs.{item.cost}</div>
                                        <br/>
                                        <div>
                                            <span className="label label-primary">
                                                {item.mealTypes[0].mealtype_name}
                                            </span> &nbsp;
                                            <span className="label label-success">
                                                {item.mealTypes[1].mealtype_name}
                                            </span>
                                        </div>
                                        <div>
                                            <span className="label label-warning">
                                                {item.cuisines[0].cuisine_name}
                                            </span> &nbsp;
                                            <span className="label label-info">
                                                {item.cuisines[1].cuisine_name}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                        
                    
                    
                    )
            })
            }else{
                return(
                    <div >
                        <h2>
                            No Data For This Filter
                        </h2>
                    </div>
                )
            }
        }
        else {
            return(
                <div >
                    <img src="https://i.ibb.co/2sPXhkJ/loading2.gif"/>
                    <h3>loading...</h3>
                </div>
            ) 
        }
    }
    
    return(
        <div id="content">
            {renderList(props)}
        </div>
    )
}

export default ListingDisplay;