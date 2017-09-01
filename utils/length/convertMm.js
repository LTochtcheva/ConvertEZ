export default (text,to) => {

  switch(to) {
    case 'Mm':
      return text
    case 'Cm':
      return (Number(text)/10).toString()
    case 'M':
      return (Number(text)/1000).toString()
    case 'Km':
      return (Number(text)/1000000).toString()

    case 'In':
      return (Number(text) * 0.03937007874).toString()
    case 'Yd':
      return (Number(text) * 0.0010936133 ).toString()
    case 'Ft':
      return (Number(text) * 0.00328084).toString()
    case 'Mile':
      alert('Select convert to In, Yd or Ft')
    default:
      alert('Select To Unit')
  }
}
