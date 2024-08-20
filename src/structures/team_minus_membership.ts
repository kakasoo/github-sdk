import { tags } from "typia";

/**
 * Team Membership
 *
 * @title Team Membership
 */
export type team_minus_membership = {
  url: string & tags.Format<"uri">;
  /**
   * The role of the user in the team.
   */
  role: "member" | "maintainer";
  /**
   * The state of the user's membership in the team.
   */
  state: "active" | "pending";
};
