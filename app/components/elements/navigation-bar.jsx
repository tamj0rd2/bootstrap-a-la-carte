var React = require('react')
var ReactDOMServer = require('react-dom/server')
var htmlBeautify = require('js-beautify').html
import { Navbar, NavItem } from 'react-bootstrap'


let NavbarPre = React.createClass({

  render: function () {
    const jsx = (
      <Navbar>
        <NavItem>Item 1</NavItem>
        <NavItem>Item 2</NavItem>
        <NavItem>Item 3</NavItem>
      </Navbar>
    )
    const htmlString = ReactDOMServer.renderToStaticMarkup(jsx)
    return (
      <pre className="prettyprint">
        {htmlBeautify(htmlString)}
      </pre>
    )
  }
})

module.exports = NavbarPre
