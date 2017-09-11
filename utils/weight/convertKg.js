export default (text,to) => {

  switch(to) {
    case 'mg':
      return (Number(text) * 1000000).toString()
    case 'g':
      return (Number(text) * 1000).toString()
    case 'kg':
      return text
    case 'ton':
      return (Number(text) * 0.001).toString()
    case 'oz':
      return (Number(text) * 35.27396).toString()
    case 'lb':
      return (Number(text) * 2.204623).toString()
    case 'st':
      return (Number(text) * 0.157473).toString()
    default:
      alert('Select To Unit')
  }
}
