/**
 * Parameters to be used for the tag_name_pattern rule
 *
 * @title tag_name_pattern
 */
export type repository_minus_rule_minus_tag_minus_name_minus_pattern = {
  type: "tag_name_pattern";
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
