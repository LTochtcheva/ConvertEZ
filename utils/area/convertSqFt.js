export default (text,to) => {

  switch(to) {
    case 'SqCm':
      return (Number(text) * 929.03).toString()
    case 'SqM':
      return (Number(text) * 0.0929).toString()
    case 'Ha':
      return (Number(text) * 0.00000929).toString()
    case 'SqKm':
      return (Number(text) * 0.0000000929).toString()
    case 'SqIn':
      return (Number(text) * 144).toString()
    case 'SqFt':
      return text
    case 'SqYd':
      return (Number(text) * 0.111).toString()
    case 'Acre':
      return (Number(text) * 0.0000229).toString()
    case 'SqMile':
      return (Number(text) * 0.00000003587).toString()
    default:
      alert('Select To Unit')
  }
}
