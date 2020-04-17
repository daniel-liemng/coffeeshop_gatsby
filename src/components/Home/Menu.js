import React, { Component } from "react"
import Img from "gatsby-image"

import Title from "../Globals/Title"

// Get all categories -> get unique values -> add 'add' to it
const getCategories = items => {
  let tempItems = items.map(item => {
    return item.node.category
  })
  let tempCategoies = new Set(tempItems)
  let categories = Array.from(tempCategoies)
  categories = ["all", ...categories]
  return categories
}

class Menu extends Component {
  // state in constructor with props is passed from parent component: index.js(data from query)
  // coffeeItems is state to display List on website
  // setState on coffeeItems depending on categories
  constructor(props) {
    super(props)
    this.state = {
      items: props.items.edges,
      coffeeItems: props.items.edges,
      categories: getCategories(props.items.edges),
    }
    // console.log(this.state)
  }

  // filtering
  handleItems = category => {
    let tempItems = [...this.state.items]
    if (category === "all") {
      this.setState(() => {
        return {
          coffeeItems: tempItems,
        }
      })
    } else {
      let items = tempItems.filter(
        ({ node: item }) => item.category === category
      )
      this.setState(() => {
        return {
          coffeeItems: items,
        }
      })
    }
  }

  render() {
    if (this.state.items.length > 0) {
      return (
        <section className="menu py-5">
          <div className="container">
            <Title title="best of our menu" />
            {/* categories */}
            <div className="row mb-5">
              <div className="col-10 mx-auto text-center">
                {this.state.categories.map((category, index) => (
                  <button
                    key={index}
                    className="btn btn-default text-capitalize mx-2"
                    onClick={() => this.handleItems(category)}
                    type="button"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            {/* items */}
            <div className="row">
              {this.state.coffeeItems.map(({ node: item }) => {
                return (
                  <div
                    key={item.id}
                    className="col-11 col-md-6 my-3 d-flex mx-auto"
                  >
                    {/* Item Image */}
                    <div>
                      <Img fixed={item.image.fixed} />
                    </div>
                    {/* Item Text */}
                    <div className="flex-grow-1 px-3">
                      <div className="d-flex justify-content-between mb-2">
                        <h6 className="mb-0">{item.title}</h6>
                        <h6 className="mb-0 text-brown">${item.price}</h6>
                      </div>
                      <p className="text-muted">
                        <small>{item.description.description}</small>
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )
    } else {
      return (
        <section className="menu py-5">
          <div className="container">
            <Title title="best of our menu" />
            <div className="row">
              <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
                <h1>there is no item to display</h1>
              </div>
            </div>
          </div>
        </section>
      )
    }
  }
}

export default Menu
