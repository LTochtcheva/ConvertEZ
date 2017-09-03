import convertSqCm from './convertSqCm'
import convertSqM from './convertSqM'
import convertHa from './convertHa'
import convertSqKm from './convertSqKm'

import convertSqIn from './convertSqIn'
import convertSqFt from './convertSqFt'
import convertSqYd from './convertSqYd'
import convertAcre from './convertAcre'
import convertSqMile from './convertSqMile'

export default (text, from, to) => {
  console.log(`In Area converting ${text} ${from} into ${to}`)
  switch(from) {
    case 'SqCm':
      return convertSqCm(text,to)
    case 'SqM':
      return convertSqM(text,to)
    case 'Ha':
      return convertHa(text,to)
    case 'SqKm':
      return convertSqKm(text,to)

    case 'SqIn':
      return convertSqIn(text,to)
    case 'SqFt':
      return convertSqFt(text,to)
    case 'SqYd':
      return convertSqYd(text,to)
    case 'Acre':
      return convertAcre(text,to)
    case 'SqMile':
      return convertSqMile(text,to)
    default:
      alert('Select From Unit')
  }
}

