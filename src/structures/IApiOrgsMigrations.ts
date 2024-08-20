import { tags } from "typia";

export namespace IApiOrgsMigrations {
  export type GetHeader = {
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * The unique identifier of the migration.
     */
    migration_id: number & tags.Type<"int32">;
  };
  export type GetQuery = {
    /**
     * Exclude attributes from the API response to improve performance
     */
    exclude?: "repositories"[];
  };
  export type PostHeader = {
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
  };
}
