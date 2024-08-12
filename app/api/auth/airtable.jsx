import Airtable from "airtable";
Airtable.configure({
    apiKey:"patmJeOFG5B2x1Key.927236098d64fc52ce55ce68f1603bfbf816959e25c7b0b53a10bfc688bdc30c"
  });
 export const base = Airtable.base("apprlGN38HXb6otby");

 export const baseRe = Airtable.base("app48GM4EdJSb4AR6");

// const base = new Airtable({ apiKey: import.meta.env.VITE_AIRTABLE_API_KEY }).base(
//   import.meta.env.VITE_AIRTABLE_BASE_ID
// );
// const baseRe = new Airtable({ apiKey: import.meta.env.VITE_AIRTABLE_API_KEY }).base(
//   import.meta.env.VITE_AIRTABLE_REVIEW_BASE_ID
// );
export const enForm = base("enquireForm");
export const table = base("Sheet2");

// const minifyRecords = (records) => {
//   return records.map((record) => getMinifiedRecords(record));
// };

// const getMinifiedRecords = (record) => {
//   if (!record.fields.completed) {
//     record.fields.completed = false;
//   }
//   return {
//     id: record.id,
//     fields: record.fields,
//   };
// };

// export { base, baseRe, enForm, table, getMinifiedRecords, minifyRecords };

