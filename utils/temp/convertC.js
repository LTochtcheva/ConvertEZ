export default (text,to) => {
  if (to === 'Fahrenheit') {
    return (Number(text) * 9/5 + 32).toString()
  }
  else if (to === 'Celsius') return text
    else alert('Select To Unit')

}
