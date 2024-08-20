import { tags } from "typia";

import { repository } from "./repository";

/**
 * Authentication Token
 *
 * @title Authentication Token
 */
export type authentication_minus_token = {
  /**
   * The token used for authentication
   */
  token: string &
    tags.JsonSchemaPlugin<{
      example: "v1.1f699f1069f60xxx";
    }>;
  /**
   * The time this token expires
   */
  expires_at: string &
    tags.Format<"date-time"> &
    tags.JsonSchemaPlugin<{
      example: "2016-07-11T22:14:10Z";
    }>;
  permissions?: {};
  /**
   * The repositories this token has access to
   */
  repositories?: repository[];
  single_file?:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "config.yaml";
        }>)
    | null;
  /**
   * Describe whether all repositories have been selected or there's a selection involved
   */
  repository_selection?: "all" | "selected";
};
