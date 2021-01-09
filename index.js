const defaultOpts = { prefix: "", separator: "-" };

const flatten = (config, opts) => {
  if (!Array.isArray(config) && typeof config !== "object") {
    throw new Error(
      "Theme configuration must be either an array or an object."
    );
  }

  const { prefix, separator } = { ...defaultOpts, ...opts };

  const result = {};
  const keys = Object.keys(config);

  for (let key of keys) {
    const nested = config[key];

    if (Array.isArray(nested) || typeof nested === "object") {
      Object.assign(
        result,
        flatten(nested, { prefix: `${prefix}${key}${separator}`, separator })
      );
      continue;
    }

    if (typeof nested === "string" || typeof nested === "number") {
      result[`${prefix}${key}`] = nested;
      continue;
    }

    throw new Error("Unrecognized theme structure.");
  }

  return result;
};

module.exports = flatten;
