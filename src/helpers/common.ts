export const getImage = (source: string) => {
  return new URL(`/src/assets/images/${source}`, import.meta.url).href;
};

export const getIcon = (source: string) => {
  return new URL(`/src/assets/icons/${source}`, import.meta.url).href;
};
