import { tags } from "typia";

export namespace IApiReposEnvironmentsDeploymentProtectionRules {
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
     * The name of the environment. The name must be URL encoded. For example, any slashes in the name must be replaced with `%2F`.
     */
    environment_name: string;
    /**
     * The unique identifier of the protection rule.
     */
    protection_rule_id: number & tags.Type<"int32">;
  };
  export type PostHeader = {
    /**
     * The name of the environment. The name must be URL encoded. For example, any slashes in the name must be replaced with `%2F`.
     */
    environment_name: string;
    /**
     * The name of the repository without the `.git` extension. The name is not case sensitive.
     */
    repo: string;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
  };
  export type DeleteHeader = {
    /**
     * The name of the environment. The name must be URL encoded. For example, any slashes in the name must be replaced with `%2F`.
     */
    environment_name: string;
    /**
     * The name of the repository without the `.git` extension. The name is not case sensitive.
     */
    repo: string;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The unique identifier of the protection rule.
     */
    protection_rule_id: number & tags.Type<"int32">;
  };
}
