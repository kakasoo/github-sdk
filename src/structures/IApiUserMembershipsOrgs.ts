export namespace IApiUserMembershipsOrgs {
  export type GetHeader = {
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
  };
  export type GetQuery = {};
  export type PatchHeader = {
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
  };
}
