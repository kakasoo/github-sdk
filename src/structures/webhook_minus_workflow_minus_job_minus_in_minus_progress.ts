import { tags } from "typia";

import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";
import { deployment } from "./deployment";

/**
 * @title workflow_job in_progress event
 */
export type webhook_minus_workflow_minus_job_minus_in_minus_progress = {
  action: "in_progress";
  enterprise?: enterprise_minus_webhooks;
  installation?: simple_minus_installation;
  organization?: organization_minus_simple_minus_webhooks;
  repository: repository_minus_webhooks;
  sender: simple_minus_user_minus_webhooks;
  workflow_job: {
    check_run_url?: string;
    completed_at?: string | null;
    conclusion?: string | null;
    /**
     * The time that the job created.
     */
    created_at?: string;
    head_sha?: string;
    html_url?: string;
    id?: number & tags.Type<"int32">;
    labels?: string[];
    name?: string;
    node_id?: string;
    run_attempt?: number & tags.Type<"int32">;
    run_id?: number & tags.Type<"int32">;
    run_url?: string;
    runner_group_id?: number | null;
    runner_group_name?: string | null;
    runner_id?: number | null;
    runner_name?: string | null;
    started_at?: string;
    status?: "in_progress" | "completed" | "queued";
    /**
     * The name of the current branch.
     */
    head_branch?: string | null;
    /**
     * The name of the workflow.
     */
    workflow_name?: string | null;
    steps?: {
      completed_at: string | null;
      conclusion: string | null;
      name: string;
      number: number & tags.Type<"int32">;
      started_at: string | null;
      status: "in_progress" | "completed" | "pending" | "queued";
    }[];
    url?: string;
  };
  deployment?: deployment;
};
