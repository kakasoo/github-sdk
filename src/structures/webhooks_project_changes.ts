import { tags } from "typia";

export type webhooks_project_changes = {
  archived_at?: {
    from?: (string & tags.Format<"date-time">) | null;
    to?: (string & tags.Format<"date-time">) | null;
  };
};
