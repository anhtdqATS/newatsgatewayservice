export const BASE_URL =
  !import.meta.env.MODE || import.meta.env.MODE === "development"
    ? "http://10.10.10.133:82"
    : "";
export const GatewayServiceId = "7f53324f-5f22-4b02-9850-131de9543d6d";
