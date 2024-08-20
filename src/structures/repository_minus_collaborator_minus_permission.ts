import { tags } from "typia";

import { nullable_minus_collaborator } from "./nullable_minus_collaborator";

/**
 * Repository Collaborator Permission
 *
 * @title Repository Collaborator Permission
 */
export type repository_minus_collaborator_minus_permission = {
  permission: string;
  role_name: string &
    tags.JsonSchemaPlugin<{
      example: "admin";
    }>;
  user: nullable_minus_collaborator;
};
