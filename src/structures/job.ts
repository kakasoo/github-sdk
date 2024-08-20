import { tags } from "typia";

/**
 * Information of a job execution in a workflow run
 *
 * @title Job
 */
export type job = {
  /**
   * The id of the job.
   */
  id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 21;
    }>;
  /**
   * The id of the associated workflow run.
   */
  run_id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 5;
    }>;
  run_url: string &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/github/hello-world/actions/runs/5";
    }>;
  /**
   * Attempt number of the associated workflow run, 1 for first attempt and higher if the workflow was re-run.
   */
  run_attempt?: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 1;
    }>;
  node_id: string &
    tags.JsonSchemaPlugin<{
      example: "MDg6Q2hlY2tSdW40";
    }>;
  /**
   * The SHA of the commit that is being run.
   */
  head_sha: string &
    tags.JsonSchemaPlugin<{
      example: "009b8a3a9ccbb128af87f9b1c0f4c62e8a304f6d";
    }>;
  url: string &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/github/hello-world/actions/jobs/21";
    }>;
  html_url:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "https://github.com/github/hello-world/runs/4";
        }>)
    | null;
  /**
   * The phase of the lifecycle that the job is currently in.
   */
  status:
    | "queued"
    | "in_progress"
    | "completed"
    | "waiting"
    | "requested"
    | "pending";
  /**
   * The outcome of the job.
   */
  conclusion:
    | "success"
    | "failure"
    | "neutral"
    | "cancelled"
    | "skipped"
    | "timed_out"
    | "action_required"
    | null;
  /**
   * The time that the job created, in ISO 8601 format.
   */
  created_at: string &
    tags.Format<"date-time"> &
    tags.JsonSchemaPlugin<{
      example: "2019-08-08T08:00:00-07:00";
    }>;
  /**
   * The time that the job started, in ISO 8601 format.
   */
  started_at: string &
    tags.Format<"date-time"> &
    tags.JsonSchemaPlugin<{
      example: "2019-08-08T08:00:00-07:00";
    }>;
  /**
   * The time that the job finished, in ISO 8601 format.
   */
  completed_at:
    | (string &
        tags.Format<"date-time"> &
        tags.JsonSchemaPlugin<{
          example: "2019-08-08T08:00:00-07:00";
        }>)
    | null;
  /**
   * The name of the job.
   */
  name: string &
    tags.JsonSchemaPlugin<{
      example: "test-coverage";
    }>;
  /**
   * Steps in this job.
   */
  steps?: {
    /**
     * The phase of the lifecycle that the job is currently in.
     */
    status: "queued" | "in_progress" | "completed";
    /**
     * The outcome of the job.
     */
    conclusion:
      | (string &
          tags.JsonSchemaPlugin<{
            example: "success";
          }>)
      | null;
    /**
     * The name of the job.
     */
    name: string &
      tags.JsonSchemaPlugin<{
        example: "test-coverage";
      }>;
    number: number &
      tags.Type<"int32"> &
      tags.JsonSchemaPlugin<{
        example: 1;
      }>;
    /**
     * The time that the step started, in ISO 8601 format.
     */
    started_at?:
      | (string &
          tags.Format<"date-time"> &
          tags.JsonSchemaPlugin<{
            example: "2019-08-08T08:00:00-07:00";
          }>)
      | null;
    /**
     * The time that the job finished, in ISO 8601 format.
     */
    completed_at?:
      | (string &
          tags.Format<"date-time"> &
          tags.JsonSchemaPlugin<{
            example: "2019-08-08T08:00:00-07:00";
          }>)
      | null;
  }[];
  check_run_url: string &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/github/hello-world/check-runs/4";
    }>;
  /**
   * Labels for the workflow job. Specified by the "runs_on" attribute in the action's workflow file.
   */
  labels: string[] &
    tags.JsonSchemaPlugin<{
      example: ["self-hosted", "foo", "bar"];
    }>;
  /**
   * The ID of the runner to which this job has been assigned. (If a runner hasn't yet been assigned, this will be null.)
   */
  runner_id:
    | (number &
        tags.Type<"int32"> &
        tags.JsonSchemaPlugin<{
          example: 1;
        }>)
    | null;
  /**
   * The name of the runner to which this job has been assigned. (If a runner hasn't yet been assigned, this will be null.)
   */
  runner_name:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "my runner";
        }>)
    | null;
  /**
   * The ID of the runner group to which this job has been assigned. (If a runner hasn't yet been assigned, this will be null.)
   */
  runner_group_id:
    | (number &
        tags.Type<"int32"> &
        tags.JsonSchemaPlugin<{
          example: 2;
        }>)
    | null;
  /**
   * The name of the runner group to which this job has been assigned. (If a runner hasn't yet been assigned, this will be null.)
   */
  runner_group_name:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "my runner group";
        }>)
    | null;
  /**
   * The name of the workflow.
   */
  workflow_name:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "Build";
        }>)
    | null;
  /**
   * The name of the current branch.
   */
  head_branch:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "main";
        }>)
    | null;
};
