import { tags } from "typia";

export namespace IApiUsersPackagesVersions {
  export type GetHeader = {
    /**
     * The name of the package.
     */
    package_name: string;
    /**
     * Unique identifier of the package version.
     */
    package_version_id: number & tags.Type<"int32">;
    /**
     * The handle for the GitHub user account.
     */
    username: string;
  };
  export type DeleteHeader = {
    /**
     * The name of the package.
     */
    package_name: string;
    /**
     * The handle for the GitHub user account.
     */
    username: string;
    /**
     * Unique identifier of the package version.
     */
    package_version_id: number & tags.Type<"int32">;
  };
}
