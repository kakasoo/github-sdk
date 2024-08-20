import { tags } from "typia";

export namespace IApiReposCodespacesMachines {
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
     * The location to check for available machines. Assigned by IP if not provided.
     */
    location?: string &
      tags.JsonSchemaPlugin<{
        example: "WestUs2";
      }>;
    /**
     * IP for location auto-detection when proxying a request
     */
    client_ip?: string;
    /**
     * The branch or commit to check for prebuild availability and devcontainer restrictions.
     */
    ref?: string &
      tags.JsonSchemaPlugin<{
        example: "main";
      }>;
  };
}
