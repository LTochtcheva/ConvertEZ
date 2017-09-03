export default (text,to) => {

  switch(to) {
    case 'Mm':
      return (Number(text) * 914.4).toString()
    case 'Cm':
      return (Number(text) * 91.44).toString()
    case 'M':
      return (Number(text) * 0.9144).toString()
    case 'Km':
      return (Number(text) * 0.0009144).toString()
    case 'In':
      return (Number(text) * 36).toString()
    case 'Yd':
      return text
    case 'Ft':
      return (Number(text) * 3).toString()
    case 'Mile':
      return (Number(text) * 0.0005681818).toString()
    default:
      alert('Select To Unit')
  }
}
