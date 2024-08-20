import { tags } from "typia";

import { deployment } from "./deployment";
import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";

/**
 * @title workflow_job waiting event
 */
export type webhook_minus_workflow_minus_job_minus_waiting = {
  action: "waiting";
  enterprise?: enterprise_minus_webhooks;
  installation?: simple_minus_installation;
  organization?: organization_minus_simple_minus_webhooks;
  repository: repository_minus_webhooks;
  sender: simple_minus_user_minus_webhooks;
  workflow_job: {
    check_run_url: string & tags.Format<"uri">;
    completed_at: string | null;
    conclusion: string | null;
    /**
     * The time that the job created.
     */
    created_at: string;
    head_sha: string;
    html_url: string & tags.Format<"uri">;
    id: number & tags.Type<"int32">;
    labels: string[];
    name: string;
    node_id: string;
    run_attempt: number & tags.Type<"int32">;
    run_id: number;
    run_url: string & tags.Format<"uri">;
    runner_group_id: (number & tags.Type<"int32">) | null;
    runner_group_name: string | null;
    runner_id: (number & tags.Type<"int32">) | null;
    runner_name: string | null;
    started_at: string & tags.Format<"date-time">;
    /**
     * The name of the current branch.
     */
    head_branch: string | null;
    /**
     * The name of the workflow.
     */
    workflow_name: string | null;
    status: "queued" | "in_progress" | "completed" | "waiting";
    steps: {
      completed_at: string | null;
      conclusion: "failure" | "skipped" | "success" | "cancelled" | null;
      name: string;
      number: number & tags.Type<"int32">;
      started_at: string | null;
      status: "completed" | "in_progress" | "queued" | "pending" | "waiting";
    }[];
    url: string & tags.Format<"uri">;
  };
  deployment?: deployment;
};
