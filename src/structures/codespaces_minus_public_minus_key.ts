import { tags } from "typia";

/**
 * The public key used for setting Codespaces secrets.
 *
 * @title CodespacesPublicKey
 */
export type codespaces_minus_public_minus_key = {
  /**
   * The identifier for the key.
   */
  key_id: string &
    tags.JsonSchemaPlugin<{
      example: "1234567";
    }>;
  /**
   * The Base64 encoded public key.
   */
  key: string &
    tags.JsonSchemaPlugin<{
      example: "hBT5WZEj8ZoOv6TYJsfWq7MxTEQopZO5/IT3ZCVQPzs=";
    }>;
  id?: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 2;
    }>;
  url?: string &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/user/keys/2";
    }>;
  title?: string &
    tags.JsonSchemaPlugin<{
      example: "ssh-rsa AAAAB3NzaC1yc2EAAA";
    }>;
  created_at?: string &
    tags.JsonSchemaPlugin<{
      example: "2011-01-26T19:01:12Z";
    }>;
};
