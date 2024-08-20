import { tags } from "typia";

export namespace IApiAppInstallationsSuspended {
  export type PutHeader = {
    /**
     * The unique identifier of the installation.
     */
    installation_id: number & tags.Type<"int32">;
  };
  export type DeleteHeader = {
    /**
     * The unique identifier of the installation.
     */
    installation_id: number & tags.Type<"int32">;
  };
}
