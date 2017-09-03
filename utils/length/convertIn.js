export default (text,to) => {

  switch(to) {
    case 'Mm':
      return (Number(text) * 25.4).toString()
    case 'Cm':
      return (Number(text) * 2.54).toString()
    case 'M':
      return (Number(text) * 0.0254).toString()
    case 'Km':
      return (Number(text) * 0.0000254).toString()
    case 'In':
      return text
    case 'Yd':
      return (Number(text) * 0.02777778 ).toString()
    case 'Ft':
      return (Number(text) * 0.08333333).toString()
    case 'Mile':
      return (Number(text) * 0.00001578283).toString()
    default:
      alert('Select To Unit')
  }
}
