import { tags } from "typia";

import { repository_minus_advisory_minus_vulnerability } from "./repository_minus_advisory_minus_vulnerability";
import { security_minus_advisory_minus_credit_minus_types } from "./security_minus_advisory_minus_credit_minus_types";
import { repository_minus_advisory_minus_credit } from "./repository_minus_advisory_minus_credit";
import { simple_minus_user } from "./simple_minus_user";
import { team } from "./team";

/**
 * A repository security advisory.
 */
export type repository_minus_advisory = {
  /**
   * The GitHub Security Advisory ID.
   */
  ghsa_id: string &
    tags.JsonSchemaPlugin<{
      readOnly: true;
    }>;
  /**
   * The Common Vulnerabilities and Exposures (CVE) ID.
   */
  cve_id: string | null;
  /**
   * The API URL for the advisory.
   */
  url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      readOnly: true;
    }>;
  /**
   * The URL for the advisory.
   */
  html_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      readOnly: true;
    }>;
  /**
   * A short summary of the advisory.
   */
  summary: string & tags.MaxLength<1024>;
  /**
   * A detailed description of what the advisory entails.
   */
  description: (string & tags.MaxLength<65535>) | null;
  /**
   * The severity of the advisory.
   */
  severity: "critical" | "high" | "medium" | "low" | null;
  /**
   * The author of the advisory.
   */
  author: {
    name?: string | null;
    email?: string | null;
    login?: string &
      tags.JsonSchemaPlugin<{
        example: "octocat";
      }>;
    id?: number &
      tags.Type<"int32"> &
      tags.JsonSchemaPlugin<{
        format: "int64";
        example: 1;
      }>;
    node_id?: string &
      tags.JsonSchemaPlugin<{
        example: "MDQ6VXNlcjE=";
      }>;
    avatar_url?: string &
      tags.Format<"uri"> &
      tags.JsonSchemaPlugin<{
        example: "https://github.com/images/error/octocat_happy.gif";
      }>;
    gravatar_id?:
      | (string &
          tags.JsonSchemaPlugin<{
            example: "41d064eb2195891e12d0413f63227ea7";
          }>)
      | null;
    url?: string &
      tags.Format<"uri"> &
      tags.JsonSchemaPlugin<{
        example: "https://api.github.com/users/octocat";
      }>;
    html_url?: string &
      tags.Format<"uri"> &
      tags.JsonSchemaPlugin<{
        example: "https://github.com/octocat";
      }>;
    followers_url?: string &
      tags.Format<"uri"> &
      tags.JsonSchemaPlugin<{
        example: "https://api.github.com/users/octocat/followers";
      }>;
    following_url?: string &
      tags.JsonSchemaPlugin<{
        example: "https://api.github.com/users/octocat/following{/other_user}";
      }>;
    gists_url?: string &
      tags.JsonSchemaPlugin<{
        example: "https://api.github.com/users/octocat/gists{/gist_id}";
      }>;
    starred_url?: string &
      tags.JsonSchemaPlugin<{
        example: "https://api.github.com/users/octocat/starred{/owner}{/repo}";
      }>;
    subscriptions_url?: string &
      tags.Format<"uri"> &
      tags.JsonSchemaPlugin<{
        example: "https://api.github.com/users/octocat/subscriptions";
      }>;
    organizations_url?: string &
      tags.Format<"uri"> &
      tags.JsonSchemaPlugin<{
        example: "https://api.github.com/users/octocat/orgs";
      }>;
    repos_url?: string &
      tags.Format<"uri"> &
      tags.JsonSchemaPlugin<{
        example: "https://api.github.com/users/octocat/repos";
      }>;
    events_url?: string &
      tags.JsonSchemaPlugin<{
        example: "https://api.github.com/users/octocat/events{/privacy}";
      }>;
    received_events_url?: string &
      tags.Format<"uri"> &
      tags.JsonSchemaPlugin<{
        example: "https://api.github.com/users/octocat/received_events";
      }>;
    type?: string &
      tags.JsonSchemaPlugin<{
        example: "User";
      }>;
    site_admin?: boolean;
    starred_at?: string &
      tags.JsonSchemaPlugin<{
        example: '"2020-07-09T00:17:55Z"';
      }>;
  } | null;
  /**
   * The publisher of the advisory.
   */
  publisher: {
    name?: string | null;
    email?: string | null;
    login?: string &
      tags.JsonSchemaPlugin<{
        example: "octocat";
      }>;
    id?: number &
      tags.Type<"int32"> &
      tags.JsonSchemaPlugin<{
        format: "int64";
        example: 1;
      }>;
    node_id?: string &
      tags.JsonSchemaPlugin<{
        example: "MDQ6VXNlcjE=";
      }>;
    avatar_url?: string &
      tags.Format<"uri"> &
      tags.JsonSchemaPlugin<{
        example: "https://github.com/images/error/octocat_happy.gif";
      }>;
    gravatar_id?:
      | (string &
          tags.JsonSchemaPlugin<{
            example: "41d064eb2195891e12d0413f63227ea7";
          }>)
      | null;
    url?: string &
      tags.Format<"uri"> &
      tags.JsonSchemaPlugin<{
        example: "https://api.github.com/users/octocat";
      }>;
    html_url?: string &
      tags.Format<"uri"> &
      tags.JsonSchemaPlugin<{
        example: "https://github.com/octocat";
      }>;
    followers_url?: string &
      tags.Format<"uri"> &
      tags.JsonSchemaPlugin<{
        example: "https://api.github.com/users/octocat/followers";
      }>;
    following_url?: string &
      tags.JsonSchemaPlugin<{
        example: "https://api.github.com/users/octocat/following{/other_user}";
      }>;
    gists_url?: string &
      tags.JsonSchemaPlugin<{
        example: "https://api.github.com/users/octocat/gists{/gist_id}";
      }>;
    starred_url?: string &
      tags.JsonSchemaPlugin<{
        example: "https://api.github.com/users/octocat/starred{/owner}{/repo}";
      }>;
    subscriptions_url?: string &
      tags.Format<"uri"> &
      tags.JsonSchemaPlugin<{
        example: "https://api.github.com/users/octocat/subscriptions";
      }>;
    organizations_url?: string &
      tags.Format<"uri"> &
      tags.JsonSchemaPlugin<{
        example: "https://api.github.com/users/octocat/orgs";
      }>;
    repos_url?: string &
      tags.Format<"uri"> &
      tags.JsonSchemaPlugin<{
        example: "https://api.github.com/users/octocat/repos";
      }>;
    events_url?: string &
      tags.JsonSchemaPlugin<{
        example: "https://api.github.com/users/octocat/events{/privacy}";
      }>;
    received_events_url?: string &
      tags.Format<"uri"> &
      tags.JsonSchemaPlugin<{
        example: "https://api.github.com/users/octocat/received_events";
      }>;
    type?: string &
      tags.JsonSchemaPlugin<{
        example: "User";
      }>;
    site_admin?: boolean;
    starred_at?: string &
      tags.JsonSchemaPlugin<{
        example: '"2020-07-09T00:17:55Z"';
      }>;
  } | null;
  identifiers: {
    /**
     * The type of identifier.
     */
    type: "CVE" | "GHSA";
    /**
     * The identifier value.
     */
    value: string;
  }[] &
    tags.JsonSchemaPlugin<{
      readOnly: true;
    }>;
  /**
   * The state of the advisory.
   */
  state: "published" | "closed" | "withdrawn" | "draft" | "triage";
  /**
   * The date and time of when the advisory was created, in ISO 8601 format.
   */
  created_at:
    | (string &
        tags.Format<"date-time"> &
        tags.JsonSchemaPlugin<{
          readOnly: true;
        }>)
    | null;
  /**
   * The date and time of when the advisory was last updated, in ISO 8601 format.
   */
  updated_at:
    | (string &
        tags.Format<"date-time"> &
        tags.JsonSchemaPlugin<{
          readOnly: true;
        }>)
    | null;
  /**
   * The date and time of when the advisory was published, in ISO 8601 format.
   */
  published_at:
    | (string &
        tags.Format<"date-time"> &
        tags.JsonSchemaPlugin<{
          readOnly: true;
        }>)
    | null;
  /**
   * The date and time of when the advisory was closed, in ISO 8601 format.
   */
  closed_at:
    | (string &
        tags.Format<"date-time"> &
        tags.JsonSchemaPlugin<{
          readOnly: true;
        }>)
    | null;
  /**
   * The date and time of when the advisory was withdrawn, in ISO 8601 format.
   */
  withdrawn_at:
    | (string &
        tags.Format<"date-time"> &
        tags.JsonSchemaPlugin<{
          readOnly: true;
        }>)
    | null;
  submission: {
    /**
     * Whether a private vulnerability report was accepted by the repository's administrators.
     */
    accepted: boolean &
      tags.JsonSchemaPlugin<{
        readOnly: true;
      }>;
  } | null;
  vulnerabilities: repository_minus_advisory_minus_vulnerability[] | null;
  cvss: {
    /**
     * The CVSS vector.
     */
    vector_string: string | null;
    /**
     * The CVSS score.
     */
    score:
      | (number &
          tags.Minimum<0> &
          tags.Maximum<10> &
          tags.JsonSchemaPlugin<{
            readOnly: true;
          }>)
      | null;
  } | null;
  cwes:
    | ({
        /**
         * The Common Weakness Enumeration (CWE) identifier.
         */
        cwe_id: string;
        /**
         * The name of the CWE.
         */
        name: string &
          tags.JsonSchemaPlugin<{
            readOnly: true;
          }>;
      }[] &
        tags.JsonSchemaPlugin<{
          readOnly: true;
        }>)
    | null;
  /**
   * A list of only the CWE IDs.
   */
  cwe_ids: string[] | null;
  credits:
    | {
        /**
         * The username of the user credited.
         */
        login?: string;
        type?: security_minus_advisory_minus_credit_minus_types;
      }[]
    | null;
  credits_detailed:
    | (repository_minus_advisory_minus_credit[] &
        tags.JsonSchemaPlugin<{
          readOnly: true;
        }>)
    | null;
  /**
   * A list of users that collaborate on the advisory.
   */
  collaborating_users: simple_minus_user[] | null;
  /**
   * A list of teams that collaborate on the advisory.
   */
  collaborating_teams: team[] | null;
  /**
   * A temporary private fork of the advisory's repository for collaborating on a fix.
   */
  private_fork: {
    /**
     * A unique identifier of the repository.
     */
    id?: number &
      tags.Type<"int32"> &
      tags.JsonSchemaPlugin<{
        format: "int64";
        example: 1296269;
      }>;
    /**
     * The GraphQL identifier of the repository.
     */
    node_id?: string &
      tags.JsonSchemaPlugin<{
        example: "MDEwOlJlcG9zaXRvcnkxMjk2MjY5";
      }>;
    /**
     * The name of the repository.
     */
    name?: string &
      tags.JsonSchemaPlugin<{
        example: "Hello-World";
      }>;
    /**
     * The full, globally unique, name of the repository.
     */
    full_name?: string &
      tags.JsonSchemaPlugin<{
        example: "octocat/Hello-World";
      }>;
    owner?: simple_minus_user;
    /**
     * Whether the repository is private.
     */
    private?: boolean;
    /**
     * The URL to view the repository on GitHub.com.
     */
    html_url?: string &
      tags.Format<"uri"> &
      tags.JsonSchemaPlugin<{
        example: "https://github.com/octocat/Hello-World";
      }>;
    /**
     * The repository description.
     */
    description?:
      | (string &
          tags.JsonSchemaPlugin<{
            example: "This your first repo!";
          }>)
      | null;
    /**
     * Whether the repository is a fork.
     */
    fork?: boolean;
    /**
     * The URL to get more information about the repository from the GitHub API.
     */
    url?: string &
      tags.Format<"uri"> &
      tags.JsonSchemaPlugin<{
        example: "https://api.github.com/repos/octocat/Hello-World";
      }>;
    /**
     * A template for the API URL to download the repository as an archive.
     */
    archive_url?: string &
      tags.JsonSchemaPlugin<{
        example: "https://api.github.com/repos/octocat/Hello-World/{archive_format}{/ref}";
      }>;
    /**
     * A template for the API URL to list the available assignees for issues in the repository.
     */
    assignees_url?: string &
      tags.JsonSchemaPlugin<{
        example: "https://api.github.com/repos/octocat/Hello-World/assignees{/user}";
      }>;
    /**
     * A template for the API URL to create or retrieve a raw Git blob in the repository.
     */
    blobs_url?: string &
      tags.JsonSchemaPlugin<{
        example: "https://api.github.com/repos/octocat/Hello-World/git/blobs{/sha}";
      }>;
    /**
     * A template for the API URL to get information about branches in the repository.
     */
    branches_url?: string &
      tags.JsonSchemaPlugin<{
        example: "https://api.github.com/repos/octocat/Hello-World/branches{/branch}";
      }>;
    /**
     * A template for the API URL to get information about collaborators of the repository.
     */
    collaborators_url?: string &
      tags.JsonSchemaPlugin<{
        example: "https://api.github.com/repos/octocat/Hello-World/collaborators{/collaborator}";
      }>;
    /**
     * A template for the API URL to get information about comments on the repository.
     */
    comments_url?: string &
      tags.JsonSchemaPlugin<{
        example: "https://api.github.com/repos/octocat/Hello-World/comments{/number}";
      }>;
    /**
     * A template for the API URL to get information about commits on the repository.
     */
    commits_url?: string &
      tags.JsonSchemaPlugin<{
        example: "https://api.github.com/repos/octocat/Hello-World/commits{/sha}";
      }>;
    /**
     * A template for the API URL to compare two commits or refs.
     */
    compare_url?: string &
      tags.JsonSchemaPlugin<{
        example: "https://api.github.com/repos/octocat/Hello-World/compare/{base}...{head}";
      }>;
    /**
     * A template for the API URL to get the contents of the repository.
     */
    contents_url?: string &
      tags.JsonSchemaPlugin<{
        example: "https://api.github.com/repos/octocat/Hello-World/contents/{+path}";
      }>;
    /**
     * A template for the API URL to list the contributors to the repository.
     */
    contributors_url?: string &
      tags.Format<"uri"> &
      tags.JsonSchemaPlugin<{
        example: "https://api.github.com/repos/octocat/Hello-World/contributors";
      }>;
    /**
     * The API URL to list the deployments of the repository.
     */
    deployments_url?: string &
      tags.Format<"uri"> &
      tags.JsonSchemaPlugin<{
        example: "https://api.github.com/repos/octocat/Hello-World/deployments";
      }>;
    /**
     * The API URL to list the downloads on the repository.
     */
    downloads_url?: string &
      tags.Format<"uri"> &
      tags.JsonSchemaPlugin<{
        example: "https://api.github.com/repos/octocat/Hello-World/downloads";
      }>;
    /**
     * The API URL to list the events of the repository.
     */
    events_url?: string &
      tags.Format<"uri"> &
      tags.JsonSchemaPlugin<{
        example: "https://api.github.com/repos/octocat/Hello-World/events";
      }>;
    /**
     * The API URL to list the forks of the repository.
     */
    forks_url?: string &
      tags.Format<"uri"> &
      tags.JsonSchemaPlugin<{
        example: "https://api.github.com/repos/octocat/Hello-World/forks";
      }>;
    /**
     * A template for the API URL to get information about Git commits of the repository.
     */
    git_commits_url?: string &
      tags.JsonSchemaPlugin<{
        example: "https://api.github.com/repos/octocat/Hello-World/git/commits{/sha}";
      }>;
    /**
     * A template for the API URL to get information about Git refs of the repository.
     */
    git_refs_url?: string &
      tags.JsonSchemaPlugin<{
        example: "https://api.github.com/repos/octocat/Hello-World/git/refs{/sha}";
      }>;
    /**
     * A template for the API URL to get information about Git tags of the repository.
     */
    git_tags_url?: string &
      tags.JsonSchemaPlugin<{
        example: "https://api.github.com/repos/octocat/Hello-World/git/tags{/sha}";
      }>;
    /**
     * A template for the API URL to get information about issue comments on the repository.
     */
    issue_comment_url?: string &
      tags.JsonSchemaPlugin<{
        example: "https://api.github.com/repos/octocat/Hello-World/issues/comments{/number}";
      }>;
    /**
     * A template for the API URL to get information about issue events on the repository.
     */
    issue_events_url?: string &
      tags.JsonSchemaPlugin<{
        example: "https://api.github.com/repos/octocat/Hello-World/issues/events{/number}";
      }>;
    /**
     * A template for the API URL to get information about issues on the repository.
     */
    issues_url?: string &
      tags.JsonSchemaPlugin<{
        example: "https://api.github.com/repos/octocat/Hello-World/issues{/number}";
      }>;
    /**
     * A template for the API URL to get information about deploy keys on the repository.
     */
    keys_url?: string &
      tags.JsonSchemaPlugin<{
        example: "https://api.github.com/repos/octocat/Hello-World/keys{/key_id}";
      }>;
    /**
     * A template for the API URL to get information about labels of the repository.
     */
    labels_url?: string &
      tags.JsonSchemaPlugin<{
        example: "https://api.github.com/repos/octocat/Hello-World/labels{/name}";
      }>;
    /**
     * The API URL to get information about the languages of the repository.
     */
    languages_url?: string &
      tags.Format<"uri"> &
      tags.JsonSchemaPlugin<{
        example: "https://api.github.com/repos/octocat/Hello-World/languages";
      }>;
    /**
     * The API URL to merge branches in the repository.
     */
    merges_url?: string &
      tags.Format<"uri"> &
      tags.JsonSchemaPlugin<{
        example: "https://api.github.com/repos/octocat/Hello-World/merges";
      }>;
    /**
     * A template for the API URL to get information about milestones of the repository.
     */
    milestones_url?: string &
      tags.JsonSchemaPlugin<{
        example: "https://api.github.com/repos/octocat/Hello-World/milestones{/number}";
      }>;
    /**
     * A template for the API URL to get information about notifications on the repository.
     */
    notifications_url?: string &
      tags.JsonSchemaPlugin<{
        example: "https://api.github.com/repos/octocat/Hello-World/notifications{?since,all,participating}";
      }>;
    /**
     * A template for the API URL to get information about pull requests on the repository.
     */
    pulls_url?: string &
      tags.JsonSchemaPlugin<{
        example: "https://api.github.com/repos/octocat/Hello-World/pulls{/number}";
      }>;
    /**
     * A template for the API URL to get information about releases on the repository.
     */
    releases_url?: string &
      tags.JsonSchemaPlugin<{
        example: "https://api.github.com/repos/octocat/Hello-World/releases{/id}";
      }>;
    /**
     * The API URL to list the stargazers on the repository.
     */
    stargazers_url?: string &
      tags.Format<"uri"> &
      tags.JsonSchemaPlugin<{
        example: "https://api.github.com/repos/octocat/Hello-World/stargazers";
      }>;
    /**
     * A template for the API URL to get information about statuses of a commit.
     */
    statuses_url?: string &
      tags.JsonSchemaPlugin<{
        example: "https://api.github.com/repos/octocat/Hello-World/statuses/{sha}";
      }>;
    /**
     * The API URL to list the subscribers on the repository.
     */
    subscribers_url?: string &
      tags.Format<"uri"> &
      tags.JsonSchemaPlugin<{
        example: "https://api.github.com/repos/octocat/Hello-World/subscribers";
      }>;
    /**
     * The API URL to subscribe to notifications for this repository.
     */
    subscription_url?: string &
      tags.Format<"uri"> &
      tags.JsonSchemaPlugin<{
        example: "https://api.github.com/repos/octocat/Hello-World/subscription";
      }>;
    /**
     * The API URL to get information about tags on the repository.
     */
    tags_url?: string &
      tags.Format<"uri"> &
      tags.JsonSchemaPlugin<{
        example: "https://api.github.com/repos/octocat/Hello-World/tags";
      }>;
    /**
     * The API URL to list the teams on the repository.
     */
    teams_url?: string &
      tags.Format<"uri"> &
      tags.JsonSchemaPlugin<{
        example: "https://api.github.com/repos/octocat/Hello-World/teams";
      }>;
    /**
     * A template for the API URL to create or retrieve a raw Git tree of the repository.
     */
    trees_url?: string &
      tags.JsonSchemaPlugin<{
        example: "https://api.github.com/repos/octocat/Hello-World/git/trees{/sha}";
      }>;
    /**
     * The API URL to list the hooks on the repository.
     */
    hooks_url?: string &
      tags.Format<"uri"> &
      tags.JsonSchemaPlugin<{
        example: "https://api.github.com/repos/octocat/Hello-World/hooks";
      }>;
  } | null;
};
