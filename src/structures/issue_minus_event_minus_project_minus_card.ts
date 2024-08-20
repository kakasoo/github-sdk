import { tags } from "typia";

/**
 * Issue Event Project Card
 *
 * @title Issue Event Project Card
 */
export type issue_minus_event_minus_project_minus_card = {
  url: string & tags.Format<"uri">;
  id: number & tags.Type<"int32">;
  project_url: string & tags.Format<"uri">;
  project_id: number & tags.Type<"int32">;
  column_name: string;
  previous_column_name?: string;
};
