export default (text,to) => {

  switch(to) {
    case 'mg':
      return (Number(text) * 1e+9).toString()
    case 'g':
      return (Number(text) * 1000000).toString()
    case 'kg':
      return (Number(text) * 1000).toString()
    case 'ton':
      return text
    case 'oz':
      return (Number(text) * 35273.96).toString()
    case 'lb':
      return (Number(text) * 2204.623).toString()
    case 'st':
      return (Number(text) * 157.473).toString()
    default:
      alert('Select To Unit')
  }
}
