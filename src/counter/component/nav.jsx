import React from 'react'

const Nav = (props) => (
    <nav className='nav navbar navbar-light bg-light'>
        <a className="navbar-brand text-secondary mb-0">
            Your Total Element
            <span className="badge badge-pill badge-warning ml-2">{props.totalElement()}</span>
        </a>
    </nav>
)

export default Nav