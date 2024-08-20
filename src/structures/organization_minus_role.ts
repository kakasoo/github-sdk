import { tags } from "typia";

import { nullable_minus_simple_minus_user } from "./nullable_minus_simple_minus_user";

/**
 * Organization roles
 *
 * @title Organization Role
 */
export type organization_minus_role = {
  /**
   * The unique identifier of the role.
   */
  id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      format: "int64";
    }>;
  /**
   * The name of the role.
   */
  name: string;
  /**
   * A short description about who this role is for or what permissions it grants.
   */
  description?: string | null;
  /**
   * A list of permissions included in this role.
   */
  permissions: string[];
  organization: nullable_minus_simple_minus_user;
  /**
   * The date and time the role was created.
   */
  created_at: string & tags.Format<"date-time">;
  /**
   * The date and time the role was last updated.
   */
  updated_at: string & tags.Format<"date-time">;
};
