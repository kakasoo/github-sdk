import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { license } from "@ORGANIZATION/PROJECT-api/lib/structures/license";

export async function test_api_licenses_getByLicense(
  connection: api.IConnection,
) {
  const output: license = await api.functional.licenses.getByLicense(
    connection,
    typia.random<string>(),
  );
  typia.assert(output);
}
