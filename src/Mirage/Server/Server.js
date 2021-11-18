import { createServer } from "miragejs";
import Models from "../Models";
import seedsHandler from "../Seeds";
import routesHandler from "../Routes";

export function makeServer({ environment = "test" } = {}) {

  let server = createServer({
    environment,
    models: {
      ...Models,
    },
    seeds(server) {
      seedsHandler(server)
    },
    routes() {
      this.namespace = "api";
      routesHandler(this);
    },
  });

  return server;
}
