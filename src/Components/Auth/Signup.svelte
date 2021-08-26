<script>

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
    if(!/\w+@\w+\.\w+$/.test(email)) return invalidEmail = true;
    if(password.trim().length < 6) return invalidPassword = true;
    if(username.trim().length < 6) return invalidPassword = true;
    if(localStorage.hasOwnProperty('users')){
      let users = JSON.parse(localStorage.users);
      users = [...users, {username,email,password}]
      localStorage.users = JSON.stringify(users)
      console.log(users);
    }else{
      localStorage.users = JSON.stringify([{username,email,password}])
    }
    completed = true;

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
      <div>User name</div>
      <input placeholder="username" bind:value={username}  name="username" />
      {#if invalidUsername}
        <div><small>Username is required and must be minimum of 3 characters</small></div>        
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
    {#if completed}
      <div>
        <div>Registration completed, please continue</div>
        <button >Continue</button>
      </div>      
    {/if}
  </form>
</div>