var React = require('react')

let Nav = React.createClass({

  getInitialState: function (props) {
    return {
    };
  },

  getLi: function () {
    // console.log("nav.jsx", this.props.components);
    const lis = this.props.components.map( comp => {
      return <li id={comp} className="each-component">
              <a href="#">{comp}</a>
            </li>;
    })
    console.log(lis);
    return lis;
  },
  
  render: function () {
    return (
      <nav>
        <h1 className="title">Bootstrap 4.0</h1>
        <ul id="components">
          { this.getLi() }
        </ul>
      </nav>
    )
  }
})

module.exports = Nav
