export const setInitialName = (name:string | undefined) => {
  try {
    if(!name)return 'S N';
    const first = name.charAt(0);
    let last:string;
    let daDe = ['da','de']
    
    if(name.split(' ')[1]?.includes(daDe[0]||daDe[1])){last = name.split(' ')[2]}else{last=name.split(' ')[1]} ;
    
    const initialName = `${first.toUpperCase()}${last ? last.charAt(0).toUpperCase(): ''}`;
    return  initialName;
  } catch (err) {
    console.error(err)
  }
  
}