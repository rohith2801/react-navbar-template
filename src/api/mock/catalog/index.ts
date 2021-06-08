import catalog from './catalog.json';

const routes = ( ref :any) => {
    ref.get("/catalog", () => ({
        catalog
      }))
}
export default routes;
