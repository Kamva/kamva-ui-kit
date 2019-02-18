import { modularScale } from "polished";

export const ms = (step: number) => {
  return modularScale(step, "1rem", "goldenSection");
};
