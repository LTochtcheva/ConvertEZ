export default (text,to) => {

  switch(to) {
    case 'mL':
      return (Number(text) * 236.6).toString()
    case 'l':
      return (Number(text) * 0.237).toString()
    case 'mm3':
      return (Number(text) * 236588).toString()
    case 'cm3':
      return (Number(text) * 236.6).toString()
    case 'm3':
      return (Number(text) * 0.00024).toString()
    case 'gal':
      return (Number(text) * 0.0625).toString()
    case 'qt':
      return (Number(text) * 0.25).toString()
    case 'pt':
      return (Number(text) * 0.5).toString()
    case 'cup':
      return text
    case 'fl oz':
      return (Number(text) * 8).toString()
    default:
      alert('Select To Unit')
      return ''
  }
}
