/**
 * A tool that must provide code scanning results for this rule to pass.
 *
 * @title CodeScanningTool
 */
export type repository_minus_rule_minus_params_minus_code_minus_scanning_minus_tool =
  {
    /**
     * The severity level at which code scanning results that raise alerts block a reference update. For more information on alert severity levels, see "[About code scanning alerts](https://docs.github.com/code-security/code-scanning/managing-code-scanning-alerts/about-code-scanning-alerts#about-alert-severity-and-security-severity-levels)."
     */
    alerts_threshold: "none" | "errors" | "errors_and_warnings" | "all";
    /**
     * The severity level at which code scanning results that raise security alerts block a reference update. For more information on security severity levels, see "[About code scanning alerts](https://docs.github.com/code-security/code-scanning/managing-code-scanning-alerts/about-code-scanning-alerts#about-alert-severity-and-security-severity-levels)."
     */
    security_alerts_threshold:
      | "none"
      | "critical"
      | "high_or_higher"
      | "medium_or_higher"
      | "all";
    /**
     * The name of a code scanning tool
     */
    tool: string;
  };
