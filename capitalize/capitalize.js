function capitalize(string) {

  const capitalizeFirstLetter = string.charAt(0).toUpperCase();
  const removeUncapitalize = string.slice(1);
  const restoreString = capitalizeFirstLetter + removeUncapitalize;

  return restoreString;

}

module.exports = capitalize;