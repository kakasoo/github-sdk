import { tags } from "typia";

/**
 * The public key used for setting Dependabot Secrets.
 *
 * @title DependabotPublicKey
 */
export type dependabot_minus_public_minus_key = {
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
};
