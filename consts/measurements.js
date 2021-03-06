import tempIcon from '../images/temperature.png'
import lengthIcon from '../images/length.png'
import weightIcon from '../images/weight.png'
import areaIcon from '../images/area.png'
import speedIcon from '../images/speed.png'
import volumeIcon from '../images/volume.png'

const measurements = [
  {title: 'Temperature',
   icon: tempIcon,
   units: ['C', 'F']},
  {title: 'Length',
   icon: lengthIcon,
   units: ['mm', 'cm', 'm', 'km', 'in', 'yd', 'ft', 'ml']},
  {title: 'Weight',
   icon: weightIcon,
   units: ['mg', 'g', 'kg', 'ton', 'oz', 'lb', 'st']},
  {title: 'Area',
   icon: areaIcon,
   units: ['cm2', 'm2', 'ha', 'km2', 'in2', 'ft2', 'yd2', 'acre', 'ml2']},
  {title: 'Speed',
   icon: speedIcon,
   units: ['km/h', 'ml/h']},
   {title: 'Volume',
   icon: volumeIcon,
   units: ['mL', 'l', 'mm3', 'cm3', 'm3', 'gal', 'qt', 'pt', 'cup', 'fl oz']}
]

export default measurements
