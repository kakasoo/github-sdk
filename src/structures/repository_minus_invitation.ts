import { tags } from "typia";

import { minimal_minus_repository } from "./minimal_minus_repository";
import { nullable_minus_simple_minus_user } from "./nullable_minus_simple_minus_user";

/**
 * Repository invitations let you manage who you collaborate with.
 *
 * @title Repository Invitation
 */
export type repository_minus_invitation = {
  /**
   * Unique identifier of the repository invitation.
   */
  id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 42;
      format: "int64";
    }>;
  repository: minimal_minus_repository;
  invitee: nullable_minus_simple_minus_user;
  inviter: nullable_minus_simple_minus_user;
  /**
   * The permission associated with the invitation.
   */
  permissions: "read" | "write" | "admin" | "triage" | "maintain";
  created_at: string &
    tags.Format<"date-time"> &
    tags.JsonSchemaPlugin<{
      example: "2016-06-13T14:52:50-05:00";
    }>;
  /**
   * Whether or not the invitation has expired
   */
  expired?: boolean;
  /**
   * URL for the repository invitation
   */
  url: string &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/user/repository-invitations/1";
    }>;
  html_url: string &
    tags.JsonSchemaPlugin<{
      example: "https://github.com/octocat/Hello-World/invitations";
    }>;
  node_id: string;
};
