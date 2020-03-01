var Validator = require('jsonschema').Validator;
var validatorInscrieri = new Validator();

var admissionSchema = {
    "type" : 'object',
    "required" : ['name', 'email', 'phoneNo', 'faculty', 'yearOfStudy', 
                'aboutYourDep', 'chosenDep', 'hoursPerWeek'],
    "properties" :
    {   
        "name" : {"type": 'string'},
        "email" : {"type": 'string'},
        "phoneNo" : {"type": 'string'},
        "faculty" : {"type": 'string'},
        "yearOfStudy" : {"type": 'number'},
        "aboutYourDep"  : {"type": 'string'},
        "chosenDep" : {
            "type" : "array",
            "items" : {"type" : "string"}
        },
        "hoursPerWeek" : {"type": 'number'}
    },
    "additionalProperties": false
}
/*
var exampleAdmission = {
    "name" : "Chelariu Rares",
    "email" : "rares@hotmail.com",
    "phoneNo" : "0712345678",
    "faculty" : "CS UAIC",
    "yearOfStudy" : 2,
    "aboutYourDep"  : "im lovin it",
    "chosenDep" : ["IT", "RE"],
    "hoursPerWeek" : 5
};*/
function validateForm(formObject) {
    var err = validatorInscrieri.validate(formObject, admissionSchema).errors;
    if (0 == err.length)
        return "ok";
    else
        return err;
};
//console.log(validateForm(exampleAdmission));
module.exports.validate = validateForm;
