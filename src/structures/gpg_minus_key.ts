import { tags } from "typia";

/**
 * A unique encryption key
 *
 * @title GPG Key
 */
export type gpg_minus_key = {
  id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      format: "int64";
      example: 3;
    }>;
  name?:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "Octocat's GPG Key";
        }>)
    | null;
  primary_key_id: (number & tags.Type<"int32">) | null;
  key_id: string &
    tags.JsonSchemaPlugin<{
      example: "3262EFF25BA0D270";
    }>;
  public_key: string &
    tags.JsonSchemaPlugin<{
      example: "xsBNBFayYZ...";
    }>;
  emails: {
    email?: string;
    verified?: boolean;
  }[] &
    tags.JsonSchemaPlugin<{
      example: [
        {
          email: "octocat@users.noreply.github.com";
          verified: true;
        },
      ];
    }>;
  subkeys: {
    id?: number &
      tags.Type<"int32"> &
      tags.JsonSchemaPlugin<{
        format: "int64";
      }>;
    primary_key_id?: number & tags.Type<"int32">;
    key_id?: string;
    public_key?: string;
    emails?: {
      email?: string;
      verified?: boolean;
    }[];
    subkeys?: any[];
    can_sign?: boolean;
    can_encrypt_comms?: boolean;
    can_encrypt_storage?: boolean;
    can_certify?: boolean;
    created_at?: string;
    expires_at?: string | null;
    raw_key?: string | null;
    revoked?: boolean;
  }[] &
    tags.JsonSchemaPlugin<{
      example: [
        {
          id: 4;
          primary_key_id: 3;
          key_id: "4A595D4C72EE49C7";
          public_key: "zsBNBFayYZ...";
          emails: [];
          can_sign: false;
          can_encrypt_comms: true;
          can_encrypt_storage: true;
          can_certify: false;
          created_at: "2016-03-24T11:31:04-06:00";
          expires_at: null;
          revoked: false;
        },
      ];
    }>;
  can_sign: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
  can_encrypt_comms: boolean;
  can_encrypt_storage: boolean;
  can_certify: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
  created_at: string &
    tags.Format<"date-time"> &
    tags.JsonSchemaPlugin<{
      example: "2016-03-24T11:31:04-06:00";
    }>;
  expires_at: (string & tags.Format<"date-time">) | null;
  revoked: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
  raw_key: string | null;
};
