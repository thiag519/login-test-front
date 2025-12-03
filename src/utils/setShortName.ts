export const setShortName = (name:string) => {
  try {
    if(!name)return 'Sem Nome' 
    const first = name.charAt(0);
    const last = name.split(' ')[1].charAt(0);
    const sigla = `${first.toUpperCase()}${last?last.toUpperCase(): ''}`;
    return  sigla;
  } catch (err) {
    console.error(err)
  }
  
}