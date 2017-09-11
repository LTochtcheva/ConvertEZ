export default (text,to) => {

  switch(to) {
    case 'mg':
      return text
    case 'g':
      return (Number(text) * 0.001).toString()
    case 'kg':
      return (Number(text) * 0.000001).toString()
    case 'ton':
      return (Number(text) * 1e-9).toString()
    case 'oz':
      return (Number(text) * 0.00003527396).toString()
    case 'lb':
      return (Number(text) * 0.000002204623).toString()
    case 'st':
      return (Number(text) * 1.57473e-7).toString()
    default:
      alert('Select To Unit')
      return ''
  }
}
