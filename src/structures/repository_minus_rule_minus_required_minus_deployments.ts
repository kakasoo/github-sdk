/**
 * Choose which environments must be successfully deployed to before refs can be pushed into a ref that matches this rule.
 *
 * @title required_deployments
 */
export type repository_minus_rule_minus_required_minus_deployments = {
  type: "required_deployments";
  parameters?: {
    /**
     * The environments that must be successfully deployed to before branches can be merged.
     */
    required_deployment_environments: string[];
  };
};
