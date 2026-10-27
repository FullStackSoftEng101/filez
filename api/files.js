import { getFilesIncludingFolderName } from "#queries/files";
import express from "express";
const router = express.Router();
export default router;

router.get("/", async (req, res) => {
  const files = await getFilesIncludingFolderName();
  res.send(files);
});
