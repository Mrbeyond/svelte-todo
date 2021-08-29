<script>
  import DataTable, { Head, Body, Row, Cell, Label } from '@smui/data-table';
  import { mapTodo } from '../../Utilities/storage';
  import AddTodo from '../Form/AddTodo.svelte';  
  import Fa from 'svelte-fa'
  import { faFlag } from '@fortawesome/free-solid-svg-icons'

  import SvelteTable from "svelte-table";
  
  let heads = ['S/N', 'Title', 'Details', 'Time', 'Status', 'Actions' ];
  let sizze = [5, 15, 40, 15, 10, 15];
  // let ids = ["title","details","date","status"];

  const getIndex=(obejct, data)=>{
    return Object.keys(obejct).findIndex(e=>e == data);
  }
  
  let todos = mapTodo();
  $: console.log(todos);
  const columns = [
    /** columns config (example below) */
    {
      key: "id",
      title: "S/N",
      value: v => v.id
    },
    {
      key: "title",
      title: "Tile",
      value: (v, i) => v.title +" == "+ i
    },
    {
      key: "details",
      title: "Details",
      value: v => v.details
    },
    {
      key: "status",
      title: "Status",
      value: v => v.status
    },
  ];
</script>



<div class="box">
  <AddTodo />
 
  <!-- <SvelteTable classNameTable="box" 
  classNameCell="cells"
  columns="{columns}" rows="{todos}">
      
  </SvelteTable> -->
  <nav class="red">
  </nav>
  <div class="icon">
  </div>
  <div style=" background:skyblue; display:flex; justify-content:stretch">
    <DataTable
      table$aria-label="Todo list"
      style="width: 100%;"
    >
      <Head>
        <Row style="background:red">
          {#each heads as head, i }

            <Cell style="" columnId={head} ><Label>{head}</Label></Cell>
            <!-- style="width:{sizze[i]}%;"  style={i ==2 && 'width: 100%'}-->
          {/each}
        </Row>
      </Head>
      <Body>
        {#each todos as todo, index}
          <Row>
            <Cell>{index+1}</Cell>
            <Cell>{todo.title}</Cell>
            <Cell>{todo.details}</Cell>
            <Cell>{todo.date}</Cell>
            <Cell>{todo.status}</Cell>
            <Cell> 
            </Cell>
            <!-- style="width: {sizze[0]}%" 
            style="width: {sizze[1]}%" 
            style="width: {sizze[2]}%" 
            style="width: {sizze[3]}%" 
            style="width: {sizze[4]}%" 
            style="width: {sizze[5]}%"  -->

          </Row>
          
        {/each}
      </Body>
    </DataTable>
    

  </div>
</div>
<style>

  .icon {
    display: table;
    color: red;
    width: 32px;
    height: 32px;
  }

  .cells{
    text-align: left;
    background-color: red;
    color: blue !important;
  }

</style>