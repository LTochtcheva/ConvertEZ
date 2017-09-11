export default (text,to) => {

  switch(to) {
    case 'mg':
      return (Number(text) * 6350293).toString()
    case 'g':
      return (Number(text) * 6350.293).toString()
    case 'kg':
      return (Number(text) * 6.350293).toString()
    case 'ton':
      return (Number(text) * 0.006350293).toString()
    case 'oz':
      return (Number(text) * 224).toString()
    case 'lb':
      return (Number(text) * 14).toString()
    case 'st':
      return text
    default:
      alert('Select To Unit')
  }
}
