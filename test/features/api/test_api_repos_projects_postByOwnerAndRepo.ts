import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { project } from "@kakasoo/github-sdk/lib/structures/project";
import typia from "typia";

export async function test_api_repos_projects_postByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: project =
    await api.functional.repos.projects.postByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
