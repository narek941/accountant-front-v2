const createActionName = (prefix, name) => {
  return `@kristobad_${prefix}_${name}`.toUpperCase();
};

export default createActionName;
