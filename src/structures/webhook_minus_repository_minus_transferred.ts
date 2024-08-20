import { tags } from "typia";

import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";

/**
 * @title repository transferred event
 */
export type webhook_minus_repository_minus_transferred = {
  action: "transferred";
  changes: {
    owner: {
      from: {
        /**
         * @title Organization
         */
        organization?: {
          avatar_url: string & tags.Format<"uri">;
          description: string | null;
          events_url: string & tags.Format<"uri">;
          hooks_url: string & tags.Format<"uri">;
          html_url?: string & tags.Format<"uri">;
          id: number & tags.Type<"int32">;
          issues_url: string & tags.Format<"uri">;
          login: string;
          members_url: string & tags.Format<"uri-template">;
          node_id: string;
          public_members_url: string & tags.Format<"uri-template">;
          repos_url: string & tags.Format<"uri">;
          url: string & tags.Format<"uri">;
        };
        /**
         * @title User
         */
        user?: {
          avatar_url?: string & tags.Format<"uri">;
          deleted?: boolean;
          email?: string | null;
          events_url?: string & tags.Format<"uri-template">;
          followers_url?: string & tags.Format<"uri">;
          following_url?: string & tags.Format<"uri-template">;
          gists_url?: string & tags.Format<"uri-template">;
          gravatar_id?: string;
          html_url?: string & tags.Format<"uri">;
          id: number &
            tags.Type<"int32"> &
            tags.JsonSchemaPlugin<{
              format: "int64";
            }>;
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
      };
    };
  };
  enterprise?: enterprise_minus_webhooks;
  installation?: simple_minus_installation;
  organization?: organization_minus_simple_minus_webhooks;
  repository: repository_minus_webhooks;
  sender: simple_minus_user_minus_webhooks;
};
