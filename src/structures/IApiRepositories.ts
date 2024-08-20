import { tags } from "typia";

export namespace IApiRepositories {
  export type GetHeader = {
    /**
     * A repository ID. Only return repositories with an ID greater than this ID.
     */
    since?: number & tags.Type<"int32">;
  };
}
