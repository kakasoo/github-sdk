import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { response } from "@ORGANIZATION/PROJECT-api/lib/structures/response";

export async function test_api_orgs_attestations_getByOrgAndSubject_digest(
  connection: api.IConnection,
) {
  const output: response =
    await api.functional.orgs.attestations.getByOrgAndSubject_digest(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
