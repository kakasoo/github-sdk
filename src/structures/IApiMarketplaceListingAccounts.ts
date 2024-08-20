import { tags } from "typia";

export namespace IApiMarketplaceListingAccounts {
  export type GetHeader = {
    /**
     * account_id parameter
     */
    account_id: number & tags.Type<"int32">;
  };
}
