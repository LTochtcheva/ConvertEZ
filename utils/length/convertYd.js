export default (text,to) => {

  switch(to) {
    case 'mm':
      return (Number(text) * 914.4).toString()
    case 'cm':
      return (Number(text) * 91.44).toString()
    case 'm':
      return (Number(text) * 0.91).toString()
    case 'km':
      return (Number(text) * 0.0009).toString()
    case 'in':
      return (Number(text) * 36).toString()
    case 'yd':
      return text
    case 'ft':
      return (Number(text) * 3).toString()
    case 'ml':
      return (Number(text) * 0.00057).toString()
    default:
      alert('Select To Unit')
  }
}
