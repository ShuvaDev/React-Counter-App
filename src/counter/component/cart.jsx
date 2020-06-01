import React from 'react'

const Cart = (props) => (
    <div className="row">
        {props.counters.map((item, index) => (
            <div className="col-lg-4 mt-3">
                <div className="card shadow-lg">
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-item-center border-bottom pb-3 mb-5">
                            <h4 className="d-inline-block">Item #{item.title} </h4>
                            <button onClick={props.deleteItem.bind(this, index)} className="btn btn-danger btn-sm">Delete</button>
                        </div>
                        {item.value ? <span className="badge m-3 p-2 badge-primary">{item.value}</span>: <span className="badge m-3 p-2 badge-warning">Zero</span>}
                        
                        <button onClick={props.decreament.bind(this, index)} className="btn btn-dark btn-sm mr-2">Decriment</button>
                        <button onClick={props.increament.bind(this, index)} className="btn btn-info btn-sm">Increament</button>
                    </div>
                </div>
            </div>
        ))}
        </div>
)

export default Cart