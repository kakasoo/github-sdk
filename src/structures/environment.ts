import { tags } from "typia";

import { deployment_minus_branch_minus_policy_minus_settings } from "./deployment_minus_branch_minus_policy_minus_settings";
import { deployment_minus_reviewer_minus_type } from "./deployment_minus_reviewer_minus_type";
import { simple_minus_user } from "./simple_minus_user";
import { team } from "./team";
import { wait_minus_timer } from "./wait_minus_timer";

/**
 * Details of a deployment environment
 *
 * @title Environment
 */
export type environment = {
  /**
   * The id of the environment.
   */
  id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 56780428;
      format: "int64";
    }>;
  node_id: string &
    tags.JsonSchemaPlugin<{
      example: "MDExOkVudmlyb25tZW50NTY3ODA0Mjg=";
    }>;
  /**
   * The name of the environment.
   */
  name: string &
    tags.JsonSchemaPlugin<{
      example: "staging";
    }>;
  url: string &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/github/hello-world/environments/staging";
    }>;
  html_url: string &
    tags.JsonSchemaPlugin<{
      example: "https://github.com/github/hello-world/deployments/activity_log?environments_filter=staging";
    }>;
  /**
   * The time that the environment was created, in ISO 8601 format.
   */
  created_at: string &
    tags.Format<"date-time"> &
    tags.JsonSchemaPlugin<{
      example: "2020-11-23T22:00:40Z";
    }>;
  /**
   * The time that the environment was last updated, in ISO 8601 format.
   */
  updated_at: string &
    tags.Format<"date-time"> &
    tags.JsonSchemaPlugin<{
      example: "2020-11-23T22:00:40Z";
    }>;
  /**
   * Built-in deployment protection rules for the environment.
   */
  protection_rules?: (
    | {
        id: number &
          tags.Type<"int32"> &
          tags.JsonSchemaPlugin<{
            example: 3515;
          }>;
        node_id: string &
          tags.JsonSchemaPlugin<{
            example: "MDQ6R2F0ZTM1MTU=";
          }>;
        type: string &
          tags.JsonSchemaPlugin<{
            example: "wait_timer";
          }>;
        wait_timer?: wait_minus_timer;
      }
    | {
        id: number &
          tags.Type<"int32"> &
          tags.JsonSchemaPlugin<{
            example: 3755;
          }>;
        node_id: string &
          tags.JsonSchemaPlugin<{
            example: "MDQ6R2F0ZTM3NTU=";
          }>;
        /**
         * Whether deployments to this environment can be approved by the user who created the deployment.
         */
        prevent_self_review?: boolean &
          tags.JsonSchemaPlugin<{
            example: false;
          }>;
        type: string &
          tags.JsonSchemaPlugin<{
            example: "required_reviewers";
          }>;
        /**
         * The people or teams that may approve jobs that reference the environment. You can list up to six users or teams as reviewers. The reviewers must have at least read access to the repository. Only one of the required reviewers needs to approve the job for it to proceed.
         */
        reviewers?: {
          type?: deployment_minus_reviewer_minus_type;
          reviewer?: simple_minus_user | team;
        }[];
      }
    | {
        id: number &
          tags.Type<"int32"> &
          tags.JsonSchemaPlugin<{
            example: 3515;
          }>;
        node_id: string &
          tags.JsonSchemaPlugin<{
            example: "MDQ6R2F0ZTM1MTU=";
          }>;
        type: string &
          tags.JsonSchemaPlugin<{
            example: "branch_policy";
          }>;
      }
  )[];
  deployment_branch_policy?: deployment_minus_branch_minus_policy_minus_settings;
};
