import { tags } from "typia";

export namespace IApiOrgsMigrationsArchive {
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
  export type DeleteHeader = {
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * The unique identifier of the migration.
     */
    migration_id: number & tags.Type<"int32">;
  };
}
