export default (text,to) => {

  switch(to) {
    case 'SqCm':
      return (Number(text) * 40468564).toString()
    case 'SqM':
      return (Number(text) * 4046.856).toString()
    case 'Ha':
      return (Number(text) * 0.40469).toString()
    case 'SqKm':
      return (Number(text) * 0.0040469).toString()
    case 'SqIn':
      return (Number(text) * 6272640).toString()
    case 'SqFt':
      return (Number(text) * 43560).toString()
    case 'SqYd':
      return (Number(text) * 4840).toString()
    case 'Acre':
      return text
    case 'SqMile':
      return (Number(text) * 0.00156).toString()
    default:
      alert('Select To Unit')
  }
}
