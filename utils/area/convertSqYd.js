export default (text,to) => {

  switch(to) {
    case 'SqCm':
      return (Number(text) * 8361.27).toString()
    case 'SqM':
      return (Number(text) * 0.836).toString()
    case 'Ha':
      return (Number(text) * 0.0000836).toString()
    case 'SqKm':
      return (Number(text) * 0.0000008361).toString()
    case 'SqIn':
      return (Number(text) * 1296).toString()
    case 'SqFt':
      return (Number(text) * 9).toString()
    case 'SqYd':
      return text
    case 'Acre':
      return (Number(text) * 0.0002066).toString()
    case 'SqMile':
      return (Number(text) * 0.0000003228).toString()
    default:
      alert('Select To Unit')
  }
}
