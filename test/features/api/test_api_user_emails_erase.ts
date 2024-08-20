import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_user_emails_erase(connection: api.IConnection) {
  const output = await api.functional.user.emails.erase(
    connection,
    typia.random<body>(),
  );
  typia.assert(output);
}
