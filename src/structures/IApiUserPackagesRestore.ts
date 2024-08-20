export namespace IApiUserPackagesRestore {
  export type PostHeader = {
    /**
     * The name of the package.
     */
    package_name: string;
  };
  export type PostQuery = {
    /**
     * package token
     */
    token?: string;
  };
}
