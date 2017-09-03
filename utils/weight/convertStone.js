export default (text,to) => {

  switch(to) {
    case 'Mg':
      return (Number(text) * 6350293).toString()
    case 'Gram':
      return (Number(text) * 6350.293).toString()
    case 'Kg':
      return (Number(text) * 6.350293).toString()
    case 'Ton':
      return (Number(text) * 0.006350293).toString()
    case 'Oz':
      return (Number(text) * 224).toString()
    case 'Lb':
      return (Number(text) * 14).toString()
    case 'Stone':
      return text
    default:
      alert('Select To Unit')
  }
}
