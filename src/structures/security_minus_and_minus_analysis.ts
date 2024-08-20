export type security_minus_and_minus_analysis = {
  advanced_security?: {
    status?: "enabled" | "disabled";
  };
  /**
   * Enable or disable Dependabot security updates for the repository.
   */
  dependabot_security_updates?: {
    /**
     * The enablement status of Dependabot security updates for the repository.
     */
    status?: "enabled" | "disabled";
  };
  secret_scanning?: {
    status?: "enabled" | "disabled";
  };
  secret_scanning_push_protection?: {
    status?: "enabled" | "disabled";
  };
  secret_scanning_non_provider_patterns?: {
    status?: "enabled" | "disabled";
  };
} | null;
