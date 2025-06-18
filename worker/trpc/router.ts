import { exampleTableDataRouter } from "./routes/example-table-data";
import { t } from "./trpc-instance";

export const appRouter = t.router({
  exampleTableData: exampleTableDataRouter,
});

export type AppRouter = typeof appRouter;
