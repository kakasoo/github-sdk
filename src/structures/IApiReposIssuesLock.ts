import { tags } from "typia";

export namespace IApiReposIssuesLock {
  export type PutHeader = {
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository without the `.git` extension. The name is not case sensitive.
     */
    repo: string;
    /**
     * The number that identifies the issue.
     */
    issue_number: number & tags.Type<"int32">;
  };
  export type DeleteHeader = {
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository without the `.git` extension. The name is not case sensitive.
     */
    repo: string;
    /**
     * The number that identifies the issue.
     */
    issue_number: number & tags.Type<"int32">;
  };
}
