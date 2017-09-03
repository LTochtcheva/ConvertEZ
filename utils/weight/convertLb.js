export default (text,to) => {

  switch(to) {
    case 'Mg':
      return (Number(text) * 453592.4).toString()
    case 'Gram':
      return (Number(text) * 453.5924).toString()
    case 'Kg':
      return (Number(text) * 0.4535924).toString()
    case 'Ton':
      return (Number(text) * 0.0004535924).toString()
    case 'Oz':
      return (Number(text) * 16).toString()
    case 'Lb':
      return text
    case 'Stone':
      return (Number(text) * 0.07142857).toString()
    default:
      alert('Select To Unit')
  }
}
