import { createServer } from "miragejs"
import catalogRoutes from './catalog';
export const setupServer =  () => {
  createServer({
    routes() {
        catalogRoutes(this);
    },
  })
}