export default (text,to) => {

  switch(to) {
    case 'Mg':
      return (Number(text) * 1000).toString()
    case 'Gram':
      return text
    case 'Kg':
      return (Number(text) * 0.001).toString()
    case 'Ton':
      return (Number(text) * 0.000001).toString()
    case 'Oz':
      return (Number(text) * 0.03527396).toString()
    case 'Lb':
      return (Number(text) * 0.002204623).toString()
    case 'Stone':
      return (Number(text) * 0.000157473).toString()
    default:
      alert('Select To Unit')
  }
}
