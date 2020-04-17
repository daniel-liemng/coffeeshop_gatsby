import React from "react"
import { Link } from "gatsby"

import Title from "../Globals/Title"

const Info = () => {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
              ratione pariatur animi rerum esse, atque labore facilis vero sit!
              Corrupti, excepturi nostrum quas maxime deleniti, repudiandae
              fugiat velit sit praesentium eveniet veritatis provident
              laboriosam incidunt est? Veritatis quaerat quo quasi totam.
              Perferendis voluptate, quae tempora nemo laudantium eos facilis
              possimus!
            </p>
            <Link to="/about" className="btn text-uppercase btn-default">
              about us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info
