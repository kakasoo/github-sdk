import { tags } from "typia";

export namespace IApiReposIssues {
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
     * The number that identifies the issue.
     */
    issue_number: number & tags.Type<"int32">;
  };
  export type GetQuery = {
    /**
     * If an `integer` is passed, it should refer to a milestone by its `number` field. If the string `*` is passed, issues with any milestone are accepted. If the string `none` is passed, issues without milestones are returned.
     */
    milestone?: string;
    /**
     * Can be the name of a user. Pass in `none` for issues with no assigned user, and `*` for issues assigned to any user.
     */
    assignee?: string;
    /**
     * The user that created the issue.
     */
    creator?: string;
    /**
     * A user that's mentioned in the issue.
     */
    mentioned?: string;
  };
  export type PostHeader = {
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository without the `.git` extension. The name is not case sensitive.
     */
    repo: string;
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
    /**
     * The number that identifies the issue.
     */
    issue_number: number & tags.Type<"int32">;
  };
}
