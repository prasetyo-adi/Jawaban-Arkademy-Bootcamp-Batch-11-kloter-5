function getBiodataSaya() {
	let biodata =  {
		name : 'Prasetyo Adi Wibowo',
		age : 18,
		address : "JL. Kruwing, Desa Tirta Kencana, Kecamatan Rimbo Bujang. Kab. Tebo, Jambi",
		hobbies : ["playing tenis, coding and playing game"],
		is_married : false,
		list_school : [{name : "SD N 77", year_in : 2008, year_out : 2012, major : null},
		               {name : "SMP N 13", year_in : 2013, year_out : 2016, major : null},
		               {name : "SMA N 2", year_in : 2016, year_out : 2019, major: "sains"}],

		skills : [{skill_name : "html", level : "advanced"},
		           {skill_name : "javascript", level : "beginner"},
		           {skill_name : "css", level : "advanced"},
		           {skill_name : "php", level : "beginner"},
		           {skill_name : "java", level : "beginner"}],
		interest_in_coding : true
	}
let covertToJson = JSON.stringify(biodata)
return covertToJson
}
console.log(getBiodataSaya());