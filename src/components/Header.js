import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <h1>Expense Forge</h1>
            <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
            <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
        </header>
    )
}

export default Header