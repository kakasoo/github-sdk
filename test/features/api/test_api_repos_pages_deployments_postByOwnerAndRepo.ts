import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { page_minus_deployment } from "@kakasoo/github-sdk/lib/structures/page_minus_deployment";
import typia from "typia";

export async function test_api_repos_pages_deployments_postByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: page_minus_deployment =
    await api.functional.repos.pages.deployments.postByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
