import React, { Component } from "react"
import Img from "gatsby-image"

import Title from "../Globals/Title"

class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: props.items.edges,
      coffeeItems: props.items.edges,
    }
    console.log(this.state)
  }

  render() {
    if (this.state.items.length > 0) {
      return (
        <section className="menu py-5">
          <div className="container">
            <Title title="best of our menu" />
            {/* categories */}
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
                        <h6 className="mb-0">${item.price}</h6>
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
