import { tags } from "typia";

export namespace IApiReposCodespacesPermissionsCheck {
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
     * The git reference that points to the location of the devcontainer configuration to use for the permission check. The value of `ref` will typically be a branch name (`heads/BRANCH_NAME`). For more information, see "[Git References](https://git-scm.com/book/en/v2/Git-Internals-Git-References)" in the Git documentation.
     */
    ref: string &
      tags.JsonSchemaPlugin<{
        example: "master";
      }>;
    /**
     * Path to the devcontainer.json configuration to use for the permission check.
     */
    devcontainer_path: string &
      tags.JsonSchemaPlugin<{
        example: ".devcontainer/example/devcontainer.json";
      }>;
  };
}
