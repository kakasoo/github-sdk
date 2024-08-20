import { tags } from "typia";

import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { webhooks_user } from "./webhooks_user";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { webhooks_team } from "./webhooks_team";

/**
 * @title membership removed event
 */
export type webhook_minus_membership_minus_removed = {
  action: "removed";
  enterprise?: enterprise_minus_webhooks;
  installation?: simple_minus_installation;
  member: webhooks_user;
  organization: organization_minus_simple_minus_webhooks;
  repository?: repository_minus_webhooks;
  /**
   * The scope of the membership. Currently, can only be `team`.
   */
  scope: "team" | "organization";
  /**
   * @title User
   */
  sender: {
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
  team: webhooks_team;
};
