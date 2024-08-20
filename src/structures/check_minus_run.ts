import { tags } from "typia";

import { deployment_minus_simple } from "./deployment_minus_simple";
import { nullable_minus_integration } from "./nullable_minus_integration";
import { pull_minus_request_minus_minimal } from "./pull_minus_request_minus_minimal";

/**
 * A check performed on the code of a given code change
 *
 * @title CheckRun
 */
export type check_minus_run = {
  /**
   * The id of the check.
   */
  id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 21;
    }>;
  /**
   * The SHA of the commit that is being checked.
   */
  head_sha: string &
    tags.JsonSchemaPlugin<{
      example: "009b8a3a9ccbb128af87f9b1c0f4c62e8a304f6d";
    }>;
  node_id: string &
    tags.JsonSchemaPlugin<{
      example: "MDg6Q2hlY2tSdW40";
    }>;
  external_id:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "42";
        }>)
    | null;
  url: string &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/github/hello-world/check-runs/4";
    }>;
  html_url:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "https://github.com/github/hello-world/runs/4";
        }>)
    | null;
  details_url:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "https://example.com";
        }>)
    | null;
  /**
   * The phase of the lifecycle that the check is currently in. Statuses of waiting, requested, and pending are reserved for GitHub Actions check runs.
   */
  status:
    | "queued"
    | "in_progress"
    | "completed"
    | "waiting"
    | "requested"
    | "pending";
  conclusion:
    | "success"
    | "failure"
    | "neutral"
    | "cancelled"
    | "skipped"
    | "timed_out"
    | "action_required"
    | null;
  started_at:
    | (string &
        tags.Format<"date-time"> &
        tags.JsonSchemaPlugin<{
          example: "2018-05-04T01:14:52Z";
        }>)
    | null;
  completed_at:
    | (string &
        tags.Format<"date-time"> &
        tags.JsonSchemaPlugin<{
          example: "2018-05-04T01:14:52Z";
        }>)
    | null;
  output: {
    title: string | null;
    summary: string | null;
    text: string | null;
    annotations_count: number & tags.Type<"int32">;
    annotations_url: string & tags.Format<"uri">;
  };
  /**
   * The name of the check.
   */
  name: string &
    tags.JsonSchemaPlugin<{
      example: "test-coverage";
    }>;
  check_suite: {
    id: number & tags.Type<"int32">;
  } | null;
  app: nullable_minus_integration;
  /**
   * Pull requests that are open with a `head_sha` or `head_branch` that matches the check. The returned pull requests do not necessarily indicate pull requests that triggered the check.
   */
  pull_requests: pull_minus_request_minus_minimal[];
  deployment?: deployment_minus_simple;
};
