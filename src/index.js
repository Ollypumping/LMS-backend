import "mysql2";
import createApp from "./app.js";
import { connectDB } from "./config/dbinit.js";
import { env } from "./config/env.js";
import { initializeAdmin } from "./data/bootstrap.js";

const app = createApp();

connectDB()
  .then(() => initializeAdmin())
  .catch((err) => console.error("Initialization error:", err));

if (env.NODE_ENV !== "production") {
  const PORT = env.PORT || "5000";
  app.listen(PORT, () => {
    console.log(`[server]: API Service running on port ${PORT}`);
  });
}

export default app;
