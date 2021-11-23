

$(document).ready(function(){
   



    $('#startDate').datepicker({
        // date format formats the date
        dateFormat: 'yy-mm-dd',
        // lets us change the month
        changeMonth: true,
        minDate: new Date(),
        maxDate: '+1y',
        // on select function will run once the start date has been selected
        onSelect: function(date){

            let selectDate = new Date(date);
            // ms in a day
            let msecInADay = 86400000;
            let stDate = new Date(selectDate.getTime() + msecInADay);

            $('#endDate').datepicker('option', 'minDate', stDate);
            // + 15 (or what ever number you enter) will restrict the selection to the specified number eg.. in this case it will be 15 days
            let enDate = new Date(selectDate.getTime() + 15 * msecInADay);

            $('#endDate').datepicker('option','maxDate', enDate)
        }
    });

    $('#endDate').datepicker({
        dateFormat: 'yy-mm-dd',
        changeMonth:true
    });

    $('#calculateDays').click(function(){
        dateDiff();
    });

    function dateDiff(){
        let start = $(startDate).datepicker('getDate');
        let end = $(endDate).datepicker('getDate');
        // calculation to get readable days
        let days = (end - start)/1000/60/60/24;
        $('#days').val(days);
    }



});