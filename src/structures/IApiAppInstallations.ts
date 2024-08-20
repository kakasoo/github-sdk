import { tags } from "typia";

export namespace IApiAppInstallations {
  export type GetHeader = {
    /**
     * The unique identifier of the installation.
     */
    installation_id: number & tags.Type<"int32">;
  };
  export type GetQuery = {
    outdated?: string;
  };
  export type DeleteHeader = {
    /**
     * The unique identifier of the installation.
     */
    installation_id: number & tags.Type<"int32">;
  };
}
