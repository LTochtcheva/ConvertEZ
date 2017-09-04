export default (text,to) => {

  switch(to) {
    case 'SqCm':
      return (Number(text) * 25899881103).toString()
    case 'SqM':
      return (Number(text) * 2589988).toString()
    case 'Ha':
      return (Number(text) * 258.9988).toString()
    case 'SqKm':
      return (Number(text) * 2.59).toString()
    case 'SqIn':
      return (Number(text) * 4014489600).toString()
    case 'SqFt':
      return (Number(text) * 27878400).toString()
    case 'SqYd':
      return (Number(text) * 3097600).toString()
    case 'Acre':
      return (Number(text) * 640).toString()
    case 'SqMile':
      return text
    default:
      alert('Select To Unit')
  }
}
