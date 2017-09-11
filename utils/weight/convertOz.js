export default (text,to) => {

  switch(to) {
    case 'mg':
      return (Number(text) * 28349.52).toString()
    case 'g':
      return (Number(text) * 28.34952).toString()
    case 'kg':
      return (Number(text) * 0.02834952).toString()
    case 'ton':
      return (Number(text) * 0.00002834952).toString()
    case 'oz':
      return text
    case 'lb':
      return (Number(text) * 0.0625).toString()
    case 'st':
      return (Number(text) * 0.004464286).toString()
    default:
      alert('Select To Unit')
  }
}
