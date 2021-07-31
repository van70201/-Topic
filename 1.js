$('.d2').css('display','none');
$("#minus1").click(function(){
    $("#update1").slideUp("fast");
    $('#minus1').css('display','none');
    $('#plus1').css('display','unset');
});
$("#minus2").click(function(){
    $("#update2").slideUp("fast");
    $('#minus2').css('display','none');
    $('#plus2').css('display','unset');
});
$("#plus1").click(function(){
    $("#update1").slideDown("fast");
    $('#minus1').css('display','unset');
    $('#plus1').css('display','none');
});
$("#plus2").click(function(){
    $("#update2").slideDown("fast");
    $('#minus2').css('display','unset');
    $('#plus2').css('display','none');
});


var ctx = document.getElementById("chart1").getContext('2d');
var chart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["非常滿意", "滿意", "普通", "不滿意", "非常不滿意"],
        datasets: [{            
            data: [84, 11, 5, 0, 0],
            fill: false,
            backgroundColor: [
                'rgba(0, 0, 230, 0.7)',
                'rgba(255, 89, 0, 0.7)',
                'rgba(226, 230, 127, 0.7)',
                'rgba(45, 224, 0, 0.7)',
                'rgba(235, 0, 0, 0.7)'
            ],
            color:[
                'white'
            ],
            borderWidth: 2.5
            
        }]
    },
    options: {
        plugins: {
            legend: { 
                display: true,
                position: 'left',
                labels:{
                    color: 'white',
                    font:{
                        size:15,
                    }
                }
            } 
        }
    }
});

//25, 215, 164