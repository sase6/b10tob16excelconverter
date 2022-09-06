const xlsx = require('xlsx');

module.exports.writeNewFile = (path, json) => {
  let wb = xlsx.utils.book_new();
  let ws = xlsx.utils.json_to_sheet(json);
  xlsx.utils.book_append_sheet(wb, ws, 'res');
  xlsx.writeFile(wb, path);
};