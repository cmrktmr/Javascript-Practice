class PersonES6 {

    constructor(name,job,yearOfBirth){
        this.name=name;
        this.job=job;
        this.yearOfBirth=yearOfBirth;
    }


    calculateAge(){

        return 2018 -this.yearOfBirth;
    }

}


