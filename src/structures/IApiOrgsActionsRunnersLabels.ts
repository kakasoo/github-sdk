import { tags } from "typia";

export namespace IApiOrgsActionsRunnersLabels {
  export type GetHeader = {
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * Unique identifier of the self-hosted runner.
     */
    runner_id: number & tags.Type<"int32">;
  };
  export type PostHeader = {
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * Unique identifier of the self-hosted runner.
     */
    runner_id: number & tags.Type<"int32">;
  };
  export type PutHeader = {
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * Unique identifier of the self-hosted runner.
     */
    runner_id: number & tags.Type<"int32">;
  };
  export type DeleteHeader = {
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * Unique identifier of the self-hosted runner.
     */
    runner_id: number & tags.Type<"int32">;
    /**
     * The name of a self-hosted runner's custom label.
     */
    name: string;
  };
}
