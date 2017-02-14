var React = require('react')
var ReactDOM = require('react-dom')

var Nav = require('./components/nav.jsx')
var BootstrapPre = require('./components/bootstrap-pre.jsx')
require('./styles/index.css')


let App = React.createClass({
  render: function () {
    return (
      <div>
        <Nav/>
        <main>
          <div className="content">
            <h1>Navbar</h1>
            {/* TODO: Use the actual example rather than an image*/}
            <img
              className="image-responsive"
              src={require('./images/navbar.png')}
              alt="navbar example"
            />
            <h2>Code Snippet</h2>
            <BootstrapPre/>
          </div>
        </main>
        <footer>
          <div className="options">
            <a className="btn">Copy to Clipboard</a>
          </div>
        </footer>
      </div>
    )
  }
})


ReactDOM.render(
  <App/>,
  document.getElementById('react-app')
)
