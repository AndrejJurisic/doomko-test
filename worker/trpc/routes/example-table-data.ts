import { dummyData } from "../data/dummy-data";
import { z } from "zod";
import { t } from "../trpc-instance";

export const exampleTableDataRouter = t.router({
  getTableData: t.procedure
    .input(z.object({ tableId: z.string() }))
    .query(async ({ input }) => {
      console.log("Fetching table data for table ID:", input.tableId);
      // Add delay of 2 seconds
      // await new Promise((resolve) => setTimeout(resolve, 2000));

      // 70% chance to throw an error
      if (Math.random() < 0.5) {
        throw new Error("Random error occurred while fetching table data");
      }

      return { dummyData };
    }),
});
