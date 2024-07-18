import { enForm } from "./airtable";

export default async (req, res) => {

  const { description } = req.body;

  try {
    const createdRecords = await enForm.create([{ fields: description }]);
    res.statusCode = 200;
    res.json(createdRecords);
  } 
  catch (err) {
    console.error(err);
    res.statusCode = 500;
    res.json({ msg: "Something went wrong" });
  }
};
