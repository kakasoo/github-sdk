import { tags } from "typia";

/**
 * A GitHub App that is providing a custom deployment protection rule.
 *
 * @title Custom deployment protection rule app
 */
export type custom_minus_deployment_minus_rule_minus_app = {
  /**
   * The unique identifier of the deployment protection rule integration.
   */
  id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 3515;
    }>;
  /**
   * The slugified name of the deployment protection rule integration.
   */
  slug: string &
    tags.JsonSchemaPlugin<{
      example: "my-custom-app";
    }>;
  /**
   * The URL for the endpoint to get details about the app.
   */
  integration_url: string &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/apps/custom-app-slug";
    }>;
  /**
   * The node ID for the deployment protection rule integration.
   */
  node_id: string &
    tags.JsonSchemaPlugin<{
      example: "MDQ6R2F0ZTM1MTU=";
    }>;
};
