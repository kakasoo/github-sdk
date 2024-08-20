/**
 * Only allow users with bypass permission to update matching refs.
 *
 * @title update
 */
export type repository_minus_rule_minus_update = {
  type: "update";
  parameters?: {
    /**
     * Branch can pull changes from its upstream repository
     */
    update_allows_fetch_and_merge: boolean;
  };
};
