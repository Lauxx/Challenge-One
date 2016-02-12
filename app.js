var personOne = {firstName: "John", lastName: "Johnson", phoneNumber: '404-333-3232'};
var personTwo = {firstName: "Sally", lastName: "Johnson", phoneNumber: '404-334-2323'};
var personThree = {firstName: "Sue", lastName: "Johnson", phoneNumber: '404-335-3223'};
var $list = $('#newTable')

var people = [personOne, personTwo, personThree];

people.forEach(function(next){
	$list.append('<tr>\
					<td>' +next.firstName+ '\
					</td>\
					<td>' +next.lastName+ '\
					</td>\
					<td>' +next.phoneNumber+ '\
					</td>');
})

