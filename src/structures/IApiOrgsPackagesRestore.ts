export namespace IApiOrgsPackagesRestore {
  export type PostHeader = {
    /**
     * The name of the package.
     */
    package_name: string;
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
  };
  export type PostQuery = {
    /**
     * package token
     */
    token?: string;
  };
}
