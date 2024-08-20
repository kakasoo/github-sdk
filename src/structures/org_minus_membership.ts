import { tags } from "typia";

import { nullable_minus_simple_minus_user } from "./nullable_minus_simple_minus_user";
import { organization_minus_simple } from "./organization_minus_simple";

/**
 * Org Membership
 *
 * @title Org Membership
 */
export type org_minus_membership = {
  url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/orgs/octocat/memberships/defunkt";
    }>;
  /**
   * The state of the member in the organization. The `pending` state indicates the user has not yet accepted an invitation.
   */
  state: "active" | "pending";
  /**
   * The user's membership type in the organization.
   */
  role: "admin" | "member" | "billing_manager";
  organization_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/orgs/octocat";
    }>;
  organization: organization_minus_simple;
  user: nullable_minus_simple_minus_user;
  permissions?: {
    can_create_repository: boolean;
  };
};
