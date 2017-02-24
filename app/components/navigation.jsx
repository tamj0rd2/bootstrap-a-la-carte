var React = require('react')
const constants = require('../scripts/constants.js')

let Navigation = React.createClass({
  propTypes: {
    selectedElementIndex: React.PropTypes.number.isRequired,
    liClicked: React.PropTypes.func.isRequired
  },
  createNavLi: function (elementName, elementIndex) {
    let className = ''
    if (this.props.selectedElementIndex === elementIndex) {
      className = 'active'
    }

    return (
      <li
        key={ elementIndex }
        className={ className }
        onClick={ () => this.props.liClicked(elementIndex) }
      >
        { elementName }
      </li>
    )
  },
  render: function () {
    return (
      <nav>
        <h1 className="title">Bootstrap 4.0</h1>
        <ul id="elements">
          { constants.elements.map(this.createNavLi) }
        </ul>
      </nav>
    )
  }
})

module.exports = Navigation
