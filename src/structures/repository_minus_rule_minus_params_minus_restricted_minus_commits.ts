/**
 * Restricted commit
 *
 * @title RestrictedCommits
 */
export type repository_minus_rule_minus_params_minus_restricted_minus_commits =
  {
    /**
     * Full or abbreviated commit hash to reject
     */
    oid: string;
    /**
     * Reason for restriction
     */
    reason?: string;
  };
