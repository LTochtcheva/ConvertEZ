export default (text,to) => {

  switch(to) {
    case 'mm':
      return (Number(text) * 25.4).toString()
    case 'cm':
      return (Number(text) * 2.54).toString()
    case 'm':
      return (Number(text) * 0.0254).toFixed(2).toString()
    case 'km':
      return (Number(text) * 0.0000254).toFixed(5).toString()
    case 'in':
      return text
    case 'yd':
      return (Number(text) * 0.02777778 ).toFixed(2).toString()
    case 'ft':
      return (Number(text) * 0.08333333).toFixed(2).toString()
    case 'ml':
      return (Number(text) * 0.00001578283).toFixed(5).toString()
    default:
      alert('Select To Unit')
  }
}
