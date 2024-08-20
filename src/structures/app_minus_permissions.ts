/**
 * The permissions granted to the user access token.
 *
 * @title App Permissions
 */
export type app_minus_permissions = {
  /**
   * The level of permission to grant the access token for GitHub Actions workflows, workflow runs, and artifacts.
   */
  actions?: "read" | "write";
  /**
   * The level of permission to grant the access token for repository creation, deletion, settings, teams, and collaborators creation.
   */
  administration?: "read" | "write";
  /**
   * The level of permission to grant the access token for checks on code.
   */
  checks?: "read" | "write";
  /**
   * The level of permission to grant the access token to create, edit, delete, and list Codespaces.
   */
  codespaces?: "read" | "write";
  /**
   * The level of permission to grant the access token for repository contents, commits, branches, downloads, releases, and merges.
   */
  contents?: "read" | "write";
  /**
   * The leve of permission to grant the access token to manage Dependabot secrets.
   */
  dependabot_secrets?: "read" | "write";
  /**
   * The level of permission to grant the access token for deployments and deployment statuses.
   */
  deployments?: "read" | "write";
  /**
   * The level of permission to grant the access token for managing repository environments.
   */
  environments?: "read" | "write";
  /**
   * The level of permission to grant the access token for issues and related comments, assignees, labels, and milestones.
   */
  issues?: "read" | "write";
  /**
   * The level of permission to grant the access token to search repositories, list collaborators, and access repository metadata.
   */
  metadata?: "read" | "write";
  /**
   * The level of permission to grant the access token for packages published to GitHub Packages.
   */
  packages?: "read" | "write";
  /**
   * The level of permission to grant the access token to retrieve Pages statuses, configuration, and builds, as well as create new builds.
   */
  pages?: "read" | "write";
  /**
   * The level of permission to grant the access token for pull requests and related comments, assignees, labels, milestones, and merges.
   */
  pull_requests?: "read" | "write";
  /**
   * The level of permission to grant the access token to view and edit custom properties for a repository, when allowed by the property.
   */
  repository_custom_properties?: "read" | "write";
  /**
   * The level of permission to grant the access token to manage the post-receive hooks for a repository.
   */
  repository_hooks?: "read" | "write";
  /**
   * The level of permission to grant the access token to manage repository projects, columns, and cards.
   */
  repository_projects?: "read" | "write" | "admin";
  /**
   * The level of permission to grant the access token to view and manage secret scanning alerts.
   */
  secret_scanning_alerts?: "read" | "write";
  /**
   * The level of permission to grant the access token to manage repository secrets.
   */
  secrets?: "read" | "write";
  /**
   * The level of permission to grant the access token to view and manage security events like code scanning alerts.
   */
  security_events?: "read" | "write";
  /**
   * The level of permission to grant the access token to manage just a single file.
   */
  single_file?: "read" | "write";
  /**
   * The level of permission to grant the access token for commit statuses.
   */
  statuses?: "read" | "write";
  /**
   * The level of permission to grant the access token to manage Dependabot alerts.
   */
  vulnerability_alerts?: "read" | "write";
  /**
   * The level of permission to grant the access token to update GitHub Actions workflow files.
   */
  workflows?: "write";
  /**
   * The level of permission to grant the access token for organization teams and members.
   */
  members?: "read" | "write";
  /**
   * The level of permission to grant the access token to manage access to an organization.
   */
  organization_administration?: "read" | "write";
  /**
   * The level of permission to grant the access token for custom repository roles management.
   */
  organization_custom_roles?: "read" | "write";
  /**
   * The level of permission to grant the access token for custom organization roles management.
   */
  organization_custom_org_roles?: "read" | "write";
  /**
   * The level of permission to grant the access token for custom property management.
   */
  organization_custom_properties?: "read" | "write" | "admin";
  /**
   * The level of permission to grant the access token for managing access to GitHub Copilot for members of an organization with a Copilot Business subscription. This property is in beta and is subject to change.
   */
  organization_copilot_seat_management?: "write";
  /**
   * The level of permission to grant the access token to view and manage announcement banners for an organization.
   */
  organization_announcement_banners?: "read" | "write";
  /**
   * The level of permission to grant the access token to view events triggered by an activity in an organization.
   */
  organization_events?: "read";
  /**
   * The level of permission to grant the access token to manage the post-receive hooks for an organization.
   */
  organization_hooks?: "read" | "write";
  /**
   * The level of permission to grant the access token for viewing and managing fine-grained personal access token requests to an organization.
   */
  organization_personal_access_tokens?: "read" | "write";
  /**
   * The level of permission to grant the access token for viewing and managing fine-grained personal access tokens that have been approved by an organization.
   */
  organization_personal_access_token_requests?: "read" | "write";
  /**
   * The level of permission to grant the access token for viewing an organization's plan.
   */
  organization_plan?: "read";
  /**
   * The level of permission to grant the access token to manage organization projects and projects beta (where available).
   */
  organization_projects?: "read" | "write" | "admin";
  /**
   * The level of permission to grant the access token for organization packages published to GitHub Packages.
   */
  organization_packages?: "read" | "write";
  /**
   * The level of permission to grant the access token to manage organization secrets.
   */
  organization_secrets?: "read" | "write";
  /**
   * The level of permission to grant the access token to view and manage GitHub Actions self-hosted runners available to an organization.
   */
  organization_self_hosted_runners?: "read" | "write";
  /**
   * The level of permission to grant the access token to view and manage users blocked by the organization.
   */
  organization_user_blocking?: "read" | "write";
  /**
   * The level of permission to grant the access token to manage team discussions and related comments.
   */
  team_discussions?: "read" | "write";
  /**
   * The level of permission to grant the access token to manage the email addresses belonging to a user.
   */
  email_addresses?: "read" | "write";
  /**
   * The level of permission to grant the access token to manage the followers belonging to a user.
   */
  followers?: "read" | "write";
  /**
   * The level of permission to grant the access token to manage git SSH keys.
   */
  git_ssh_keys?: "read" | "write";
  /**
   * The level of permission to grant the access token to view and manage GPG keys belonging to a user.
   */
  gpg_keys?: "read" | "write";
  /**
   * The level of permission to grant the access token to view and manage interaction limits on a repository.
   */
  interaction_limits?: "read" | "write";
  /**
   * The level of permission to grant the access token to manage the profile settings belonging to a user.
   */
  profile?: "write";
  /**
   * The level of permission to grant the access token to list and manage repositories a user is starring.
   */
  starring?: "read" | "write";
};
