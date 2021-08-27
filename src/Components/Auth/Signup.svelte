<script>
	import { putUniqueToStore } from './../../Utilities/storage.js';
  import { Link } from 'svelte-navigator';
  import { debug, onMount } from "svelte/internal";
  import { windowPort } from '../../Utilities/Sizers'
  

 
  let size= windowPort();
  let errorMessage = ""
  let username="";
  let email = "";
  let password ="";  
  let invalidEmail = null;
  let invalidPassword = null;  
  let invalidUsername = null;
  let completed = false;
  const submit=()=>{
    invalidEmail = null;
    invalidPassword = null;
    errorMessage = "";
    invalidUsername = null;
    completed = false;
    if(!/\w+@\w+\.\w+$/.test(email)) return invalidEmail = true;
    if(!/\w{3,}$/.test(username.trim())) return invalidUsername = true;
    if(password.trim().length < 6) return invalidPassword = true;
    let isDone = putUniqueToStore('users',  {username,email,password}, 'email');
    if(!isDone) return errorMessage = "Account already exists."
    completed = true;
  }

  const sizer=()=> {
    size = windowPort();    
  }

  onMount(()=>{
    window.addEventListener('resize', sizer);
  });
</script>

<div class="contain bdr white ">
  <div>
    <div class='flez'>
      {#if size == 3}
        <h2>Signup to use our Todo App {size} </h2>
      {:else if size == 2}
        <h3>Signup to use our Todo App</h3>
      {:else}
          <h4>Signup to use our Todo App</h4>
      {/if}
    </div>
    <form on:submit|preventDefault={submit}>
      <div class="mm"> 
        <div class="label" >Email</div>
        <input placeholder="email" bind:value={email} type="email" name="email" />
        {#if invalidEmail}
          <div class="flez"><small>Provide a valid email </small></div>       
        {/if}
      </div>
      <div class="mm"> 
        <div class="label">User name</div>
        <input placeholder="username" bind:value={username}  name="username" />
        {#if invalidUsername}
          <div class="flez">
            <small>
              Username is required and must be minimum of 3 non special characters
            </small>
          </div>        
        {/if}
      </div>
      <div class="mm"> 
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
      <div class="flez mm mb">
        <span> Already have an account? Please </span> &nbsp;
        <Link style="color:yellow; text-decoration: none" to="/">
          Login here
        </Link>
      </div>
    </form>
    {#if errorMessage}
      <div class="flez">
        <small>{errorMessage}</small>
      </div>      
    {/if}
    {#if completed}
      <div>
        <div>Registration completed, please continue</div>
        <button >Continue</button>
      </div>      
    {/if}
  </div>
</div>

<style>
  .contain{
    box-sizing: border-box;
    padding: 0px 20px;
    width: 100% !important;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
    background-image:  linear-gradient(180deg, rgba(23,103,245, 0.7) 30%, rgba(34,145,227, 0)),
      linear-gradient(120deg, rgba(41,143,220, 0.8), rgba(34,175,240, 0.8) 40%),
      linear-gradient(230deg, rgba(25, 100, 240, 0.9) 35%, rgba(255,255,255,0) 30%),
      linear-gradient(-35deg, rgba(25, 90, 220, 0.5) 40%, rgba(255,255,255,0) 31%);
  }
  .red{
    color: red;
  }
  .white{
    color:white;
  }
  .bdr{
    border-radius: 10px;
  }
  .flez{
    display: flex;
    justify-content: center;
  }

  .label{
    font-size: large;
    font-weight: 600;
    padding-left: 2px;
    margin-bottom: 5px;     
  }

  .mm{
    margin: 10px 0px;
  }

  .med-font{
    font-size: medium;
    font-weight: 600;
  }

  input{
    border-radius: 10px;
    border: none;
    width: 100%;
  }
  input:focus{
    border: 0px;
  }
  button{
    border: none;
    max-width: 200px;
    width: 65%;
    background: linear-gradient(to right, rgba(40,55,200, 0.9), rgba(40,65,200, 0.9), rgba(40,85,200, 0.9)),
		linear-gradient(to left, rgba(36, 22, 235, 0.9), rgba(40, 30, 175, 0.9));
		;
  }
</style>