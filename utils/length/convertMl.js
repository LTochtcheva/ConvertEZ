export default (text,to) => {

  switch(to) {
    case 'Mm':
      return (Number(text) * 1609344).toString()
    case 'Cm':
      return (Number(text) * 160934.4).toString()
    case 'M':
      return (Number(text) * 1609.344).toString()
    case 'Km':
      return (Number(text) * 1.609344).toString()
    case 'In':
      return (Number(text) * 63360).toString()
    case 'Yd':
      return (Number(text) * 1760).toString()
    case 'Ft':
      return (Number(text) * 5280).toString()
    case 'Mile':
      return text
    default:
      alert('Select To Unit')
  }
}
