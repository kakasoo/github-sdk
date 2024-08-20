import { tags } from "typia";

export namespace IApiUserMigrations {
  export type GetHeader = {
    /**
     * The unique identifier of the migration.
     */
    migration_id: number & tags.Type<"int32">;
  };
  export type GetQuery = {
    exclude?: string[];
  };
}
