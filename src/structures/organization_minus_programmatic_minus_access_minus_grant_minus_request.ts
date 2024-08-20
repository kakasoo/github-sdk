import { tags } from "typia";

import { simple_minus_user } from "./simple_minus_user";

/**
 * Minimal representation of an organization programmatic access grant request for enumerations
 *
 * @title Simple Organization Programmatic Access Grant Request
 */
export type organization_minus_programmatic_minus_access_minus_grant_minus_request =
  {
    /**
     * Unique identifier of the request for access via fine-grained personal access token. The `pat_request_id` used to review PAT requests.
     */
    id: number & tags.Type<"int32">;
    /**
     * Reason for requesting access.
     */
    reason: string | null;
    owner: simple_minus_user;
    /**
     * Type of repository selection requested.
     */
    repository_selection: "none" | "all" | "subset";
    /**
     * URL to the list of repositories requested to be accessed via fine-grained personal access token. Should only be followed when `repository_selection` is `subset`.
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
