import { tags } from "typia";

import { custom_minus_deployment_minus_rule_minus_app } from "./custom_minus_deployment_minus_rule_minus_app";

/**
 * Deployment protection rule
 *
 * @title Deployment protection rule
 */
export type deployment_minus_protection_minus_rule = {
  /**
   * The unique identifier for the deployment protection rule.
   */
  id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 3515;
    }>;
  /**
   * The node ID for the deployment protection rule.
   */
  node_id: string &
    tags.JsonSchemaPlugin<{
      example: "MDQ6R2F0ZTM1MTU=";
    }>;
  /**
   * Whether the deployment protection rule is enabled for the environment.
   */
  enabled: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
  app: custom_minus_deployment_minus_rule_minus_app;
};
