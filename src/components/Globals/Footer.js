import React from "react"

const Footer = () => {
  return (
    <footer className="footer py-3">
      <div className="container">
        <div className="row">
          <div className="col-10 col-md-8 mx-auto text-center text-capitalize text-vanilla">
            <h5>
              &copy; {new Date().getFullYear().toString()} - all rights reserved
            </h5>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
