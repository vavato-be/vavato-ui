import { colors as themeColors } from './constants'

const UNSAFE_PROPS = ['children', 'ref', 'forwardedRef']

function safeProps(props) {
  const safeProps = Object.assign({}, props)
  UNSAFE_PROPS.forEach((prop) => delete safeProps[prop])
  return safeProps
}

function applyColors(cssProperty, options) {
  const { include: includeColors, exclude: excludeColors } = options || {}

  return ({ color }) => {
    if (!color) return null

    // extends our availible colors with 'none' and 'inherit'
    const colors = {
      ...themeColors,
      none: themeColors.interface,
      inherit: 'inherit'
    }

    if (!colors[color]) {
      return console.warn(
        `Color '${color}' passed to 'useColorsOn' not defined in constants.`
      )
    }

    if (excludeColors && excludeColors.includes(color)) {
      console.warn(
        `Color '${color}' passed to 'useColorsOn' is explicitly excluded`
      )
      return null
    }

    if (includeColors && !includeColors.includes(color)) {
      console.warn(
        `Color '${color}' passed to 'useColorsOn' is explicitly NOT included`
      )
      return null
    }

    const colorValue = !colors[color]
      ? colors.secondary
      : colors[color].primary || colors[color]

    return `
      ${cssProperty}: ${colorValue};
    `
  }
}

function extractPagination(headers) {
  const currentPage = headers.get('X-Page')
  const itemsPerPage = headers.get('X-Per-Page')
  const totalItems = headers.get('X-Total')
  return {
    current: currentPage,
    total: Math.ceil(totalItems / itemsPerPage),
    total_records: totalItems
  }
}

function extractLinks(string) {
  function parseLink(rawLinkPair) {
    const [rawLink, rawRel] = rawLinkPair.split(';')
    const link = rawLink.slice(1, -1)
    const rel = rawRel.match(/rel="(.*?)"/)[1]
    return { link: link, tag: rel }
  }

  const links = {}
  if (string) {
    string.split(',').forEach((rawLink) => {
      const parsedLinkObject = parseLink(rawLink.trim())
      links[parsedLinkObject.tag] = parsedLinkObject.link
    })
  }
  return links
}

export { safeProps, applyColors, extractLinks, extractPagination }
