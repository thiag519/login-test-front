
export const setFullName = (name:string) => {
  try {
    if(name == '') return 'sem nome';
    
    const f = name.charAt(0).toUpperCase();
    const first = f.concat(name.split(' ')[0].substring(1, name.length -1));
    
    const l = name.split(" ")[1];
    let tl;
    l == ''? tl ='' : tl =  l.charAt(0).toUpperCase();
    
    const last = tl.concat(name.split(" ")[1].substring(1, name.length - 1));
  if(last == '') return first;
   return [ first, last]
  } catch (err) {
    console.error(err)
  }
  
}