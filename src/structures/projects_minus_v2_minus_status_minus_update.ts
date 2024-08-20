import { tags } from "typia";

import { simple_minus_user } from "./simple_minus_user";

/**
 * An status update belonging to a project
 *
 * @title Projects v2 Status Update
 */
export type projects_minus_v2_minus_status_minus_update = {
  id: number;
  node_id: string;
  project_node_id?: string;
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
  status?:
    | "INACTIVE"
    | "ON_TRACK"
    | "AT_RISK"
    | "OFF_TRACK"
    | "COMPLETE"
    | null;
  start_date?: string &
    tags.Format<"date"> &
    tags.JsonSchemaPlugin<{
      example: "2022-04-28";
    }>;
  target_date?: string &
    tags.Format<"date"> &
    tags.JsonSchemaPlugin<{
      example: "2022-04-28";
    }>;
  /**
   * Body of the status update
   */
  body?:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "The project is off to a great start!";
        }>)
    | null;
};
