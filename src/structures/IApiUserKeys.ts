import { tags } from "typia";

export namespace IApiUserKeys {
  export type GetHeader = {
    /**
     * The unique identifier of the key.
     */
    key_id: number & tags.Type<"int32">;
  };
  export type DeleteHeader = {
    /**
     * The unique identifier of the key.
     */
    key_id: number & tags.Type<"int32">;
  };
}
