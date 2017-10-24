export default (text,to) => {

  switch(to) {
    case 'mL':
      return text
    case 'l':
      return (Number(text) * 0.001).toString()
    case 'mm3':
      return (Number(text) * 1000).toString()
    case 'cm3':
      return text
    case 'm3':
      return (Number(text) * 0.000001).toString()
    case 'gal':
      return (Number(text) * 0.00026).toString()
    case 'qt':
      return (Number(text) * 0.0011).toString()
    case 'pt':
      return (Number(text) * 0.0021).toString()
    case 'cup':
      return (Number(text) * 0.0042).toString()
    case 'fl oz':
      return (Number(text) * 0.033814).toString()
    default:
      alert('Select To Unit')
      return ''
  }
}
