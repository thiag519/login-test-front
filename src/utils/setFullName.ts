
export const setFullName = (name:string | undefined) => {
  try {
    if(!name) return 'sem nome';
    
    let fastMin = name.split(' ')[0];
    const first = fastMin.charAt(0).toUpperCase().concat(fastMin.slice(1))

    let lastMin:string;
    let daDe = ['da','de'];
    let preposition:string='';

    if(name.split(' ')[1]?.includes(daDe[0]||daDe[1])){
      preposition=name.split(' ')[1]; 
      lastMin=name.split(' ')[2]
    }else{
      lastMin=name.split(' ')[1]
    }
    
    const last = lastMin? lastMin?.charAt(0).toUpperCase().concat(lastMin.slice(1)): '';
  if(last == '') return first;
   return [ first,` ${preposition} `, last]
  } catch (err) {
    console.error(err)
  }
  
}