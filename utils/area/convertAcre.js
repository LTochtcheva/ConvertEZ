export default (text,to) => {

  switch(to) {
    case 'cm2':
      return (Number(text) * 40468564).toString()
    case 'm2':
      return (Number(text) * 4046.856).toString()
    case 'ha':
      return (Number(text) * 0.40469).toString()
    case 'km2':
      return (Number(text) * 0.0040469).toString()
    case 'in2':
      return (Number(text) * 6272640).toString()
    case 'ft2':
      return (Number(text) * 43560).toString()
    case 'yd2':
      return (Number(text) * 4840).toString()
    case 'acre':
      return text
    case 'ml2':
      return (Number(text) * 0.00156).toString()
    default:
      alert('Select To Unit')
  }
}
