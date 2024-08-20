/**
 * Parameters to be used for the committer_email_pattern rule
 *
 * @title committer_email_pattern
 */
export type repository_minus_rule_minus_committer_minus_email_minus_pattern = {
  type: "committer_email_pattern";
  parameters?: {
    /**
     * How this rule will appear to users.
     */
    name?: string;
    /**
     * If true, the rule will fail if the pattern matches.
     */
    negate?: boolean;
    /**
     * The operator to use for matching.
     */
    operator: "starts_with" | "ends_with" | "contains" | "regex";
    /**
     * The pattern to match with.
     */
    pattern: string;
  };
};
