export namespace IApiOrgsPropertiesSchema {
  export type GetHeader = {
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * The custom property name. The name is case sensitive.
     */
    custom_property_name: string;
  };
  export type PatchHeader = {
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
  };
  export type PutHeader = {
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * The custom property name. The name is case sensitive.
     */
    custom_property_name: string;
  };
  export type DeleteHeader = {
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * The custom property name. The name is case sensitive.
     */
    custom_property_name: string;
  };
}
