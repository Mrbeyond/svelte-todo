<script>
  import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
  import { mapTodo } from '../../Utilities/storage';
  import AddTodo from '../Form/AddTodo.svelte';
  import MdDeleteForever from 'svelte-icons/md/MdDeleteForever.svelte';
  import FaEdit from 'svelte-icons/fa/FaEdit.svelte'
  let heads = ['S/N', 'Title', 'Details', 'Time', 'Status', 'Actions' ];
  let sizze = [5, 15, 40, 15, 10, 15]
  
  let todos = mapTodo();
  $: console.log(todos);

</script>


<div>
  <AddTodo />
  <FaEdit />
  <nav class="red">
  </nav>
  <div style=" background:red">
    <DataTable
      table$aria-label="Todo list"
      style="width: 100%;"
    >
      <Head>
        <Row>
          {#each heads as head, i }
            <Cell style="width:{sizze[i]}%; text-align:start ">{head}</Cell>
          {/each}
        </Row>
      </Head>
      <Body>
        {#each todos as todo, index}
          <Row>
            <Cell>{index+1}</Cell>
            <Cell >{todo.title}</Cell>
            <Cell >{todo.details}</Cell>
            <Cell >{todo.date}</Cell>
            <Cell >{todo.status}</Cell>
            <Cell>
              <MdDeleteForever style="width:4px" />
              <FaEdit />
            </Cell>

          </Row>
          
        {/each}
      </Body>
    </DataTable>
    

  </div>
</div>
<style>

  .icons{
    color: green !important;
    font-size: smaller !important ;
  }

</style>