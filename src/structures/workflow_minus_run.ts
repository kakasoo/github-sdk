import { tags } from "typia";

import { referenced_minus_workflow } from "./referenced_minus_workflow";
import { pull_minus_request_minus_minimal } from "./pull_minus_request_minus_minimal";
import { simple_minus_user } from "./simple_minus_user";
import { nullable_minus_simple_minus_commit } from "./nullable_minus_simple_minus_commit";
import { minimal_minus_repository } from "./minimal_minus_repository";

/**
 * An invocation of a workflow
 *
 * @title Workflow Run
 */
export type workflow_minus_run = {
  /**
   * The ID of the workflow run.
   */
  id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 5;
    }>;
  /**
   * The name of the workflow run.
   */
  name?:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "Build";
        }>)
    | null;
  node_id: string &
    tags.JsonSchemaPlugin<{
      example: "MDEwOkNoZWNrU3VpdGU1";
    }>;
  /**
   * The ID of the associated check suite.
   */
  check_suite_id?: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 42;
    }>;
  /**
   * The node ID of the associated check suite.
   */
  check_suite_node_id?: string &
    tags.JsonSchemaPlugin<{
      example: "MDEwOkNoZWNrU3VpdGU0Mg==";
    }>;
  head_branch:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "master";
        }>)
    | null;
  /**
   * The SHA of the head commit that points to the version of the workflow being run.
   */
  head_sha: string &
    tags.JsonSchemaPlugin<{
      example: "009b8a3a9ccbb128af87f9b1c0f4c62e8a304f6d";
    }>;
  /**
   * The full path of the workflow
   */
  path: string &
    tags.JsonSchemaPlugin<{
      example: "octocat/octo-repo/.github/workflows/ci.yml@main";
    }>;
  /**
   * The auto incrementing run number for the workflow run.
   */
  run_number: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 106;
    }>;
  /**
   * Attempt number of the run, 1 for first attempt and higher if the workflow was re-run.
   */
  run_attempt?: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 1;
    }>;
  referenced_workflows?: referenced_minus_workflow[] | null;
  event: string &
    tags.JsonSchemaPlugin<{
      example: "push";
    }>;
  status:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "completed";
        }>)
    | null;
  conclusion:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "neutral";
        }>)
    | null;
  /**
   * The ID of the parent workflow.
   */
  workflow_id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 5;
    }>;
  /**
   * The URL to the workflow run.
   */
  url: string &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/github/hello-world/actions/runs/5";
    }>;
  html_url: string &
    tags.JsonSchemaPlugin<{
      example: "https://github.com/github/hello-world/suites/4";
    }>;
  /**
   * Pull requests that are open with a `head_sha` or `head_branch` that matches the workflow run. The returned pull requests do not necessarily indicate pull requests that triggered the run.
   */
  pull_requests: pull_minus_request_minus_minimal[] | null;
  created_at: string & tags.Format<"date-time">;
  updated_at: string & tags.Format<"date-time">;
  actor?: simple_minus_user;
  triggering_actor?: simple_minus_user;
  /**
   * The start time of the latest run. Resets on re-run.
   */
  run_started_at?: string & tags.Format<"date-time">;
  /**
   * The URL to the jobs for the workflow run.
   */
  jobs_url: string &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/github/hello-world/actions/runs/5/jobs";
    }>;
  /**
   * The URL to download the logs for the workflow run.
   */
  logs_url: string &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/github/hello-world/actions/runs/5/logs";
    }>;
  /**
   * The URL to the associated check suite.
   */
  check_suite_url: string &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/github/hello-world/check-suites/12";
    }>;
  /**
   * The URL to the artifacts for the workflow run.
   */
  artifacts_url: string &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/github/hello-world/actions/runs/5/rerun/artifacts";
    }>;
  /**
   * The URL to cancel the workflow run.
   */
  cancel_url: string &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/github/hello-world/actions/runs/5/cancel";
    }>;
  /**
   * The URL to rerun the workflow run.
   */
  rerun_url: string &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/github/hello-world/actions/runs/5/rerun";
    }>;
  /**
   * The URL to the previous attempted run of this workflow, if one exists.
   */
  previous_attempt_url?:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "https://api.github.com/repos/github/hello-world/actions/runs/5/attempts/3";
        }>)
    | null;
  /**
   * The URL to the workflow.
   */
  workflow_url: string &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/github/hello-world/actions/workflows/main.yaml";
    }>;
  head_commit: nullable_minus_simple_minus_commit;
  repository: minimal_minus_repository;
  head_repository: minimal_minus_repository;
  head_repository_id?: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 5;
    }>;
  /**
   * The event-specific title associated with the run or the run-name if set, or the value of `run-name` if it is set in the workflow.
   */
  display_title: string &
    tags.JsonSchemaPlugin<{
      example: "Simple Workflow";
    }>;
};
