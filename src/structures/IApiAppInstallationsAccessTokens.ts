import { tags } from "typia";

export namespace IApiAppInstallationsAccessTokens {
  export type PostHeader = {
    /**
     * The unique identifier of the installation.
     */
    installation_id: number & tags.Type<"int32">;
  };
}
