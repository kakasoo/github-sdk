import { tags } from "typia";

import { integration } from "./integration";
import { minimal_minus_repository } from "./minimal_minus_repository";
import { pull_minus_request_minus_minimal } from "./pull_minus_request_minus_minimal";

/**
 * A suite of checks performed on the code of a given code change
 */
export type simple_minus_check_minus_suite = {
  after?:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "d6fde92930d4715a2b49857d24b940956b26d2d3";
        }>)
    | null;
  app?: integration;
  before?:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "146e867f55c26428e5f9fade55a9bbf5e95a7912";
        }>)
    | null;
  conclusion?:
    | "success"
    | "failure"
    | "neutral"
    | "cancelled"
    | "skipped"
    | "timed_out"
    | "action_required"
    | "stale"
    | "startup_failure"
    | null;
  created_at?: string & tags.Format<"date-time">;
  head_branch?:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "master";
        }>)
    | null;
  /**
   * The SHA of the head commit that is being checked.
   */
  head_sha?: string &
    tags.JsonSchemaPlugin<{
      example: "009b8a3a9ccbb128af87f9b1c0f4c62e8a304f6d";
    }>;
  id?: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 5;
    }>;
  node_id?: string &
    tags.JsonSchemaPlugin<{
      example: "MDEwOkNoZWNrU3VpdGU1";
    }>;
  pull_requests?: pull_minus_request_minus_minimal[];
  repository?: minimal_minus_repository;
  status?: "queued" | "in_progress" | "completed" | "pending" | "waiting";
  updated_at?: string & tags.Format<"date-time">;
  url?: string &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/github/hello-world/check-suites/5";
    }>;
};
