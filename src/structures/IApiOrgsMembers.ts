export namespace IApiOrgsMembers {
  export type GetHeader = {
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * The handle for the GitHub user account.
     */
    username: string;
  };
  export type GetQuery = {};
  export type DeleteHeader = {
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * The handle for the GitHub user account.
     */
    username: string;
  };
}
