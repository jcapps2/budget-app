import React from 'react'
import { connect } from 'react-redux'       // connects component to redux store
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'

const ExpenseList = (props) => {
    return (
        <div>
            <h1>Expense List</h1>
            {props.expenses.map((expense) => {
                return <ExpenseListItem key={expense.id} {...expense} />
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList)