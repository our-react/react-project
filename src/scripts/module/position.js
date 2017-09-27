

let Position = (cb)=>{
    var map, geolocation;
    //加载地图，调用浏览器定位服务
    
    map = new AMap.Map('container', {
        resizeEnable: true
    });
    map.plugin('AMap.Geolocation', function() {
        geolocation = new AMap.Geolocation({
            enableHighAccuracy: true,//是否使用高精度定位，默认:true
            timeout: 10000,          //超过10秒后停止定位，默认：无穷大
            buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
            zoomToAccuracy: true,      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
            buttonPosition:'RB'
        });
        geolocation.getCurrentPosition();
        AMap.event.addListener(geolocation, 'complete', onComplete);//返回定位信息
        // AMap.event.addListener(geolocation, 'error', onError);      //返回定位出错信息
    });
    //解析定位结果
    function onComplete(data) {
        
        let position_info = {
            longitude:data.position.getLng(),
            latitude:data.position.getLat()
        }   
        regeocoder()
        function regeocoder() { 
            //逆地理编码
            var geocoder = new AMap.Geocoder({
                radius: 1000,
                extensions: "all"
            });
            geocoder.getAddress([position_info.longitude,position_info.latitude], function(status, result) {  
                if (status === 'complete' && result.info === 'OK') {
                    // console.log(111)
                     geocoder_CallBack(result);
                }
            });        

        }
        function geocoder_CallBack(data) {
            console.log(data)
            let address = data.regeocode.addressComponent.province
            position_info.address=address;
            cb(position_info)
            // var address = data.regeocode.formattedAddress; //返回地址描述
            
        }
    }

}

export default Position