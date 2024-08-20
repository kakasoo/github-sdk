/**
 * Parameters to be used for the commit_message_pattern rule
 *
 * @title commit_message_pattern
 */
export type repository_minus_rule_minus_commit_minus_message_minus_pattern = {
  type: "commit_message_pattern";
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
