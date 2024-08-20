import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import typia from "typia";

export async function test_api_repos_actions_workflows_dispatches_postByOwnerAndRepoAndWorkflow_id(
  connection: api.IConnection,
) {
  const output =
    await api.functional.repos.actions.workflows.dispatches.postByOwnerAndRepoAndWorkflow_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
