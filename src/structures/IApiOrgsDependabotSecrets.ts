export namespace IApiOrgsDependabotSecrets {
  export type GetHeader = {
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * The name of the secret.
     */
    secret_name: string;
  };
  export type PutHeader = {
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * The name of the secret.
     */
    secret_name: string;
  };
  export type DeleteHeader = {
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * The name of the secret.
     */
    secret_name: string;
  };
}
