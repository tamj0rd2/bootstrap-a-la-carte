var React = require('react')

let Nav = React.createClass({

  getInitialState: function () {
    return {
    };
  },

  clickHandler: function(i){
    this.setState({ isActiveLiNo: i })
    // console.log(this.state.isActiveLiNo);
  },

  getLi: function () {
    // console.log("props",this.props.highlight);
    return this.props.components.map( (comp,i) => {
      return <li id={comp} data-key={i} className={ this.props.highlight === i ? "active" : "" } 
              onClick={ () => this.props.onClick(i) }>
                <a data-key={i} href="#">{comp}</a>
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
