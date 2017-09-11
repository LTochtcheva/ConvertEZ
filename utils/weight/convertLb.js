export default (text,to) => {

  switch(to) {
    case 'mg':
      return (Number(text) * 453592.4).toString()
    case 'g':
      return (Number(text) * 453.5924).toString()
    case 'kg':
      return (Number(text) * 0.4535924).toString()
    case 'ton':
      return (Number(text) * 0.0004535924).toString()
    case 'oz':
      return (Number(text) * 16).toString()
    case 'lb':
      return text
    case 'st':
      return (Number(text) * 0.07142857).toString()
    default:
      alert('Select To Unit')
  }
}
