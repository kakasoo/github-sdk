import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { copilot_minus_seat_minus_details } from "@ORGANIZATION/PROJECT-api/lib/structures/copilot_minus_seat_minus_details";

export async function test_api_orgs_members_copilot_getByOrgAndUsername(
  connection: api.IConnection,
) {
  const output: copilot_minus_seat_minus_details =
    await api.functional.orgs.members.copilot.getByOrgAndUsername(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
