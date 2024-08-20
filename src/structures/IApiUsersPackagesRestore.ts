export namespace IApiUsersPackagesRestore {
  export type PostHeader = {
    /**
     * The name of the package.
     */
    package_name: string;
    /**
     * The handle for the GitHub user account.
     */
    username: string;
  };
  export type PostQuery = {
    /**
     * package token
     */
    token?: string;
  };
}
