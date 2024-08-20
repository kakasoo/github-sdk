import { tags } from "typia";

export namespace IApiUser {
  export type GetHeader = {
    /**
     * account_id parameter
     */
    account_id: number & tags.Type<"int32">;
  };
}
