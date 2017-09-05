import tempIcon from '../images/temperature.png'
import lengthIcon from '../images/length.png'
import weightIcon from '../images/weight.png'
import areaIcon from '../images/area.png'
import speedIcon from '../images/speed.png'

const measurements = [
  {title: 'Temperature',
   icon: tempIcon,
   units: ['Celsius', 'Fahrenheit']},
  {title: 'Length',
   icon: lengthIcon,
   units: ['Mm', 'Cm', 'M', 'Km', 'In', 'Yd', 'Ft', 'Mile']},
  {title: 'Weight',
   icon: weightIcon,
   units: ['Mg', 'Gram', 'Kg', 'Ton','Oz', 'Lb', 'Stone']},
  {title: 'Area',
   icon: areaIcon,
   units: ['SqCm', 'SqM', 'Ha', 'SqKm', 'SqIn', 'SqFt', 'SqYd', 'Acre', 'SqMile']},
  {title: 'Speed',
   icon: speedIcon,
   units: ['Kilometers/hour', 'Miles/hour']}
]

export default measurements
