import { tags } from "typia";

export namespace IApiUserPackagesVersions {
  export type GetHeader = {
    /**
     * The name of the package.
     */
    package_name: string;
    /**
     * Unique identifier of the package version.
     */
    package_version_id: number & tags.Type<"int32">;
  };
  export type GetQuery = {};
  export type DeleteHeader = {
    /**
     * The name of the package.
     */
    package_name: string;
    /**
     * Unique identifier of the package version.
     */
    package_version_id: number & tags.Type<"int32">;
  };
}
