import { tags } from "typia";

export namespace IApiUserSshSigningKeys {
  export type GetHeader = {
    /**
     * The unique identifier of the SSH signing key.
     */
    ssh_signing_key_id: number & tags.Type<"int32">;
  };
  export type DeleteHeader = {
    /**
     * The unique identifier of the SSH signing key.
     */
    ssh_signing_key_id: number & tags.Type<"int32">;
  };
}
