import { tags } from "typia";

export namespace IApiUserMigrationsArchive {
  export type GetHeader = {
    /**
     * The unique identifier of the migration.
     */
    migration_id: number & tags.Type<"int32">;
  };
  export type DeleteHeader = {
    /**
     * The unique identifier of the migration.
     */
    migration_id: number & tags.Type<"int32">;
  };
}
