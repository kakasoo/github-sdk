import { tags } from "typia";

import { deployment } from "./deployment";
import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";

/**
 * @title workflow_job completed event
 */
export type webhook_minus_workflow_minus_job_minus_completed = {
  action: "completed";
  enterprise?: enterprise_minus_webhooks;
  installation?: simple_minus_installation;
  organization?: organization_minus_simple_minus_webhooks;
  repository: repository_minus_webhooks;
  sender: simple_minus_user_minus_webhooks;
  workflow_job: {
    check_run_url?: string;
    completed_at?: string;
    conclusion?:
      | "success"
      | "failure"
      | "skipped"
      | "cancelled"
      | "action_required"
      | "neutral"
      | "timed_out";
    /**
     * The time that the job created.
     */
    created_at?: string;
    head_sha?: string;
    html_url?: string;
    id?: number & tags.Type<"int32">;
    labels?: (string | null)[];
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
    status?: string;
    /**
     * The name of the current branch.
     */
    head_branch?: string | null;
    /**
     * The name of the workflow.
     */
    workflow_name?: string | null;
    steps?: ({} | null)[];
    url?: string;
  };
  deployment?: deployment;
};
