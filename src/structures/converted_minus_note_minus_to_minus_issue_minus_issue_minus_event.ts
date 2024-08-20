import { tags } from "typia";

import { simple_minus_user } from "./simple_minus_user";
import { integration } from "./integration";

/**
 * Converted Note to Issue Issue Event
 *
 * @title Converted Note to Issue Issue Event
 */
export type converted_minus_note_minus_to_minus_issue_minus_issue_minus_event =
  {
    id: number & tags.Type<"int32">;
    node_id: string;
    url: string;
    actor: simple_minus_user;
    event: string;
    commit_id: string | null;
    commit_url: string | null;
    created_at: string;
    performed_via_github_app: integration;
    project_card?: {
      id: number & tags.Type<"int32">;
      url: string & tags.Format<"uri">;
      project_id: number & tags.Type<"int32">;
      project_url: string & tags.Format<"uri">;
      column_name: string;
      previous_column_name?: string;
    };
  };
