import { tags } from "typia";

import { simple_minus_user } from "./simple_minus_user";

/**
 * Organization Invitation
 *
 * @title Organization Invitation
 */
export type organization_minus_invitation = {
  id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      format: "int64";
    }>;
  login: string | null;
  email: string | null;
  role: string;
  created_at: string;
  failed_at?: string | null;
  failed_reason?: string | null;
  inviter: simple_minus_user;
  team_count: number & tags.Type<"int32">;
  node_id: string &
    tags.JsonSchemaPlugin<{
      example: '"MDIyOk9yZ2FuaXphdGlvbkludml0YXRpb24x"';
    }>;
  invitation_teams_url: string &
    tags.JsonSchemaPlugin<{
      example: '"https://api.github.com/organizations/16/invitations/1/teams"';
    }>;
  invitation_source?: string &
    tags.JsonSchemaPlugin<{
      example: '"member"';
    }>;
};
