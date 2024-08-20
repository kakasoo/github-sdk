import { tags } from "typia";

import { pull_minus_request_minus_minimal } from "./pull_minus_request_minus_minimal";
import { nullable_minus_integration } from "./nullable_minus_integration";
import { minimal_minus_repository } from "./minimal_minus_repository";
import { simple_minus_commit } from "./simple_minus_commit";

/**
 * A suite of checks performed on the code of a given code change
 *
 * @title CheckSuite
 */
export type check_minus_suite = {
  id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 5;
    }>;
  node_id: string &
    tags.JsonSchemaPlugin<{
      example: "MDEwOkNoZWNrU3VpdGU1";
    }>;
  head_branch:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "master";
        }>)
    | null;
  /**
   * The SHA of the head commit that is being checked.
   */
  head_sha: string &
    tags.JsonSchemaPlugin<{
      example: "009b8a3a9ccbb128af87f9b1c0f4c62e8a304f6d";
    }>;
  /**
   * The phase of the lifecycle that the check suite is currently in. Statuses of waiting, requested, and pending are reserved for GitHub Actions check suites.
   */
  status:
    | "queued"
    | "in_progress"
    | "completed"
    | "waiting"
    | "requested"
    | "pending"
    | null;
  conclusion:
    | "success"
    | "failure"
    | "neutral"
    | "cancelled"
    | "skipped"
    | "timed_out"
    | "action_required"
    | "startup_failure"
    | "stale"
    | null;
  url:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "https://api.github.com/repos/github/hello-world/check-suites/5";
        }>)
    | null;
  before:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "146e867f55c26428e5f9fade55a9bbf5e95a7912";
        }>)
    | null;
  after:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "d6fde92930d4715a2b49857d24b940956b26d2d3";
        }>)
    | null;
  pull_requests: pull_minus_request_minus_minimal[] | null;
  app: nullable_minus_integration;
  repository: minimal_minus_repository;
  created_at: (string & tags.Format<"date-time">) | null;
  updated_at: (string & tags.Format<"date-time">) | null;
  head_commit: simple_minus_commit;
  latest_check_runs_count: number & tags.Type<"int32">;
  check_runs_url: string;
  rerequestable?: boolean;
  runs_rerequestable?: boolean;
};
