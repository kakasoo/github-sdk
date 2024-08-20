import { tags } from "typia";

/**
 * Protected Branch Admin Enforced
 *
 * @title Protected Branch Admin Enforced
 */
export type protected_minus_branch_minus_admin_minus_enforced = {
  url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/branches/master/protection/enforce_admins";
    }>;
  enabled: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
};
