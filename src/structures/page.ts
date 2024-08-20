import { tags } from "typia";

import { pages_minus_source_minus_hash } from "./pages_minus_source_minus_hash";
import { pages_minus_https_minus_certificate } from "./pages_minus_https_minus_certificate";

/**
 * The configuration for GitHub Pages for a repository.
 *
 * @title GitHub Pages
 */
export type page = {
  /**
   * The API address for accessing this Page resource.
   */
  url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/github/hello-world/pages";
    }>;
  /**
   * The status of the most recent build of the Page.
   */
  status: "built" | "building" | "errored" | null;
  /**
   * The Pages site's custom domain
   */
  cname:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "example.com";
        }>)
    | null;
  /**
   * The state if the domain is verified
   */
  protected_domain_state?: "pending" | "verified" | "unverified" | null;
  /**
   * The timestamp when a pending domain becomes unverified.
   */
  pending_domain_unverified_at?: (string & tags.Format<"date-time">) | null;
  /**
   * Whether the Page has a custom 404 page.
   */
  custom_404: boolean &
    tags.JsonSchemaPlugin<{
      example: false;
    }>;
  /**
   * The web address the Page can be accessed from.
   */
  html_url?: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://example.com";
    }>;
  /**
   * The process in which the Page will be built.
   */
  build_type?: "legacy" | "workflow" | null;
  source?: pages_minus_source_minus_hash;
  /**
   * Whether the GitHub Pages site is publicly visible. If set to `true`, the site is accessible to anyone on the internet. If set to `false`, the site will only be accessible to users who have at least `read` access to the repository that published the site.
   */
  public: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
  https_certificate?: pages_minus_https_minus_certificate;
  /**
   * Whether https is enabled on the domain
   */
  https_enforced?: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
};
