(function(global, $){

    //a 'new' object named Greetr
    var Greetr = function (firstname, lastname, language){
        return new Greetr.init(firstname, lastname, language)
    }

    //hidden within the IIFE scope and never directly accessible
    var supportedLanguages = ['en', 'es']

    //informal greetings
    var greetings = {
        en: 'hello',
        es: 'hola'
    }

    //formal greetings
    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    }


    Greetr.prototype = {
        informal: function(){
            if(this.language === supportedLanguages[1]){
                return greetings[this.language] + ' ' + this.firstname
            }else{
                return greetings[this.language] + ' ' + this.firstname
            }
        },
        formal: function(){
            if(this.language === supportedLanguages[0]){
                return formalGreetings[this.language] + ' '  + this.firstname
            }else{
                return formalGreetings[this.language] + ' ' + this.firstname
            }
        },
        validate: function(){
            if(supportedLanguages.indexOf(this.language) === -1){
                throw 'invalid language'
            }
        },
        greet: function(selector, formal){
            if(!$){
                throw 'jquery not loaded'
            }

            if(!selector){
                throw 'missing jquery selector'
            }

            var msg;
            if(formal){
                msg = this.formal()
            }else{
                msg = this.informal()
            }
            if(console){
                console.log(msg)
            }

            $(selector).html(msg)

            return this
        }
    }

    //actual object created here allowing us to "new" an object without using "new"
    Greetr.init = function(firstname, lastname, language){

        var self = this

        self.firstname = firstname||''
        self.lastname = lastname||''
        self.language = language||'en'

        self.validate()
    }
//trick borrowed from jquery so we dont have to use the word "new"
    Greetr.init.prototype = Greetr.prototype
//attatcch Greeetr to global object and provide the shorthand G$
    global.Greetr = global.G$ = Greetr
}(window, $))