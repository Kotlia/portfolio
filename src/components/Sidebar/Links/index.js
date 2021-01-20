import React, { Component } from 'react'

import './style.scss'
import 'font-awesome/css/font-awesome.min.css'

class Links extends Component {
  render() {
    return (
      <div className="links">
        <ul className="icons-list">
          <li className="icon">
            <a href="https://www.github.com/kotlia" target="_blank">
              <i className="fa fa-github"></i>
            </a>
          </li>
          <li className="icon">
            <a href="https://www.twitter.com/kotlia_js" target="_blank">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li className="icon">
            <a href="mailto:shunueda0901@gmail.com" target="_blank">
              <i className="fa fa-envelope"></i>
            </a>
          </li>
          <li className="small">
            <p>Credits:</p>
            <p><a href="https://iconscout.com/icons/mysql" target="_blank">Mysql Icon</a> by <a href="https://iconscout.com/contributors/fengquanli" target="_blank">Fengquan Li</a></p>
          </li>
        </ul>
      </div>
    )
  }
}

export default Links