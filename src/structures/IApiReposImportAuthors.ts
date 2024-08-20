import { tags } from "typia";

export namespace IApiReposImportAuthors {
  export type GetHeader = {
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository without the `.git` extension. The name is not case sensitive.
     */
    repo: string;
    /**
     * A user ID. Only return users with an ID greater than this ID.
     */
    since?: number & tags.Type<"int32">;
  };
  export type PatchHeader = {
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository without the `.git` extension. The name is not case sensitive.
     */
    repo: string;
  };
}
