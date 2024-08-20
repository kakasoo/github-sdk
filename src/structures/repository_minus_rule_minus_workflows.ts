import { repository_minus_rule_minus_params_minus_workflow_minus_file_minus_reference } from "./repository_minus_rule_minus_params_minus_workflow_minus_file_minus_reference";

/**
 * Require all changes made to a targeted branch to pass the specified workflows before they can be merged.
 *
 * @title workflows
 */
export type repository_minus_rule_minus_workflows = {
  type: "workflows";
  parameters?: {
    /**
     * Allow repositories and branches to be created if a check would otherwise prohibit it.
     */
    do_not_enforce_on_create?: boolean;
    /**
     * Workflows that must pass for this rule to pass.
     */
    workflows: repository_minus_rule_minus_params_minus_workflow_minus_file_minus_reference[];
  };
};
