import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_orgs_personal_access_token_requests_postByOrg(
  connection: api.IConnection,
) {
  const output =
    await api.functional.orgs.personal_access_token_requests.postByOrg(
      connection,
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
