export default (text,to) => {

  switch(to) {
    case 'Mm':
      return (Number(text) * 304.8).toString()
    case 'Cm':
      return (Number(text) * 30.48).toString()
    case 'M':
      return (Number(text) * 0.3048).toString()
    case 'Km':
      return (Number(text) * 0.0003048).toString()
    case 'In':
      return (Number(text) * 12).toString()
    case 'Yd':
      return (Number(text) * 0.3333333).toString()
    case 'Ft':
      return text
    case 'Mile':
      return (Number(text) * 0.0001893939).toString()
    default:
      alert('Select To Unit')
  }
}
