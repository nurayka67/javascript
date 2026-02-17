import { CURRENCY } from "./config.mjs";
export const formatPrice = (amount) => `${CURRENCY} ${amount.toFixed(2)}`;