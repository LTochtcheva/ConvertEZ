import convertC from './convertC'
import convertF from './convertF'

export default (text, from, to) => {
  switch(from) {
    case 'C':
      return convertC(text,to)
    case 'F':
      return convertF(text,to)
    default:
      alert('Select From Unit')
  }
}
