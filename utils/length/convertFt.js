export default (text,to) => {

  switch(to) {
    case 'mm':
      return (Number(text) * 304.8).toString()
    case 'cm':
      return (Number(text) * 30.48).toString()
    case 'm':
      return (Number(text) * 0.3048).toFixed(2).toString()
    case 'km':
      return (Number(text) * 0.0003048).toFixed(4).toString()
    case 'in':
      return (Number(text) * 12).toString()
    case 'yd':
      return (Number(text) * 0.3333333).toFixed(2).toString()
    case 'ft':
      return text
    case 'ml':
      return (Number(text) * 0.0001893939).toFixed(4).toString()
    default:
      alert('Select To Unit')
      return ''
  }
}
