import { todos, user } from "../Store/store";
// import {onDestroy} from 'svelte'
let ID;

let unsubscribe = user.subscribe((d)=> ID = d.id? d.id:null);

// alert(ID)
// onDestroy(()=>{
//   unsubscribe
// })

/** Adds new data to localstorage */
export const putToStore=(store, payload)=>{
  let newData;
  if(localStorage.hasOwnProperty(store)){
    let data = JSON.parse(localStorage[store]);
    let currentId = data[data.length-1]? data[data.length-1].id +1: 1
    newData = [...data, {...payload, id: currentId}];
    localStorage[store] = JSON.stringify(newData);
  }else{
    newData = [{...payload, id:1}];
    localStorage[store] = JSON.stringify(newData);
  }
  
  console.log(newData);
  if(store == 'todos'){
    mapTodo();
  }
  return newData;
}

export const replaceStore=(store, payload)=>{
  localStorage[store] = JSON.stringify(payload);
  // console.log(getStore('todos'));  
  if(store == 'todos'){
    todos.set(payload);
  }
  return payload;
}

export const updateTodoStatus=(payload)=>{    
  // console.log(payload);
  let content = getStore('todos');
  if(!content) return;
  let index = content.findIndex(e=>e.id == payload.id);
  // console.log(index);
  content[index] = {...content[index], ...payload};
 return replaceStore('todos', content); 
}

/**
 * Adds  unique new data to localstorage
*/
export const putUniqueToStore=(store, payload, unique)=>{
  let newData, current;
  if(localStorage.hasOwnProperty(store)){
    let data = JSON.parse(localStorage[store]);
    if(data.some(e=>e[unique] == payload[unique])) return false;
    
    let currentId = data[data.length-1]? data[data.length-1].id+1 : 1
    current = {...payload, id: currentId};
    newData = [...data, current, ];
    localStorage[store] = JSON.stringify(newData);
  }else{
    current = {...payload, id:1}
    newData = [current];
    localStorage[store] = JSON.stringify(newData);
  }

  // if(store == 'users'){
  //   users.set(newData);
  // }
  // console.log(newData);
  return newData;
}

/** Gets content of a particular local storage item */
export const getStore=(store)=>{
  if(localStorage.hasOwnProperty(store)){
    let data = JSON.parse(localStorage[store]);
    return data;
  }else{
    return null;
  }
}

/** Fetch out localstorage items of type <Map>  */
export const putToMapStore=(store, payload)=>{
  localStorage[store] = JSON.stringify(payload);
  user.set(payload); 
}


/** Fetch out localstorage items of type <List>  */
export const getFromListStore=(store, payload)=>{
  let storeContent = getStore(store);
  console.log(storeContent);
  if(!storeContent) return null;
  let keys = Object.keys(payload);
  console.log(keys);
  let data = storeContent.find(e=> keys.every(d=> e[d] == payload[d]));
  if(!data) return null;
  if(store == 'users'){    
    user.set(data);
  }
  return data;    
}


/** Map status to todos */
export const mapTodo=()=>{
  try {
    let data = getStore('todos');
    if(!data || !ID) return null;

    data = data.filter(e=>e.id  && e.userId == ID).map(todo=>{
      let status = new Date(new Date().toDateString()) > new Date(todo.date)? 0: 1;
      // console.log(todo.payload);
      // delete todo.payload;
      return {...todo, status};
    });
    todos.set(data);
  
  } catch (e) {
   console.log(e);
  }
}

export const test=()=>{
  alert('test');
}

/** Filters out todo with future or present date */
export const mapActiveTodo=()=>{
  let todos = getStore('todos');
  if(!todos) return null;
  return todos.filter(e=>new Date(new Date().toDateString()) > new Date(e.date))
  .map(todo=>{
    let status = new Date(new Date().toDateString()) > new Date(todo.date)? 0: 1;
    return {...todo, status};
  })
}

/** Filters out todo with elapsed date */
export const mapUnactiveTodo=()=>{
  let todos = getStore('todos');
  if(!todos) return null;
  return todos.filter(e=>new Date(new Date().toDateString()) > new Date(e.date))
  .map(todo=>{
    let status = new Date(new Date().toDateString()) > new Date(todo.date)? 0: 1;
    return {...todo, status};
  })
}
