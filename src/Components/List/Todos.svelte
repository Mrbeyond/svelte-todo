<!-- <script>
  // import DataTable, { Head, Body, Row, Cell, Label } from '@smui/data-table';
  import { mapTodo } from '../../Utilities/storage';
  import Fa from 'svelte-fa'
  import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
  import Dialog, { Title, Content, Actions } from '@smui/dialog';
  
  let heads = ['S/N', 'Title', 'Details', 'Time', 'Status', 'Actions' ];
  let sizze = [5, 15, 40, 15, 10, 15];
  let pad;
  let open = true;

  const getIndex=(obejct, data)=>{
    return Object.keys(obejct).findIndex(e=>e == data);
  }
  
  let todos = mapTodo();
  $: console.log(todos);
</script>


<div class="bx-no-pd">
  <Dialog
    bind:open
    aria-labbeledby="dialog-title"
    aria-described-by="dialog-content"
  >
    <Title id="dialog-title">
      Add to todo
    </Title>
    <Content id="dialog-content">
      here
    </Content>
  </Dialog>
  <div class="right"> 
    <button on:click={()=>open=true} class="m-btn" style="margin-bottom: 0px;">More</button>
  </div>
  <hr>
  <table style=" width:100%; max-width:100%; ">    
    <caption> <strong>Todo List</strong> </caption>
    <tr>
      {#each heads as head, i }
        <th class="cells th-c">{head}</th>
      {/each}
      <th></th>
    </tr>
    <!-- table body -->
    {#each todos as todo, index }
      <tr>
        <td> <span class:pad>{index+1}</span> </td>
        <td> <span class:pad>{todo.title}</span> </td>
        <td> <span class:pad>{todo.details}</span> </td>
        <td> <span class:pad>{todo.date}</span> </td>
        <td> 
          <span class:pad>
            {todo.status? 'Active':'Elapsed'}
          </span> 
        </td>
        <td> 
          <div class:pad>
            <Fa icon={faTrashAlt} style="margin-right: 7px" size="lg" />
            <Fa icon={faEdit} size="lg" />
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