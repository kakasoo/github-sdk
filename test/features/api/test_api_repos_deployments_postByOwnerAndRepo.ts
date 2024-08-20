import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { deployment } from "@kakasoo/github-sdk/lib/structures/deployment";
import typia from "typia";

export async function test_api_repos_deployments_postByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: deployment =
    await api.functional.repos.deployments.postByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
