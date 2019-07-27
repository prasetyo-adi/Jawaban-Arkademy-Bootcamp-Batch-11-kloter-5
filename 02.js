input();
function input(){
	let user_name = '2prasetyo';
	let pass_word = '2bcA';

	is_username_valid(user_name);
	is_password_valid(pass_word);
}

//is_username_valid('Xrutaf888');
//is_username_valid('1Diana');
//is_username_valid('passW0rd=');
//is_username_valid('C0d3YourFuture!#');

function is_username_valid(username){
	let usn = /^[^0-9$&\+,:;\=\?@#|'<>\.\-_^\*()%!][$&\+,:;\=\?@#|'<>\.\-_^\*()%!0-9zA-z]{5,9}$/;
	if(username.match(usn)){
		//return true;
		console.log(true);
	} else {
		//return false;
		console.log(false);
	}
}

function is_password_valid(password){
	let pwd =/^(?=.*[=])(?=.*[$&\+,:;\=\?#|'<>\.\-_^*()%!])[$&\+,:;\=\?@#\'<>\.\-_^\*()%!0-9a-zA-z]{8,}$/;
    if(password.match(pwd)){
    	//return(true);
    	console.log(true);
    } else{
    	//return false;
    	console.log(false);
    }
}
