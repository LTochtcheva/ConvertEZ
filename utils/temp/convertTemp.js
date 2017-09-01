import convertC from './convertC'
import convertF from './convertF'

export default (text, from, to) => {
  switch(from) {
    case 'Celsius':
      return convertC(text,to)
    case 'Fahrenheit':
      return convertF(text,to)
    default:
      alert('Select From Unit')
  }
}
