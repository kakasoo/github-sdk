import { tags } from "typia";

export namespace IApiOrgsActionsRunners {
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
  export type GetQuery = {
    /**
     * The name of a self-hosted runner.
     */
    name?: string;
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
  };
}
