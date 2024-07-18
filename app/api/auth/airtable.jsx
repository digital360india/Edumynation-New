import Airtable from "airtable";

Airtable.configure({
    apiKey:"patmJeOFG5B2x1Key.927236098d64fc52ce55ce68f1603bfbf816959e25c7b0b53a10bfc688bdc30c"
  });

//tables
export const base = Airtable.base("apprlGN38HXb6otby");
export const baseRe = Airtable.base("app48GM4EdJSb4AR6"); 
export const enForm = base("enquireForm");
export const table = base("Sheet2");

