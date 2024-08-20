import { tags } from "typia";

import { actor } from "./actor";
import { issue } from "./issue";
import { issue_minus_comment } from "./issue_minus_comment";

/**
 * Event
 *
 * @title Event
 */
export type event = {
  id: string;
  type: string | null;
  actor: actor;
  repo: {
    id: number & tags.Type<"int32">;
    name: string;
    url: string & tags.Format<"uri">;
  };
  org?: actor;
  payload: {
    action?: string;
    issue?: issue;
    comment?: issue_minus_comment;
    pages?: {
      page_name?: string;
      title?: string;
      summary?: string | null;
      action?: string;
      sha?: string;
      html_url?: string;
    }[];
  };
  public: boolean;
  created_at: (string & tags.Format<"date-time">) | null;
};
