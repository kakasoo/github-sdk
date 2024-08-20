import { tags } from "typia";

export namespace IApiUsersPackagesVersionsRestore {
  export type PostHeader = {
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
