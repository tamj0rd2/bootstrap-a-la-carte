var React = require('react')
var ReactDOM = require('react-dom')
const constants = require('./scripts/constants.js')

var Navigation = require('./components/navigation.jsx')
const componentCode = [
  require('./components/elements/alert.jsx'),
  require('./components/elements/button-dropdown.jsx'),
  require('./components/elements/button-group.jsx'),
  require('./components/elements/dropdown.jsx'),
  require('./components/elements/glyphicon.jsx'),
  require('./components/elements/input-group.jsx'),
  require('./components/elements/list-group.jsx'),
  require('./components/elements/media-object.jsx'),
  require('./components/elements/navigation-bar.jsx'),
  require('./components/elements/nav.jsx'),
  require('./components/elements/panel.jsx'),
  require('./components/elements/progress-bar.jsx'),
  require('./components/elements/responsive-embed.jsx'),
  require('./components/elements/well.jsx'),
]
require('./styles/index.scss')


let App = React.createClass({
  getInitialState: function () {
    return {
      selectedElementIndex: constants.elements.indexOf('Navbar'),
    }
  },
  changeSelectedElement: function (clickedLiIndex) {
    this.setState({ selectedElementIndex: clickedLiIndex })
  },
  render: function () {
    const featureTitle = constants.elements[this.state.selectedElementIndex]
    const BootstrapElement = componentCode[this.state.selectedElementIndex]
    return (
      <div>
        <Navigation
          selectedElementIndex={ this.state.selectedElementIndex }
          liClicked={ this.changeSelectedElement }
        />
        <main>
          <div className="content">
            <h1>{ featureTitle }</h1>
            {/* TODO: Use the actual example rather than an image */}
            <img
              className="image-responsive"
              src={require('./images/navbar.png')}
              alt="navbar example"
            />
            <h2>Code Snippet</h2>
            <BootstrapElement/>
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
