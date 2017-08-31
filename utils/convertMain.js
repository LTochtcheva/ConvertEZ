import {convertTemp,
        convertLength,
        convertWeight,
        convertArea,
        convertSpeed} from './convertOption'

export default (text, option, from, to) => {
  switch(option) {
    case 'Temperature':
      convertTemp(text, from, to)
      break
    case 'Length':
      convertLength(text, from, to)
      break
    case 'Weight':
      convertWeight(text,from,to)
      break
    case 'Area':
      convertArea(text,from,to)
      break
    case 'Speed':
      convertSpeed(text,from,to)
      break
    default:
      alert('Something went wrong...')
  }
  return (Number(text)*2).toString()
}
