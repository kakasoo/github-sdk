export namespace IApiUserFollowing {
  export type GetHeader = {
    /**
     * The handle for the GitHub user account.
     */
    username: string;
  };
  export type PutHeader = {
    /**
     * The handle for the GitHub user account.
     */
    username: string;
  };
  export type DeleteHeader = {
    /**
     * The handle for the GitHub user account.
     */
    username: string;
  };
}
