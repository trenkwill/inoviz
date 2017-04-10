
// this enables the inputs to have the labels in it, 
// and when clicked animates the label to the top
$( '.js-float-label-wrapper' ).FloatLabel();
// remove the populated class on load for firefox
$( '.js-float-label-wrapper' ).removeClass("populated");

// the hamburger icon slides down the menu (animation done in css)
$(".js-show-menu").click(function(){
    $(".sidebar__menu").toggleClass("sidebar__menu--mobile-hidden");
});
// slides down the search topbar on mobile
$(".js-show-search").click(function(){
    $(".topbar").toggleClass("topbar--mobile");
});
// focus the top bar search input
$(".js-focus-search").click(function(){
    $(".topbar__search__input").focus();
});





// there's 2 'types' of charts in the app.
// highchartTable.js takes a table in the HTML and transforms it into a charts 
// the charts in search
$('table.js-graph').highchartTable();
$('table.js-column').highchartTable();

// toggle the charts in search data-blocks (publication card)
$(".js-show-graph").click(function(){
    $(".chart-1").show();
    $(".chart-2").css({"opacity": "0", "height":"0"});
    $(this).addClass("active");
    $(".js-show-columns").removeClass("active");
});
$(".js-show-columns").click(function(){
    $(".chart-2").css({"opacity": "1", "height":"auto"});
    $(".chart-1").hide();
    $(this).addClass("active");
    $(".js-show-graph").removeClass("active");
});


// HIGHCHARTS 
$('#chart-year').highcharts({
    xAxis: {
        categories: ['2015', '2014', '2013', '2012'],
        showEmpty: false
    },

    yAxis: {
        showEmpty: false
    },

    series: [
    	{
            type: 'bar',
            data: [ // use names for display in pie data labels
            	['2015', 29.9],
                ['2014', 71.5],
                ['2013', 106.4],
                ['2012', 129.2]
            ],
            showInLegend: true
    	}, 

    	{
        	type: 'bar',
        	data: [ // use names for display in pie data labels
        		['2015', 29.9],
        	    ['2014', 71.5],
        	    ['2013', 106.4],
        	    ['2012', 129.2]
        	],
        	showInLegend: true
    }
    ]
});

$('#chart-month').highcharts({
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        showEmpty: false
    },

    yAxis: {
        showEmpty: false
    },

    series: [
    	{
            type: 'bar',
            data: [ // use names for display in pie data labels
            	['2015', 29.9],
                ['2014', 71.5],
                ['2013', 106.4],
                ['2012', 129.2]
            ],
            showInLegend: true
    	}, 

    	{
        	type: 'bar',
        	data: [ // use names for display in pie data labels
        		['2015', 29.9],
        	    ['2014', 71.5],
        	    ['2013', 106.4],
        	    ['2012', 129.2]
        	],
        	showInLegend: true
    }
    ]
});

$('#chart-quarter').highcharts({
    xAxis: {
        categories: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'],
        showEmpty: false
    },

    yAxis: {
        showEmpty: false
    },

    series: [
    	{
            type: 'bar',
            data: [ // use names for display in pie data labels
            	['2015', 29.9],
                ['2014', 71.5],
                ['2013', 106.4],
                ['2012', 129.2]
            ],
            showInLegend: true
    	}, 

    	{
        	type: 'bar',
        	data: [ // use names for display in pie data labels
        		['2015', 29.9],
        	    ['2014', 71.5],
        	    ['2013', 106.4],
        	    ['2012', 129.2]
        	],
        	showInLegend: true
    }
    ]
});

var chartYear = $('#chart-year').highcharts();
var chartQuarter = $('#chart-quarter').highcharts();
var chartMonth = $('#chart-month').highcharts();


