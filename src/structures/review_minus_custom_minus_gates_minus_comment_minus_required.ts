export type review_minus_custom_minus_gates_minus_comment_minus_required = {
  /**
   * The name of the environment to approve or reject.
   */
  environment_name: string;
  /**
   * Comment associated with the pending deployment protection rule. **Required when state is not provided.**
   */
  comment: string;
};
