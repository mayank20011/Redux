<h1>REACT-REDUX</h1>
<p>React Redux is the official React UI bindings layer for Redux.<br/>
It acts as the bridge between your React components and the Redux store.<br/>
With React Redux, your components can read data from the Redux store and dispatch actions to update the state.<br/>Lets create a simple App which will have 2 child components amount and bonus, now these child components should have some functionality, we want some data to flow from chld to parent, Bonus, account to app component. lets try to do it</p>
<ul type="1">
<li>

 <h3>By lifting state up</h3>
  <p>This is how our all components and ui looks like:-</p>
  App Component
  <img src="./reduximg/rwr1.png"/>
  Account COmponent
  <img src="./reduximg/rwr2.png"/>
  Bonus Component
  <img src="./reduximg/rwr3.png"/>
  <p>Now i want to pass this amount and point state datat to parent container so that when the amount and point changes it also get reflected in parent container too. so lets try to use the concept of lifting state up, ie:- we will declare these states in app component and try pass all the function regarding to these sates as prop, lets try to do it, and see how components looks like after making changes.</p>
  <img src="./reduximg/rwr4.png"/>
  Accounnt Component
  <img src="./reduximg/rwr5.png"/>
  Bonus Component
  <img src="./reduximg/rwr6.png"/>
</li>
<li></li>
</ul>
