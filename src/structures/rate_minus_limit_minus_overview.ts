import { rate_minus_limit } from "./rate_minus_limit";

/**
 * Rate Limit Overview
 *
 * @title Rate Limit Overview
 */
export type rate_minus_limit_minus_overview = {
  resources: {
    core: rate_minus_limit;
    graphql?: rate_minus_limit;
    search: rate_minus_limit;
    code_search?: rate_minus_limit;
    source_import?: rate_minus_limit;
    integration_manifest?: rate_minus_limit;
    code_scanning_upload?: rate_minus_limit;
    actions_runner_registration?: rate_minus_limit;
    scim?: rate_minus_limit;
    dependency_snapshots?: rate_minus_limit;
  };
  rate: rate_minus_limit;
};
