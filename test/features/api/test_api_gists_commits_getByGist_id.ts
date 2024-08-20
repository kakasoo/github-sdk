import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { gist_minus_commit } from "@ORGANIZATION/PROJECT-api/lib/structures/gist_minus_commit";

export async function test_api_gists_commits_getByGist_id(
  connection: api.IConnection,
) {
  const output: gist_minus_commit[] =
    await api.functional.gists.commits.getByGist_id(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
