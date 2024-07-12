const isEmpty = <T>(value: T): boolean => {
  return value === undefined || value === null || value === "";
};

export default isEmpty;
