import { tags } from "typia";

import { simple_minus_user } from "./simple_minus_user";

/**
 * An entry in the reviews log for environment deployments
 *
 * @title Environment Approval
 */
export type environment_minus_approvals = {
  /**
   * The list of environments that were approved or rejected
   */
  environments: {
    /**
     * The id of the environment.
     */
    id?: number &
      tags.Type<"int32"> &
      tags.JsonSchemaPlugin<{
        example: 56780428;
      }>;
    node_id?: string &
      tags.JsonSchemaPlugin<{
        example: "MDExOkVudmlyb25tZW50NTY3ODA0Mjg=";
      }>;
    /**
     * The name of the environment.
     */
    name?: string &
      tags.JsonSchemaPlugin<{
        example: "staging";
      }>;
    url?: string &
      tags.JsonSchemaPlugin<{
        example: "https://api.github.com/repos/github/hello-world/environments/staging";
      }>;
    html_url?: string &
      tags.JsonSchemaPlugin<{
        example: "https://github.com/github/hello-world/deployments/activity_log?environments_filter=staging";
      }>;
    /**
     * The time that the environment was created, in ISO 8601 format.
     */
    created_at?: string &
      tags.Format<"date-time"> &
      tags.JsonSchemaPlugin<{
        example: "2020-11-23T22:00:40Z";
      }>;
    /**
     * The time that the environment was last updated, in ISO 8601 format.
     */
    updated_at?: string &
      tags.Format<"date-time"> &
      tags.JsonSchemaPlugin<{
        example: "2020-11-23T22:00:40Z";
      }>;
  }[];
  /**
   * Whether deployment to the environment(s) was approved or rejected or pending (with comments)
   */
  state: "approved" | "rejected" | "pending";
  user: simple_minus_user;
  /**
   * The comment submitted with the deployment review
   */
  comment: string &
    tags.JsonSchemaPlugin<{
      example: "Ship it!";
    }>;
};
