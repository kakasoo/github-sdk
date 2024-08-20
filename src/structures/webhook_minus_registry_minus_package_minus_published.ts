import { tags } from "typia";

import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { webhook_minus_rubygems_minus_metadata } from "./webhook_minus_rubygems_minus_metadata";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";

export type webhook_minus_registry_minus_package_minus_published = {
  action: "published";
  enterprise?: enterprise_minus_webhooks;
  installation?: simple_minus_installation;
  organization?: organization_minus_simple_minus_webhooks;
  registry_package: {
    created_at: string | null;
    description: string | null;
    ecosystem: string;
    html_url: string;
    id: number & tags.Type<"int32">;
    name: string;
    namespace: string;
    owner: {
      avatar_url: string;
      events_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      gravatar_id: string;
      html_url: string;
      id: number & tags.Type<"int32">;
      login: string;
      node_id: string;
      organizations_url: string;
      received_events_url: string;
      repos_url: string;
      site_admin: boolean;
      starred_url: string;
      subscriptions_url: string;
      type: string;
      url: string;
    };
    package_type: string;
    package_version: {
      author?: {
        avatar_url: string;
        events_url: string;
        followers_url: string;
        following_url: string;
        gists_url: string;
        gravatar_id: string;
        html_url: string;
        id: number & tags.Type<"int32">;
        login: string;
        node_id: string;
        organizations_url: string;
        received_events_url: string;
        repos_url: string;
        site_admin: boolean;
        starred_url: string;
        subscriptions_url: string;
        type: string;
        url: string;
      };
      body?: string | {};
      body_html?: string;
      container_metadata?: {
        labels?: {} | null;
        manifest?: {} | null;
        tag?: {
          digest?: string;
          name?: string;
        };
      };
      created_at?: string;
      description: string;
      docker_metadata?: {
        tags?: string[];
      }[];
      draft?: boolean;
      html_url: string;
      id: number & tags.Type<"int32">;
      installation_command: string;
      manifest?: string;
      metadata: {}[];
      name: string;
      npm_metadata?: {
        name?: string;
        version?: string;
        npm_user?: string;
        author?: string | {} | null;
        bugs?: string | {} | null;
        dependencies?: {};
        dev_dependencies?: {};
        peer_dependencies?: {};
        optional_dependencies?: {};
        description?: string;
        dist?: string | {} | null;
        git_head?: string;
        homepage?: string;
        license?: string;
        main?: string;
        repository?: string | {} | null;
        scripts?: {};
        id?: string;
        node_version?: string;
        npm_version?: string;
        has_shrinkwrap?: boolean;
        maintainers?: string[];
        contributors?: string[];
        engines?: {};
        keywords?: string[];
        files?: string[];
        bin?: {};
        man?: {};
        directories?: string | {} | null;
        os?: string[];
        cpu?: string[];
        readme?: string;
        installation_command?: string;
        release_id?: number & tags.Type<"int32">;
        commit_oid?: string;
        published_via_actions?: boolean;
        deleted_by_id?: number & tags.Type<"int32">;
      } | null;
      nuget_metadata?:
        | {
            id?: string | {} | (number & tags.Type<"int32">) | null;
            name?: string;
            value?:
              | boolean
              | string
              | (number & tags.Type<"int32">)
              | {
                  url?: string;
                  branch?: string;
                  commit?: string;
                  type?: string;
                };
          }[]
        | null;
      package_files: {
        content_type: string;
        created_at: string;
        download_url: string;
        id: number & tags.Type<"int32">;
        md5: string | null;
        name: string;
        sha1: string | null;
        sha256: string | null;
        size: number & tags.Type<"int32">;
        state: string | null;
        updated_at: string;
      }[];
      package_url: string;
      prerelease?: boolean;
      release?: {
        author?: {
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
        created_at?: string;
        draft?: boolean;
        html_url?: string;
        id?: number & tags.Type<"int32">;
        name?: string | null;
        prerelease?: boolean;
        published_at?: string;
        tag_name?: string;
        target_commitish?: string;
        url?: string;
      };
      rubygems_metadata?: webhook_minus_rubygems_minus_metadata[];
      summary: string;
      tag_name?: string;
      target_commitish?: string;
      target_oid?: string;
      updated_at?: string;
      version: string;
    } | null;
    registry: {
      about_url?: string;
      name?: string;
      type?: string;
      url?: string;
      vendor?: string;
    } | null;
    updated_at: string | null;
  };
  repository?: repository_minus_webhooks;
  sender: simple_minus_user_minus_webhooks;
};
