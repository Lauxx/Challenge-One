

var personOne = {firstName: "John", lastName: "Johnson", phoneNumber: '404-333-3232'};
var personTwo = {firstName: "Sally", lastName: "Johnson", phoneNumber: '404-334-2323'};
var personThree = {firstName: "Sue", lastName: "Johnson", phoneNumber: '404-335-3223'};
var $list = $('#newEntry')

var people = [personOne, personTwo, personThree];

people.forEach(function(next){

$list.append(
               '<tr> \
                 <td>' + next.firstName + '</td> \
                 <td>' + next.lastName + '</td> \
                 <td>' + next.phoneNumber + '</td> \
               </tr>');


});


 var addPersonToList = function(event){

 	event.preventDefault();
 	

 	var newFirstName = $('#newEntryFirstName').val();
 	var newLastName = $('#newEntryLastName').val();
 	var newPhoneNumber=$('#newEntryPhoneNumber').val();

 	confirm(' ' +newFirstName+ ' ' +newLastName+ ' ' +newPhoneNumber+ ' . Is this correct?');

	$list.append(
               '<tr> \
                 <td>' + newFirstName + '</td> \
                 <td>' + newLastName + '</td> \
                 <td>' + newPhoneNumber + '</td> \
               </tr>');
 }

 $('#submitButton').on('click', addPersonToList);

$(document).ready(function(){
  $('button').on('click', function(){
    $('button').hide();
  })
});


