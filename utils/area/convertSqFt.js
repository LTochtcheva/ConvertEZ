export default (text,to) => {

  switch(to) {
    case 'cm2':
      return (Number(text) * 929.03).toString()
    case 'm2':
      return (Number(text) * 0.0929).toString()
    case 'ha':
      return (Number(text) * 0.00000929).toString()
    case 'km2':
      return (Number(text) * 0.0000000929).toString()
    case 'in2':
      return (Number(text) * 144).toString()
    case 'ft2':
      return text
    case 'yd2':
      return (Number(text) * 0.111).toString()
    case 'acre':
      return (Number(text) * 0.0000229).toString()
    case 'ml2':
      return (Number(text) * 0.00000003587).toString()
    default:
      alert('Select To Unit')
  }
}
