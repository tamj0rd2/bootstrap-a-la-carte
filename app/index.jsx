var React = require('react')
var ReactDOM = require('react-dom')
require('./styles/index.css')


let App = React.createClass({
  render: function () {
    return (
      <div>
        <nav>
          <h1 className="title">Bootstrap 4.0</h1>
          <ul id="components">
            <li> <a href="#">Glyphicons</a>
            </li>
            <li> <a href="#">Dropdowns</a>
            </li>
            <li> <a href="#">Button groups</a>
            </li>
            <li> <a href="#">Button dropdowns</a>
            </li>
            <li> <a href="#">Input groups</a>
            </li>
            <li> <a href="#">Navs</a>
            </li>
            <li> <a href="#">Navbar</a>
            </li>
            <li> <a href="#">Alerts</a>
            </li>
            <li> <a href="#">Progress bars</a>
            </li>
            <li> <a href="#">Media object</a>
            </li>
            <li> <a href="#">List group</a>
            </li>
            <li> <a href="#">Panels</a>
            </li>
            <li><a href="#">Responsive embed</a></li>
            <li><a href="#">Wells</a></li>
          </ul>
        </nav>
        <main>
          <div className="content">
            <h1>Navbar</h1>
            <img className="image-responsive" src={require('./images/navbar.png')} alt="navbar example" />
            <h2>Code Snippet</h2>
            <pre className="prettyprint">
&lt;nav class=&quot;navbar navbar-default&quot;&gt;
<br />  &lt;div class=&quot;container-fluid&quot;&gt;
<br />    &lt;!-- Brand and toggle get grouped for better mobile display --&gt;
<br />    &lt;div class=&quot;navbar-header&quot;&gt;
<br />      &lt;button type=&quot;button&quot; class=&quot;navbar-toggle collapsed&quot; data-toggle=&quot;collapse&quot; data-target=&quot;#bs-example-navbar-collapse-1&quot; aria-expanded=&quot;false&quot;&gt;
<br />        &lt;span class=&quot;sr-only&quot;&gt;Toggle navigation&lt;/span&gt;
<br />        &lt;span class=&quot;icon-bar&quot;&gt;&lt;/span&gt;
<br />        &lt;span class=&quot;icon-bar&quot;&gt;&lt;/span&gt;
<br />        &lt;span class=&quot;icon-bar&quot;&gt;&lt;/span&gt;
<br />      &lt;/button&gt;
<br />      &lt;a class=&quot;navbar-brand&quot; href=&quot;#&quot;&gt;Brand&lt;/a&gt;
<br />    &lt;/div&gt;
<br />
<br />    &lt;!-- Collect the nav links, forms, and other content for toggling --&gt;
<br />    &lt;div class=&quot;collapse navbar-collapse&quot; id=&quot;bs-example-navbar-collapse-1&quot;&gt;
<br />      &lt;ul class=&quot;nav navbar-nav&quot;&gt;
<br />        &lt;li class=&quot;active&quot;&gt;&lt;a href=&quot;#&quot;&gt;Link &lt;span class=&quot;sr-only&quot;&gt;(current)&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
<br />        &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Link&lt;/a&gt;&lt;/li&gt;
<br />        &lt;li class=&quot;dropdown&quot;&gt;
<br />          &lt;a href=&quot;#&quot; class=&quot;dropdown-toggle&quot; data-toggle=&quot;dropdown&quot; role=&quot;button&quot; aria-haspopup=&quot;true&quot; aria-expanded=&quot;false&quot;&gt;Dropdown &lt;span class=&quot;caret&quot;&gt;&lt;/span&gt;&lt;/a&gt;
<br />          &lt;ul class=&quot;dropdown-menu&quot;&gt;
<br />            &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Action&lt;/a&gt;&lt;/li&gt;
<br />            &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Another action&lt;/a&gt;&lt;/li&gt;
<br />            &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Something else here&lt;/a&gt;&lt;/li&gt;
<br />            &lt;li role=&quot;separator&quot; class=&quot;divider&quot;&gt;&lt;/li&gt;
<br />            &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Separated link&lt;/a&gt;&lt;/li&gt;
<br />            &lt;li role=&quot;separator&quot; class=&quot;divider&quot;&gt;&lt;/li&gt;
<br />            &lt;li&gt;&lt;a href=&quot;#&quot;&gt;One more separated link&lt;/a&gt;&lt;/li&gt;
<br />          &lt;/ul&gt;
<br />        &lt;/li&gt;
<br />      &lt;/ul&gt;
<br />      &lt;form class=&quot;navbar-form navbar-left&quot;&gt;
<br />        &lt;div class=&quot;form-group&quot;&gt;
<br />          &lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Search&quot;&gt;
<br />        &lt;/div&gt;
<br />        &lt;button type=&quot;submit&quot; class=&quot;btn btn-default&quot;&gt;Submit&lt;/button&gt;
<br />      &lt;/form&gt;
<br />      &lt;ul class=&quot;nav navbar-nav navbar-right&quot;&gt;
<br />        &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Link&lt;/a&gt;&lt;/li&gt;
<br />        &lt;li class=&quot;dropdown&quot;&gt;
<br />          &lt;a href=&quot;#&quot; class=&quot;dropdown-toggle&quot; data-toggle=&quot;dropdown&quot; role=&quot;button&quot; aria-haspopup=&quot;true&quot; aria-expanded=&quot;false&quot;&gt;Dropdown &lt;span class=&quot;caret&quot;&gt;&lt;/span&gt;&lt;/a&gt;
<br />          &lt;ul class=&quot;dropdown-menu&quot;&gt;
<br />            &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Action&lt;/a&gt;&lt;/li&gt;
<br />            &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Another action&lt;/a&gt;&lt;/li&gt;
<br />            &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Something else here&lt;/a&gt;&lt;/li&gt;
<br />            &lt;li role=&quot;separator&quot; class=&quot;divider&quot;&gt;&lt;/li&gt;
<br />            &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Separated link&lt;/a&gt;&lt;/li&gt;
<br />          &lt;/ul&gt;
<br />        &lt;/li&gt;
<br />      &lt;/ul&gt;
<br />    &lt;/div&gt;&lt;!-- /.navbar-collapse --&gt;
<br />  &lt;/div&gt;&lt;!-- /.container-fluid --&gt;
<br />&lt;/nav&gt;
            </pre>
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
