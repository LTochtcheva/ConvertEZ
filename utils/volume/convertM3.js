export default (text,to) => {

  switch(to) {
    case 'mL':
      return (Number(text) * 1000000).toString()
    case 'l':
      return (Number(text) * 1000).toString()
    case 'mm3':
      return (Number(text) * 1000000000).toString()
    case 'cm3':
      return (Number(text) * 1000000).toString()
    case 'm3':
      return text
    case 'gal':
      return (Number(text) * 264.17).toString()
    case 'qt':
      return (Number(text) * 1056.69).toString()
    case 'pt':
      return (Number(text) * 2113.38).toString()
    case 'cup':
      return (Number(text) * 4226.75).toString()
    case 'fl oz':
      return (Number(text) * 33814).toString()
    default:
      alert('Select To Unit')
      return ''
  }
}
