import { tags } from "typia";

/**
 * Groups of organization members that gives permissions on specified repositories.
 *
 * @title Team
 */
export type webhooks_team_1 = {
  deleted?: boolean;
  /**
   * Description of the team
   */
  description?: string | null;
  html_url?: string & tags.Format<"uri">;
  /**
   * Unique identifier of the team
   */
  id: number & tags.Type<"int32">;
  members_url?: string & tags.Format<"uri-template">;
  /**
   * Name of the team
   */
  name: string;
  node_id?: string;
  parent?: {
    /**
     * Description of the team
     */
    description: string | null;
    html_url: string & tags.Format<"uri">;
    /**
     * Unique identifier of the team
     */
    id: number & tags.Type<"int32">;
    members_url: string & tags.Format<"uri-template">;
    /**
     * Name of the team
     */
    name: string;
    node_id: string;
    /**
     * Permission that the team will have for its repositories
     */
    permission: string;
    privacy: "open" | "closed" | "secret";
    /**
     * Whether team members will receive notifications when their team is @mentioned
     */
    notification_setting: "notifications_enabled" | "notifications_disabled";
    repositories_url: string & tags.Format<"uri">;
    slug: string;
    /**
     * URL for the team
     */
    url: string & tags.Format<"uri">;
  } | null;
  /**
   * Permission that the team will have for its repositories
   */
  permission?: string;
  privacy?: "open" | "closed" | "secret";
  /**
   * Whether team members will receive notifications when their team is @mentioned
   */
  notification_setting?: "notifications_enabled" | "notifications_disabled";
  repositories_url?: string & tags.Format<"uri">;
  slug?: string;
  /**
   * URL for the team
   */
  url?: string & tags.Format<"uri">;
};
