<script>
  import {Router, Route,Link} from 'svelte-navigator'
	import Login from "./Components/Auth/Login.svelte";
	// export let name;
</script>

<nav class="nav">
 TODO APP
</nav>
<Router>

	<main>
		<!-- <h1>Hello {name}!</h1>
		<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p> -->
	</main>
	<Login />
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
</style>