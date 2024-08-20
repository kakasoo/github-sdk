import { tags } from "typia";

export namespace IApiMarketplaceListingStubbedAccounts {
  export type GetHeader = {
    /**
     * account_id parameter
     */
    account_id: number & tags.Type<"int32">;
  };
}
