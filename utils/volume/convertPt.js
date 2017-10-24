export default (text,to) => {

  switch(to) {
    case 'mL':
      return (Number(text) * 473.18).toString()
    case 'l':
      return (Number(text) * 0.473).toString()
    case 'mm3':
      return (Number(text) * 473 176.47).toString()
    case 'cm3':
      return (Number(text) * 473.18).toString()
    case 'm3':
      return (Number(text) * 0.00047).toString()
    case 'gal':
      return (Number(text) * 0.125).toString()
    case 'qt':
      return (Number(text) * 0.5).toString()
    case 'pt':
      return text
    case 'cup':
      return (Number(text) * 2).toString()
    case 'fl oz':
      return (Number(text) * 16).toString()
    default:
      alert('Select To Unit')
      return ''
  }
}
