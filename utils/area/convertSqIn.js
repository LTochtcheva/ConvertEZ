export default (text,to) => {

  switch(to) {
    case 'cm2':
      return (Number(text) * 6.4516).toString()
    case 'm2':
      return (Number(text) * 0.00064516).toString()
    case 'ha':
      return (Number(text) * 0.000000064516).toString()
    case 'km2':
      return (Number(text) * 0.00000000064516).toString()
    case 'in2':
      return text
    case 'ft2':
      return (Number(text) * 0.00694).toString()
    case 'yd2':
      return (Number(text) * 0.0007716).toString()
    case 'acre':
      return (Number(text) * 0.000000159).toString()
    case 'ml2':
      return (Number(text) * 0.000000000249).toString()
    default:
      alert('Select To Unit')
      return ''
  }
}
