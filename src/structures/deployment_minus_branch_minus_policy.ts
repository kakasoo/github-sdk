import { tags } from "typia";

/**
 * Details of a deployment branch or tag policy.
 *
 * @title Deployment branch policy
 */
export type deployment_minus_branch_minus_policy = {
  /**
   * The unique identifier of the branch or tag policy.
   */
  id?: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 361471;
    }>;
  node_id?: string &
    tags.JsonSchemaPlugin<{
      example: "MDE2OkdhdGVCcmFuY2hQb2xpY3kzNjE0NzE=";
    }>;
  /**
   * The name pattern that branches or tags must match in order to deploy to the environment.
   */
  name?: string &
    tags.JsonSchemaPlugin<{
      example: "release/*";
    }>;
  /**
   * Whether this rule targets a branch or tag.
   */
  type?: "branch" | "tag";
};
