import { tags } from "typia";

export namespace IApiUserGpgKeys {
  export type GetHeader = {
    /**
     * The unique identifier of the GPG key.
     */
    gpg_key_id: number & tags.Type<"int32">;
  };
  export type DeleteHeader = {
    /**
     * The unique identifier of the GPG key.
     */
    gpg_key_id: number & tags.Type<"int32">;
  };
}
