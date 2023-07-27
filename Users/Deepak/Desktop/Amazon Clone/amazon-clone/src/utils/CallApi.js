

export const callAPI = async (resource) => {
  const response = await fetch(`../${resource}`);

  const data = await response.json();
  return data;
};
