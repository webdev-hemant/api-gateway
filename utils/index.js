const extractOriginAndRoute = (url) => {
  try {
    const urlObject = new URL(url);
    const origin = urlObject.origin;
    const route = urlObject.pathname;

    return { origin, route };
  } catch (error) {
    console.log({ errorIs: error });
    return {
      origin: "",
      route: "",
    };
  }
};

module.exports = { extractOriginAndRoute };
