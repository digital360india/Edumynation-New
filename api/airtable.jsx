const Airtable = require('airtable');
const base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base(process.env.AIRTABLE_BASE_ID);
const baseRe = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base(process.env.AIRTABLE_REVIEW_BASE_ID);

const table=base(process.env.AIRTABLE_TABLE_NAME);
const review=base(process.env.AIRTABLE_TABLE_NAME_REV);
const cnForm=base(process.env.AIRTABLE_TABLE_NAME_CNFORM);
const enForm=base(process.env.AIRTABLE_TABLE_NAME_ENFORM);
const ctForm=base(process.env.AIRTABLE_TABLE_NAME_CTFORM);



const minifyRecords=(records)=>{
    return records.map((record)=> getMinifiedRecords(record));
}
const getMinifiedRecords=(record)=>{
    if(!record.fields.completed){
        record.fields.completed=false;
    }
    return {
        id: record.id,
        fields: record.fields,
    }
}
export{review,table,cnForm,enForm,ctForm,base,baseRe, getMinifiedRecords, minifyRecords};