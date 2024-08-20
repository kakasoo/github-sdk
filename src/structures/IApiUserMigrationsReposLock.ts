import { tags } from "typia";

export namespace IApiUserMigrationsReposLock {
  export type DeleteHeader = {
    /**
     * The unique identifier of the migration.
     */
    migration_id: number & tags.Type<"int32">;
    /**
     * repo_name parameter
     */
    repo_name: string;
  };
}
