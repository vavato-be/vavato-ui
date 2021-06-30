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

export const formatCurrency = (number) => {
  const formattable = parseFloat(number)

  return new Intl.NumberFormat('nl-BE', {
    style: 'currency',
    currency: 'EUR'
  }).format(formattable)
}
