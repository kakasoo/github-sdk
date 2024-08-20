export type review_minus_custom_minus_gates_minus_state_minus_required = {
  /**
   * The name of the environment to approve or reject.
   */
  environment_name: string;
  /**
   * Whether to approve or reject deployment to the specified environments.
   */
  state: "approved" | "rejected";
  /**
   * Optional comment to include with the review.
   */
  comment?: string;
};
