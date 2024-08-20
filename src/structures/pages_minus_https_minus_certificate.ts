import { tags } from "typia";

/**
 * @title Pages Https Certificate
 */
export type pages_minus_https_minus_certificate = {
  state:
    | "new"
    | "authorization_created"
    | "authorization_pending"
    | "authorized"
    | "authorization_revoked"
    | "issued"
    | "uploaded"
    | "approved"
    | "errored"
    | "bad_authz"
    | "destroy_pending"
    | "dns_changed";
  description: string &
    tags.JsonSchemaPlugin<{
      example: "Certificate is approved";
    }>;
  /**
   * Array of the domain set and its alternate name (if it is configured)
   */
  domains: string[] &
    tags.JsonSchemaPlugin<{
      example: ["example.com", "www.example.com"];
    }>;
  expires_at?: string & tags.Format<"date">;
};
