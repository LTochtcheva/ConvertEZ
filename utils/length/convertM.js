export default (text,to) => {

  switch(to) {
    case 'Mm':
      return (Number(text) * 1000).toString()
    case 'Cm':
      return (Number(text) * 100).toString()
    case 'M':
      return text
    case 'Km':
      return (Number(text)/1000).toString()

    case 'In':
      return (Number(text) * 39.37007874).toString()
    case 'Yd':
      return (Number(text) * 1.093613 ).toString()
    case 'Ft':
      return (Number(text) * 3.28084).toString()
    case 'Mile':
      return (Number(text) * 0.0006213712).toString()
    default:
      alert('Select To Unit')
  }
}
