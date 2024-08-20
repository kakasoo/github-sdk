import { tags } from "typia";

import { simple_minus_user } from "./simple_minus_user";

/**
 * A GitHub repository.
 *
 * @title Simple Repository
 */
export type simple_minus_repository = {
  /**
   * A unique identifier of the repository.
   */
  id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      format: "int64";
      example: 1296269;
    }>;
  /**
   * The GraphQL identifier of the repository.
   */
  node_id: string &
    tags.JsonSchemaPlugin<{
      example: "MDEwOlJlcG9zaXRvcnkxMjk2MjY5";
    }>;
  /**
   * The name of the repository.
   */
  name: string &
    tags.JsonSchemaPlugin<{
      example: "Hello-World";
    }>;
  /**
   * The full, globally unique, name of the repository.
   */
  full_name: string &
    tags.JsonSchemaPlugin<{
      example: "octocat/Hello-World";
    }>;
  owner: simple_minus_user;
  /**
   * Whether the repository is private.
   */
  private: boolean;
  /**
   * The URL to view the repository on GitHub.com.
   */
  html_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://github.com/octocat/Hello-World";
    }>;
  /**
   * The repository description.
   */
  description:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "This your first repo!";
        }>)
    | null;
  /**
   * Whether the repository is a fork.
   */
  fork: boolean;
  /**
   * The URL to get more information about the repository from the GitHub API.
   */
  url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World";
    }>;
  /**
   * A template for the API URL to download the repository as an archive.
   */
  archive_url: string &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/{archive_format}{/ref}";
    }>;
  /**
   * A template for the API URL to list the available assignees for issues in the repository.
   */
  assignees_url: string &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/assignees{/user}";
    }>;
  /**
   * A template for the API URL to create or retrieve a raw Git blob in the repository.
   */
  blobs_url: string &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/git/blobs{/sha}";
    }>;
  /**
   * A template for the API URL to get information about branches in the repository.
   */
  branches_url: string &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/branches{/branch}";
    }>;
  /**
   * A template for the API URL to get information about collaborators of the repository.
   */
  collaborators_url: string &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/collaborators{/collaborator}";
    }>;
  /**
   * A template for the API URL to get information about comments on the repository.
   */
  comments_url: string &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/comments{/number}";
    }>;
  /**
   * A template for the API URL to get information about commits on the repository.
   */
  commits_url: string &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/commits{/sha}";
    }>;
  /**
   * A template for the API URL to compare two commits or refs.
   */
  compare_url: string &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/compare/{base}...{head}";
    }>;
  /**
   * A template for the API URL to get the contents of the repository.
   */
  contents_url: string &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/contents/{+path}";
    }>;
  /**
   * A template for the API URL to list the contributors to the repository.
   */
  contributors_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/contributors";
    }>;
  /**
   * The API URL to list the deployments of the repository.
   */
  deployments_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/deployments";
    }>;
  /**
   * The API URL to list the downloads on the repository.
   */
  downloads_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/downloads";
    }>;
  /**
   * The API URL to list the events of the repository.
   */
  events_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/events";
    }>;
  /**
   * The API URL to list the forks of the repository.
   */
  forks_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/forks";
    }>;
  /**
   * A template for the API URL to get information about Git commits of the repository.
   */
  git_commits_url: string &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/git/commits{/sha}";
    }>;
  /**
   * A template for the API URL to get information about Git refs of the repository.
   */
  git_refs_url: string &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/git/refs{/sha}";
    }>;
  /**
   * A template for the API URL to get information about Git tags of the repository.
   */
  git_tags_url: string &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/git/tags{/sha}";
    }>;
  /**
   * A template for the API URL to get information about issue comments on the repository.
   */
  issue_comment_url: string &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/issues/comments{/number}";
    }>;
  /**
   * A template for the API URL to get information about issue events on the repository.
   */
  issue_events_url: string &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/issues/events{/number}";
    }>;
  /**
   * A template for the API URL to get information about issues on the repository.
   */
  issues_url: string &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/issues{/number}";
    }>;
  /**
   * A template for the API URL to get information about deploy keys on the repository.
   */
  keys_url: string &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/keys{/key_id}";
    }>;
  /**
   * A template for the API URL to get information about labels of the repository.
   */
  labels_url: string &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/labels{/name}";
    }>;
  /**
   * The API URL to get information about the languages of the repository.
   */
  languages_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/languages";
    }>;
  /**
   * The API URL to merge branches in the repository.
   */
  merges_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/merges";
    }>;
  /**
   * A template for the API URL to get information about milestones of the repository.
   */
  milestones_url: string &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/milestones{/number}";
    }>;
  /**
   * A template for the API URL to get information about notifications on the repository.
   */
  notifications_url: string &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/notifications{?since,all,participating}";
    }>;
  /**
   * A template for the API URL to get information about pull requests on the repository.
   */
  pulls_url: string &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/pulls{/number}";
    }>;
  /**
   * A template for the API URL to get information about releases on the repository.
   */
  releases_url: string &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/releases{/id}";
    }>;
  /**
   * The API URL to list the stargazers on the repository.
   */
  stargazers_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/stargazers";
    }>;
  /**
   * A template for the API URL to get information about statuses of a commit.
   */
  statuses_url: string &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/statuses/{sha}";
    }>;
  /**
   * The API URL to list the subscribers on the repository.
   */
  subscribers_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/subscribers";
    }>;
  /**
   * The API URL to subscribe to notifications for this repository.
   */
  subscription_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/subscription";
    }>;
  /**
   * The API URL to get information about tags on the repository.
   */
  tags_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/tags";
    }>;
  /**
   * The API URL to list the teams on the repository.
   */
  teams_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/teams";
    }>;
  /**
   * A template for the API URL to create or retrieve a raw Git tree of the repository.
   */
  trees_url: string &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/git/trees{/sha}";
    }>;
  /**
   * The API URL to list the hooks on the repository.
   */
  hooks_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/hooks";
    }>;
};
