<script>
	import "./Styles/css-stlye.css"
  import {Router, Route,Link} from 'svelte-navigator'
	import Login from "./Components/Auth/Login.svelte";
	import Signup from './Components/Auth/Signup.svelte';
	import Todos from './Components/List/Todos.svelte';
	
	// export let name;
</script>

<Router>
	<nav class="nav">
	TODO APP
	</nav>
	<Link to="/">Home</Link>
	<Link to="/signup">Signup</Link>
	<Link to="/todo">Todo</Link>
	<Route path="/" >
		<Login />
	</Route>
	<Route path="signup" component={Signup} />
	<Route path="todo" component={Todos} />
</Router>

<style>

	


</style>