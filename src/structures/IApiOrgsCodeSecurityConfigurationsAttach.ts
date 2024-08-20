import { tags } from "typia";

export namespace IApiOrgsCodeSecurityConfigurationsAttach {
  export type PostHeader = {
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * The unique identifier of the code security configuration.
     */
    configuration_id: number & tags.Type<"int32">;
  };
}
