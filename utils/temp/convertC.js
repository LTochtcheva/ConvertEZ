export default (text,to) => {
  if (to === 'F') {
    return (Number(text) * 9/5 + 32).toString()
  }
  else if (to === 'C') return text
    else {alert('Select To Unit')
          return ''
    }

}
