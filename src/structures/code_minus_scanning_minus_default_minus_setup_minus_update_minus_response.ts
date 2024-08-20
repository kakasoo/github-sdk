import { tags } from "typia";

/**
 * You can use `run_url` to track the status of the run. This includes a property status and conclusion.
 * You should not rely on this always being an actions workflow run object.
 */
export type code_minus_scanning_minus_default_minus_setup_minus_update_minus_response =
  {
    /**
     * ID of the corresponding run.
     */
    run_id?: number & tags.Type<"int32">;
    /**
     * URL of the corresponding run.
     */
    run_url?: string;
  };
