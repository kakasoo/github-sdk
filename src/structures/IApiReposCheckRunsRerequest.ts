import { tags } from "typia";

export namespace IApiReposCheckRunsRerequest {
  export type PostHeader = {
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository without the `.git` extension. The name is not case sensitive.
     */
    repo: string;
    /**
     * The unique identifier of the check run.
     */
    check_run_id: number & tags.Type<"int32">;
  };
}
