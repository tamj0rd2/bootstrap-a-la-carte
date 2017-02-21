var React = require('react')
var ReactDOM = require('react-dom')

var Nav = require('./components/nav.jsx')
var BootstrapPre = require('./components/bootstrap-pre.jsx')
require('./styles/index.css')


let App = React.createClass({
  
  getInitialState: function () {
    const components = [ 
                          "Glyphicons" ,
                          "Dropdowns",
                          "Button groups",
                          "Button dropdowns",
                          "Input groups",
                          "Navs",
                          "Navbar",
                          "Alerts",
                          "Progress bars",
                          "Media object",
                          "List group",
                          "Panels",
                          "Responsive embed",
                          "Wells"
                        ];
    return {
      featureTitle: "Navbar",
      bsComponents: components
    };
  },

  render: function () {
    return (
      <div>
        <Nav components= { this.state.bsComponents } />
        <main>
          <div className="content">
            <h1>{ this.state.featureTitle }</h1>
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
