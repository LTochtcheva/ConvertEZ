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

  switch(from) {
    case 'cm2':
      return convertSqCm(text,to)
    case 'm2':
      return convertSqM(text,to)
    case 'ha':
      return convertHa(text,to)
    case 'km2':
      return convertSqKm(text,to)

    case 'in2':
      return convertSqIn(text,to)
    case 'ft2':
      return convertSqFt(text,to)
    case 'yd2':
      return convertSqYd(text,to)
    case 'acre':
      return convertAcre(text,to)
    case 'ml2':
      return convertSqMile(text,to)
    default:
      alert('Select From Unit')
      return ''
  }
}

