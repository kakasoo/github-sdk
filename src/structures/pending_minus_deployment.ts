import { tags } from "typia";

import { deployment_minus_reviewer_minus_type } from "./deployment_minus_reviewer_minus_type";
import { simple_minus_user } from "./simple_minus_user";
import { team } from "./team";

/**
 * Details of a deployment that is waiting for protection rules to pass
 *
 * @title Pending Deployment
 */
export type pending_minus_deployment = {
  environment: {
    /**
     * The id of the environment.
     */
    id?: number &
      tags.Type<"int32"> &
      tags.JsonSchemaPlugin<{
        format: "int64";
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
  };
  /**
   * The set duration of the wait timer
   */
  wait_timer: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 30;
    }>;
  /**
   * The time that the wait timer began.
   */
  wait_timer_started_at:
    | (string &
        tags.Format<"date-time"> &
        tags.JsonSchemaPlugin<{
          example: "2020-11-23T22:00:40Z";
        }>)
    | null;
  /**
   * Whether the currently authenticated user can approve the deployment
   */
  current_user_can_approve: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
  /**
   * The people or teams that may approve jobs that reference the environment. You can list up to six users or teams as reviewers. The reviewers must have at least read access to the repository. Only one of the required reviewers needs to approve the job for it to proceed.
   */
  reviewers: {
    type?: deployment_minus_reviewer_minus_type;
    reviewer?: simple_minus_user | team;
  }[];
};
