export default (text,to) => {

  switch(to) {
    case 'Mm':
      return (Number(text) * 1000000).toString()
    case 'Cm':
      return (Number(text) * 100000).toString()
    case 'M':
      return (Number(text)*1000).toString()
    case 'Km':
      return text
    case 'In':
      return (Number(text) * 39370.08).toString()
    case 'Yd':
      return (Number(text) * 1093.613 ).toString()
    case 'Ft':
      return (Number(text) * 3280.84).toString()
    case 'Mile':
      return (Number(text) * 0.6213712).toString()
    default:
      alert('Select To Unit')
  }
}
