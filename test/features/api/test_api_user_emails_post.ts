import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { email } from "@ORGANIZATION/PROJECT-api/lib/structures/email";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_user_emails_post(connection: api.IConnection) {
  const output: email[] = await api.functional.user.emails.post(
    connection,
    typia.random<body>(),
  );
  typia.assert(output);
}
