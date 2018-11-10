import React, { Component } from 'react';


const Like = (props)=>{
    let classes = "fa fa-heart";
    if(!props.liked) classes+= "-o";
    return(
       <i className={ classes }
        style={{cursor : "pointer"}} onClick={props.onClick}
         area-hidden="true"></i>
    )

}

export default Like;