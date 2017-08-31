import {convertTemp,
        convertLength,
        convertWeight,
        convertArea,
        convertSpeed} from './convertOption'

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
    default:
      alert('Something went wrong...')
  }
}
