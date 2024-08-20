import { tags } from "typia";

/**
 * Group of enterprise owners and/or members
 *
 * @title Enterprise Team
 */
export type enterprise_minus_team = {
  id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      format: "int64";
    }>;
  name: string;
  slug: string;
  url: string & tags.Format<"uri">;
  sync_to_organizations: string &
    tags.JsonSchemaPlugin<{
      example: "disabled | all";
    }>;
  group_id?:
    | (number &
        tags.Type<"int32"> &
        tags.JsonSchemaPlugin<{
          example: 1;
        }>)
    | null;
  html_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://github.com/enterprises/dc/teams/justice-league";
    }>;
  members_url: string;
  created_at: string & tags.Format<"date-time">;
  updated_at: string & tags.Format<"date-time">;
};
