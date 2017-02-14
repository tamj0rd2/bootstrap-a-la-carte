var React = require('react')

let Nav = React.createClass({
  render: function () {
    return (
      <nav>
        <h1 className="title">Bootstrap 4.0</h1>
        <ul id="components">
          <li> <a href="#">Glyphicons</a>
          </li>
          <li> <a href="#">Dropdowns</a>
          </li>
          <li> <a href="#">Button groups</a>
          </li>
          <li> <a href="#">Button dropdowns</a>
          </li>
          <li> <a href="#">Input groups</a>
          </li>
          <li> <a href="#">Navs</a>
          </li>
          <li> <a href="#">Navbar</a>
          </li>
          <li> <a href="#">Alerts</a>
          </li>
          <li> <a href="#">Progress bars</a>
          </li>
          <li> <a href="#">Media object</a>
          </li>
          <li> <a href="#">List group</a>
          </li>
          <li> <a href="#">Panels</a>
          </li>
          <li><a href="#">Responsive embed</a></li>
          <li><a href="#">Wells</a></li>
        </ul>
      </nav>
    )
  }
})

module.exports = Nav
