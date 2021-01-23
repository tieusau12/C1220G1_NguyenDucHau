function onchage() {
    let username = document.getElementById("userName").value;
    let identity = document.getElementById('identityCard').value;
    let age = document.getElementById('age').value;
    let email = document.getElementById('email').value;
    let address = document.getElementById('address').value;
    let customer = document.getElementById('customer').value;
    let discount = document.getElementById('discount').value;
    let people = document.getElementById('people').value;
    let rent = document.getElementById('rentDays').value;
    let service = document.getElementById('service').value;
    let room = document.getElementById('room').value;
    let monney;
    document.write('Full name : ' + username);
    document.write('<br>');
    document.write('ID Card :' + identity);
    document.write('<br>');
    document.write('Year of birth : ' + age);
    document.write('<br>');
    document.write('Email :' + email);
    document.write('<br>');
    document.write('Address :' + address);
    document.write('<br>');
    document.write('Customer : '+ customer);
    document.write('<br>');
    document.write('Discount : ' + discount);
    document.write('<br>');
    document.write("Amount of people :" + people);
    document.write('<br>');
    document.write(" Number of rental days :" + rent);
    document.write('<br>');
    document.write('Type of service :' + service);
    document.write('<br>');
    document.write("Room classification :" + room);
    document.write('<br>');
    monney = service * rent*(1-discount/100);
    document.write("Amount of monney : " + monney +"$" );

}