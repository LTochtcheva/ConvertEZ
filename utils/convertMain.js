import convertTemp from './temp/convertTemp'
import convertLength from './length/convertLength'
import convertWeight from './weight/convertWeight'
import convertArea from './area/convertArea'
import convertSpeed from './speed/convertSpeed'
import convertVolume from './volume/convertVolume'

export default (text, option, from, to) => {
  switch (option) {
    case 'Temperature':
      return convertTemp(text, from, to)
    case 'Length':
      return convertLength(text, from, to)
    case 'Weight':
      return convertWeight(text,from,to)
    case 'Area':
      return convertArea(text,from,to)
    case 'Speed':
      return convertSpeed(text,from,to)
    case 'Volume':
      return convertVolume(text,from,to)
    default:
      alert('Something went wrong...')
      return ''
  }
}
