import { tags } from "typia";

import { nullable_minus_integration } from "./nullable_minus_integration";
import { nullable_minus_simple_minus_user } from "./nullable_minus_simple_minus_user";

/**
 * A request for a specific ref(branch,sha,tag) to be deployed
 *
 * @title Deployment
 */
export type deployment = {
  url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/example/deployments/1";
    }>;
  /**
   * Unique identifier of the deployment
   */
  id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      format: "int64";
      example: 42;
    }>;
  node_id: string &
    tags.JsonSchemaPlugin<{
      example: "MDEwOkRlcGxveW1lbnQx";
    }>;
  sha: string &
    tags.JsonSchemaPlugin<{
      example: "a84d88e7554fc1fa21bcbc4efae3c782a70d2b9d";
    }>;
  /**
   * The ref to deploy. This can be a branch, tag, or sha.
   */
  ref: string &
    tags.JsonSchemaPlugin<{
      example: "topic-branch";
    }>;
  /**
   * Parameter to specify a task to execute
   */
  task: string &
    tags.JsonSchemaPlugin<{
      example: "deploy";
    }>;
  payload: {} | string;
  original_environment?: string &
    tags.JsonSchemaPlugin<{
      example: "staging";
    }>;
  /**
   * Name for the target deployment environment.
   */
  environment: string &
    tags.JsonSchemaPlugin<{
      example: "production";
    }>;
  description:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "Deploy request from hubot";
        }>)
    | null;
  creator: nullable_minus_simple_minus_user;
  created_at: string &
    tags.Format<"date-time"> &
    tags.JsonSchemaPlugin<{
      example: "2012-07-20T01:19:13Z";
    }>;
  updated_at: string &
    tags.Format<"date-time"> &
    tags.JsonSchemaPlugin<{
      example: "2012-07-20T01:19:13Z";
    }>;
  statuses_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/example/deployments/1/statuses";
    }>;
  repository_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/example";
    }>;
  /**
   * Specifies if the given environment is will no longer exist at some point in the future. Default: false.
   */
  transient_environment?: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
  /**
   * Specifies if the given environment is one that end-users directly interact with. Default: false.
   */
  production_environment?: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
  performed_via_github_app?: nullable_minus_integration;
};
