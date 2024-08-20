import { tags } from "typia";

/**
 * A code security configuration
 */
export type code_minus_security_minus_configuration = {
  /**
   * The ID of the code security configuration
   */
  id?: number & tags.Type<"int32">;
  /**
   * The name of the code security configuration. Must be unique within the organization.
   */
  name?: string;
  /**
   * The type of the code security configuration.
   */
  target_type?: "global" | "organization";
  /**
   * A description of the code security configuration
   */
  description?: string;
  /**
   * The enablement status of GitHub Advanced Security
   */
  advanced_security?: "enabled" | "disabled";
  /**
   * The enablement status of Dependency Graph
   */
  dependency_graph?: "enabled" | "disabled" | "not_set";
  /**
   * The enablement status of Automatic dependency submission
   */
  dependency_graph_autosubmit_action?: "enabled" | "disabled" | "not_set";
  /**
   * Feature options for Automatic dependency submission
   */
  dependency_graph_autosubmit_action_options?: {
    /**
     * Whether to use runners labeled with 'dependency-submission' or standard GitHub runners.
     */
    labeled_runners?: boolean;
  };
  /**
   * The enablement status of Dependabot alerts
   */
  dependabot_alerts?: "enabled" | "disabled" | "not_set";
  /**
   * The enablement status of Dependabot security updates
   */
  dependabot_security_updates?: "enabled" | "disabled" | "not_set";
  /**
   * The enablement status of code scanning default setup
   */
  code_scanning_default_setup?: "enabled" | "disabled" | "not_set";
  /**
   * The enablement status of secret scanning
   */
  secret_scanning?: "enabled" | "disabled" | "not_set";
  /**
   * The enablement status of secret scanning push protection
   */
  secret_scanning_push_protection?: "enabled" | "disabled" | "not_set";
  /**
   * The enablement status of secret scanning validity checks
   */
  secret_scanning_validity_checks?: "enabled" | "disabled" | "not_set";
  /**
   * The enablement status of private vulnerability reporting
   */
  private_vulnerability_reporting?: "enabled" | "disabled" | "not_set";
  /**
   * The enforcement status for a security configuration
   */
  enforcement?: "enforced" | "unenforced";
  /**
   * The URL of the configuration
   */
  url?: string & tags.Format<"uri">;
  /**
   * The URL of the configuration
   */
  html_url?: string & tags.Format<"uri">;
  created_at?: string & tags.Format<"date-time">;
  updated_at?: string & tags.Format<"date-time">;
};
