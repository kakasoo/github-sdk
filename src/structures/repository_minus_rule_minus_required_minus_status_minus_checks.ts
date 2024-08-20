import { repository_minus_rule_minus_params_minus_status_minus_check_minus_configuration } from "./repository_minus_rule_minus_params_minus_status_minus_check_minus_configuration";

/**
 * Choose which status checks must pass before the ref is updated. When enabled, commits must first be pushed to another ref where the checks pass.
 *
 * @title required_status_checks
 */
export type repository_minus_rule_minus_required_minus_status_minus_checks = {
  type: "required_status_checks";
  parameters?: {
    /**
     * Allow repositories and branches to be created if a check would otherwise prohibit it.
     */
    do_not_enforce_on_create?: boolean;
    /**
     * Status checks that are required.
     */
    required_status_checks: repository_minus_rule_minus_params_minus_status_minus_check_minus_configuration[];
    /**
     * Whether pull requests targeting a matching branch must be tested with the latest code. This setting will not take effect unless at least one status check is enabled.
     */
    strict_required_status_checks_policy: boolean;
  };
};
