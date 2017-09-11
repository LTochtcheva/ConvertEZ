export default (text, to) => {

  switch(to) {
    case 'mm':
      return (Number(text) * 1000000).toString()
    case 'cm':
      return (Number(text) * 100000).toString()
    case 'm':
      return (Number(text)*1000).toString()
    case 'km':
      return text
    case 'in':
      return (Number(text) * 39370.08).toString()
    case 'yd':
      return (Number(text) * 1093.61).toString()
    case 'ft':
      return (Number(text) * 3280.84).toString()
    case 'ml':
      return (Number(text) * 0.62).toString()
    default:
      alert('Select To Unit')
  }
}
