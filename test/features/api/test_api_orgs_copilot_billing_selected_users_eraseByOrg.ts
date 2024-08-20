import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { response } from "@ORGANIZATION/PROJECT-api/lib/structures/response";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_orgs_copilot_billing_selected_users_eraseByOrg(
  connection: api.IConnection,
) {
  const output: response =
    await api.functional.orgs.copilot.billing.selected_users.eraseByOrg(
      connection,
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
