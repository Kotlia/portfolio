import React from 'react'

const Footer = () => (
  <div id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a href="https://twitter.com/_Kotlia" rel="noreferrer" target="_blank" className="icon fa-twitter">
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/Kotlia" rel="noreferrer" target="_blank" className="icon fa-github">
            <span className="label">Github</span>
          </a>
        </li>
        <li>
          <a href="mailto:shunueda0901@gmail.com" rel="noreferrer" target="_blank" className="icon fa-envelope-o">
            <span className="label">Email</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>
          Shun Ueda
        </li>
        <li>&copy; Kotlia.me</li>
      </ul>
    </div>
  </div>
)

export default Footer
