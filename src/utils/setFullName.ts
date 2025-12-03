
export const setFullName = (name:string) => {
  try {
    if(name == '') return name='sem nome';
  const f = name.charAt(0).toUpperCase();
  const first = f.concat(name.split(' ')[0].substring(1, name.length -1));
  const l = name.split(" ")[1].charAt(0).toUpperCase();
  const last = l.concat(name.split(" ")[1].substring(1, name.length - 1));
   return [ first,last]
  } catch (err) {
    console.error(err)
  }
  
}