export default (text,to) => {

  switch(to) {
    case 'mL':
      return (Number(text) * 3785.41).toString()
    case 'l':
      return (Number(text) * 3.79).toString()
    case 'mm3':
      return (Number(text) * 3785411).toString()
    case 'cm3':
      return (Number(text) * 3785.41).toString()
    case 'm3':
      return (Number(text) * 0.0038).toString()
    case 'gal':
      return text
    case 'qt':
      return (Number(text) * 4).toString()
    case 'pt':
      return (Number(text) * 8).toString()
    case 'cup':
      return (Number(text) * 16).toString()
    case 'fl oz':
      return (Number(text) * 128).toString()
    default:
      alert('Select To Unit')
      return ''
  }
}
