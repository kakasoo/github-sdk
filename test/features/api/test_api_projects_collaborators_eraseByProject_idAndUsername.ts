import api from "@kakasoo/github-sdk";
import typia from "typia";

export async function test_api_projects_collaborators_eraseByProject_idAndUsername(
  connection: api.IConnection,
) {
  const output =
    await api.functional.projects.collaborators.eraseByProject_idAndUsername(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
