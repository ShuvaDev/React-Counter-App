import React from 'react'
const Header = (props) => (
    <div className="card">
        <div className="card-body shadow-lg">
            <div className="row">
                <div className="col-5">
                    <form onSubmit={props.handleSubmit}>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder='Enter your item name' name='item_name'/>
                            <div className="input-group-append">
                                <button className='btn btn-secondary'>Add Item</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-3" onClick={props.reset}>
                    <button className="btn btn-primary">Reset</button>
                </div>
            </div>
        </div>
    </div>
)

export default Header