import React, { Component } from 'react'

import './style.scss'

class About extends Component {
  render () {
    return (
      <div className="about">
        <div className="image">
        </div>
        <div className="bio">
          Programmer, Jazz lover, Table tennis player, Cricket player, Tubist...
            <br/><br/>
            All the projects are open-source. Click the image to access the GitHub repo.
        </div>
      </div>
    )
  }
}

export default About
