export default (text,to) => {

  switch(to) {
    case 'mm':
      return (Number(text) * 1609344).toString()
    case 'cm':
      return (Number(text) * 160934.4).toString()
    case 'm':
      return (Number(text) * 1609.34).toString()
    case 'km':
      return (Number(text) * 1.61).toString()
    case 'in':
      return (Number(text) * 63360).toString()
    case 'yd':
      return (Number(text) * 1760).toString()
    case 'ft':
      return (Number(text) * 5280).toString()
    case 'ml':
      return text
    default:
      alert('Select To Unit')
  }
}
