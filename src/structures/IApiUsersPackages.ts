export namespace IApiUsersPackages {
  export type GetHeader = {
    /**
     * The name of the package.
     */
    package_name: string;
    /**
     * The handle for the GitHub user account.
     */
    username: string;
  };
  export type GetQuery = {};
  export type DeleteHeader = {
    /**
     * The name of the package.
     */
    package_name: string;
    /**
     * The handle for the GitHub user account.
     */
    username: string;
  };
}
