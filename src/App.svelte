<script>
  import {Router, Route,Link} from 'svelte-navigator'
	import Login from "./Components/Auth/Login.svelte";
import Signup from './Components/Auth/Signup.svelte';
	// export let name;
</script>

<Router>
<nav class="nav">
 TODO APP
</nav>
	<Link to="/">Home</Link>
	<Link to="/signup">Signup</Link>
	<Route path="/" >
		<Login />
	</Route>
	<Route path="signup" component={Signup} />
</Router>

<style>
	/* main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
	.test{
		color:red;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	} */

	.nav{
		height: 60px;
		width: 100%;
		display: block;
		margin: 0px;
		font-size: larger;
		font-weight: 700;
		align-content: center;
		align-items: center;
		text-transform: uppercase;
		color: white;
		text-align: center;
		background: linear-gradient(to right, rgba(40,55,200, 0.9), rgba(40,65,200, 0.9), rgba(40,85,200, 0.9)),
		linear-gradient(to left, rgba(36, 22, 235, 0.9), rgba(40, 30, 175, 0.9));
		;
	}

	.form-ground{
    width: 100%;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
    background-image:  linear-gradient(180deg, rgba(23,103,245, 0.7) 30%, rgba(34,145,227, 0)),
      linear-gradient(120deg, rgba(41,143,220, 0.8), rgba(34,175,240, 0.8) 40%),
      linear-gradient(230deg, rgba(25, 100, 240, 0.9) 35%, rgba(255,255,255,0) 30%),
      linear-gradient(-35deg, rgba(25, 90, 220, 0.5) 40%, rgba(255,255,255,0) 31%);		
	}
</style>