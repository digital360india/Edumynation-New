import Airtable from "airtable";
Airtable.configure({
    apiKey:"keyTBOJFFyjyxeoUh"
  });
 export const base = Airtable.base("apprlGN38HXb6otby");

 export const baseRe = Airtable.base("app48GM4EdJSb4AR6");

// const base = new Airtable({ apiKey: import.meta.env.VITE_AIRTABLE_API_KEY }).base(
//   import.meta.env.VITE_AIRTABLE_BASE_ID
// );
// const baseRe = new Airtable({ apiKey: import.meta.env.VITE_AIRTABLE_API_KEY }).base(
//   import.meta.env.VITE_AIRTABLE_REVIEW_BASE_ID
// );
// const enForm = base(import.meta.env.VITE_AIRTABLE_TABLE_NAME_ENFORM);
// const table = base(import.meta.env.VITE_AIRTABLE_TABLE_NAME);

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

