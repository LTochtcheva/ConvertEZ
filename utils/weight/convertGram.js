export default (text,to) => {

  switch(to) {
    case 'mg':
      return (Number(text) * 1000).toString()
    case 'g':
      return text
    case 'kg':
      return (Number(text) * 0.001).toString()
    case 'ton':
      return (Number(text) * 0.000001).toString()
    case 'oz':
      return (Number(text) * 0.035).toFixed(2).toString()
    case 'lb':
      return (Number(text) * 0.0022).toFixed(3).toString()
    case 'st':
      return (Number(text) * 0.00016).toString()
    default:
      alert('Select To Unit')
      return ''
  }
}
