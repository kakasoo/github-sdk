import { tags } from "typia";

import { nullable_minus_integration } from "./nullable_minus_integration";
import { nullable_minus_simple_minus_user } from "./nullable_minus_simple_minus_user";

/**
 * The status of a deployment.
 *
 * @title Deployment Status
 */
export type deployment_minus_status = {
  url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/example/deployments/42/statuses/1";
    }>;
  id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      format: "int64";
      example: 1;
    }>;
  node_id: string &
    tags.JsonSchemaPlugin<{
      example: "MDE2OkRlcGxveW1lbnRTdGF0dXMx";
    }>;
  /**
   * The state of the status.
   */
  state:
    | "error"
    | "failure"
    | "inactive"
    | "pending"
    | "success"
    | "queued"
    | "in_progress";
  creator: nullable_minus_simple_minus_user;
  /**
   * A short description of the status.
   */
  description: string &
    tags.Default<""> &
    tags.MaxLength<140> &
    tags.JsonSchemaPlugin<{
      example: "Deployment finished successfully.";
    }>;
  /**
   * The environment of the deployment that the status is for.
   */
  environment?: string &
    tags.Default<""> &
    tags.JsonSchemaPlugin<{
      example: "production";
    }>;
  /**
   * Deprecated: the URL to associate with this status.
   */
  target_url: string &
    tags.Default<""> &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://example.com/deployment/42/output";
    }>;
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
  deployment_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/example/deployments/42";
    }>;
  repository_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/example";
    }>;
  /**
   * The URL for accessing your environment.
   */
  environment_url?: string &
    tags.Default<""> &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://staging.example.com/";
    }>;
  /**
   * The URL to associate with this status.
   */
  log_url?: string &
    tags.Default<""> &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://example.com/deployment/42/output";
    }>;
  performed_via_github_app?: nullable_minus_integration;
};
