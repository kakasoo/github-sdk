import api from "@kakasoo/github-sdk";
import typia from "typia";

export async function test_api_projects_eraseByProject_id(
  connection: api.IConnection,
) {
  const output = await api.functional.projects.eraseByProject_id(
    connection,
    typia.random<string>(),
  );
  typia.assert(output);
}
