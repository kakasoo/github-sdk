import { repository_minus_rule_minus_params_minus_code_minus_scanning_minus_tool } from "./repository_minus_rule_minus_params_minus_code_minus_scanning_minus_tool";

/**
 * Choose which tools must provide code scanning results before the reference is updated. When configured, code scanning must be enabled and have results for both the commit and the reference being updated.
 *
 * @title code_scanning
 */
export type repository_minus_rule_minus_code_minus_scanning = {
  type: "code_scanning";
  parameters?: {
    /**
     * Tools that must provide code scanning results for this rule to pass.
     */
    code_scanning_tools: repository_minus_rule_minus_params_minus_code_minus_scanning_minus_tool[];
  };
};
