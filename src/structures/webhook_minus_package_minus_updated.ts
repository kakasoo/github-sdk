import { tags } from "typia";

import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";
import { webhook_minus_rubygems_minus_metadata } from "./webhook_minus_rubygems_minus_metadata";

/**
 * @title package updated event
 */
export type webhook_minus_package_minus_updated = {
  action: "updated";
  enterprise?: enterprise_minus_webhooks;
  installation?: simple_minus_installation;
  organization?: organization_minus_simple_minus_webhooks;
  /**
   * Information about the package.
   */
  package: {
    created_at: string;
    description: string | null;
    ecosystem: string;
    html_url: string & tags.Format<"uri">;
    id: number & tags.Type<"int32">;
    name: string;
    namespace: string;
    /**
     * @title User
     */
    owner: {
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
    package_type: string;
    package_version: {
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
      body: string;
      body_html: string;
      created_at: string;
      description: string;
      docker_metadata?: {
        tags?: string[];
      }[];
      draft?: boolean;
      html_url: string & tags.Format<"uri">;
      id: number & tags.Type<"int32">;
      installation_command: string;
      manifest?: string;
      metadata: {}[];
      name: string;
      package_files: {
        content_type: string;
        created_at: string;
        download_url: string & tags.Format<"uri">;
        id: number & tags.Type<"int32">;
        md5: string | null;
        name: string;
        sha1: string | null;
        sha256: string;
        size: number & tags.Type<"int32">;
        state: string;
        updated_at: string;
      }[];
      package_url?: string;
      prerelease?: boolean;
      release?: {
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
        created_at: string;
        draft: boolean;
        html_url: string & tags.Format<"uri">;
        id: number & tags.Type<"int32">;
        name: string;
        prerelease: boolean;
        published_at: string;
        tag_name: string;
        target_commitish: string;
        url: string & tags.Format<"uri">;
      };
      rubygems_metadata?: webhook_minus_rubygems_minus_metadata[];
      source_url?: string & tags.Format<"uri">;
      summary: string;
      tag_name?: string;
      target_commitish: string;
      target_oid: string;
      updated_at: string;
      version: string;
    };
    registry: {
      about_url: string & tags.Format<"uri">;
      name: string;
      type: string;
      url: string & tags.Format<"uri">;
      vendor: string;
    } | null;
    updated_at: string;
  };
  repository: repository_minus_webhooks;
  sender: simple_minus_user_minus_webhooks;
};
