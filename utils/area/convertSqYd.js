export default (text,to) => {

  switch(to) {
    case 'cm2':
      return (Number(text) * 8361.27).toString()
    case 'm2':
      return (Number(text) * 0.836).toString()
    case 'ha':
      return (Number(text) * 0.0000836).toString()
    case 'km2':
      return (Number(text) * 0.0000008361).toString()
    case 'in2':
      return (Number(text) * 1296).toString()
    case 'ft2':
      return (Number(text) * 9).toString()
    case 'yd2':
      return text
    case 'acre':
      return (Number(text) * 0.0002066).toString()
    case 'ml2':
      return (Number(text) * 0.0000003228).toString()
    default:
      alert('Select To Unit')
      return ''
  }
}
