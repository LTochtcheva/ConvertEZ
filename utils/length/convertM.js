export default (text,to) => {

  switch(to) {
    case 'mm':
      return (Number(text) * 1000).toString()
    case 'cm':
      return (Number(text) * 100).toString()
    case 'm':
      return text
    case 'km':
      return (Number(text)/1000).toString()

    case 'in':
      return (Number(text) * 39.37).toString()
    case 'yd':
      return (Number(text) * 1.09).toString()
    case 'ft':
      return (Number(text) * 3.28).toString()
    case 'ml':
      return (Number(text) * 0.00062).toString()
    default:
      alert('Select To Unit')
      return ''
  }
}
