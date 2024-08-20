import { tags } from "typia";

import { simple_minus_user } from "./simple_minus_user";

/**
 * Details of a Personal Access Token Request.
 *
 * @title Personal Access Token Request
 */
export type personal_minus_access_minus_token_minus_request = {
  /**
   * Unique identifier of the request for access via fine-grained personal access token. Used as the `pat_request_id` parameter in the list and review API calls.
   */
  id: number & tags.Type<"int32">;
  owner: simple_minus_user;
  /**
   * New requested permissions, categorized by type of permission.
   */
  permissions_added: {
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
   * Requested permissions that elevate access for a previously approved request for access, categorized by type of permission.
   */
  permissions_upgraded: {
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
   * Permissions requested, categorized by type of permission. This field incorporates `permissions_added` and `permissions_upgraded`.
   */
  permissions_result: {
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
   * Type of repository selection requested.
   */
  repository_selection: "none" | "all" | "subset";
  /**
   * The number of repositories the token is requesting access to. This field is only populated when `repository_selection` is `subset`.
   */
  repository_count: (number & tags.Type<"int32">) | null;
  /**
   * An array of repository objects the token is requesting access to. This field is only populated when `repository_selection` is `subset`.
   */
  repositories:
    | {
        full_name: string;
        /**
         * Unique identifier of the repository
         */
        id: number & tags.Type<"int32">;
        /**
         * The name of the repository.
         */
        name: string;
        node_id: string;
        /**
         * Whether the repository is private or public.
         */
        private: boolean;
      }[]
    | null;
  /**
   * Date and time when the request for access was created.
   */
  created_at: string;
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
