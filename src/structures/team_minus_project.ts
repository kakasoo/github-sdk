import { tags } from "typia";

import { simple_minus_user } from "./simple_minus_user";

/**
 * A team's access to a project.
 *
 * @title Team Project
 */
export type team_minus_project = {
  owner_url: string;
  url: string;
  html_url: string;
  columns_url: string;
  id: number & tags.Type<"int32">;
  node_id: string;
  name: string;
  body: string | null;
  number: number & tags.Type<"int32">;
  state: string;
  creator: simple_minus_user;
  created_at: string;
  updated_at: string;
  /**
   * The organization permission for this project. Only present when owner is an organization.
   */
  organization_permission?: string;
  /**
   * Whether the project is private or not. Only present when owner is an organization.
   */
  private?: boolean;
  permissions: {
    read: boolean;
    write: boolean;
    admin: boolean;
  };
};
