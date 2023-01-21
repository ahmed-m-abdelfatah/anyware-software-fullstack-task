export const keys = {
  token: 'token',
};

export const saveToStorage = (key, value) => {
  if (typeof window !== 'undefined') {
    return window.localStorage.setItem(key, JSON.stringify(value));
  }
};

export const getFromStorage = key => {
  if (typeof window !== 'undefined') {
    return JSON.parse(window.localStorage.getItem(key));
  }
};

export const removeFromStorage = key => {
  if (typeof window !== 'undefined') {
    return window.localStorage.removeItem(key);
  }
};
