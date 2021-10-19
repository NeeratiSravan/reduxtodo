import React from 'react';
import {connect} from 'react-redux';
const Todolist = (props) =>{
    return (
        <div style={{border:"1px solid",margin:"5px",padding:"5px"}}>
            <h1>Todolist</h1>
            {
                props.todolist.map((s,i)=>{
                    return <li key={i}>{s}</li>
                })
            }
        </div>
    )
}
function mapstatetoprops(state){
    return {
        todolist:state.todolist
    }
}
function mapdispatchtoprops(dispatch){
    return {

    }
}
export default connect (mapstatetoprops,mapdispatchtoprops) (Todolist)