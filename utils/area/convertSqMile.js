export default (text,to) => {

  switch(to) {
    case 'cm2':
      return (Number(text) * 25899881103).toString()
    case 'm2':
      return (Number(text) * 2589988).toString()
    case 'ha':
      return (Number(text) * 258.9988).toString()
    case 'km2':
      return (Number(text) * 2.59).toString()
    case 'in2':
      return (Number(text) * 4014489600).toString()
    case 'ft2':
      return (Number(text) * 27878400).toString()
    case 'yd2':
      return (Number(text) * 3097600).toString()
    case 'acre':
      return (Number(text) * 640).toString()
    case 'ml2':
      return text
    default:
      alert('Select To Unit')
  }
}
