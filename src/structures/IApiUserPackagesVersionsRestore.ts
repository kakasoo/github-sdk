import { tags } from "typia";

export namespace IApiUserPackagesVersionsRestore {
  export type PostHeader = {
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
