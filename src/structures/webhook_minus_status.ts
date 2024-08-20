import { tags } from "typia";

import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";

/**
 * @title status event
 */
export type webhook_minus_status = {
  avatar_url?: (string & tags.Format<"uri">) | null;
  /**
   * An array of branch objects containing the status' SHA. Each branch contains the given SHA, but the SHA may or may not be the head of the branch. The array includes a maximum of 10 branches.
   */
  branches: {
    commit: {
      sha: string | null;
      url: (string & tags.Format<"uri">) | null;
    };
    name: string;
    protected: boolean;
  }[];
  commit: {
    /**
     * @title User
     */
    author: {
      avatar_url?: string & tags.Format<"uri">;
      deleted?: boolean;
      email?: string | null;
      events_url?: string & tags.Format<"uri-template">;
      followers_url?: string & tags.Format<"uri">;
      following_url?: string & tags.Format<"uri-template">;
      gists_url?: string & tags.Format<"uri-template">;
      gravatar_id?: string;
      html_url?: string & tags.Format<"uri">;
      id?: number & tags.Type<"int32">;
      login?: string;
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
    comments_url: string & tags.Format<"uri">;
    commit: {
      author: {
        date?: string;
        email?: string;
        name?: string;
        username?: string;
      };
      comment_count: number & tags.Type<"int32">;
      committer: {
        date?: string;
        email?: string;
        name?: string;
        username?: string;
      };
      message: string;
      tree: {
        sha: string;
        url: string & tags.Format<"uri">;
      };
      url: string & tags.Format<"uri">;
      verification: {
        payload: string | null;
        reason:
          | "expired_key"
          | "not_signing_key"
          | "gpgverify_error"
          | "gpgverify_unavailable"
          | "unsigned"
          | "unknown_signature_type"
          | "no_user"
          | "unverified_email"
          | "bad_email"
          | "unknown_key"
          | "malformed_signature"
          | "invalid"
          | "valid"
          | "bad_cert"
          | "ocsp_pending";
        signature: string | null;
        verified: boolean;
      };
    };
    /**
     * @title User
     */
    committer: {
      avatar_url?: string & tags.Format<"uri">;
      deleted?: boolean;
      email?: string | null;
      events_url?: string & tags.Format<"uri-template">;
      followers_url?: string & tags.Format<"uri">;
      following_url?: string & tags.Format<"uri-template">;
      gists_url?: string & tags.Format<"uri-template">;
      gravatar_id?: string;
      html_url?: string & tags.Format<"uri">;
      id?: number & tags.Type<"int32">;
      login?: string;
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
    html_url: string & tags.Format<"uri">;
    node_id: string;
    parents: {
      html_url: string & tags.Format<"uri">;
      sha: string;
      url: string & tags.Format<"uri">;
    }[];
    sha: string;
    url: string & tags.Format<"uri">;
  };
  context: string;
  created_at: string;
  /**
   * The optional human-readable description added to the status.
   */
  description: string | null;
  enterprise?: enterprise_minus_webhooks;
  /**
   * The unique identifier of the status.
   */
  id: number & tags.Type<"int32">;
  installation?: simple_minus_installation;
  name: string;
  organization?: organization_minus_simple_minus_webhooks;
  repository: repository_minus_webhooks;
  sender: simple_minus_user_minus_webhooks;
  /**
   * The Commit SHA.
   */
  sha: string;
  /**
   * The new state. Can be `pending`, `success`, `failure`, or `error`.
   */
  state: "pending" | "success" | "failure" | "error";
  /**
   * The optional link added to the status.
   */
  target_url: string | null;
  updated_at: string;
};
