export default (text,to) => {

  switch(to) {
    case 'cm2':
      return (Number(text) * 100000000).toString()
    case 'm2':
      return (Number(text) * 10000).toString()
    case 'ha':
      return text
    case 'km2':
      return (Number(text) * 0.01).toString()
    case 'in2':
      return (Number(text) * 15500031.000062).toString()
    case 'ft2':
      return (Number(text) * 107639.104).toString()
    case 'yd2':
      return (Number(text) * 11959.9).toString()
    case 'acre':
      return (Number(text) * 2.47).toString()
    case 'ml2':
      return (Number(text) * 0.003861).toString()
    default:
      alert('Select To Unit')
      return ''
  }
}
