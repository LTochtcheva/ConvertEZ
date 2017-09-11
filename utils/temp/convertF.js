export default (text,to) => {
  if (to === 'C') {
    return ((Number(text) - 32) * 5/9 ).toFixed(2).toString()
  }
  else if (to === 'F') return text
    else {
      alert('Select To Unit')
      return ''
    }

}
