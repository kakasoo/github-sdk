import { tags } from "typia";

import { repository_minus_rule_minus_creation } from "./repository_minus_rule_minus_creation";
import { repository_minus_rule_minus_update } from "./repository_minus_rule_minus_update";
import { repository_minus_rule_minus_deletion } from "./repository_minus_rule_minus_deletion";
import { repository_minus_rule_minus_required_minus_linear_minus_history } from "./repository_minus_rule_minus_required_minus_linear_minus_history";
import { repository_minus_rule_minus_merge_minus_queue } from "./repository_minus_rule_minus_merge_minus_queue";
import { repository_minus_rule_minus_required_minus_deployments } from "./repository_minus_rule_minus_required_minus_deployments";
import { repository_minus_rule_minus_required_minus_signatures } from "./repository_minus_rule_minus_required_minus_signatures";
import { repository_minus_rule_minus_pull_minus_request } from "./repository_minus_rule_minus_pull_minus_request";
import { repository_minus_rule_minus_required_minus_status_minus_checks } from "./repository_minus_rule_minus_required_minus_status_minus_checks";
import { repository_minus_rule_minus_non_minus_fast_minus_forward } from "./repository_minus_rule_minus_non_minus_fast_minus_forward";
import { repository_minus_rule_minus_commit_minus_message_minus_pattern } from "./repository_minus_rule_minus_commit_minus_message_minus_pattern";
import { repository_minus_rule_minus_commit_minus_author_minus_email_minus_pattern } from "./repository_minus_rule_minus_commit_minus_author_minus_email_minus_pattern";
import { repository_minus_rule_minus_committer_minus_email_minus_pattern } from "./repository_minus_rule_minus_committer_minus_email_minus_pattern";
import { repository_minus_rule_minus_branch_minus_name_minus_pattern } from "./repository_minus_rule_minus_branch_minus_name_minus_pattern";
import { repository_minus_rule_minus_tag_minus_name_minus_pattern } from "./repository_minus_rule_minus_tag_minus_name_minus_pattern";
import { repository_minus_rule_minus_workflows } from "./repository_minus_rule_minus_workflows";
import { repository_minus_rule_minus_code_minus_scanning } from "./repository_minus_rule_minus_code_minus_scanning";

/**
 * A repository rule.
 *
 * @title Repository Rule
 */
export type repository_minus_rule =
  | repository_minus_rule_minus_creation
  | repository_minus_rule_minus_update
  | repository_minus_rule_minus_deletion
  | repository_minus_rule_minus_required_minus_linear_minus_history
  | repository_minus_rule_minus_merge_minus_queue
  | repository_minus_rule_minus_required_minus_deployments
  | repository_minus_rule_minus_required_minus_signatures
  | repository_minus_rule_minus_pull_minus_request
  | repository_minus_rule_minus_required_minus_status_minus_checks
  | repository_minus_rule_minus_non_minus_fast_minus_forward
  | repository_minus_rule_minus_commit_minus_message_minus_pattern
  | repository_minus_rule_minus_commit_minus_author_minus_email_minus_pattern
  | repository_minus_rule_minus_committer_minus_email_minus_pattern
  | repository_minus_rule_minus_branch_minus_name_minus_pattern
  | repository_minus_rule_minus_tag_minus_name_minus_pattern
  | {
      type: "file_path_restriction";
      parameters?: {
        /**
         * The file paths that are restricted from being pushed to the commit graph.
         */
        restricted_file_paths: string[];
      };
    }
  | {
      type: "max_file_path_length";
      parameters?: {
        /**
         * The maximum amount of characters allowed in file paths
         */
        max_file_path_length: number &
          tags.Type<"int32"> &
          tags.Minimum<1> &
          tags.Maximum<256>;
      };
    }
  | {
      type: "file_extension_restriction";
      parameters?: {
        /**
         * The file extensions that are restricted from being pushed to the commit graph.
         */
        restricted_file_extensions: string[];
      };
    }
  | {
      type: "max_file_size";
      parameters?: {
        /**
         * The maximum file size allowed in megabytes. This limit does not apply to Git Large File Storage (Git LFS).
         */
        max_file_size: number &
          tags.Type<"int32"> &
          tags.Minimum<1> &
          tags.Maximum<100>;
      };
    }
  | repository_minus_rule_minus_workflows
  | repository_minus_rule_minus_code_minus_scanning;
