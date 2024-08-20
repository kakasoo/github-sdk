import { tags } from "typia";

import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";

/**
 * @title project_card moved event
 */
export type webhook_minus_project_minus_card_minus_moved = {
  action: "moved";
  changes?: {
    column_id: {
      from: number & tags.Type<"int32">;
    };
  };
  enterprise?: enterprise_minus_webhooks;
  installation?: simple_minus_installation;
  organization?: organization_minus_simple_minus_webhooks;
  project_card: {
    after_id?: number | null;
    archived?: boolean;
    column_id?: number & tags.Type<"int32">;
    column_url?: string;
    content_url?: string & tags.Format<"uri">;
    created_at?: string;
    creator?: {
      avatar_url?: string;
      events_url?: string;
      followers_url?: string;
      following_url?: string;
      gists_url?: string;
      gravatar_id?: string;
      html_url?: string;
      id?: number & tags.Type<"int32">;
      login?: string;
      node_id?: string;
      organizations_url?: string;
      received_events_url?: string;
      repos_url?: string;
      site_admin?: boolean;
      starred_url?: string;
      subscriptions_url?: string;
      type?: string;
      url?: string;
    } | null;
    id?: number & tags.Type<"int32">;
    node_id?: string;
    note?: string | null;
    project_url?: string;
    updated_at?: string;
    url?: string;
  };
  repository?: repository_minus_webhooks;
  sender: simple_minus_user_minus_webhooks;
};
