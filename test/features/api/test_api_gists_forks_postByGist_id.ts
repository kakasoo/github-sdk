import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { base_minus_gist } from "@ORGANIZATION/PROJECT-api/lib/structures/base_minus_gist";

export async function test_api_gists_forks_postByGist_id(
  connection: api.IConnection,
) {
  const output: base_minus_gist =
    await api.functional.gists.forks.postByGist_id(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
