import tempIcon from '../images/temperature.png'
import lengthIcon from '../images/length.png'
import weightIcon from '../images/weight.png'
import areaIcon from '../images/area.png'
import speedIcon from '../images/speed.png'

const measurements = [
  {title: 'Temperature',
   icon: tempIcon,
   unitsMetric: ['Celsius'],
   unitsImperial: ['Fahrenheit']},
  {title: 'Length',
   icon: lengthIcon,
   unitsMetric: ['Mm', 'Cm', 'M', 'Km'],
   unitsImperial: ['In', 'Yd', 'Ft', 'Mile']},
  {title: 'Weight',
   icon: weightIcon,
   unitsMetric: ['Mg', 'Gram', 'Kg', 'Ton'],
   unitsImperial: ['Oz', 'Lb', 'Stone']},
  {title: 'Area',
   icon: areaIcon,
   unitsMetric: ['SqCm', 'SqM', 'Ha', 'SqKm'],
   unitsImperial: ['SqIn', 'SqFt', 'SqYd', 'Acre', 'SqMile']},
  {title: 'Speed',
   icon: speedIcon,
   unitsMetric: ['Kilometers/hour'],
   unitsImperial: ['Miles/hour']}
]

export default measurements
