export const formatCurrency = (number) => {
  const formattable = parseFloat(number)

  return new Intl.NumberFormat('nl-BE', {
    style: 'currency',
    currency: 'EUR'
  }).format(formattable)
}

export const formatDate = (date) => {
  try {
    const wrapped = new Date(date)
    return new Intl.DateTimeFormat('en-GB', {
      dateStyle: 'short',
      timeStyle: 'short'
    }).format(wrapped)
  } catch {
    return date
  }
}

export const formatDateOnly = (date) => {
  try {
    const wrapped = new Date(date)
    return new Intl.DateTimeFormat('en-GB', {
      dateStyle: 'short'
    }).format(wrapped)
  } catch {
    return date
  }
}

export const formatSimpleString = (str) => {
  const simpleFormatRE1 = /\r\n?/g
  const simpleFormatRE2 = /\n\n+/g
  const simpleFormatRE3 = /([^\n]\n)(?=[^\n])/g
  let fstr = str
  fstr = fstr.replace(simpleFormatRE1, '\n') // \r\n and \r -> \n
  fstr = fstr.replace(simpleFormatRE2, '</p>\n\n<p>') // 2+ newline  -> paragraph
  fstr = fstr.replace(simpleFormatRE3, '$1<br/>') // 1 newline   -> br
  fstr = '<p>' + fstr + '</p>'
  return fstr
}
