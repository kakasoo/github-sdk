import api from "@kakasoo/github-sdk";
import { project } from "@kakasoo/github-sdk/lib/structures/project";
import typia from "typia";

export async function test_api_projects_getByProject_id(
  connection: api.IConnection,
) {
  const output: project = await api.functional.projects.getByProject_id(
    connection,
    typia.random<string>(),
  );
  typia.assert(output);
}
