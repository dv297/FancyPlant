/**
 * A utility to conditionally include Tailwind classes.
 *
 * @param  {...Object} entries - A list of arguments corresponding to the style objects provided by tailwind-rn.
 *
 * @example
 * classnames(
 *   tailwind("bg-red"),
 *   { styles: tailwind("bg-blue"), condition: shouldBackgroundBeBlue }
 * )
 */
function classnames(...entries) {
  return entries.reduce((acc, entry) => {
    const { condition, styles, ...remainingProperties } = entry;

    const updatedAcc = condition
      ? { ...acc, ...entry.styles }
      : { ...acc, ...remainingProperties };
    return updatedAcc;
  }, {});
}

export default classnames;
