const getBaseUrl = () => {
  const hostname = window.location.hostname;
  // Customize the base URL as needed, e.g., add port number or protocol
  return `http://${hostname}:3000`;
};

export const BASE_URL = getBaseUrl();