import { tags } from "typia";

import { deployment_minus_simple } from "./deployment_minus_simple";
import { nullable_minus_integration } from "./nullable_minus_integration";
import { pull_minus_request_minus_minimal } from "./pull_minus_request_minus_minimal";
import { simple_minus_check_minus_suite } from "./simple_minus_check_minus_suite";

/**
 * A check performed on the code of a given code change
 *
 * @title CheckRun
 */
export type check_minus_run_minus_with_minus_simple_minus_check_minus_suite = {
  app: nullable_minus_integration;
  check_suite: simple_minus_check_minus_suite;
  completed_at:
    | (string &
        tags.Format<"date-time"> &
        tags.JsonSchemaPlugin<{
          example: "2018-05-04T01:14:52Z";
        }>)
    | null;
  conclusion:
    | "waiting"
    | "pending"
    | "startup_failure"
    | "stale"
    | "success"
    | "failure"
    | "neutral"
    | "cancelled"
    | "skipped"
    | "timed_out"
    | "action_required"
    | null;
  deployment?: deployment_minus_simple;
  details_url: string &
    tags.JsonSchemaPlugin<{
      example: "https://example.com";
    }>;
  external_id: string &
    tags.JsonSchemaPlugin<{
      example: "42";
    }>;
  /**
   * The SHA of the commit that is being checked.
   */
  head_sha: string &
    tags.JsonSchemaPlugin<{
      example: "009b8a3a9ccbb128af87f9b1c0f4c62e8a304f6d";
    }>;
  html_url: string &
    tags.JsonSchemaPlugin<{
      example: "https://github.com/github/hello-world/runs/4";
    }>;
  /**
   * The id of the check.
   */
  id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 21;
    }>;
  /**
   * The name of the check.
   */
  name: string &
    tags.JsonSchemaPlugin<{
      example: "test-coverage";
    }>;
  node_id: string &
    tags.JsonSchemaPlugin<{
      example: "MDg6Q2hlY2tSdW40";
    }>;
  output: {
    annotations_count: number & tags.Type<"int32">;
    annotations_url: string & tags.Format<"uri">;
    summary: string | null;
    text: string | null;
    title: string | null;
  };
  pull_requests: pull_minus_request_minus_minimal[];
  started_at: string &
    tags.Format<"date-time"> &
    tags.JsonSchemaPlugin<{
      example: "2018-05-04T01:14:52Z";
    }>;
  /**
   * The phase of the lifecycle that the check is currently in.
   */
  status: "queued" | "in_progress" | "completed" | "pending";
  url: string &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/github/hello-world/check-runs/4";
    }>;
};
