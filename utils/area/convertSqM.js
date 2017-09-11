export default (text,to) => {

  switch(to) {
    case 'cm2':
      return (Number(text) * 10000).toString()
    case 'm2':
      return text
    case 'ha':
      return (Number(text) * 0.0001).toString()
    case 'km2':
      return (Number(text) * 0.0000010).toString()
    case 'in2':
      return (Number(text) * 1550.0031000062).toString()
    case 'ft2':
      return (Number(text) * 10.76391041671).toString()
    case 'yd2':
      return (Number(text) * 1.19599).toString()
    case 'acre':
      return (Number(text) * 0.00024710538).toString()
    case 'ml2':
      return (Number(text) * 0.0000003861).toString()
    default:
      alert('Select To Unit')
      return ''
  }
}
