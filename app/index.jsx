var React = require('react')
var ReactDOM = require('react-dom')

var Nav = require('./components/nav.jsx')
var BootstrapPre = require('./components/bootstrap-pre.jsx')
require('./styles/index.css')


let App = React.createClass({
  
  getInitialState: function () {
    // store all components locally to change the title names dynamically
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
      // the current title displayed
      featureTitle: "Navbar",
      // index of current title displayed
      currentTitleIndex: 6,
      // stored the components as a state
      bsComponents: components
    };
  },

  handleClick: function (i) {
    // console.log(i);
    // on click on a component get the index from callback function
    this.setState({ 
                    currentTitleIndex: i,
                    featureTitle: this.state.bsComponents[i]
                 });
    // console.log(this.state.currentTitleIndex);
    // console.log(this.state.featureTitle);
  },

  render: function () {
    return (
      <div>
        <Nav highlight={this.state.currentTitleIndex} components={ this.state.bsComponents } onClick={ (i) => this.handleClick(i) } />
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
