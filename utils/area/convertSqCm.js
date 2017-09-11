export default (text,to) => {

  switch(to) {
    case 'cm2':
      return text
    case 'm2':
      return (Number(text) * 0.0001).toString()
    case 'ha':
      return (Number(text) * 0.000000010).toString()
    case 'km2':
      return (Number(text) * 0.00000000010).toString()
    case 'in2':
      return (Number(text) * 0.15500031000062).toString()
    case 'ft2':
      return (Number(text) * 0.001076391041671).toString()
    case 'yd2':
      return (Number(text) * 0.00011959900463011).toString()
    case 'acre':
      return (Number(text) * 0.000000024710538146717).toString()
    case 'ml2':
      return (Number(text) * 0.000000000038610215854245).toString()
    default:
      alert('Select To Unit')
      return ''
  }
}
