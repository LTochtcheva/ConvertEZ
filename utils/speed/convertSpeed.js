import convertKmH from './convertKmH'
import convertMlH from './convertMlH'

export default (text, from, to) => {
  switch(from) {
    case 'Kilometers/hour':
      return convertKmH(text,to)
    case 'Miles/hour':
      return convertMlH(text,to)
    default:
      alert('Select From Unit')
  }
}
