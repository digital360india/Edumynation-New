// import Airtable from "airtable";

// console.log(process.env.AIRTABLE_API_KEY);

// const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID);
// const baseRe = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_REVIEW_BASE_ID);
// const enForm = base(process.env.AIRTABLE_TABLE_NAME_ENFORM);
// const table = base(process.env.AIRTABLE_TABLE_NAME);

// console.log(enForm)

// const minifyRecords=(records)=>{
//     return records.map((record)=> getMinifiedRecords(record));
// }
// const getMinifiedRecords=(record)=>{
//     if(!record.fields.completed){
//         record.fields.completed=false;
//     }
//     return {
//         id: record.id,
//         fields: record.fields,
//     }
// }

// export{base,baseRe,enForm,table, getMinifiedRecords, minifyRecords};
