import { tags } from "typia";

import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";

export type webhook_minus_installation_minus_target_minus_renamed = {
  account: {
    archived_at?: string | null;
    avatar_url: string;
    created_at?: string;
    description?: any | null;
    events_url?: string;
    followers?: number & tags.Type<"int32">;
    followers_url?: string;
    following?: number & tags.Type<"int32">;
    following_url?: string;
    gists_url?: string;
    gravatar_id?: string;
    has_organization_projects?: boolean;
    has_repository_projects?: boolean;
    hooks_url?: string;
    html_url: string;
    id: number & tags.Type<"int32">;
    is_verified?: boolean;
    issues_url?: string;
    login?: string;
    members_url?: string;
    name?: string;
    node_id: string;
    organizations_url?: string;
    public_gists?: number & tags.Type<"int32">;
    public_members_url?: string;
    public_repos?: number & tags.Type<"int32">;
    received_events_url?: string;
    repos_url?: string;
    site_admin?: boolean;
    slug?: string;
    starred_url?: string;
    subscriptions_url?: string;
    type?: string;
    updated_at?: string;
    url?: string;
    website_url?: any | null;
  };
  action: "renamed";
  changes: {
    login?: {
      from: string;
    };
    slug?: {
      from: string;
    };
  };
  enterprise?: enterprise_minus_webhooks;
  installation: simple_minus_installation;
  organization?: organization_minus_simple_minus_webhooks;
  repository?: repository_minus_webhooks;
  sender?: simple_minus_user_minus_webhooks;
  target_type: string;
};
