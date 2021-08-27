<script>
	import { putToStore } from './../../Utilities/storage.js';
  import { Link } from 'svelte-navigator';
  import { debug, onMount } from "svelte/internal";
  import { windowPort } from '../../Utilities/Sizers'
  

 
  let size= windowPort();
  let errorMessage = ""
  export let title="";
  export let details = "";
  export let date ="";  
  let invalidDate = null;  
  let invalidTitle = null;
  let completed = false;
  const submit=()=>{
    invalidDate = null;
    errorMessage = "";
    invalidTitle = null;
    completed = false;
    if(!title.trim()) return invalidTitle = true;
    if(!date.trim()) return invalidDate = true;
    let isDone = putToStore('todos',  {title,details,date});
    if(!isDone) return errorMessage = "Oops! Something went wrong, please retry"
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
        <h2>Add to Todo list {size} </h2>
      {:else if size == 2}
        <h3>Add to Todo list</h3>
      {:else}
          <h4>Add to Todo list</h4>
      {/if}
    </div>
    <form on:submit|preventDefault={submit}>
      <div class="mm"> 
        <div class="label">Titel</div>
        <input required placeholder="title" bind:value={title}  name="title" />
        {#if invalidTitle}
          <div class="flez">
            <small>
              Title is required
            </small>
          </div>        
        {/if}
      </div>
      <div class="mm" style="display: block"> 
        <div class="label" >Details</div>
        <textarea placeholder="Enter details" bind:value={details} rows="4" name="details" />
      </div>
      <div class="mm"> 
        <div class="label">Date</div>
        <input bind:value={date} type="date" required name="date" />
        {#if invalidDate}
          <div class="flez">
            <small>Date is required</small>
          </div>        
        {/if}
      </div>
      <div class="mm flez"> 
        <button class="bdr white med-font" type="submit">ADD</button>
      </div>
    </form>
    {#if errorMessage}
      <div class="flez">
        <small>{errorMessage}</small>
      </div>      
    {/if}
    {#if completed}
      <div>
        <div>Successfully Added</div>
        <button >Save and Add more</button><button >Save</button>
      </div>      
    {/if}
  </div>
</div>

<style></style>