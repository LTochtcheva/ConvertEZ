export default (text,to) => {

  switch(to) {
    case 'mL':
      return (Number(text) * 0.001).toString()
    case 'l':
      return (Number(text) * 0.000001).toString()
    case 'mm3':
      return text
    case 'cm3':
      return (Number(text) * 0.001).toString()
    case 'm3':
      return (Number(text) * 0.000000001).toString()
    case 'gal':
      return (Number(text) * 0.00000026).toString()
    case 'qt':
      return (Number(text) * 0.00000106).toString()
    case 'pt':
      return (Number(text) * 0.000002).toString()
    case 'cup':
      return (Number(text) * 0.0000042).toString()
    case 'fl oz':
      return (Number(text) * 0.000034).toString()
    default:
      alert('Select To Unit')
      return ''
  }
}
