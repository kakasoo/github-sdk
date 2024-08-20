import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { gist_minus_simple } from "@ORGANIZATION/PROJECT-api/lib/structures/gist_minus_simple";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_gists_patchByGist_id(
  connection: api.IConnection,
) {
  const output: gist_minus_simple = await api.functional.gists.patchByGist_id(
    connection,
    typia.random<string>(),
    typia.random<body>(),
  );
  typia.assert(output);
}
