export type code_minus_scanning_minus_alert_minus_rule = {
  /**
   * A unique identifier for the rule used to detect the alert.
   */
  id?: string | null;
  /**
   * The name of the rule used to detect the alert.
   */
  name?: string;
  /**
   * The severity of the alert.
   */
  severity?: "none" | "note" | "warning" | "error" | null;
  /**
   * The security severity of the alert.
   */
  security_severity_level?: "low" | "medium" | "high" | "critical" | null;
  /**
   * A short description of the rule used to detect the alert.
   */
  description?: string;
  /**
   * description of the rule used to detect the alert.
   */
  full_description?: string;
  /**
   * A set of tags applicable for the rule.
   */
  tags?: string[] | null;
  /**
   * Detailed documentation for the rule as GitHub Flavored Markdown.
   */
  help?: string | null;
  /**
   * A link to the documentation for the rule used to detect the alert.
   */
  help_uri?: string | null;
};
