<script>
	import Signup from './Signup.svelte';
	import { Link } from 'svelte-navigator';
  import { debug, onMount } from "svelte/internal";
  import { windowPort } from '../../Utilities/Sizers'
import { getFromListStore } from '../../Utilities/storage';
  

 
  let size= windowPort();
  let contain = true;
  let email = "";
  let password ="";
  let invalidEmail = null;
  let invalidPassword = null;
  let userNotFound = null;

  const submit=()=>{
    invalidEmail = null;
    invalidPassword = null;
    if(!/\w+@\w+\.\w+$/.test(email)) return invalidEmail = true;
    if(password.trim().length < 6) return invalidPassword = true;
    let account = getFromListStore('users', {email,password});
    if(!account) return userNotFound = true;
    localStorage.user = JSON.stringify(account);
    
  }

  const sizer=()=> {
    size = windowPort();    
  }

  onMount(()=>{
    window.addEventListener('resize', sizer);
  });

  

</script>

<div class:contain class="bdr white ">
  <div>
    <div class='flez'>
      {#if size == 3}
        <h2>Login to use our Todo App {size} </h2>
      {:else if size == 2}
        <h3>Login to use our Todo App</h3>
      {:else}
          <h4>Login to use our Todo App</h4>
      {/if}
    </div>
    <div class="">
      <form on:submit|preventDefault={submit} >
        <div> 
          <div class="label">Email</div>
          <input placeholder="email" bind:value={email} type="email" name="email" />
          {#if invalidEmail}
            <div class="flez"><small>Provide a valid email </small></div>      
          {/if}
        </div>
        <div> 
          <div class="label">Password</div>
          <input placeholder="password" bind:value={password} type="password" name="password" />
          {#if invalidPassword}
            <div class="flez">
              <small>Password is required and must be minimum of 6 characters</small>
            </div>        
          {/if}
        </div>
        <div class="mm flez">
          <button class="bdr white med-font" type="submit">Submit</button>
        </div>
        {#if  userNotFound}
          <div class="flez"><small>Invalid credentials</small></div>
        {/if}
      </form>
      <div class="flez mm mb">
        <span> Are you new here? Please </span> &nbsp;
        <Link style="color:yellow; text-decoration: none" to="/signup">
          Signup here
        </Link>
      </div>

    </div>
  </div>
</div>

<style>
 
</style>