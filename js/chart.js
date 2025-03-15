Highcharts.chart('container', {
    chart: {
        type: 'column',
        style: {
            fontFamily: 'pelak-Regular' // استفاده از فونت سفارشی
        },
        zoomType: 'x', // فعال‌سازی زوم افقی
        scrollablePlotArea: {
            // minWidth: 1000 // حداقل عرض برای فعال‌سازی اسکرول
        }
    },
    title: {
        text: ''
    },
    subtitle: {
        text:
            ''
    },
    xAxis: {
        categories: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور','مهر','آبان','آذر','دی','بهمن','اسفند'],
        crosshair: true,
        accessibility: {
            description: 'Countries'
        },
        min: 0, // شروع از اولین دسته
        max: 10, // نمایش تنها ۵ دسته اول
        scrollbar: {
            enabled: true // فعال‌سازی اسکرول
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: '' // عنوان محور Y خالی می‌شود
        },
        margin: 0 // حذف فاصله اضافی
    },
    tooltip: {
        valueSuffix: ' (1000 MT)'
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0,
            borderRadius: 10, // گرد کردن همه گوشه‌ها
        }
    },
    legend: {
        enabled: true, // فعال‌سازی legend
        verticalAlign: 'top', // انتقال legend به بالای نمودار
        align: 'right', // تراز افقی legend به وسط
        y: 0 // تنظیم فاصله از بالای نمودار (اختیاری)
    },
    series: [
        {
            name: '1403',
            data: [387749, 280000, 129000, 64300, 54000, 34300,45321, 140000, 10000, 140500, 19500, 113500],
            pointWidth: 13, // عرض ستون‌ها را به 13 پیکسل تنظیم می‌کند
            color: '#5D80FB'
        },
        {
            name: '1402',
            data: [45321, 140000, 10000, 140500, 19500, 113500,387749, 280000, 129000, 64300, 54000, 34300],
            pointWidth: 13, // عرض ستون‌ها را به 13 پیکسل تنظیم می‌کند
            color:'#73CCFF'
        }
    ]
});
