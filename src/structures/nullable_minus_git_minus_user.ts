import { tags } from "typia";

/**
 * Metaproperties for Git author/committer information.
 *
 * @title Git User
 */
export type nullable_minus_git_minus_user = {
  name?: string &
    tags.JsonSchemaPlugin<{
      example: '"Chris Wanstrath"';
    }>;
  email?: string &
    tags.JsonSchemaPlugin<{
      example: '"chris@ozmm.org"';
    }>;
  date?: string &
    tags.JsonSchemaPlugin<{
      example: '"2007-10-29T02:42:39.000-07:00"';
    }>;
} | null;
