class Utils {
  parseSearch = obj =>
    `?${Object.entries(obj)
      .map(([key, value]) => key && `${key}=${value}`)
      .join("&")}`;

  stringifySearch = str =>
    decodeURIComponent(str)
      .slice(1)
      .split("&")
      .map(item => item.split("="))
      .reduce(
        (acc, [key, value]) => (key ? { ...acc, [key]: value } : acc),
        {}
      );
}

export default new Utils();
