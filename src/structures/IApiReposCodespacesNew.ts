import { tags } from "typia";

export namespace IApiReposCodespacesNew {
  export type GetHeader = {
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository without the `.git` extension. The name is not case sensitive.
     */
    repo: string;
  };
  export type GetQuery = {
    /**
     * The branch or commit to check for a default devcontainer path. If not specified, the default branch will be checked.
     */
    ref?: string &
      tags.JsonSchemaPlugin<{
        example: "main";
      }>;
    /**
     * An alternative IP for default location auto-detection, such as when proxying a request.
     */
    client_ip?: string &
      tags.JsonSchemaPlugin<{
        example: "1.2.3.4";
      }>;
  };
}
