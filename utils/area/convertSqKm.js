export default (text,to) => {

  switch(to) {
    case 'cm2':
      return (Number(text) * 10000000000).toString()
    case 'm2':
      return (Number(text) * 1000000).toString()
    case 'ha':
      return (Number(text) * 100).toString()
    case 'km2':
      return text
    case 'in2':
      return (Number(text) * 1550003100.0062).toString()
    case 'ft2':
      return (Number(text) * 10763910.41671).toString()
    case 'yd2':
      return (Number(text) * 1195990.046).toString()
    case 'acre':
      return (Number(text) * 247.105).toString()
    case 'ml2':
      return (Number(text) * 0.3861).toString()
    default:
      alert('Select To Unit')
  }
}
