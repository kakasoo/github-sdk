import { tags } from "typia";

import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { nullable_minus_repository_minus_webhooks } from "./nullable_minus_repository_minus_webhooks";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";

/**
 * @title meta deleted event
 */
export type webhook_minus_meta_minus_deleted = {
  action: "deleted";
  enterprise?: enterprise_minus_webhooks;
  /**
   * The modified webhook. This will contain different keys based on the type of webhook it is: repository, organization, business, app, or GitHub Marketplace.
   */
  hook: {
    active: boolean;
    config: {
      content_type: "json" | "form";
      insecure_ssl: string;
      secret?: string;
      url: string & tags.Format<"uri">;
    };
    created_at: string;
    events: (
      | "*"
      | "branch_protection_rule"
      | "check_run"
      | "check_suite"
      | "code_scanning_alert"
      | "commit_comment"
      | "create"
      | "delete"
      | "deployment"
      | "deployment_status"
      | "deploy_key"
      | "discussion"
      | "discussion_comment"
      | "fork"
      | "gollum"
      | "issues"
      | "issue_comment"
      | "label"
      | "member"
      | "membership"
      | "meta"
      | "milestone"
      | "organization"
      | "org_block"
      | "package"
      | "page_build"
      | "project"
      | "project_card"
      | "project_column"
      | "public"
      | "pull_request"
      | "pull_request_review"
      | "pull_request_review_comment"
      | "pull_request_review_thread"
      | "push"
      | "registry_package"
      | "release"
      | "repository"
      | "repository_import"
      | "repository_vulnerability_alert"
      | "secret_scanning_alert"
      | "secret_scanning_alert_location"
      | "security_and_analysis"
      | "star"
      | "status"
      | "team"
      | "team_add"
      | "watch"
      | "workflow_job"
      | "workflow_run"
      | "repository_dispatch"
      | "projects_v2_item"
    )[];
    id: number & tags.Type<"int32">;
    name: string;
    type: string;
    updated_at: string;
  };
  /**
   * The id of the modified webhook.
   */
  hook_id: number & tags.Type<"int32">;
  installation?: simple_minus_installation;
  organization?: organization_minus_simple_minus_webhooks;
  repository?: nullable_minus_repository_minus_webhooks;
  sender?: simple_minus_user_minus_webhooks;
};
