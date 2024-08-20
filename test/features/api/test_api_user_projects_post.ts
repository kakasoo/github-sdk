import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { project } from "@kakasoo/github-sdk/lib/structures/project";
import typia from "typia";

export async function test_api_user_projects_post(connection: api.IConnection) {
  const output: project = await api.functional.user.projects.post(
    connection,
    typia.random<body>(),
  );
  typia.assert(output);
}
