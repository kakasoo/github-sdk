import { tags } from "typia";

export namespace IApiReposHooksDeliveries {
  export type GetHeader = {
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository without the `.git` extension. The name is not case sensitive.
     */
    repo: string;
    /**
     * The unique identifier of the hook. You can find this value in the `X-GitHub-Hook-ID` header of a webhook delivery.
     */
    hook_id: number & tags.Type<"int32">;
    delivery_id: number & tags.Type<"int32">;
  };
  export type GetQuery = {
    redelivery?: boolean;
  };
}
