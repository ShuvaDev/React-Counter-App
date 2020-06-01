import React from 'react'
import Nav from './component/nav'
import Header from './component/header'
import Cart from './component/cart'

class Counter extends React.Component {
    state = {
        counters: [
            {title: 1, value: 0},
            {title: 2, value: 3},
            {title: 3, value: 5},
            {title: 4, value: 8}
        ]
    }
    totalElement = () => {
        let count = 0
        this.state.counters.forEach((item) => {
            if(item.value) {
                count = count + 1
            }
        })
        return count
    }
    increament = (index) => {
        let counters = this.state.counters.map((val, i) => {
            if(i == index) {
                val.value += 1
            }
            return val
        })
        this.setState({counters})
    }
    decreament = (index) => {
        let counters = this.state.counters.map((val, i) => {
            if(i == index) {
                if(val.value > 0) {
                    val.value -= 1
                }
            }
            return val
        })
        this.setState({counters})
    }
    deleteItem = (index) => {
        let counters = this.state.counters.filter((val, i) => {
            return i!=index
        })
        this.setState({counters})
    } 
    reset = () => {
        let counters = this.state.counters.map((val, i) => {
            val.value = 0
            return val
        })
        this.setState({counters})
    }
    handleSubmit = (event) => {
        event.preventDefault()
        let name = event.target.item_name.value
        this.setState({
            counters: [...this.state.counters, {title: name, value: 0}]
        })
        event.target.reset()
    } 
    render() {
        const {counters} = this.state
        return (
            <React.Fragment>
                <Nav totalElement={this.totalElement}/>
                <main className="container my-5">
                    <Header 
                        handleSubmit={this.handleSubmit}
                        reset={this.reset}
                    />                   
                    <Cart 
                        counters={counters}
                        deleteItem={this.deleteItem}
                        increament={this.increament}
                        decreament={this.decreament}
                    />
                </main>

            </React.Fragment>
        )
    }
}

export default Counter