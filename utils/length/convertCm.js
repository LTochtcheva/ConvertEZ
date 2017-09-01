export default (text,to) => {

  switch(to) {
    case 'Mm':
      return (Number(text) * 10).toString()
    case 'Cm':
      return text
    case 'M':
      return (Number(text)/100).toString()
    case 'Km':
      return (Number(text)/100000).toString()

    case 'In':
      return (Number(text) * 0.3937007874).toString()
    case 'Yd':
      return (Number(text) * 0.0109361 ).toString()
    case 'Ft':
      return (Number(text) * 0.0328084).toString()
    case 'Mile':
      return (Number(text) * 6.2137e-6).toString()
    default:
      alert('Select To Unit')
  }
}
