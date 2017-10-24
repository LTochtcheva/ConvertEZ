export default (text,to) => {

  switch(to) {
    case 'mL':
      return (Number(text) * 29.57).toString()
    case 'l':
      return (Number(text) * 0.03).toString()
    case 'mm3':
      return (Number(text) * 29573.5).toString()
    case 'cm3':
      return (Number(text) * 29.57).toString()
    case 'm3':
      return (Number(text) * 0.00003).toString()
    case 'gal':
      return (Number(text) * 0.0078).toString()
    case 'qt':
      return (Number(text) * 0.031).toString()
    case 'pt':
      return (Number(text) * 0.0625).toString()
    case 'cup':
      return (Number(text) * 0.125).toString()
    case 'fl oz':
      return text
    default:
      alert('Select To Unit')
      return ''
  }
}

