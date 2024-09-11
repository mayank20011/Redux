<h1>REACT-REDUX</h1>
<p>React Redux is the official React UI bindings layer for Redux.<br/>
It acts as the bridge between your React components and the Redux store.<br/>
With React Redux, your components can read data from the Redux store and dispatch actions to update the state.<br/>Lets create a simple App which will have 2 child components amount and bonus, now these child components should have some functionality, we want some data to flow from chld to parent, Bonus, account to app component. lets try to do it</p>
<ol type="i">
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
  <p>Now this is making the code complex, what if there was child component of bonus or account and we need to access these props in that child component of bonus? then we have to send these props to bonus then bonus to its child, ie:- big prop drilling , which makes code complex. lets try to do it using redux.</p>
</li>

<li>
<h3>Using redux</h3>
<p>Lets Create a store for this app specifically and try to do these tasks using redux, but lets first cerate few folder, for action creators, for reducer, lwts cerate these folder in src and create files in these folders</p>
<img src="reduximg/rr1.png"/>
<p>Now lets create store, reducers, we already created action creators.</p>
<img src="reduximg/rr2.png"/>
<img src="reduximg/rr3.png"/>
<p>Now, we can create stores in app.jsx but we should create in main.jsx where app is called and rendered</p>
<img src="reduximg/rr4.png">
<p>Now lets access this store in app and use it</p>
<img src="reduximg/rr5.png">
<p>Now lets catch these props in child component and also use it there.</p>
<img src="reduximg/rr6.png">
<p>Now lets see whats inside these function</p>
<img src="reduximg/rr7.png">
<p></p>
<img src="reduximg/rr8.png">
<p></p>
</li>
</ol>
