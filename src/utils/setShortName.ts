export const setShortName = (name:string | undefined) => {
  try {
    if(!name)return 'S N' 
    const first = name.charAt(0);
    
    const last = name.split(' ')[1];
    if(!last) {
      '-'
    }
    const sigla = `${first.toUpperCase()}${last.charAt(0).toUpperCase()}`;
    return  sigla;
  } catch (err) {
    console.error(err)
  }
  
}