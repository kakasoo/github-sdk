import { tags } from "typia";

import { minimal_minus_repository } from "./minimal_minus_repository";

/**
 * Check suite configuration preferences for a repository.
 *
 * @title Check Suite Preference
 */
export type check_minus_suite_minus_preference = {
  preferences: {
    auto_trigger_checks?: {
      app_id: number & tags.Type<"int32">;
      setting: boolean;
    }[];
  };
  repository: minimal_minus_repository;
};
