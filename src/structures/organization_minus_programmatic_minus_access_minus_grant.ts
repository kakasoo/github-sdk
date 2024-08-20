import { tags } from "typia";

import { simple_minus_user } from "./simple_minus_user";

/**
 * Minimal representation of an organization programmatic access grant for enumerations
 *
 * @title Organization Programmatic Access Grant
 */
export type organization_minus_programmatic_minus_access_minus_grant = {
  /**
   * Unique identifier of the fine-grained personal access token. The `pat_id` used to get details about an approved fine-grained personal access token.
   */
  id: number & tags.Type<"int32">;
  owner: simple_minus_user;
  /**
   * Type of repository selection requested.
   */
  repository_selection: "none" | "all" | "subset";
  /**
   * URL to the list of repositories the fine-grained personal access token can access. Only follow when `repository_selection` is `subset`.
   */
  repositories_url: string;
  /**
   * Permissions requested, categorized by type of permission.
   */
  permissions: {
    organization?: {
      [key: string]: string;
    };
    repository?: {
      [key: string]: string;
    };
    other?: {
      [key: string]: string;
    };
  };
  /**
   * Date and time when the fine-grained personal access token was approved to access the organization.
   */
  access_granted_at: string;
  /**
   * Whether the associated fine-grained personal access token has expired.
   */
  token_expired: boolean;
  /**
   * Date and time when the associated fine-grained personal access token expires.
   */
  token_expires_at: string | null;
  /**
   * Date and time when the associated fine-grained personal access token was last used for authentication.
   */
  token_last_used_at: string | null;
};
