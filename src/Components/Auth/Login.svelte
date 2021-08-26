<script>
import { debug } from "svelte/internal";


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
    if(localStorage.hasOwnProperty('users')){
      let users = JSON.parse(localStorage.users);
      account= user.find(data=>data.email == email && data.password == password);
      if(!account) return userNotFound = true;
      // {@debug account}
      console.log(account);

    }else{
      return userNotFound = true;
    }

  }

</script>

<div>
  <h1>Signup to use our Todo App</h1>
  <form on:submit|preventDefault={submit}>
    <div> 
      <div>Email</div>
      <input placeholder="email" bind:value={email} type="email" name="email" />
      {#if invalidEmail}
        <div><small>Provide a valid email </small></div>        
      {/if}
    </div>
    <div> 
      <div>Password</div>
      <input placeholder="password" bind:value={password} type="password" name="password" />
      {#if invalidPassword}
        <div><small>Password is required and must be minimum of 6 characters</small></div>        
      {/if}
    </div>
    <div>
      <button type="submit">Submit</button>
    </div>
    {#if  userNotFound}
      <div><small>Invalid credentials</small></div>
    {/if}
  </form>
</div>