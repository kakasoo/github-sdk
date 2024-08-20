/**
 * Actions OIDC subject customization for a repository
 *
 * @title Actions OIDC subject customization for a repository
 */
export type oidc_minus_custom_minus_sub_minus_repo = {
  /**
   * Whether to use the default template or not. If `true`, the `include_claim_keys` field is ignored.
   */
  use_default: boolean;
  /**
   * Array of unique strings. Each claim key can only contain alphanumeric characters and underscores.
   */
  include_claim_keys?: string[];
};
