 /**
     * 格式化日期对象为字符串格式
     *   var str = date.format("yyyy-MM-dd");
     *
     * 日期和时间格式化模式字符串：
     *   yyyy  - 四位的年份(1900~2099)
     *   MM    - 月份(01~12)
     *   dd    - 月中的天(01~31)
     *   hh    - 小时(0~23)
     *   mm    - 分钟(0~59)
     *   ss    - 秒数(0~59)
     *   SSS   - 毫秒(0~999)
     *   D     - 周中的天(0~6)
     *   Month - 文本格式的月份
     *   Mon   - 短文本格式的月份
     *   Week  - 文本格式的星期几
     *   Wee   - 短文本格式的星期几
     *
     * 经常使用的模式字符串：
     *   yyyy-MM-dd 默认格式
     *   yyyy/MM/dd
     *   yyyy年MM月dd日
     *   hh:mm:ss
     *   hh时mm分ss秒SSS毫秒
     *   yyyy-MM-dd hh:mm:ss
     *   Month Mon Week Wee D
     */
Date.prototype.format = function (format) {
        var o = {
            "M+": this.getMonth() + 1,
            "d+": this.getDate(),
            "h+": this.getHours(),
            "m+": this.getMinutes(),
            "s+": this.getSeconds(), 
            "q+": Math.floor((this.getMonth() + 3) / 3),
            "S": this.getMilliseconds()
        };
        if (/(y+)/.test(format)) format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(format)) format = format.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return format;
    };