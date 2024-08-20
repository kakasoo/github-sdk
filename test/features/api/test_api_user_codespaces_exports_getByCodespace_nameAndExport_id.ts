import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { codespace_minus_export_minus_details } from "@ORGANIZATION/PROJECT-api/lib/structures/codespace_minus_export_minus_details";

export async function test_api_user_codespaces_exports_getByCodespace_nameAndExport_id(
  connection: api.IConnection,
) {
  const output: codespace_minus_export_minus_details =
    await api.functional.user.codespaces.exports.getByCodespace_nameAndExport_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
