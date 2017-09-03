export default (text,to) => {

  switch(to) {
    case 'Mg':
      return (Number(text) * 28349.52).toString()
    case 'Gram':
      return (Number(text) * 28.34952).toString()
    case 'Kg':
      return (Number(text) * 0.02834952).toString()
    case 'Ton':
      return (Number(text) * 0.00002834952).toString()
    case 'Oz':
      return text
    case 'Lb':
      return (Number(text) * 0.0625).toString()
    case 'Stone':
      return (Number(text) * 0.004464286).toString()
    default:
      alert('Select To Unit')
  }
}
