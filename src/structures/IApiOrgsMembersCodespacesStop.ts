export namespace IApiOrgsMembersCodespacesStop {
  export type PostHeader = {
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * The handle for the GitHub user account.
     */
    username: string;
    /**
     * The name of the codespace.
     */
    codespace_name: string;
  };
}
