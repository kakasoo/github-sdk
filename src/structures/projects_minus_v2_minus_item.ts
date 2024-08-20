import { tags } from "typia";

import { projects_minus_v2_minus_item_minus_content_minus_type } from "./projects_minus_v2_minus_item_minus_content_minus_type";
import { simple_minus_user } from "./simple_minus_user";

/**
 * An item belonging to a project
 *
 * @title Projects v2 Item
 */
export type projects_minus_v2_minus_item = {
  id: number;
  node_id?: string;
  project_node_id?: string;
  content_node_id: string;
  content_type: projects_minus_v2_minus_item_minus_content_minus_type;
  creator?: simple_minus_user;
  created_at: string &
    tags.Format<"date-time"> &
    tags.JsonSchemaPlugin<{
      example: "2022-04-28T12:00:00Z";
    }>;
  updated_at: string &
    tags.Format<"date-time"> &
    tags.JsonSchemaPlugin<{
      example: "2022-04-28T12:00:00Z";
    }>;
  archived_at:
    | (string &
        tags.Format<"date-time"> &
        tags.JsonSchemaPlugin<{
          example: "2022-04-28T12:00:00Z";
        }>)
    | null;
};
