import {colors as themeColors} from "./constants";

const UNSAFE_PROPS = ['children', 'ref', 'forwardedRef'];

function safeProps(props) {
  const safeProps = Object.assign({}, props);
  UNSAFE_PROPS.forEach(prop => delete safeProps[prop])
  return safeProps;
}

function applyColors(cssProperty, options) {

  const { include: includeColors, exclude: excludeColors } = options || {};

  return ({ color }) => {

    if (!color) return null;

    // extends our availible colors with 'none' and 'inherit'
    const colors = { ...themeColors, none: themeColors.interface, inherit: 'inherit' };

    if (!colors[color]) {
      return console.warn(`Color '${color}' passed to 'useColorsOn' not defined in constants.`);
    }

    if (excludeColors && excludeColors.includes(color)) {
      console.warn(`Color '${color}' passed to 'useColorsOn' is explicitly excluded`);
      return null;
    }

    if (includeColors && !includeColors.includes(color)) {
      console.warn(`Color '${color}' passed to 'useColorsOn' is explicitly NOT included`);
      return null;
    }

    const colorValue = (!colors[color])
      ? colors.secondary
      : colors[color].primary || colors[color];

    return `
      ${cssProperty}: ${colorValue};
    `;
  };

}

export {
  safeProps, applyColors
}
