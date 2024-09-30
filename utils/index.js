const extractOriginAndRoute = (url) => {
  const urlObject = new URL(url);
  const origin = urlObject.origin;
  const route = urlObject.pathname;

  return { origin, route };
};

module.exports = { extractOriginAndRoute };
