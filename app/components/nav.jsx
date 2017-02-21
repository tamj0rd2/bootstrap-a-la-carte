var React = require('react')

let Nav = React.createClass({

  getInitialState: function (props) {
    return {
      isActiveLiNo: 6
    };
  },

  clickHandler: function(i){
    this.setState({ isActiveLiNo: i })
    // console.log(this.state.isActiveLiNo);
    this.render();
  },

  getLi: function () {
    return this.props.components.map( (comp,i) => {
      return <li id={comp} key={i} className={ this.state.isActiveLiNo === i ? "active" : "" } 
              onClick={ () => this.clickHandler(i) }>
                <a href="#">{comp}</a>
            </li>;
    })
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
