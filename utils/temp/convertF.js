export default (text,to) => {
  if (to === 'Celsius') {
    console.log('here')
    return ((Number(text) - 32) * 5/9 ).toString()
  }
  else if (to === 'Fahrenheit') return text
    else alert('Select To Unit')

}
