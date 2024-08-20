import { tags } from "typia";

export type webhooks_workflow_job_run = {
  conclusion: any | null;
  created_at: string;
  environment: string;
  html_url: string;
  id: number & tags.Type<"int32">;
  name: any | null;
  status: string;
  updated_at: string;
};
