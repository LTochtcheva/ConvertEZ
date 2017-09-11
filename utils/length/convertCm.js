export default (text,to) => {

  switch(to) {
    case 'mm':
      return (Number(text) * 10).toString()
    case 'cm':
      return text
    case 'm':
      return (Number(text)/100).toString()
    case 'km':
      return (Number(text)/100000).toString()

    case 'in':
      return (Number(text) * 0.3937007874).toFixed(2).toString()
    case 'yd':
      return (Number(text) * 0.0109361 ).toFixed(2).toString()
    case 'ft':
      return (Number(text) * 0.0328084).toFixed(2).toString()
    case 'ml':
      return (Number(text) * 6.2137e-6).toFixed(5).toString()
    default:
      alert('Select To Unit')
  }
}
