import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { gist_minus_simple } from "@ORGANIZATION/PROJECT-api/lib/structures/gist_minus_simple";

export async function test_api_gists_forks_getByGist_id(
  connection: api.IConnection,
) {
  const output: gist_minus_simple[] =
    await api.functional.gists.forks.getByGist_id(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
