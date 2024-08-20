import { tags } from "typia";

import { simple_minus_user } from "./simple_minus_user";
import { nullable_minus_simple_minus_user } from "./nullable_minus_simple_minus_user";

/**
 * A projects v2 project
 *
 * @title Projects v2 Project
 */
export type projects_minus_v2 = {
  id: number;
  node_id: string;
  owner: simple_minus_user;
  creator: simple_minus_user;
  title: string;
  description: string | null;
  public: boolean;
  closed_at:
    | (string &
        tags.Format<"date-time"> &
        tags.JsonSchemaPlugin<{
          example: "2022-04-28T12:00:00Z";
        }>)
    | null;
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
  number: number & tags.Type<"int32">;
  short_description: string | null;
  deleted_at:
    | (string &
        tags.Format<"date-time"> &
        tags.JsonSchemaPlugin<{
          example: "2022-04-28T12:00:00Z";
        }>)
    | null;
  deleted_by: nullable_minus_simple_minus_user;
};
