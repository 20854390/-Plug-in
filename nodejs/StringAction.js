/**
 * Created by PVer on 2017/5/31.
 */
module.exports = {
    replaceAll:String.prototype.replaceAll = function (searchValue,replaceValue) {
        if(typeof searchValue !== 'string'){
            throw Error("'"+searchValue+"'不是一个字符串！")
        }else if(typeof replaceValue !== 'string'){
            throw Error("'"+replaceValue+"'不是一个字符串！")
        }
        var str = this.toString();
        var newStr = '';
        console.log(searchValue);
        if(str.indexOf(searchValue) > -1){
            newStr = str.replace(searchValue,replaceValue);
            return newStr.replaceAll(searchValue,replaceValue);
        }else {
            console.log(newStr);
            return str;
        }
    },
}
