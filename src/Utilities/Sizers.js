export const windowPort =()=> {
  let w = window.innerWidth;
  if(w <= 450) return 1;
  if(450 < w  && w <= 900) return 2;
  return  3;    
}