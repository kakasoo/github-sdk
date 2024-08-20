import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { response } from "@ORGANIZATION/PROJECT-api/lib/structures/response";
import { IApiSearchCode } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiSearchCode";

export async function test_api_search_code_get(connection: api.IConnection) {
  const output: response = await api.functional.search.code.get(
    connection,
    typia.random<IApiSearchCode.GetQuery>(),
  );
  typia.assert(output);
}
