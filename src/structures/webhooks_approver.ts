import { tags } from "typia";

export type webhooks_approver = {
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
};
