export default (text,to) => {
  if (to === 'Kilometers/hour') {
    return (Number(text) * 1.609344 ).toString()
  }
  else if (to === 'Miles/hour') return text
    else alert('Select To Unit')

}

