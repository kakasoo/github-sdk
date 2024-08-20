import { tags } from "typia";

export namespace IApiOrgsOrganizationRoles {
  export type GetHeader = {
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * The unique identifier of the role.
     */
    role_id: number & tags.Type<"int32">;
  };
}
