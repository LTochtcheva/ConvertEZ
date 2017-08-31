import convertC from './temp/convertC'
import convertF from './temp/convertF'

export const convertTemp = (text, from, to) => {
  console.log(`In Temp converting ${text} ${from} into ${to}`)
  switch(from) {
    case 'Celsius':
      return convertC(text,to)
    case 'Fahrenheit':
      return convertF(text,to)
    default:
      alert('Select From Unit')
  }
}
export const convertLength = (text, from, to) => {
  console.log(`In Length converting ${text} ${from} into ${to}`)
}
export const convertWeight = (text, from, to) => {
  console.log(`In Weight converting ${text} ${from} into ${to}`)
}
export const convertArea = (text, from, to) => {
  console.log(`In Area converting ${text} ${from} into ${to}`)
}
export const convertSpeed = (text, from, to) => {
  console.log(`In Speed converting ${text} ${from} into ${to}`)
}
