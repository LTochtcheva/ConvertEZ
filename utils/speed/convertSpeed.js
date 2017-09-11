import convertKmH from './convertKmH'
import convertMlH from './convertMlH'

export default (text, from, to) => {
  switch(from) {
    case 'km/h':
      return convertKmH(text,to)
    case 'ml/h':
      return convertMlH(text,to)
    default:
      alert('Select From Unit')
  }
}
