import { tags } from "typia";

export namespace IApiOrgsMigrationsReposLock {
  export type DeleteHeader = {
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
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
