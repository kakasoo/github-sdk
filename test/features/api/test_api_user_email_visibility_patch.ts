import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { email } from "@ORGANIZATION/PROJECT-api/lib/structures/email";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_user_email_visibility_patch(
  connection: api.IConnection,
) {
  const output: email[] = await api.functional.user.email.visibility.patch(
    connection,
    typia.random<body>(),
  );
  typia.assert(output);
}
