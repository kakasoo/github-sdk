import { tags } from "typia";

/**
 * Workflow Run Usage
 *
 * @title Workflow Run Usage
 */
export type workflow_minus_run_minus_usage = {
  billable: {
    UBUNTU?: {
      total_ms: number & tags.Type<"int32">;
      jobs: number & tags.Type<"int32">;
      job_runs?: {
        job_id: number & tags.Type<"int32">;
        duration_ms: number & tags.Type<"int32">;
      }[];
    };
    MACOS?: {
      total_ms: number & tags.Type<"int32">;
      jobs: number & tags.Type<"int32">;
      job_runs?: {
        job_id: number & tags.Type<"int32">;
        duration_ms: number & tags.Type<"int32">;
      }[];
    };
    WINDOWS?: {
      total_ms: number & tags.Type<"int32">;
      jobs: number & tags.Type<"int32">;
      job_runs?: {
        job_id: number & tags.Type<"int32">;
        duration_ms: number & tags.Type<"int32">;
      }[];
    };
  };
  run_duration_ms?: number & tags.Type<"int32">;
};
