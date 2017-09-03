export default (text,to) => {

  switch(to) {
    case 'Mg':
      return text
    case 'Gram':
      return (Number(text) * 0.001).toString()
    case 'Kg':
      return (Number(text) * 0.000001).toString()
    case 'Ton':
      return (Number(text) * 1e-9).toString()
    case 'Oz':
      return (Number(text) * 0.00003527396).toString()
    case 'Lb':
      return (Number(text) * 0.000002204623).toString()
    case 'Stone':
      return (Number(text) * 1.57473e-7).toString()
    default:
      alert('Select To Unit')
  }
}
