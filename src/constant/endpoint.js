// endpoint.js

export const BASE_API = "https://luminous-power-10529bef19.strapiapp.com";

const ENDPOINT = {
  SERVICES: `${BASE_API}/api/services?populate=*`,
  CATEGORY: `${BASE_API}/api/categories`,
  WORKS: `${BASE_API}/api/works?populate=*`,
};

export default ENDPOINT;
