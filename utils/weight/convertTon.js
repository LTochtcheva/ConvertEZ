export default (text,to) => {

  switch(to) {
    case 'Mg':
      return (Number(text) * 1e+9).toString()
    case 'Gram':
      return (Number(text) * 1000000).toString()
    case 'Kg':
      return (Number(text) * 1000).toString()
    case 'Ton':
      return text
    case 'Oz':
      return (Number(text) * 35273.96).toString()
    case 'Lb':
      return (Number(text) * 2204.623).toString()
    case 'Stone':
      return (Number(text) * 157.473).toString()
    default:
      alert('Select To Unit')
  }
}
