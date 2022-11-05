import React from 'react'
import PropTypes from "prop-types";
import { useDispatch } from 'react-redux';
import { completeTodo, deleteTodo } from '../store/todo'


function TodoCart(props) {

    const dispatch = useDispatch()
    const handleComplete = (id) => dispatch(completeTodo(id))
    const handleDelete = (id) => dispatch(deleteTodo(id))

    return (
        <li id={`item${props.data.id}`} onClick={() => handleComplete(props.data.id)} className="animate__fadeInDown col-lg-6 p-2 d-block">
            <div className="itemContentWrapper">
                <div className="itemName">{props.data.todo}</div>
                <div className="row justify-content-between">
                    <div className="col-auto"><div className="date"><i className="bi bi-calendar-check-fill me-2"></i>{props.data.date}</div></div>
                    <div className="col-auto">{props.data.isComplete ? <label className="badge bg-primary animate__fadeInDown animate__animated">Complete</label> : <label className="badge bg-danger">Not Complete</label>}</div>
                </div>
                <button className="btn btn-sm deleteBtn" onClick={() => handleDelete(props.data.id)}><i className="bi bi-x"></i></button>
            </div>
        </li>
    )
}


TodoCart.propTypes = {
    data: PropTypes.object
}

TodoCart.defaultProps = {
    data: {}
}


export default TodoCart