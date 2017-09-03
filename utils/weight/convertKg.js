export default (text,to) => {

  switch(to) {
    case 'Mg':
      return (Number(text) * 1000000).toString()
    case 'Gram':
      return (Number(text) * 1000).toString()
    case 'Kg':
      return text
    case 'Ton':
      return (Number(text) * 0.001).toString()
    case 'Oz':
      return (Number(text) * 35.27396).toString()
    case 'Lb':
      return (Number(text) * 2.204623).toString()
    case 'Stone':
      return (Number(text) * 0.157473).toString()
    default:
      alert('Select To Unit')
  }
}
