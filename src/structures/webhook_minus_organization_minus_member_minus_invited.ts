import { tags } from "typia";

import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";
import { webhooks_user } from "./webhooks_user";

/**
 * @title organization member_invited event
 */
export type webhook_minus_organization_minus_member_minus_invited = {
  action: "member_invited";
  enterprise?: enterprise_minus_webhooks;
  installation?: simple_minus_installation;
  /**
   * The invitation for the user or email if the action is `member_invited`.
   */
  invitation: {
    created_at: string & tags.Format<"date-time">;
    email: string | null;
    failed_at: (string & tags.Format<"date-time">) | null;
    failed_reason: string | null;
    id: number;
    invitation_teams_url: string & tags.Format<"uri">;
    /**
     * @title User
     */
    inviter: {
      avatar_url?: string & tags.Format<"uri">;
      deleted?: boolean;
      email?: string | null;
      events_url?: string & tags.Format<"uri-template">;
      followers_url?: string & tags.Format<"uri">;
      following_url?: string & tags.Format<"uri-template">;
      gists_url?: string & tags.Format<"uri-template">;
      gravatar_id?: string;
      html_url?: string & tags.Format<"uri">;
      id: number & tags.Type<"int32">;
      login: string;
      name?: string;
      node_id?: string;
      organizations_url?: string & tags.Format<"uri">;
      received_events_url?: string & tags.Format<"uri">;
      repos_url?: string & tags.Format<"uri">;
      site_admin?: boolean;
      starred_url?: string & tags.Format<"uri-template">;
      subscriptions_url?: string & tags.Format<"uri">;
      type?: "Bot" | "User" | "Organization";
      url?: string & tags.Format<"uri">;
    } | null;
    login: string | null;
    node_id: string;
    role: string;
    team_count: number;
    invitation_source?: string;
  };
  organization: organization_minus_simple_minus_webhooks;
  repository?: repository_minus_webhooks;
  sender: simple_minus_user_minus_webhooks;
  user?: webhooks_user;
};
