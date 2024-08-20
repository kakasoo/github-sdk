import { tags } from "typia";

import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";

/**
 * @title release prereleased event
 */
export type webhook_minus_release_minus_prereleased = {
  action: "prereleased";
  enterprise?: enterprise_minus_webhooks;
  installation?: simple_minus_installation;
  organization?: organization_minus_simple_minus_webhooks;
  /**
   * The [release](https://docs.github.com/rest/releases/releases/#get-a-release) object.
   *
   * @title Release
   */
  release: {
    assets: ({
      browser_download_url: string & tags.Format<"uri">;
      content_type: string;
      created_at: string & tags.Format<"date-time">;
      download_count: number & tags.Type<"int32">;
      id: number & tags.Type<"int32">;
      label: string | null;
      /**
       * The file name of the asset.
       */
      name: string;
      node_id: string;
      size: number & tags.Type<"int32">;
      /**
       * State of the release asset.
       */
      state: "uploaded";
      updated_at: string & tags.Format<"date-time">;
      /**
       * @title User
       */
      uploader?: {
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
      url: string & tags.Format<"uri">;
    } | null)[];
    assets_url: string & tags.Format<"uri">;
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
    body: string | null;
    created_at: (string & tags.Format<"date-time">) | null;
    discussion_url?: string & tags.Format<"uri">;
    /**
     * Whether the release is a draft or published
     */
    draft: boolean;
    html_url: string & tags.Format<"uri">;
    id: number & tags.Type<"int32">;
    name: string | null;
    node_id: string;
    /**
     * Whether the release is identified as a prerelease or a full release.
     */
    prerelease: true;
    published_at: (string & tags.Format<"date-time">) | null;
    /**
     * @title Reactions
     */
    reactions?: {
      "+1": number & tags.Type<"int32">;
      "-1": number & tags.Type<"int32">;
      confused: number & tags.Type<"int32">;
      eyes: number & tags.Type<"int32">;
      heart: number & tags.Type<"int32">;
      hooray: number & tags.Type<"int32">;
      laugh: number & tags.Type<"int32">;
      rocket: number & tags.Type<"int32">;
      total_count: number & tags.Type<"int32">;
      url: string & tags.Format<"uri">;
    };
    /**
     * The name of the tag.
     */
    tag_name: string;
    tarball_url: (string & tags.Format<"uri">) | null;
    /**
     * Specifies the commitish value that determines where the Git tag is created from.
     */
    target_commitish: string;
    upload_url: string & tags.Format<"uri-template">;
    url: string & tags.Format<"uri">;
    zipball_url: (string & tags.Format<"uri">) | null;
  };
  repository: repository_minus_webhooks;
  sender?: simple_minus_user_minus_webhooks;
};
