import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { response } from "@ORGANIZATION/PROJECT-api/lib/structures/response";

export async function test_api_repos_attestations_getByOwnerAndRepoAndSubject_digest(
  connection: api.IConnection,
) {
  const output: response =
    await api.functional.repos.attestations.getByOwnerAndRepoAndSubject_digest(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
