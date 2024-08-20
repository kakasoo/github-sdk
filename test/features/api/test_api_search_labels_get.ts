import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { response } from "@ORGANIZATION/PROJECT-api/lib/structures/response";
import { IApiSearchLabels } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiSearchLabels";

export async function test_api_search_labels_get(connection: api.IConnection) {
  const output: response = await api.functional.search.labels.get(
    connection,
    typia.random<IApiSearchLabels.GetQuery>(),
  );
  typia.assert(output);
}
