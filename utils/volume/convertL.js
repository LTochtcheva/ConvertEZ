export default (text,to) => {

  switch(to) {
    case 'mL':
      return (Number(text) * 1000).toString()
    case 'l':
      return text
    case 'mm3':
      return (Number(text) * 1000000).toString()
    case 'cm3':
      return (Number(text) * 1000).toString()
    case 'm3':
      return (Number(text) * 0.001).toString()
    case 'gal':
      return (Number(text) * 0.264).toString()
    case 'qt':
      return (Number(text) * 1.06).toString()
    case 'pt':
      return (Number(text) * 2.113).toString()
    case 'cup':
      return (Number(text) * 4.227).toString()
    case 'fl oz':
      return (Number(text) * 33.81).toString()
    default:
      alert('Select To Unit')
      return ''
  }
}
