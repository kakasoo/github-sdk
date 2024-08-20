import { tags } from "typia";

import { runner_minus_label } from "./runner_minus_label";

/**
 * A self hosted runner
 *
 * @title Self hosted runners
 */
export type runner = {
  /**
   * The id of the runner.
   */
  id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 5;
    }>;
  /**
   * The id of the runner group.
   */
  runner_group_id?: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 1;
    }>;
  /**
   * The name of the runner.
   */
  name: string &
    tags.JsonSchemaPlugin<{
      example: "iMac";
    }>;
  /**
   * The Operating System of the runner.
   */
  os: string &
    tags.JsonSchemaPlugin<{
      example: "macos";
    }>;
  /**
   * The status of the runner.
   */
  status: string &
    tags.JsonSchemaPlugin<{
      example: "online";
    }>;
  busy: boolean;
  labels: runner_minus_label[];
};
