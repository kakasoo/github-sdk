import { tags } from "typia";

/**
 * @title Project Column
 */
export type webhooks_project_column = {
  after_id?: (number & tags.Type<"int32">) | null;
  cards_url: string & tags.Format<"uri">;
  created_at: string & tags.Format<"date-time">;
  /**
   * The unique identifier of the project column
   */
  id: number & tags.Type<"int32">;
  /**
   * Name of the project column
   */
  name: string;
  node_id: string;
  project_url: string & tags.Format<"uri">;
  updated_at: string & tags.Format<"date-time">;
  url: string & tags.Format<"uri">;
};
