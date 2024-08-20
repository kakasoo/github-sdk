import { tags } from "typia";

import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { nullable_minus_repository_minus_webhooks } from "./nullable_minus_repository_minus_webhooks";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";

/**
 * @title project_card deleted event
 */
export type webhook_minus_project_minus_card_minus_deleted = {
  action: "deleted";
  enterprise?: enterprise_minus_webhooks;
  installation?: simple_minus_installation;
  organization?: organization_minus_simple_minus_webhooks;
  /**
   * @title Project Card
   */
  project_card: {
    after_id?: (number & tags.Type<"int32">) | null;
    /**
     * Whether or not the card is archived
     */
    archived: boolean;
    column_id: (number & tags.Type<"int32">) | null;
    column_url: string & tags.Format<"uri">;
    content_url?: string & tags.Format<"uri">;
    created_at: string & tags.Format<"date-time">;
    /**
     * @title User
     */
    creator: {
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
      type?: "Bot" | "User" | "Organization" | "Mannequin";
      url?: string & tags.Format<"uri">;
    } | null;
    /**
     * The project card's ID
     */
    id: number & tags.Type<"int32">;
    node_id: string;
    note: string | null;
    project_url: string & tags.Format<"uri">;
    updated_at: string & tags.Format<"date-time">;
    url: string & tags.Format<"uri">;
  };
  repository?: nullable_minus_repository_minus_webhooks;
  sender: simple_minus_user_minus_webhooks;
};
