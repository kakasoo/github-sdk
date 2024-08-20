import { simple_minus_user } from "./simple_minus_user";
import { security_minus_advisory_minus_credit_minus_types } from "./security_minus_advisory_minus_credit_minus_types";

/**
 * A credit given to a user for a repository security advisory.
 */
export type repository_minus_advisory_minus_credit = {
  user: simple_minus_user;
  type: security_minus_advisory_minus_credit_minus_types;
  /**
   * The state of the user's acceptance of the credit.
   */
  state: "accepted" | "declined" | "pending";
};
