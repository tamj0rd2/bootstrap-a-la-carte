var React = require('react')
const constants = require('../scripts/constants.js')

let Nav = React.createClass({
  getLi: function () {
    // make individual li component for ul
    return constants.elements.map((comp,i) => {
      return (
        <li
          id={comp}
          data-key={i}
          className={ this.props.highlight === i ? 'active' : '' }
          onClick={ () => this.props.onClick(i)}
        >
          <a data-key={i} href="#">{comp}</a>
        </li>
      )
    })
  },
  render: function () {
    return (
      <nav>
        <h1 className="title">Bootstrap 4.0</h1>
        <ul id="elements">
          { this.getLi() }
        </ul>
      </nav>
    )
  }
})

module.exports = Nav
