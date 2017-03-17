export default function (select) {
  var result = [],
  	options = select && select.options,
   	opt,
   	val;
  
  for (var i=0, iLen=options.length; i<iLen; i++) {
    opt = options[i];
    if (opt.selected) {
    	val = opt.value || opt.text
      result.push(parseInt(val));
    }
  }
  return result;
};
