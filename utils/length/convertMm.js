export default (text,to) => {

  switch(to) {
    case 'mm':
      return text
    case 'cm':
      return (Number(text)/10).toString()
    case 'm':
      return (Number(text)/1000).toString()
    case 'km':
      return (Number(text)/1000000).toString()

    case 'in':
      return (Number(text) * 0.04).toString()
    case 'yd':
      return (Number(text) * 0.001 ).toString()
    case 'ft':
      return (Number(text) * 0.0033).toString()
    case 'ml':
      return (Number(text) * 0.000001).toString()
    default:
      alert('Select To Unit')
      return ''
  }
}
