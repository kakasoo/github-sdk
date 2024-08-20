import { tags } from "typia";

/**
 * The security alert of the vulnerable dependency.
 *
 * @title Repository Vulnerability Alert Alert
 */
export type webhooks_alert = {
  affected_package_name: string;
  affected_range: string;
  created_at: string;
  dismiss_reason?: string;
  dismissed_at?: string;
  /**
   * @title User
   */
  dismisser?: {
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
  external_identifier: string;
  external_reference: (string & tags.Format<"uri">) | null;
  fix_reason?: string;
  fixed_at?: string & tags.Format<"date-time">;
  fixed_in?: string;
  ghsa_id: string;
  id: number & tags.Type<"int32">;
  node_id: string;
  number: number & tags.Type<"int32">;
  severity: string;
  state: "open";
};
