export default (text,to) => {
  if (to === 'ml/h') {
    return (Number(text)/1.6 ).toFixed(2).toString()
  }
  else if (to === 'km/h') return text
    else {
      alert('Select To Unit')
      return ''
    }

}
