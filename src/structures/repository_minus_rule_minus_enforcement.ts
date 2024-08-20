/**
 * The enforcement level of the ruleset. `evaluate` allows admins to test rules before enforcing them. Admins can view insights on the Rule Insights page (`evaluate` is only available with GitHub Enterprise).
 */
export type repository_minus_rule_minus_enforcement =
  | "disabled"
  | "active"
  | "evaluate";