// Set type
// TODO : needs to be refactor by a dev
// THIS THE MOST UNDRY WAY OF CODING: NEEDS REFACTORY ASAP
$('#show-column').click(function () {
	$(this).toggleClass('active');
	$('#show-bar').removeClass('active');
    chartYear.inverted = true;
    chartYear.xAxis[0].update({}, false);
    chartYear.yAxis[0].update({}, false);
    chartYear.series[0].update({
        type: 'column'
    });
    chartYear.series[1].update({
        type: 'column'
    });

    chartQuarter.inverted = true;
    chartQuarter.xAxis[0].update({}, false);
    chartQuarter.yAxis[0].update({}, false);
    chartQuarter.series[0].update({
        type: 'column'
    });
    chartQuarter.series[1].update({
        type: 'column'
    });

    chartMonth.inverted = true;
    chartMonth.xAxis[0].update({}, false);
    chartMonth.yAxis[0].update({}, false);
    chartMonth.series[0].update({
        type: 'column'
    });
    chartMonth.series[1].update({
        type: 'column'
    });

});
$('#show-bar').click(function () {
	$(this).toggleClass('active');
	$('#show-column').removeClass('active');
    chartYear.inverted = false;
    chartYear.xAxis[0].update({}, false);
    chartYear.yAxis[0].update({}, false);
    chartYear.series[0].update({
        type: 'bar'
    });
    chartYear.series[1].update({
        type: 'bar'
    });

    chartQuarter.inverted = false;
    chartQuarter.xAxis[0].update({}, false);
    chartQuarter.yAxis[0].update({}, false);
    chartQuarter.series[0].update({
        type: 'bar'
    });
    chartQuarter.series[1].update({
        type: 'bar'
    });

    chartMonth.inverted = false;
    chartMonth.xAxis[0].update({}, false);
    chartMonth.yAxis[0].update({}, false);
    chartMonth.series[0].update({
        type: 'bar'
    });
    chartMonth.series[1].update({
        type: 'bar'
    });

});

$(".level__num").click(function(e){
    e.preventDefault();
    if ( $( this ).hasClass( "level__num-1" ) ) {
        $(".level__num-1").addClass("level__num--selected");
        $(".level__num-1").prev().addClass("level__bar--selected");
        $(".level__num-2").removeClass("level__num--selected");
        $(".level__num-2").prev().removeClass("level__bar--selected");
        $(".level__num-3").removeClass("level__num--selected");
        $(".level__num-3").prev().removeClass("level__bar--selected");
    }
    if ( $( this ).hasClass( "level__num-2" ) ) {
        $(".level__num-1").addClass("level__num--selected");
        $(".level__num-1").prev().addClass("level__bar--selected");
        $(".level__num-2").addClass("level__num--selected");
        $(".level__num-2").prev().addClass("level__bar--selected");
        $(".level__num-3").removeClass("level__num--selected");
        $(".level__num-3").prev().removeClass("level__bar--selected");
    }
    if ( $( this ).hasClass( "level__num-3" ) ) {
        $(".level__num-1").addClass("level__num--selected");
        $(".level__num-1").prev().addClass("level__bar--selected");
        $(".level__num-2").addClass("level__num--selected");
        $(".level__num-2").prev().addClass("level__bar--selected");
        $(".level__num-3").addClass("level__num--selected");
        $(".level__num-3").prev().addClass("level__bar--selected");
    }
});


// overiding bootstrap dropdown menu to 
// avoid dropdown menu close on click inside
$('li.dropdown a').on('click', function (event) {
    $(this).parent().toggleClass("open");
});
$('body').on('click', function (e) {
    if (!$('li.dropdown').is(e.target) && $('li.dropdown').has(e.target).length === 0 && $('.open').has(e.target).length === 0) {
        $('li.dropdown').removeClass('open');
    }
});

$(".filter-bar__btn--presentation").click(function(e){
    $(".filter-bar__btn--presentation").removeClass("filter-bar__btn--active");
    $(this).addClass("filter-bar__btn--active");
    $(".results__row").toggleClass("results__row--square");
    e.preventDefault();
});


// little slider in search advanced
$("#periode-slider").slider({ 
id: "slider", 
min: 1960, 
max: 2020, 
range: true, 
value: [1985, 2001],
tooltip: 'always'
});