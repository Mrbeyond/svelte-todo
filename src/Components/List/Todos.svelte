<script>
	import { todos, open } from './../../Store/store.js';
  import { mapTodo, replaceStore } from '../../Utilities/storage';
  import Fa from 'svelte-fa';
  import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
  import Dialog, { Title, Content, Actions } from '@smui/dialog';
  import Button, { Label } from '@smui/button';
  import AddTodo from '../Form/AddTodo.svelte';
  import Checkbox from '@smui/checkbox';
  
  let heads = ['S/N', 'Title', 'Details', 'Time', 'Status', 'Actions' ];
  let pad;
  
  let title ="";
  let details = "";
  let date = "";
  let id = null;
  $: {
    mapTodo();
  }

  let selectedTodo = {};

  
  const getIndex=(obejct, data)=>{
    return Object.keys(obejct).findIndex(e=>e == data);
  }
  
  const deleteTodo=(id)=>{
    let tempTodo  = [...$todos];
    if(!selectedTodo.id || (selectedTodo.id && selectedTodo.id != id)){
      return selectedTodo = tempTodo.find(e=> e.id == id);
    }
    tempTodo = tempTodo.filter(e=>e.id != id);
    replaceStore('todos', tempTodo);
    selectedTodo = {};
  }

  const editTodo=(ID)=>{
    let currentTodo = $todos.find(e=> e.id == ID);
    title = currentTodo.title;
    details = currentTodo.details;
    date = currentTodo.date;
    id = ID;
    $open = true;
  }

  const addToTodo=()=>{
    title ="";
    details = "";
    date = "";
    id = null; 
    $open = true;
  }
</script>


<div class="bx-no-pd">
  <!-- surface$style="padding: 0px" -->
  <Dialog
    bind:open={$open}
    fullscreen
    aria-labbeledby="dialog-title"
    aria-described-by="dialog-content"
    surface$style="padding:0px; width: 850px; max-width: calc(100vw - 32px);"

  >
    <Title id="dialog-title">
      
    </Title>
    <Content style="padding:10px 5px" id="dialog-content">
      {#if $open}
        <AddTodo {title} {date} {details} {id} />
        
      {/if}
    </Content>
    <Actions>
      <Button action="accept" default>
        <Label style="color:white">Close</Label>
      </Button>
    </Actions>
  </Dialog>

  <div class="right"> 
    <Button on:click={addToTodo} class="m-btn white" style="margin-bottom: 0px;">ADD More</Button>
  </div>
  <hr>
  <table style=" width:100%; max-width:100%; ">    
    <caption> <strong>Todo List</strong> </caption>
    <!-- table head -->
    <tr>
      {#each heads as head, i }
        <th class="cells th-c">{head}</th>
      {/each}
      <th></th>
    </tr>
    <!-- table body -->
    {#each $todos as todo, index }
      <tr>
        <td> <span class:pad>{index+1}</span> </td>
        <td> <span class:pad>{todo.title}</span> </td>
        <td> <span class:pad>{todo.details}</span> </td>
        <td> <span class:pad>{todo.date}</span> </td>
        <td> 
          <span class:pad>
            {todo.status? 'Active':'Elapsed'}
            <Checkbox on:change={()=>(todo.completed = !todo.completed, console.log(todo))} checked={todo.completed} />
          </span> 
        </td>
        <td> 
          <div class:pad>
            <span class="{selectedTodo.id == todo.id?'red':'dpo'}" on:click={()=>deleteTodo(todo.id)} >
              <Fa icon={faTrashAlt} style="margin-right: 7px" size="lg" />
            </span>
            <span class="th-c" on:click={()=>editTodo(todo.id)} >
              <Fa icon={faEdit} size="lg" />
            </span>
          </div>
        </td>
        </tr>
      {/each}

    </table>
  <nav class="red">
  </nav>
  <div class="icon">
  </div>   

</div>
<style>

  .pad{
    box-sizing: border-box;
  }

  .icon {
    display: table;
    color: red;
    width: 32px;
    height: 32px;
  }

  .cells{
    text-align: left;
  }

</style>