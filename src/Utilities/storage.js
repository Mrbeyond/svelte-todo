/**
 * Adds new data to localstorage
*/
export const putToStore=(store, payload)=>{
  let newData;
  if(localStorage.hasOwnProperty(store)){
    let data = JSON.parse(localStorage[store]);
    let newData = [...{...data, id: data.length+1}, payload];
    localStorage[store] = JSON.stringify(newData);
  }else{
    newData = [{...payload, id:1}];
    localStorage[store] = JSON.stringify(newData);
  }
  
  console.log(newData);
  return newData;
}

export const putUniqueToStore=(store, payload, unique)=>{
  let newData;
  if(localStorage.hasOwnProperty(store)){
    let data = JSON.parse(localStorage[store]);
    if(data.some(e=>e[unique] == payload[unique])) return false;
    let newData = [...{...data, id: data.length+1}, payload];
    localStorage[store] = JSON.stringify(newData);
  }else{
    newData = [{...payload, id:1}];
    localStorage[store] = JSON.stringify(newData);
  }
  
  console.log(newData);
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

export const getFromMapStore=(store, payload)=>{
  let storeContent = getStore(store);
  if(!storeContent) return null;


    
}

export const getFromListStore=(store, payload)=>{
  let storeContent = getStore(store);
  console.log(storeContent);
  if(!storeContent) return null;
  let keys = Object.keys(payload);
  console.log(keys);
  let data = storeContent.find(e=> keys.every(d=> e[d] == payload[d]));
  if(!data) return null;
  return data;

    
}
