import { interaction_minus_group } from "./interaction_minus_group";
import { interaction_minus_expiry } from "./interaction_minus_expiry";

/**
 * Limit interactions to a specific type of user for a specified duration
 *
 * @title Interaction Restrictions
 */
export type interaction_minus_limit = {
  limit: interaction_minus_group;
  expiry?: interaction_minus_expiry;
};
